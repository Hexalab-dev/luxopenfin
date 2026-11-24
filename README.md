# LuxOpenFin

**Open accounting education for Luxembourg SMEs**

An OpenStax-style comprehensive accounting textbook tailored specifically for Luxembourg Small and Medium Enterprises (SMEs).

## Overview

This open educational resource provides a complete accounting education that combines universal accounting principles with Luxembourg-specific regulations, compliance requirements, and practical applications.

🌐 **Live Website**: [https://luxopenfin.com](https://luxopenfin.com)

## Structure

### Volume 1: Financial Accounting for Luxembourg SMEs (Chapters 1-17) ✅
- Role of Accounting in Society
- Financial Statements
- Transaction Analysis
- Accounting Cycle
- Merchandising
- Internal Controls
- Receivables & Inventory
- Long-term Assets & Liabilities
- Corporation & Partnership Accounting
- Cash Flows & Financial Analysis

### Volume 2: Managerial Accounting for Luxembourg SMEs (Chapters 18-25) ✅
- Introduction to Managerial Accounting
- Cost-Volume-Profit Analysis
- Job Order & Process Costing
- Activity-Based Costing
- Budgeting
- Balanced Scorecard
- Capital Budgeting

### Volume 3: Luxembourg-Specific Compliance and Practice (Chapters 26-35) ✅
- Live

## Features

- **Comprehensive Coverage**: 35 chapters covering all aspects of accounting for SMEs
- **Luxembourg-Specific Content**: PCN 2020, VAT system, eCDF/FAIA compliance, sector-specific practices
- **OpenStax Quality Standards**: Learning objectives, examples, exercises, cases, and comprehensive problems
- **Multilingual Support**: Available in French, German, and English
- **Interactive Resources**: 8 interactive tools including T-account simulator, journal entry practice, PCN lookup, VAT calculator, payroll calculator, break-even analyzer, ratio calculator, and financial statement generator
- **Semantic Search**: Powered by Algolia DocSearch for intelligent content discovery
- **Instructor Resources**: Solutions manual, PowerPoint slides, and teaching scripts

## Quick Start

### For Students & Learners

Visit the [live website](https://luxopenfin.com) to access all content, interactive tools, and exercises.

### For Developers

```bash
# Clone the repository
git clone https://github.com/Hexalab-dev/luxopenfin.git
cd luxopenfin

# Navigate to web directory
cd web

# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

### For Instructors

See `supplementary/instructor/` for:
- Solutions manual (Chapters 1-25 complete)
- HTML slide decks
- Python scripts for generating PowerPoint presentations

## Project Structure

```
luxopenfin/
├── volumes/              # Source markdown content
│   ├── volume1/         # Financial Accounting (Chapters 1-17)
│   ├── volume2/         # Managerial Accounting (Chapters 18-25)
│   └── volume3/         # Luxembourg Compliance (Chapters 26-35 live)
├── web/                 # Docusaurus website
│   ├── docs/           # Migrated content for web
│   ├── src/            # React components and pages
│   └── static/         # Static assets
├── supplementary/       # Additional resources
│   ├── instructor/     # Solutions, slides, scripts
│   ├── interactive/    # Interactive HTML tools
│   └── student/        # Student resources
├── scripts/            # Migration and utility scripts
└── docs/              # Project documentation
```

## Technology Stack

- **Website**: Docusaurus 3.9.2
- **Content**: Markdown/MDX
- **Interactive Tools**: React, TypeScript
- **Search**: Algolia DocSearch
- **Deployment**: Static site hosting

## License

This project is licensed under CC0-1.0 (Creative Commons Zero 1.0 Universal) - see [LICENSE](LICENSE) file for details.

## Contributing

Contributions from Luxembourg accounting professionals, educators, and SMEs are welcome! Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

### How to Contribute

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Development Status

- ✅ Volume 1: Complete (17 chapters)
- ✅ Volume 2: Complete (8 chapters)
- ✅ Volume 3: Complete (10 chapters)
- ✅ Interactive Tools: 8 tools available
- ✅ Multilingual: EN, FR, DE translations
- ✅ Solutions Manual: Chapters 1-25 complete
- ✅ Instructor Slides: HTML slides for all chapters

## Contact & Support

- **GitHub Issues**: [Report bugs or request features](https://github.com/Hexalab-dev/luxopenfin/issues)
- **GitHub Discussions**: [Join the conversation](https://github.com/Hexalab-dev/luxopenfin/discussions)
- **Website**: [https://luxopenfin.com](https://luxopenfin.com)

## Acknowledgments

- Built with [Docusaurus](https://docusaurus.io/)
- Search powered by [Algolia DocSearch](https://docsearch.algolia.com/)
- Inspired by [OpenStax](https://openstax.org/) educational resources

