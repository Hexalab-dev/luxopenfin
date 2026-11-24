#!/usr/bin/env python3
"""
Utility script that migrates chapter markdown files from the legacy
`volumes/` directory into the Docusaurus `web/docs` structure, splitting each
chapter into multiple MDX files (introduction, numbered sections, summary,
key terms, exercises, solutions, references).

Usage:
    python scripts/migrate_chapter_docs.py --chapter 2
    python scripts/migrate_chapter_docs.py --chapter 5 --force
"""

from __future__ import annotations

import argparse
import html
import re
import sys
from pathlib import Path
from typing import List, Tuple

ROOT = Path(__file__).resolve().parents[1]
VOLUME_ROOT = ROOT / "volumes" / "volume1"
DOCS_ROOT = ROOT / "web" / "docs" / "volume1"

INTRO_TITLES = [
    "Chapter Introduction",
    "Why It Matters",
    "Learning Objectives",
]

EXERCISE_TITLES = [
    "Multiple Choice Questions",
    "Questions",
    "Problems Set A",
    "Problems Set B",
    "Comprehensive Problem",
    "Cases",
]

SUMMARY_TITLE = "Chapter Summary"
KEY_TERMS_TITLE = "Key Terms"
SOLUTIONS_TITLE = "Solutions"
REFERENCES_TITLE = "References and Further Reading"


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Migrate legacy chapter markdown into Docusaurus docs.")
    parser.add_argument("--chapter", type=int, required=True, help="Chapter number (e.g., 1 for Chapter 1).")
    parser.add_argument("--force", action="store_true", help="Overwrite existing files if they already exist.")
    return parser.parse_args()


def read_chapter_markdown(chapter: int) -> Tuple[str, str, List[Tuple[str, str]]]:
    chapter_dir = VOLUME_ROOT / f"chapter_{chapter:02d}"
    md_files = list(chapter_dir.glob("*.md"))
    if len(md_files) != 1:
        raise FileNotFoundError(f"Expected exactly one markdown file in {chapter_dir}, found {len(md_files)}.")

    chapter_path = md_files[0]
    raw_text = chapter_path.read_text(encoding="utf-8")
    lines = raw_text.strip().splitlines()
    if not lines or not lines[0].startswith("# "):
        raise ValueError(f"{chapter_path} does not start with a chapter title (e.g., '# Chapter 1 ...').")

    chapter_title = lines[0][2:].strip()
    body = "\n".join(lines[1:]).lstrip()

    sections: List[Tuple[str, str]] = []
    pattern = re.compile(r"^## (.+)$", re.MULTILINE)
    matches = list(pattern.finditer(body))
    if not matches:
        raise ValueError(f"No '## ' sections found in {chapter_path}.")

    for idx, match in enumerate(matches):
        start = match.end()
        end = matches[idx + 1].start() if idx + 1 < len(matches) else len(body)
        title = match.group(1).strip()
        content = body[start:end].strip()
        sections.append((title, content))

    return chapter_title, chapter_path.name, sections


def write_markdown(path: Path, frontmatter: str, body: str, *, force: bool) -> bool:
    if path.exists() and not force:
        print(f"[SKIP] {path} exists (use --force to overwrite)")
        return False

    path.parent.mkdir(parents=True, exist_ok=True)
    payload = f"{frontmatter}\n\n{body.strip()}\n"
    path.write_text(payload, encoding="utf-8")
    print(f"[WRITE] {path}")
    return True


def yaml_quote(value: str) -> str:
    return '"' + value.replace('"', '\\"') + '"'


def sanitize_content(value: str) -> str:
    return html.escape(value.strip(), quote=False)


def build_frontmatter(chapter: int, slug_id: str, title: str, sidebar_position: int, slug_tail: str) -> str:
    return (
        "---\n"
        f"id: volume1-chapter-{chapter:02d}-{slug_id}\n"
        f"title: {yaml_quote(title)}\n"
        f"sidebar_position: {sidebar_position}\n"
        f"slug: /volume1/chapter-{chapter:02d}/{slug_tail}\n"
        "---"
    )


