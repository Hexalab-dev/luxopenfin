#!/usr/bin/env python3
"""
HTML Slide Generator for LuxOpenFin Chapters

Generates HTML-based presentations that can be viewed in browser or converted to PowerPoint.
No external libraries required - uses only Python standard library.

Usage:
    python generate_slides_html.py [chapter_number]
    python generate_slides_html.py all
"""

import sys
import re
from pathlib import Path

CHAPTER_FILES = {
    1: 'chapter_01_role_of_accounting.md',
    2: 'chapter_02_introduction_to_financial_statements.md',
    3: 'chapter_03_analyzing_and_recording_transactions.md',
    4: 'chapter_04_the_adjustment_process.md',
    5: 'chapter_05_completing_the_accounting_cycle.md',
    6: 'chapter_06_merchandising_transactions.md',
    7: 'chapter_07_accounting_information_systems.md',
    8: 'chapter_08_fraud_internal_controls_and_cash.md',
    9: 'chapter_09_accounting_for_receivables.md',
    10: 'chapter_10_inventory.md',
    11: 'chapter_11_long_term_assets.md',
    12: 'chapter_12_current_liabilities.md',
    13: 'chapter_13_long_term_liabilities.md',
    14: 'chapter_14_corporation_accounting.md',
    15: 'chapter_15_partnership_accounting.md',
    16: 'chapter_16_statement_of_cash_flows.md',
    17: 'chapter_17_financial_statement_analysis.md',
    18: 'chapter_18_introduction_to_managerial_accounting.md',
    19: 'chapter_19_cost_volume_profit_analysis.md',
    20: 'chapter_20_job_order_costing.md',
    21: 'chapter_21_process_costing.md',
    22: 'chapter_22_activity_based_costing.md',
    23: 'chapter_23_budgeting.md',
    24: 'chapter_24_balanced_scorecard.md',
    25: 'chapter_25_capital_budgeting.md',
}

def clean_text(text):
    """Remove markdown formatting."""
    text = re.sub(r'\*\*(.+?)\*\*', r'<strong>\1</strong>', text)
    text = re.sub(r'\*(.+?)\*', r'<em>\1</em>', text)
    text = re.sub(r'`(.+?)`', r'<code>\1</code>', text)
    text = re.sub(r'\[(.+?)\]\(.+?\)', r'\1', text)
    return text.strip()

def extract_content(content):
    """Extract content from markdown."""
    data = {}
    
    # Title
    title_match = re.search(r'^# (.+)$', content, re.MULTILINE)
    data['title'] = title_match.group(1) if title_match else "Chapter"
    
    # Learning Objectives
    obj_match = re.search(r'## Learning Objectives\s+(.+?)(?=\n##|\Z)', content, re.DOTALL)
    data['objectives'] = []
    if obj_match:
        for line in obj_match.group(1).split('\n'):
            line = line.strip()
            if re.match(r'^\d+\.', line):
                obj_text = re.sub(r'^\d+\.\s*', '', line)
                data['objectives'].append(clean_text(obj_text))
    
    # Sections
    sections = []
    section_pattern = r'^## ([\d.]+)\s+(.+?)(?=\n## |\Z)'
    for match in re.finditer(section_pattern, content, re.MULTILINE | re.DOTALL):
        section_num = match.group(1)
        section_title = match.group(2).split('\n')[0].strip()
        section_content = match.group(2)
        
        subsections = []
        sub_pattern = r'^### (.+?)$'
        for sub_match in re.finditer(sub_pattern, section_content, re.MULTILINE):
            sub_title = sub_match.group(1)
            sub_start = sub_match.end()
            next_sub = re.search(r'^### ', section_content[sub_start:], re.MULTILINE)
            sub_end = next_sub.start() if next_sub else len(section_content)
            sub_text = section_content[sub_start:sub_start+sub_end].strip()
            
            bullets = []
            for line in sub_text.split('\n'):
                line = line.strip()
                if line and (line.startswith('- ') or line.startswith('* ')):
                    bullet = clean_text(line[2:])
                    if bullet and len(bullet) < 200:
                        bullets.append(bullet)
            
            if sub_title or bullets:
                subsections.append({
                    'title': clean_text(sub_title),
                    'bullets': bullets[:8]
                })
        
        sections.append({
            'number': section_num,
            'title': clean_text(section_title),
            'subsections': subsections
        })
    
    data['sections'] = sections
    
    # Key Terms
    terms_match = re.search(r'## Key Terms\s+(.+?)(?=\n##|\Z)', content, re.DOTALL)
    data['key_terms'] = []
    if terms_match:
        for line in terms_match.group(1).split('\n'):
            line = line.strip()
            if line.startswith('- **'):
                term_match = re.search(r'- \*\*(.+?)\*\*: (.+)', line)
                if term_match:
                    data['key_terms'].append({
                        'term': clean_text(term_match.group(1)),
                        'definition': clean_text(term_match.group(2))
                    })
    
    return data

