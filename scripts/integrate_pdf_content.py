#!/usr/bin/env python3
"""
Integrate converted PDF content into existing volume chapters.
This script helps extract relevant sections and integrate them properly.
"""

import sys
from pathlib import Path
import re

PROJECT_ROOT = Path(__file__).parent.parent
CONVERTED_DIR = PROJECT_ROOT / "data_courses" / "converted"
VOLUMES_DIR = PROJECT_ROOT / "volumes"
WEB_DOCS_DIR = PROJECT_ROOT / "web" / "docs"

def extract_pcn_accounts(markdown_file):
    """Extract PCN account information from converted markdown."""
    content = markdown_file.read_text(encoding='utf-8')
    
    # Look for account number patterns (3-6 digits)
    accounts = []
    lines = content.split('\n')
    
    for i, line in enumerate(lines):
        # Pattern: account number followed by description
        match = re.search(r'(\d{3,6})\s+([A-Z].{10,100})', line)
        if match:
            account_num = match.group(1)
            description = match.group(2).strip()
            # Clean up description
            description = re.sub(r'\s+', ' ', description)
            description = description[:100]  # Limit length
            accounts.append({
                'number': account_num,
                'description': description,
                'line': i
            })
    
    return accounts

def extract_sections_by_topic(markdown_file, keywords):
    """Extract sections that contain specific keywords."""
    content = markdown_file.read_text(encoding='utf-8')
    sections = []
    
    lines = content.split('\n')
    current_section = []
    in_relevant_section = False
    
    for line in lines:
        # Check if line contains keywords
        line_lower = line.lower()
        if any(keyword.lower() in line_lower for keyword in keywords):
            if current_section:
                sections.append('\n'.join(current_section))
            current_section = [line]
            in_relevant_section = True
        elif in_relevant_section:
            # Check if we hit a new major heading
            if line.startswith('#') and len(line.strip()) > 3:
                if current_section:
                    sections.append('\n'.join(current_section))
                current_section = []
                in_relevant_section = False
            else:
                current_section.append(line)
    
    if current_section:
        sections.append('\n'.join(current_section))
    
    return sections

def create_integration_summary():
    """Create a summary of what should be integrated where."""
    summary = {
        'volume3_chapter26': {
            'files': [
                'luxembourg-standard-chart-accounts-FR-web.md',
                'vademecum-compta-generale.md',
                'handbook-fr.md'
            ],
            'target_sections': ['26.2', '26.3', '26.4']
        },
        'volume3_chapter30': {
            'files': [
                'handbook-fr.md',
                'Renseignements_sous_LUX_GAAP.md'
            ],
            'target_sections': ['30.1', '30.2', '30.3']
        },
        'volume1_enhancements': {
            'files': [
                'vademecum-compta-generale.md',
                'Module_B_TECHNIQUES_QUANTITAVES_DE_GESTION_2023_2024.md'
            ],
            'target_sections': ['2.4', '3.7', '4.6']
        },
        'volume2_enhancements': {
            'files': [
                'concept-comptabilite-analytique.md'
            ],
            'target_sections': ['18.6', '20.9']
        },
        'supplementary': {
            'files': [
                'vademecum.pdf',  # Municipal accounting
                'Fiches_des_cours_Gestionnaire_comptable_fiscal.md'  # Curriculum structure
            ],
            'target': 'supplementary/reference/'
        }
    }
    
    return summary

def main():
    """Main integration planning function."""
    print("PDF Content Integration Plan\n")
    print("=" * 80)
    
    summary = create_integration_summary()
    
    # Check which files exist
    for category, info in summary.items():
        print(f"\n## {category.upper().replace('_', ' ')}")
        print("-" * 80)
        
        if 'files' in info:
            for filename in info['files']:
                file_path = CONVERTED_DIR / filename
                if file_path.exists():
                    size = file_path.stat().st_size
                    print(f"  ✓ {filename} ({size:,} bytes)")
                    if 'target_sections' in info:
                        print(f"    → Integrate into: {', '.join(info['target_sections'])}")
                else:
                    print(f"  ✗ {filename} (not found)")
        
        if 'target' in info:
            print(f"  → Place in: {info['target']}")
    
    # Generate detailed integration report
    report_path = PROJECT_ROOT / "data_courses" / "integration_plan.md"
    with open(report_path, 'w', encoding='utf-8') as f:
        f.write("# PDF Content Integration Plan\n\n")
        f.write("This document outlines how to integrate converted PDF content into the textbook.\n\n")
        
        for category, info in summary.items():
            f.write(f"## {category.replace('_', ' ').title()}\n\n")
            
            if 'files' in info:
                for filename in info['files']:
                    f.write(f"### {filename}\n\n")
                    file_path = CONVERTED_DIR / filename
                    if file_path.exists():
                        # Extract sample content
                        content = file_path.read_text(encoding='utf-8')
                        sample = content[:500]
                        f.write(f"**Sample content:**\n```\n{sample}\n```\n\n")
                        
                        if 'target_sections' in info:
                            f.write(f"**Integration target:** {', '.join(info['target_sections'])}\n\n")
            
            f.write("\n---\n\n")
    
    print(f"\n{'='*80}")
    print(f"Integration plan saved to: {report_path}")
    print(f"{'='*80}")
    print("\nNext steps:")
    print("1. Review the integration plan")
    print("2. Manually extract and integrate relevant sections")
    print("3. Maintain formatting consistency with existing chapters")
    print("4. Add proper citations and references")

if __name__ == "__main__":
    main()

