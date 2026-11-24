#!/usr/bin/env python3
"""
Analyze PDF content from data_courses folder and map to existing volumes.
Extracts text, identifies structure, and suggests integration points.
"""

import sys
import os
from pathlib import Path
import re

try:
    import PyPDF2
except ImportError:
    print("Error: PyPDF2 not installed. Install with: pip install PyPDF2")
    sys.exit(1)

# Project root
PROJECT_ROOT = Path(__file__).parent.parent
DATA_COURSES = PROJECT_ROOT / "data_courses"
OUTPUT_DIR = PROJECT_ROOT / "data_courses" / "analysis"

def extract_pdf_text(pdf_path):
    """Extract text from PDF file."""
    text = ""
    try:
        with open(pdf_path, 'rb') as file:
            pdf_reader = PyPDF2.PdfReader(file)
            for page in pdf_reader.pages:
                text += page.extract_text() + "\n"
    except Exception as e:
        print(f"Error reading {pdf_path}: {e}")
        return None
    return text

def analyze_structure(text):
    """Analyze PDF structure - identify headings, sections, tables."""
    lines = text.split('\n')
    structure = {
        'headings': [],
        'sections': [],
        'tables': [],
        'first_100_lines': lines[:100],
        'total_pages_estimate': len([l for l in lines if l.strip()]) // 50
    }
    
    # Find potential headings (lines in caps, numbered sections, etc.)
    for i, line in enumerate(lines[:200]):  # Analyze first 200 lines
        line = line.strip()
        if not line:
            continue
        
        # Numbered sections (1., 1.1, Chapter, etc.)
        if re.match(r'^\d+[\.\)]\s+', line) or re.match(r'^Chapitre\s+\d+', line, re.I):
            structure['headings'].append((i, line))
        
        # All caps lines (potential headings)
        if line.isupper() and len(line) > 5 and len(line) < 100:
            structure['headings'].append((i, line))
        
        # Table of contents indicators
        if 'table des matières' in line.lower() or 'sommaire' in line.lower() or 'contents' in line.lower():
            structure['sections'].append(('toc', i, line))
    
    return structure

def identify_content_type(text, filename):
    """Identify what type of content this PDF contains."""
    text_lower = text.lower()
    
    keywords = {
        'pcn': ['pcn', 'plan comptable', 'chart of accounts', 'compte'],
        'vat': ['tva', 'vat', 'taxe sur la valeur'],
        'financial_reporting': ['comptes annuels', 'annual accounts', 'bilan', 'balance sheet'],
        'managerial': ['comptabilité de gestion', 'cost accounting', 'analytique', 'ktr'],
        'general_accounting': ['comptabilité générale', 'general accounting', 'vademecum'],
        'course_curriculum': ['fiches des cours', 'curriculum', 'module', 'semestre'],
        'municipal': ['communal', 'camérale', 'municipal'],
        'lux_gaap': ['lux gaap', 'luxembourg gaap', 'principes comptables']
    }
    
    content_type = []
    for key, terms in keywords.items():
        if any(term in text_lower for term in terms):
            content_type.append(key)
    
    return content_type

def suggest_integration(text, filename, content_types):
    """Suggest where content should be integrated."""
    suggestions = []
    
    if 'pcn' in content_types:
        suggestions.append({
            'target': 'Volume 3, Chapter 26',
            'reason': 'PCN (Plan Comptable Normalisé) content',
            'priority': 'high'
        })
    
    if 'financial_reporting' in content_types or 'lux_gaap' in content_types:
        suggestions.append({
            'target': 'Volume 3, Chapters 26-30',
            'reason': 'Financial reporting and LUX GAAP requirements',
            'priority': 'high'
        })
    
    if 'managerial' in content_types:
        suggestions.append({
            'target': 'Volume 2, Chapters 18-22',
            'reason': 'Managerial/cost accounting content',
            'priority': 'medium'
        })
    
    if 'general_accounting' in content_types:
        suggestions.append({
            'target': 'Volume 1, Chapters 2-5',
            'reason': 'General accounting principles and PCN structure',
            'priority': 'medium'
        })
    
    if 'course_curriculum' in content_types:
        suggestions.append({
            'target': 'Volume 4 (NEW) or Supplementary',
            'reason': 'Complete course curriculum structure',
            'priority': 'assess'
        })
    
    if 'municipal' in content_types:
        suggestions.append({
            'target': 'Supplementary Materials',
            'reason': 'Specialized municipal/cameral accounting',
            'priority': 'low'
        })
    
    return suggestions