def generate_html_slides(chapter_num, data):
    """Generate HTML presentation."""
    html = f"""<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{data['title']} - LuxOpenFin</title>
    <style>
        * {{
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }}
        
        body {{
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: #1a1a1a;
            color: #e0e0e0;
            overflow-x: hidden;
        }}
        
        .slide {{
            width: 100vw;
            height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 60px;
            page-break-after: always;
        }}
        
        .slide-title {{
            font-size: 3.5em;
            color: #4a9eff;
            text-align: center;
            margin-bottom: 20px;
            font-weight: 700;
        }}
        
        .slide-subtitle {{
            font-size: 1.8em;
            color: #b0b0b0;
            text-align: center;
            margin-bottom: 40px;
        }}
        
        .slide-header {{
            font-size: 2.5em;
            color: #4a9eff;
            margin-bottom: 40px;
            text-align: center;
            font-weight: 600;
        }}
        
        .slide-content {{
            max-width: 1200px;
            width: 100%;
        }}
        
        .objective-item {{
            font-size: 1.4em;
            margin-bottom: 25px;
            padding-left: 30px;
            line-height: 1.6;
        }}
        
        .section-title {{
            font-size: 2em;
            color: #4a9eff;
            margin-bottom: 30px;
            border-bottom: 3px solid #4a9eff;
            padding-bottom: 15px;
        }}
        
        .subsection-title {{
            font-size: 1.6em;
            color: #5cb85c;
            margin-top: 30px;
            margin-bottom: 20px;
        }}
        
        .bullet-list {{
            list-style: none;
            padding-left: 0;
        }}
        
        .bullet-item {{
            font-size: 1.2em;
            margin-bottom: 15px;
            padding-left: 30px;
            position: relative;
            line-height: 1.5;
        }}
        
        .bullet-item:before {{
            content: "•";
            position: absolute;
            left: 0;
            color: #4a9eff;
            font-size: 1.5em;
        }}
        
        .term-item {{
            margin-bottom: 25px;
        }}
        
        .term-name {{
            font-size: 1.4em;
            color: #4a9eff;
            font-weight: 600;
            margin-bottom: 8px;
        }}
        
        .term-definition {{
            font-size: 1.1em;
            color: #b0b0b0;
            padding-left: 20px;
        }}
        
        .footer {{
            position: absolute;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            font-size: 0.9em;
            color: #666;
        }}
        
        @media print {{
            .slide {{
                page-break-after: always;
            }}
        }}
    </style>
</head>
<body>
    <!-- Title Slide -->
    <div class="slide">
        <div class="slide-title">{data['title']}</div>
        <div class="slide-subtitle">Chapter {chapter_num} - Luxembourg SME Accounting</div>
        <div class="footer">LuxOpenFin - Financial Accounting for Luxembourg SMEs</div>
    </div>
    
    <!-- Learning Objectives -->
    <div class="slide">
        <div class="slide-header">Learning Objectives</div>
        <div class="slide-content">
"""
    
    for obj in data['objectives']:
        html += f'            <div class="objective-item">{obj}</div>\n'
    
    html += """        </div>
    </div>
    
"""
    
    # Section slides
    for section in data['sections']:
        html += f"""    <!-- Section {section['number']} -->
    <div class="slide">
        <div class="slide-content">
            <div class="section-title">{section['number']} {section['title']}</div>
"""
        
        for sub in section['subsections'][:2]:  # Max 2 per slide
            html += f"""            <div class="subsection-title">{sub['title']}</div>
            <ul class="bullet-list">
"""
            for bullet in sub['bullets'][:6]:  # Max 6 bullets
                html += f'                <li class="bullet-item">{bullet}</li>\n'
            
            html += """            </ul>
"""
        
        html += """        </div>
    </div>
    
"""
    
    # Key Terms
    if data['key_terms']:
        terms_per_slide = 5
        for i in range(0, len(data['key_terms']), terms_per_slide):
            slide_terms = data['key_terms'][i:i+terms_per_slide]
            title = "Key Terms" if i == 0 else "Key Terms (continued)"
            
            html += f"""    <!-- {title} -->
    <div class="slide">
        <div class="slide-header">{title}</div>
        <div class="slide-content">
"""
            for term in slide_terms:
                html += f"""            <div class="term-item">
                <div class="term-name">{term['term']}</div>
                <div class="term-definition">{term['definition']}</div>
            </div>
"""
            html += """        </div>
    </div>
    
"""
    
    html += """</body>
</html>
"""
    
    return html

