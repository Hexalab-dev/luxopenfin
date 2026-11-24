# PowerPoint Slides

## Overview

PowerPoint presentations for each completed chapter, designed for classroom instruction and online teaching.

## Available Slides

### Completed Chapters (Chapters 1-9)

- **Chapter 1**: Role of Accounting in Society
- **Chapter 2**: Introduction to Financial Statements
- **Chapter 3**: Analyzing and Recording Transactions
- **Chapter 4**: The Adjustment Process
- **Chapter 5**: Completing the Accounting Cycle
- **Chapter 6**: Merchandising Transactions
- **Chapter 7**: Accounting Information Systems
- **Chapter 8**: Fraud, Internal Controls, and Cash
- **Chapter 9**: Accounting for Receivables

## Generating Slides

### Prerequisites

Install Python 3.7+ and the required library:

```bash
pip install python-pptx
```

Or from the scripts directory:

```bash
cd scripts
pip install -r requirements.txt
```

### Generate Slides

#### Single Chapter:
```bash
cd scripts
python generate_slides_enhanced.py 1
```

#### All Chapters:
```bash
cd scripts
python generate_slides_enhanced.py all
```

## Slide Structure

Each presentation includes:

1. **Title Slide**: Chapter title and number
2. **Learning Objectives**: All chapter learning objectives
3. **Section Slides**: Main sections with key content
   - Section titles
   - Subsections
   - Key bullet points
4. **Key Terms**: Important terminology with definitions

## Design Features

- **Dark Theme**: Professional dark background matching interactive tools
- **Color Coding**: 
  - Primary headings: Blue (#4a9eff)
  - Secondary headings: Green (#5cb85c)
  - Text: Light gray (#e0e0e0)
- **Consistent Formatting**: Uniform style across all chapters
- **Readable Fonts**: Clear, professional typography

## Customization

Slides can be customized after generation:
- Add images and diagrams
- Modify colors and fonts
- Add animations
- Include additional examples
- Add practice problems

## Usage

### For Classroom Teaching
1. Review slides before class
2. Customize as needed for your audience
3. Use as visual aids during lectures
4. Share with students for review

### For Online Courses
1. Record presentations with slides
2. Export to PDF for download
3. Use in video lectures
4. Create interactive elements

### For Professional Training
1. Focus on Luxembourg-specific content
2. Add real-world examples
3. Include case studies
4. Emphasize practical applications

## File Format

- **Format**: .pptx (PowerPoint)
- **Compatibility**: Microsoft PowerPoint, LibreOffice Impress, Google Slides
- **Size**: Optimized for standard presentation (10" x 7.5")

## Notes

- Slides are auto-generated from chapter markdown files
- Some manual editing may enhance the presentations
- Images and complex diagrams need to be added manually
- The generator creates a solid foundation that can be customized

## Future Enhancements

- [ ] Add images and diagrams automatically
- [ ] Include practice problems on slides
- [ ] Add interactive elements
- [ ] Create summary slides
- [ ] Add Luxembourg-specific visual elements
- [ ] Multilingual versions (FR, DE)

