import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'LuxOpenFin',
  tagline: 'Open accounting education for Luxembourg SMEs - PCN, VAT, eCDF, and compliance guidance',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://luxopenfin.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  
  // SEO: Trailing slash handling
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Hexalab-dev',
  projectName: 'luxopenfin',

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr', 'de'],
    localeConfigs: {
      en: {label: 'English'},
      fr: {label: 'Français'},
      de: {label: 'Deutsch'},
    },
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
          editUrl: undefined,
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl: undefined,
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {
          changefreq: null,
          priority: null,
          filename: 'sitemap.xml',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    metadata: [
      {name: 'keywords', content: 'Luxembourg accounting, PCN 2020, VAT compliance, eCDF filing, financial education, SME accounting, Luxembourg tax, regulatory compliance, financial services, RegTech'},
      {name: 'author', content: 'Hexalab'},
      {name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'},
      {name: 'googlebot', content: 'index, follow'},
      {name: 'theme-color', content: '#003775'},
      {property: 'og:type', content: 'website'},
      {property: 'og:site_name', content: 'LuxOpenFin'},
      {property: 'og:locale', content: 'en_US'},
      {property: 'og:locale:alternate', content: 'fr_FR'},
      {property: 'og:locale:alternate', content: 'de_DE'},
      {name: 'twitter:card', content: 'summary_large_image'},
      {name: 'twitter:site', content: '@Hexalab'},
      {name: 'twitter:creator', content: '@Hexalab'},
    ],
    colorMode: {
      respectPrefersColorScheme: true,
    },
    announcementBar: {
      id: 'lux-alpha',
      content:
        '🏗️ DEV release: LuxOpenFin Chapters 1–10, public solutions, and 8 interactive tools are now live. Share feedback via GitHub issues.',
      backgroundColor: '#003775',
      textColor: '#ffffff',
      isCloseable: true,
    },
    navbar: {
      title: 'LuxOpenFin',
      logo: {
        alt: 'LuxOpenFin Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'mainSidebar',
          position: 'left',
          label: 'Textbook',
        },
        {
          to: '/tools',
          label: 'Interactive Tools',
          position: 'left',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://github.com/Hexalab-dev/luxopenfin',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    algolia: {
      appId: process.env.ALGOLIA_APP_ID || '8LZW1V3N93',
      apiKey: process.env.ALGOLIA_API_KEY || '50ac1833a435adcdf88f2767190a93da',
      indexName: process.env.ALGOLIA_INDEX_NAME || 'Documentation',
      contextualSearch: true,
      searchParameters: {},
      placeholder: 'Search documentation...',
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Learn',
          items: [
            {
              label: 'Getting Started',
              to: '/',
            },
            {
              label: 'Volume 1',
              to: '/volume1/chapter-01/intro',
            },
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'Interactive Tools',
              to: '/tools',
            },
            {
              label: 'Supplementary Materials',
              // AI MOD START
              to: '/supplementary',
              // AI MOD END
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub Discussions',
              href: 'https://github.com/Hexalab-dev/luxopenfin/discussions',
            },
            {
              label: 'Contributing',
              href: 'https://github.com/Hexalab-dev/luxopenfin/tree/main/docs',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} LuxOpenFin by Hexalab. Financial & Regulatory Compliance Platform. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