def generate_presentation(chapter_num):
    """Generate HTML presentation for a chapter."""
    # Get project root (go up from scripts/ to luxopenfin/)
    base_path = Path(__file__).parent.parent.parent.parent
    # Determine volume: chapters 1-17 are in volume1, chapters 18+ are in volume2
    volume = 'volume1' if chapter_num <= 17 else 'volume2'
    chapter_dir = base_path / 'volumes' / volume / f'chapter_{chapter_num:02d}'
    chapter_file = CHAPTER_FILES.get(chapter_num)
    
    if not chapter_file:
        print(f"Error: Chapter {chapter_num} not available")
        return False
    
    chapter_path = chapter_dir / chapter_file
    
    if not chapter_path.exists():
        print(f"Error: Chapter file not found: {chapter_path}")
        return False
    
    print(f"Processing Chapter {chapter_num}...")
    
    with open(chapter_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    data = extract_content(content)
    html = generate_html_slides(chapter_num, data)
    
    # Save
    output_dir = base_path / 'supplementary' / 'instructor' / 'slides'
    output_dir.mkdir(parents=True, exist_ok=True)
    output_file = output_dir / f'chapter_{chapter_num:02d}.html'
    
    with open(output_file, 'w', encoding='utf-8') as f:
        f.write(html)
    
    print(f"✓ Created: {output_file}")
    print(f"  Sections: {len(data['sections'])}")
    print(f"  Key terms: {len(data['key_terms'])}")
    print(f"  Open in browser or convert to PowerPoint")
    
    return True

def main():
    if len(sys.argv) < 2:
        print("Usage: python generate_slides_html.py [chapter_number ... | all]")
        print("Examples:")
        print("  python generate_slides_html.py 14")
        print("  python generate_slides_html.py 14 15 16")
        print("  python generate_slides_html.py all")
        sys.exit(1)

    args = [arg.lower() for arg in sys.argv[1:]]

    if len(args) == 1 and args[0] == 'all':
        for chapter_num in CHAPTER_FILES.keys():
            generate_presentation(chapter_num)
            print()
        print("✓ All HTML presentations generated!")
        return

    for arg in args:
        if arg == 'all':
            for chapter_num in CHAPTER_FILES.keys():
                generate_presentation(chapter_num)
                print()
            continue
        try:
            chapter_num = int(arg)
            if chapter_num in CHAPTER_FILES:
                generate_presentation(chapter_num)
                print()
            else:
                print(f"Error: Chapter {chapter_num} not available")
        except ValueError:
            print(f"Error: Invalid chapter number: {arg}")

if __name__ == '__main__':
    main()

