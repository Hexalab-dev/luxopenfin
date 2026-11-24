#!/usr/bin/env python3
"""
Enhanced PowerPoint Slide Generator for LuxOpenFin Chapters

Generates comprehensive PowerPoint presentations from chapter markdown files.
Includes title slides, learning objectives, section content, key terms, and summary.

Usage:
    python generate_slides_enhanced.py [chapter_number]
    python generate_slides_enhanced.py all
"""

import sys
import os
import re
from pathlib import Path

try:
    from pptx import Presentation
    from pptx.util import Inches, Pt
    from pptx.enum.text import PP_ALIGN, MSO_ANCHOR
    from pptx.dml.color import RGBColor
    from pptx.enum.shapes import MSO_SHAPE
except ImportError:
    print("Error: python-pptx library not installed.")
    print("Install with: pip install python-pptx")
    sys.exit(1)

# Color scheme
COLORS = {
    'primary': RGBColor(74, 158, 255),
    'secondary': RGBColor(92, 184, 92),
    'text': RGBColor(224, 224, 224),
    'text_secondary': RGBColor(176, 176, 176),
    'background': RGBColor(26, 26, 26),
    'accent': RGBColor(74, 158, 255),
    'warning': RGBColor(240, 173, 78)
}

CHAPTER_FILES = {
    1: 'chapter_01_role_of_accounting.md',
    2: 'chapter_02_introduction_to_financial_statements.md',
    3: 'chapter_03_analyzing_and_recording_transactions.md',
    4: 'chapter_04_the_adjustment_process.md',
    5: 'chapter_05_completing_the_accounting_cycle.md',
    6: 'chapter_06_merchandising_transactions.md',
    7: 'chapter_07_accounting_information_systems.md',
    8: 'chapter_08_fraud_internal_controls_and_cash.md',
    9: 'chapter_09_accounting_for_receivables.md'
}

def clean_text(text):
    """Remove markdown formatting from text."""
    # Remove bold
    text = re.sub(r'\*\*(.+?)\*\*', r'\1', text)
    # Remove italic
    text = re.sub(r'\*(.+?)\*', r'\1', text)
    # Remove code blocks
    text = re.sub(r'`(.+?)`', r'\1', text)
    # Remove links
    text = re.sub(r'\[(.+?)\]\(.+?\)', r'\1', text)
    return text.strip()

def extract_sections(content):
    """Extract all sections from markdown content."""
    sections = []
    
    # Main sections (## 1.1, ## 1.2, etc.)
    section_pattern = r'^## ([\d.]+)\s+(.+?)(?=\n## |\Z)'
    for match in re.finditer(section_pattern, content, re.MULTILINE | re.DOTALL):
        section_num = match.group(1)
        section_title = match.group(2).split('\n')[0].strip()
        section_content = match.group(2)
        
        # Extract subsections
        subsections = []
        sub_pattern = r'^### (.+?)$'
        for sub_match in re.finditer(sub_pattern, section_content, re.MULTILINE):
            sub_title = sub_match.group(1)
            # Get content after this subsection
            sub_start = sub_match.end()
            next_sub = re.search(r'^### ', section_content[sub_start:], re.MULTILINE)
            sub_end = next_sub.start() if next_sub else len(section_content)
            sub_text = section_content[sub_start:sub_start+sub_end].strip()
            
            # Extract key points
            bullets = []
            for line in sub_text.split('\n'):
                line = line.strip()
                if line and (line.startswith('- ') or line.startswith('* ')):
                    bullet = clean_text(line[2:])
                    if bullet and len(bullet) < 200:  # Reasonable length
                        bullets.append(bullet)
            
            if sub_title or bullets:
                subsections.append({
                    'title': clean_text(sub_title),
                    'bullets': bullets[:8]  # Max 8 bullets
                })
        
        sections.append({
            'number': section_num,
            'title': clean_text(section_title),
            'subsections': subsections
        })
    
    return sections

def extract_learning_objectives(content):
    """Extract learning objectives."""
    obj_match = re.search(r'## Learning Objectives\s+(.+?)(?=\n##|\Z)', content, re.DOTALL)
    if not obj_match:
        return []
    
    objectives = []
    for line in obj_match.group(1).split('\n'):
        line = line.strip()
        if re.match(r'^\d+\.', line):
            obj_text = re.sub(r'^\d+\.\s*', '', line)
            objectives.append(clean_text(obj_text))
    
    return objectives

def extract_key_terms(content):
    """Extract key terms."""
    terms_match = re.search(r'## Key Terms\s+(.+?)(?=\n##|\Z)', content, re.DOTALL)
    if not terms_match:
        return []
    
    terms = []
    for line in terms_match.group(1).split('\n'):
        line = line.strip()
        if line.startswith('- **'):
            term_match = re.search(r'- \*\*(.+?)\*\*: (.+)', line)
            if term_match:
                terms.append({
                    'term': clean_text(term_match.group(1)),
                    'definition': clean_text(term_match.group(2))
                })
    
    return terms[:15]  # Limit to 15 terms

