#!/usr/bin/env python3
"""
PowerPoint Slide Generator for LuxOpenFin Chapters

This script generates PowerPoint presentations from chapter markdown files.
Requires: python-pptx library

Usage:
    python generate_slides.py [chapter_number]
    
Example:
    python generate_slides.py 1  # Generate slides for Chapter 1
    python generate_slides.py all # Generate slides for all completed chapters
"""

import sys
import os
import re
from pathlib import Path

try:
    from pptx import Presentation
    from pptx.util import Inches, Pt
    from pptx.enum.text import PP_ALIGN
    from pptx.dml.color import RGBColor
except ImportError:
    print("Error: python-pptx library not installed.")
    print("Install with: pip install python-pptx")
    sys.exit(1)

# Color scheme matching the interactive tools
COLORS = {
    'primary': RGBColor(74, 158, 255),      # #4a9eff
    'secondary': RGBColor(92, 184, 92),     # #5cb85c
    'text': RGBColor(224, 224, 224),         # #e0e0e0
    'text_secondary': RGBColor(176, 176, 176),  # #b0b0b0
    'background': RGBColor(26, 26, 26),     # #1a1a1a
    'accent': RGBColor(74, 158, 255)
}

def parse_markdown_chapter(chapter_path):
    """Parse markdown chapter and extract content for slides."""
    with open(chapter_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    slides_data = []
    
    # Extract chapter title
    title_match = re.search(r'^# (.+)$', content, re.MULTILINE)
    chapter_title = title_match.group(1) if title_match else "Chapter"
    
    # Extract learning objectives
    obj_match = re.search(r'## Learning Objectives\s+(.+?)(?=\n##|\n---|\Z)', content, re.DOTALL)
    if obj_match:
        objectives = []
        for line in obj_match.group(1).split('\n'):
            if re.match(r'^\d+\.', line.strip()):
                objectives.append(line.strip())
        slides_data.append({
            'type': 'objectives',
            'title': 'Learning Objectives',
            'content': objectives
        })
    
    # Extract sections (## 1.1, ## 1.2, etc.)
    sections = re.finditer(r'^## ([\d.]+)\s+(.+?)(?=\n## |\Z)', content, re.MULTILINE | re.DOTALL)
    
    for section in sections:
        section_num = section.group(1)
        section_title = section.group(2).strip()
        section_content = section.group(0)
        
        # Extract subsections
        subsections = re.finditer(r'^### (.+?)$', section_content, re.MULTILINE)
        
        slide_content = {
            'type': 'section',
            'number': section_num,
            'title': section_title,
            'subsections': []
        }
        
        for sub in subsections:
            sub_title = sub.group(1)
            # Get content until next subsection or end
            sub_start = sub.end()
            next_sub = re.search(r'^### ', section_content[sub_start:], re.MULTILINE)
            sub_end = next_sub.start() if next_sub else len(section_content)
            sub_content = section_content[sub_start:sub_start+sub_end].strip()
            
            # Extract key points (bullet lists)
            bullets = []
            for line in sub_content.split('\n'):
                line = line.strip()
                if line.startswith('- ') or line.startswith('* '):
                    # Remove markdown formatting
                    clean_line = re.sub(r'\*\*(.+?)\*\*', r'\1', line[2:])
                    bullets.append(clean_line)
            
            slide_content['subsections'].append({
                'title': sub_title,
                'bullets': bullets[:6]  # Limit to 6 bullets per slide
            })
        
        slides_data.append(slide_content)
    
    # Extract key terms
    key_terms_match = re.search(r'## Key Terms\s+(.+?)(?=\n##|\Z)', content, re.DOTALL)
    if key_terms_match:
        terms = []
        for line in key_terms_match.group(1).split('\n'):
            if line.strip().startswith('- **'):
                term_match = re.search(r'- \*\*(.+?)\*\*: (.+)', line)
                if term_match:
                    terms.append({
                        'term': term_match.group(1),
                        'definition': term_match.group(2).strip()
                    })
        if terms:
            slides_data.append({
                'type': 'key_terms',
                'title': 'Key Terms',
                'content': terms[:10]  # Limit to 10 terms
            })
    
    return chapter_title, slides_data

def create_title_slide(prs, chapter_title, chapter_num):
    """Create title slide."""
    slide = prs.slides.add_slide(prs.slide_layouts[6])  # Blank layout
    
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

def create_content_slide(prs, slide_data):
    """Create content slide."""
    slide = prs.slides.add_slide(prs.slide_layouts[6])  # Blank layout
    
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
    tf.text = slide_data.get('title', '')
    tf.paragraphs[0].font.size = Pt(32)
    tf.paragraphs[0].font.bold = True
    tf.paragraphs[0].font.color.rgb = COLORS['primary']
    
    # Content
    content_top = Inches(1.5)
    content_width = Inches(9)
    content_height = Inches(5)
    
    if slide_data['type'] == 'objectives':
        txBox2 = slide.shapes.add_textbox(left, content_top, content_width, content_height)
        tf2 = txBox2.text_frame
        tf2.word_wrap = True
        
        for obj in slide_data['content']:
            p = tf2.add_paragraph()
            p.text = obj
            p.level = 0
            p.font.size = Pt(18)
            p.font.color.rgb = COLORS['text']
            p.space_after = Pt(12)
    
    elif slide_data['type'] == 'section':
        txBox2 = slide.shapes.add_textbox(left, content_top, content_width, content_height)
        tf2 = txBox2.text_frame
        tf2.word_wrap = True
        
        # Section title
        p = tf2.paragraphs[0]
        p.text = f"{slide_data['number']} {slide_data['title']}"
        p.font.size = Pt(24)
        p.font.bold = True
        p.font.color.rgb = COLORS['accent']
        p.space_after = Pt(18)
        
        # Subsections
        for sub in slide_data['subsections'][:1]:  # One subsection per slide
            p = tf2.add_paragraph()
            p.text = sub['title']
            p.level = 0
            p.font.size = Pt(20)
            p.font.bold = True
            p.font.color.rgb = COLORS['secondary']
            p.space_after = Pt(12)
            
            for bullet in sub['bullets']:
                p = tf2.add_paragraph()
                p.text = bullet
                p.level = 1
                p.font.size = Pt(16)
                p.font.color.rgb = COLORS['text']
                p.space_after = Pt(8)
    
    elif slide_data['type'] == 'key_terms':
        txBox2 = slide.shapes.add_textbox(left, content_top, content_width, content_height)
        tf2 = txBox2.text_frame
        tf2.word_wrap = True
        
        for term in slide_data['content']:
            p = tf2.add_paragraph()
            p.text = f"{term['term']}: {term['definition']}"
            p.level = 0
            p.font.size = Pt(16)
            p.font.color.rgb = COLORS['text']
            p.space_after = Pt(10)

def generate_presentation(chapter_num):
    """Generate PowerPoint presentation for a chapter."""
    # Paths
    base_path = Path(__file__).parent.parent.parent
    chapter_path = base_path / 'volumes' / 'volume1' / f'chapter_{chapter_num:02d}' / f'chapter_{chapter_num:02d}_role_of_accounting.md'
    
    # Adjust filename for different chapters
    if chapter_num == 1:
        chapter_path = base_path / 'volumes' / 'volume1' / 'chapter_01' / 'chapter_01_role_of_accounting.md'
    elif chapter_num == 2:
        chapter_path = base_path / 'volumes' / 'volume1' / 'chapter_02' / 'chapter_02_introduction_to_financial_statements.md'
    elif chapter_num == 3:
        chapter_path = base_path / 'volumes' / 'volume1' / 'chapter_03' / 'chapter_03_analyzing_and_recording_transactions.md'
    elif chapter_num == 4:
        chapter_path = base_path / 'volumes' / 'volume1' / 'chapter_04' / 'chapter_04_the_adjustment_process.md'
    elif chapter_num == 5:
        chapter_path = base_path / 'volumes' / 'volume1' / 'chapter_05' / 'chapter_05_completing_the_accounting_cycle.md'
    elif chapter_num == 6:
        chapter_path = base_path / 'volumes' / 'volume1' / 'chapter_06' / 'chapter_06_merchandising_transactions.md'
    elif chapter_num == 7:
        chapter_path = base_path / 'volumes' / 'volume1' / 'chapter_07' / 'chapter_07_accounting_information_systems.md'
    elif chapter_num == 8:
        chapter_path = base_path / 'volumes' / 'volume1' / 'chapter_08' / 'chapter_08_fraud_internal_controls_and_cash.md'
    elif chapter_num == 9:
        chapter_path = base_path / 'volumes' / 'volume1' / 'chapter_09' / 'chapter_09_accounting_for_receivables.md'
    
    if not chapter_path.exists():
        print(f"Error: Chapter file not found: {chapter_path}")
        return False
    
    # Parse chapter
    print(f"Parsing Chapter {chapter_num}...")
    chapter_title, slides_data = parse_markdown_chapter(chapter_path)
    
    # Create presentation
    prs = Presentation()
    prs.slide_width = Inches(10)
    prs.slide_height = Inches(7.5)
    
    # Title slide
    create_title_slide(prs, chapter_title, chapter_num)
    
    # Content slides
    for slide_data in slides_data:
        create_content_slide(prs, slide_data)
    
    # Save
    output_dir = base_path / 'supplementary' / 'instructor' / 'slides'
    output_dir.mkdir(parents=True, exist_ok=True)
    output_file = output_dir / f'chapter_{chapter_num:02d}.pptx'
    
    prs.save(str(output_file))
    print(f"✓ Created: {output_file}")
    print(f"  Total slides: {len(prs.slides)}")
    
    return True

def main():
    if len(sys.argv) < 2:
        print("Usage: python generate_slides.py [chapter_number|all]")
        print("Example: python generate_slides.py 1")
        print("         python generate_slides.py all")
        sys.exit(1)
    
    arg = sys.argv[1].lower()
    
    if arg == 'all':
        completed_chapters = [1, 2, 3, 4, 5, 6, 7, 8, 9]
        for chapter_num in completed_chapters:
            generate_presentation(chapter_num)
        print("\n✓ All presentations generated!")
    else:
        try:
            chapter_num = int(arg)
            if 1 <= chapter_num <= 9:
                generate_presentation(chapter_num)
            else:
                print(f"Error: Chapter number must be between 1 and 9")
        except ValueError:
            print(f"Error: Invalid chapter number: {arg}")

if __name__ == '__main__':
    main()

