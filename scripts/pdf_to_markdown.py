#!/usr/bin/env python3
"""
Convert PDF files to markdown format preserving structure.
Uses pdftotext for better text extraction, then formats as markdown.
"""

import sys
import os
import subprocess
from pathlib import Path
import re

PROJECT_ROOT = Path(__file__).parent.parent
DATA_COURSES = PROJECT_ROOT / "data_courses"
OUTPUT_DIR = PROJECT_ROOT / "data_courses" / "converted"

def clean_text(text):
    """Clean extracted text."""
    # Remove excessive whitespace
    text = re.sub(r'\n{3,}', '\n\n', text)
    # Remove page numbers
    text = re.sub(r'Page \d+\s*\n', '', text)
    # Clean up spacing
    text = re.sub(r' +', ' ', text)
    return text.strip()

def detect_headings(text):
    """Detect and mark headings in text."""
    lines = text.split('\n')
    result = []
    
    for i, line in enumerate(lines):
        line = line.strip()
        if not line:
            result.append('')
            continue
        
        # Numbered sections (1., 1.1, Chapter X, etc.)
        if re.match(r'^(\d+[\.\)]+\s*)+[A-Z]', line):
            # Determine heading level
            level = len(re.findall(r'\d+', line.split()[0]))
            result.append('#' * min(level, 6) + ' ' + line)
        # All caps lines (potential headings)
        elif line.isupper() and len(line) > 5 and len(line) < 100 and not line.isdigit():
            result.append('## ' + line.title())
        # Lines ending with dots (might be section headers)
        elif re.match(r'^[A-Z][^.]{10,100}\s*$', line) and i < len(lines) - 1:
            next_line = lines[i+1].strip() if i+1 < len(lines) else ''
            if not next_line or next_line[0].islower():
                result.append('## ' + line)
            else:
                result.append(line)
        else:
            result.append(line)
    
    return '\n'.join(result)

def format_tables(text):
    """Attempt to format tabular data as markdown tables."""
    lines = text.split('\n')
    result = []
    i = 0
    
    while i < len(lines):
        line = lines[i].strip()
        
        # Detect potential table rows (multiple columns separated by spaces/tabs)
        if '\t' in line or (line.count('  ') >= 2 and len(line.split()) >= 3):
            # Try to format as table
            parts = re.split(r'\s{2,}|\t+', line)
            if len(parts) >= 2:
                # Check if next few lines also look like table rows
                table_rows = [parts]
                j = i + 1
                while j < len(lines) and j < i + 10:
                    next_line = lines[j].strip()
                    if '\t' in next_line or (next_line.count('  ') >= 2):
                        table_rows.append(re.split(r'\s{2,}|\t+', next_line))
                        j += 1
                    else:
                        break
                
                if len(table_rows) >= 2:
                    # Format as markdown table
                    result.append('')
                    # Header
                    result.append('| ' + ' | '.join(table_rows[0]) + ' |')
                    result.append('| ' + ' | '.join(['---'] * len(table_rows[0])) + ' |')
                    # Rows
                    for row in table_rows[1:]:
                        if len(row) == len(table_rows[0]):
                            result.append('| ' + ' | '.join(row) + ' |')
                    result.append('')
                    i = j
                    continue
        
        result.append(line)
        i += 1
    
    return '\n'.join(result)

def convert_pdf_to_markdown(pdf_path, output_dir):
    """Convert a PDF file to markdown."""
    print(f"Converting: {pdf_path.name}")
    
    # Use pdftotext for extraction
    try:
        result = subprocess.run(
            ['pdftotext', '-layout', str(pdf_path), '-'],
            capture_output=True,
            text=True,
            check=True
        )
        text = result.stdout
    except subprocess.CalledProcessError as e:
        print(f"  ⚠️  pdftotext failed, trying PyPDF2...")
        try:
            import PyPDF2
            text = ""
            with open(pdf_path, 'rb') as file:
                pdf_reader = PyPDF2.PdfReader(file)
                for page in pdf_reader.pages:
                    text += page.extract_text() + "\n"
        except Exception as e2:
            print(f"  ❌ Failed to extract: {e2}")
            return None
    
    if not text or len(text.strip()) < 100:
        print(f"  ⚠️  Extracted text too short")
        return None
    
    # Clean text
    text = clean_text(text)
    
    # Detect and format headings
    text = detect_headings(text)
    
    # Format tables
    text = format_tables(text)
    
    # Create markdown with frontmatter
    filename_base = pdf_path.stem.replace(' ', '_').replace('.', '_')
    frontmatter = f"""---
source: "{pdf_path.name}"
converted_date: "{Path(__file__).stat().st_mtime}"
original_size: {pdf_path.stat().st_size}
---

# {pdf_path.stem}

"""
    
    markdown_content = frontmatter + text
    
    # Save to file
    output_file = output_dir / f"{filename_base}.md"
    output_file.write_text(markdown_content, encoding='utf-8')
    
    print(f"  ✓ Saved to: {output_file.name} ({len(markdown_content)} chars)")
    return output_file

def main():
    """Main conversion function."""
    if not DATA_COURSES.exists():
        print(f"Error: {DATA_COURSES} does not exist")
        sys.exit(1)
    
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    
    # Find all PDFs (excluding Zone.Identifier files)
    pdf_files = [p for p in DATA_COURSES.glob("*.pdf") 
                 if not p.name.endswith('Zone.Identifier')]
    
    if not pdf_files:
        print(f"No PDF files found in {DATA_COURSES}")
        sys.exit(1)
    
    print(f"Found {len(pdf_files)} PDF files to convert\n")
    
    converted = []
    for pdf_file in sorted(pdf_files):
        result = convert_pdf_to_markdown(pdf_file, OUTPUT_DIR)
        if result:
            converted.append(result)
    
    print(f"\n{'='*80}")
    print(f"Conversion complete! {len(converted)} files converted")
    print(f"Output directory: {OUTPUT_DIR}")
    print(f"{'='*80}")

if __name__ == "__main__":
    main()