def analyze_pdf(pdf_path):
    """Analyze a single PDF file."""
    print(f"\n{'='*80}")
    print(f"Analyzing: {pdf_path.name}")
    print(f"{'='*80}")
    
    # Extract text
    text = extract_pdf_text(pdf_path)
    if not text:
        print("  ❌ Failed to extract text")
        return None
    
    print(f"  ✓ Extracted {len(text)} characters")
    
    # Analyze structure
    structure = analyze_structure(text)
    print(f"  ✓ Found {len(structure['headings'])} potential headings")
    
    # Identify content type
    content_types = identify_content_type(text, pdf_path.name)
    print(f"  ✓ Content types: {', '.join(content_types) if content_types else 'unknown'}")
    
    # Suggest integration
    suggestions = suggest_integration(text, pdf_path.name, content_types)
    
    result = {
        'filename': pdf_path.name,
        'size': pdf_path.stat().st_size,
        'text_length': len(text),
        'content_types': content_types,
        'structure': structure,
        'suggestions': suggestions,
        'sample_text': text[:2000]  # First 2000 chars for review
    }
    
    return result

def main():
    """Main analysis function."""
    if not DATA_COURSES.exists():
        print(f"Error: {DATA_COURSES} does not exist")
        sys.exit(1)
    
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    
    # Find all PDFs
    pdf_files = list(DATA_COURSES.glob("*.pdf"))
    pdf_files = [p for p in pdf_files if not p.name.endswith('Zone.Identifier')]
    
    if not pdf_files:
        print(f"No PDF files found in {DATA_COURSES}")
        sys.exit(1)
    
    print(f"Found {len(pdf_files)} PDF files to analyze")
    
    results = []
    for pdf_file in sorted(pdf_files):
        result = analyze_pdf(pdf_file)
        if result:
            results.append(result)
    
    # Generate summary report
    report_path = OUTPUT_DIR / "analysis_report.md"
    with open(report_path, 'w', encoding='utf-8') as f:
        f.write("# PDF Content Analysis Report\n\n")
        f.write(f"Analyzed {len(results)} PDF files\n\n")
        
        for result in results:
            f.write(f"## {result['filename']}\n\n")
            f.write(f"- **Size**: {result['size']:,} bytes\n")
            f.write(f"- **Text Length**: {result['text_length']:,} characters\n")
            f.write(f"- **Content Types**: {', '.join(result['content_types']) if result['content_types'] else 'Unknown'}\n\n")
            
            f.write("### Integration Suggestions:\n\n")
            for sug in result['suggestions']:
                f.write(f"- **{sug['target']}** ({sug['priority']} priority)\n")
                f.write(f"  - Reason: {sug['reason']}\n\n")
            
            f.write("### Sample Content (first 2000 chars):\n\n")
            f.write("```\n")
            f.write(result['sample_text'][:2000])
            f.write("\n```\n\n")
            f.write("---\n\n")
    
    print(f"\n{'='*80}")
    print(f"Analysis complete! Report saved to: {report_path}")
    print(f"{'='*80}")
    
    # Print summary
    print("\n## Summary by Integration Target:\n")
    targets = {}
    for result in results:
        for sug in result['suggestions']:
            target = sug['target']
            if target not in targets:
                targets[target] = []
            targets[target].append((result['filename'], sug['priority']))
    
    for target, files in sorted(targets.items()):
        print(f"\n### {target}:")
        for filename, priority in files:
            print(f"  - {filename} ({priority})")

if __name__ == "__main__":
    main()