def migrate_chapter(chapter: int, *, force: bool) -> None:
    chapter_title, source_name, sections = read_chapter_markdown(chapter)

    intro_sections: List[Tuple[str, str]] = []
    numbered_sections: List[Tuple[str, str]] = []
    exercise_sections: List[Tuple[str, str]] = []
    summary_section = key_terms_section = solutions_section = references_section = None
    slug_pattern = re.compile(r"^(\d+)\.(\d+)\s+")

    for title, content in sections:
        if title in INTRO_TITLES:
            intro_sections.append((title, content))
        elif slug_pattern.match(title):
            numbered_sections.append((title, content))
        elif title in EXERCISE_TITLES:
            exercise_sections.append((title, content))
        elif title == SUMMARY_TITLE:
            summary_section = content
        elif title == KEY_TERMS_TITLE:
            key_terms_section = content
        elif title == SOLUTIONS_TITLE:
            solutions_section = content
        elif title == REFERENCES_TITLE:
            references_section = content
        else:
            print(f"[WARN] Unhandled section '{title}' (content will be ignored).")

    missing_intro = [title for title in INTRO_TITLES if title not in {t for t, _ in intro_sections}]
    if missing_intro:
        raise ValueError(f"Missing intro sections for chapter {chapter}: {missing_intro}")
    if summary_section is None or key_terms_section is None:
        raise ValueError(f"Chapter {chapter} is missing summary or key terms sections.")
    if not exercise_sections:
        raise ValueError(f"Chapter {chapter} is missing exercise sections.")
    if solutions_section is None or references_section is None:
        raise ValueError(f"Chapter {chapter} is missing solutions or references sections.")

    chapter_dir = DOCS_ROOT / f"chapter-{chapter:02d}"
    chapter_dir.mkdir(parents=True, exist_ok=True)

    sidebar_position = 1

    intro_body = "# {title}\n\n{sections}\n".format(
        title=chapter_title,
        sections="\n\n".join(f"## {title}\n\n{sanitize_content(content)}" for title, content in intro_sections),
    )
    intro_frontmatter = build_frontmatter(chapter, "intro", chapter_title, sidebar_position, "intro")
    write_markdown(chapter_dir / "intro.md", intro_frontmatter, intro_body, force=force)

    for title, content in numbered_sections:
        match = slug_pattern.match(title)
        assert match, "Expected numbered section to match pattern."
        major, minor = match.group(1), match.group(2)
        slug_tail = f"section-{major}-{minor}"
        slug_id = slug_tail
        sidebar_position += 1
        frontmatter = build_frontmatter(chapter, slug_id, title, sidebar_position, slug_tail)
        body = f"# {title}\n\n{sanitize_content(content)}"
        write_markdown(chapter_dir / f"{slug_tail}.md", frontmatter, body, force=force)

    sidebar_position += 1
    summary_frontmatter = build_frontmatter(chapter, "summary", f"Chapter {chapter} Summary", sidebar_position, "summary")
    summary_body = f"# {SUMMARY_TITLE}\n\n{sanitize_content(summary_section)}"
    write_markdown(chapter_dir / "summary.md", summary_frontmatter, summary_body, force=force)

    sidebar_position += 1
    key_terms_frontmatter = build_frontmatter(chapter, "key-terms", "Key Terms", sidebar_position, "key-terms")
    key_terms_body = f"# {KEY_TERMS_TITLE}\n\n{sanitize_content(key_terms_section)}"
    write_markdown(chapter_dir / "key-terms.md", key_terms_frontmatter, key_terms_body, force=force)

    sidebar_position += 1
    exercise_frontmatter = build_frontmatter(chapter, "exercises", f"Chapter {chapter} Exercises", sidebar_position, "exercises")
    exercise_body = (
        f"# Chapter {chapter} – Exercises & Cases\n\n"
        + "\n\n".join(f"## {title}\n\n{sanitize_content(content)}" for title, content in exercise_sections)
        + "\n\n---\n\n"
        + f"Solutions are published in `supplementary/instructor/solutions/chapter_{chapter:02d}_solutions.md`."
    )
    write_markdown(chapter_dir / "exercises.md", exercise_frontmatter, exercise_body, force=force)

    sidebar_position += 1
    solutions_frontmatter = build_frontmatter(chapter, "solutions", f"Chapter {chapter} Solutions", sidebar_position, "solutions")
    solutions_body = f"# {SOLUTIONS_TITLE}\n\n{sanitize_content(solutions_section)}"
    write_markdown(chapter_dir / "solutions.md", solutions_frontmatter, solutions_body, force=force)

    sidebar_position += 1
    references_frontmatter = build_frontmatter(chapter, "references", "References & Further Reading", sidebar_position, "references")
    references_body = f"# {REFERENCES_TITLE}\n\n{sanitize_content(references_section)}"
    write_markdown(chapter_dir / "references.md", references_frontmatter, references_body, force=force)

    print(f"[DONE] Migrated chapter {chapter} ({source_name}) into {chapter_dir}")


def main() -> None:
    args = parse_args()
    try:
        migrate_chapter(args.chapter, force=args.force)
    except Exception as exc:  # pylint: disable=broad-except
        print(f"[ERROR] {exc}", file=sys.stderr)
        sys.exit(1)


if __name__ == "__main__":
    main()