def create_title_slide(prs, chapter_title, chapter_num):
    """Create title slide."""
    slide = prs.slides.add_slide(prs.slide_layouts[6])
    
    # Background
    background = slide.background
    fill = background.fill
    fill.solid()
    fill.fore_color.rgb = COLORS['background']
    
    # Title
    left = Inches(0.5)
    top = Inches(2)
    width = Inches(9)
    height = Inches(1.5)
    txBox = slide.shapes.add_textbox(left, top, width, height)
    tf = txBox.text_frame
    tf.text = chapter_title
    tf.paragraphs[0].font.size = Pt(44)
    tf.paragraphs[0].font.bold = True
    tf.paragraphs[0].font.color.rgb = COLORS['primary']
    tf.paragraphs[0].alignment = PP_ALIGN.CENTER
    
    # Subtitle
    top2 = Inches(4)
    height2 = Inches(0.8)
    txBox2 = slide.shapes.add_textbox(left, top2, width, height2)
    tf2 = txBox2.text_frame
    tf2.text = f"Chapter {chapter_num} - Luxembourg SME Accounting"
    tf2.paragraphs[0].font.size = Pt(24)
    tf2.paragraphs[0].font.color.rgb = COLORS['text_secondary']
    tf2.paragraphs[0].alignment = PP_ALIGN.CENTER
    
    # Footer
    top3 = Inches(6.5)
    height3 = Inches(0.5)
    txBox3 = slide.shapes.add_textbox(left, top3, width, height3)
    tf3 = txBox3.text_frame
    tf3.text = "LuxOpenFin - Financial Accounting for Luxembourg SMEs"
    tf3.paragraphs[0].font.size = Pt(14)
    tf3.paragraphs[0].font.color.rgb = COLORS['text_secondary']
    tf3.paragraphs[0].alignment = PP_ALIGN.CENTER

def create_objectives_slide(prs, objectives):
    """Create learning objectives slide."""
    slide = prs.slides.add_slide(prs.slide_layouts[6])
    
    # Background
    background = slide.background
    fill = background.fill
    fill.solid()
    fill.fore_color.rgb = COLORS['background']
    
    # Title
    left = Inches(0.5)
    top = Inches(0.3)
    width = Inches(9)
    height = Inches(0.8)
    txBox = slide.shapes.add_textbox(left, top, width, height)
    tf = txBox.text_frame
    tf.text = "Learning Objectives"
    tf.paragraphs[0].font.size = Pt(36)
    tf.paragraphs[0].font.bold = True
    tf.paragraphs[0].font.color.rgb = COLORS['primary']
    
    # Objectives
    content_top = Inches(1.5)
    content_width = Inches(9)
    content_height = Inches(5.5)
    txBox2 = slide.shapes.add_textbox(left, content_top, content_width, content_height)
    tf2 = txBox2.text_frame
    tf2.word_wrap = True
    
    for obj in objectives:
        p = tf2.add_paragraph()
        p.text = obj
        p.level = 0
        p.font.size = Pt(18)
        p.font.color.rgb = COLORS['text']
        p.space_after = Pt(14)
        p.space_before = Pt(6)

def create_section_slide(prs, section):
    """Create slide for a section."""
    slide = prs.slides.add_slide(prs.slide_layouts[6])
    
    # Background
    background = slide.background
    fill = background.fill
    fill.solid()
    fill.fore_color.rgb = COLORS['background']
    
    # Section title
    left = Inches(0.5)
    top = Inches(0.3)
    width = Inches(9)
    height = Inches(0.8)
    txBox = slide.shapes.add_textbox(left, top, width, height)
    tf = txBox.text_frame
    tf.text = f"{section['number']} {section['title']}"
    tf.paragraphs[0].font.size = Pt(28)
    tf.paragraphs[0].font.bold = True
    tf.paragraphs[0].font.color.rgb = COLORS['primary']
    
    # Content
    content_top = Inches(1.4)
    content_width = Inches(9)
    content_height = Inches(5.5)
    txBox2 = slide.shapes.add_textbox(left, content_top, content_width, content_height)
    tf2 = txBox2.text_frame
    tf2.word_wrap = True
    
    # Add subsections (limit to fit on slide)
    for i, sub in enumerate(section['subsections'][:2]):  # Max 2 subsections per slide
        if i > 0:
            p = tf2.add_paragraph()
            p.text = ""
            p.space_after = Pt(12)
        
        # Subsection title
        p = tf2.add_paragraph()
        p.text = sub['title']
        p.level = 0
        p.font.size = Pt(20)
        p.font.bold = True
        p.font.color.rgb = COLORS['secondary']
        p.space_after = Pt(10)
        
        # Bullets
        for bullet in sub['bullets'][:6]:  # Max 6 bullets
            p = tf2.add_paragraph()
            p.text = bullet
            p.level = 1
            p.font.size = Pt(16)
            p.font.color.rgb = COLORS['text']
            p.space_after = Pt(6)

