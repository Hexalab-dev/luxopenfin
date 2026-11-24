# PowerPoint Slide Generator

## Overview

This script generates PowerPoint presentations (.pptx) from chapter markdown files.

## Installation

1. Install Python 3.7 or higher
2. Install required library:
```bash
pip install -r requirements.txt
```

Or directly:
```bash
pip install python-pptx
```

## Usage

### Generate slides for a single chapter:
```bash
python generate_slides.py 1
```

### Generate slides for all completed chapters:
```bash
python generate_slides.py all
```

## Output

Slides are saved to: `supplementary/instructor/slides/chapter_XX.pptx`

## Features

- **Title Slide**: Chapter title and number
- **Learning Objectives**: All chapter objectives
- **Section Slides**: Main sections with subsections
- **Key Terms**: Important terminology
- **Consistent Design**: Matches interactive tools color scheme
- **Dark Theme**: Professional dark background

## Customization

Edit the script to:
- Adjust colors (COLORS dictionary)
- Change slide layouts
- Add more content types
- Modify fonts and sizes

## Notes

- Slides are generated from markdown structure
- Some manual editing may be needed for complex formatting
- Images and diagrams need to be added manually
- The script creates a basic structure that can be enhanced