def create_key_terms_slide(prs, terms):
    """Create key terms slide."""
    # Split terms into multiple slides if needed
    terms_per_slide = 5
    for i in range(0, len(terms), terms_per_slide):
        slide_terms = terms[i:i+terms_per_slide]
        
        slide = prs.slides.add_slide(prs.slide_layouts[6])
        
        # Background
        background = slide.background
        fill = background.fill
        fill.solid()
        fill.fore_color.rgb = COLORS['background']
        
        # Title
        left = Inches(0.5)
        top = Inches(0.3)
        width = Inches(9)
        height = Inches(0.8)
        txBox = slide.shapes.add_textbox(left, top, width, height)
        tf = txBox.text_frame
        title = "Key Terms" if i == 0 else f"Key Terms (continued)"
        tf.text = title
        tf.paragraphs[0].font.size = Pt(32)
        tf.paragraphs[0].font.bold = True
        tf.paragraphs[0].font.color.rgb = COLORS['primary']
        
        # Terms
        content_top = Inches(1.5)
        content_width = Inches(9)
        content_height = Inches(5.5)
        txBox2 = slide.shapes.add_textbox(left, content_top, content_width, content_height)
        tf2 = txBox2.text_frame
        tf2.word_wrap = True
        
        for term in slide_terms:
            # Term name
            p = tf2.add_paragraph()
            p.text = term['term']
            p.level = 0
            p.font.size = Pt(18)
            p.font.bold = True
            p.font.color.rgb = COLORS['accent']
            p.space_after = Pt(4)
            
            # Definition
            p = tf2.add_paragraph()
            p.text = term['definition']
            p.level = 1
            p.font.size = Pt(14)
            p.font.color.rgb = COLORS['text']
            p.space_after = Pt(12)

def generate_presentation(chapter_num):
    """Generate PowerPoint for a chapter."""
    # Get project root (go up from scripts/ to luxopenfin/)
    base_path = Path(__file__).parent.parent.parent.parent
    chapter_dir = base_path / 'volumes' / 'volume1' / f'chapter_{chapter_num:02d}'
    chapter_file = CHAPTER_FILES.get(chapter_num)
    
    if not chapter_file:
        print(f"Error: Chapter {chapter_num} not in file mapping")
        return False
    
    chapter_path = chapter_dir / chapter_file
    
    if not chapter_path.exists():
        print(f"Error: Chapter file not found: {chapter_path}")
        return False
    
    # Read and parse
    print(f"Processing Chapter {chapter_num}...")
    with open(chapter_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Extract title
    title_match = re.search(r'^# (.+)$', content, re.MULTILINE)
    chapter_title = title_match.group(1) if title_match else f"Chapter {chapter_num}"
    
    # Extract content
    objectives = extract_learning_objectives(content)
    sections = extract_sections(content)
    key_terms = extract_key_terms(content)
    
    # Create presentation
    prs = Presentation()
    prs.slide_width = Inches(10)
    prs.slide_height = Inches(7.5)
    
    # Title slide
    create_title_slide(prs, chapter_title, chapter_num)
    
    # Learning objectives
    if objectives:
        create_objectives_slide(prs, objectives)
    
    # Section slides
    for section in sections:
        create_section_slide(prs, section)
    
    # Key terms
    if key_terms:
        create_key_terms_slide(prs, key_terms)
    
    # Save
    output_dir = base_path / 'supplementary' / 'instructor' / 'slides'
    output_dir.mkdir(parents=True, exist_ok=True)
    output_file = output_dir / f'chapter_{chapter_num:02d}.pptx'
    
    prs.save(str(output_file))
    print(f"✓ Created: {output_file}")
    print(f"  Total slides: {len(prs.slides)}")
    print(f"  Sections: {len(sections)}")
    print(f"  Key terms: {len(key_terms)}")
    
    return True

def main():
    if len(sys.argv) < 2:
        print("Usage: python generate_slides_enhanced.py [chapter_number|all]")
        print("Example: python generate_slides_enhanced.py 1")
        print("         python generate_slides_enhanced.py all")
        sys.exit(1)
    
    arg = sys.argv[1].lower()
    
    if arg == 'all':
        completed_chapters = list(CHAPTER_FILES.keys())
        success_count = 0
        for chapter_num in completed_chapters:
            if generate_presentation(chapter_num):
                success_count += 1
            print()
        print(f"✓ Generated {success_count}/{len(completed_chapters)} presentations")
    else:
        try:
            chapter_num = int(arg)
            if chapter_num in CHAPTER_FILES:
                generate_presentation(chapter_num)
            else:
                print(f"Error: Chapter {chapter_num} not available. Available: {list(CHAPTER_FILES.keys())}")
        except ValueError:
            print(f"Error: Invalid chapter number: {arg}")

if __name__ == '__main__':
    main()

