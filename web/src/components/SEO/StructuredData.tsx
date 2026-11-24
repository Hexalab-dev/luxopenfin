import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

interface StructuredDataProps {
  type?: 'homepage' | 'page' | 'article' | 'tools';
  title?: string;
  description?: string;
  url?: string;
  breadcrumbs?: Array<{name: string; url: string}>;
}

export default function StructuredData({
  type = 'page',
  title,
  description,
  url,
  breadcrumbs,
}: StructuredDataProps): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  const baseUrl = siteConfig.url;
  const currentUrl = url || (typeof window !== 'undefined' ? window.location.href : baseUrl);

  // Organization Schema
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'LuxOpenFin',
    url: baseUrl,
    logo: `${baseUrl}/img/logo.svg`,
    description: 'Financial and regulatory compliance platform for Luxembourg SMEs',
    parentOrganization: {
      '@type': 'Organization',
      name: 'Hexalab',
      url: 'https://hexalab.dev',
    },
    sameAs: [
      'https://github.com/Hexalab-dev/luxopenfin',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Technical Support',
      url: 'https://github.com/Hexalab-dev/luxopenfin/discussions',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Luxembourg',
    },
    serviceType: 'Financial Services',
    additionalType: 'https://schema.org/FinancialService',
  };

  // WebSite Schema
  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.title,
    url: baseUrl,
    description: siteConfig.tagline,
    publisher: {
      '@type': 'Organization',
      name: 'LuxOpenFin',
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}/img/logo.svg`,
      },
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${baseUrl}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
    inLanguage: ['en', 'fr', 'de'],
  };

  // SoftwareApplication Schema (for the platform)
  const softwareApplicationSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'LuxOpenFin',
    applicationCategory: 'EducationalApplication',
    operatingSystem: 'Web Browser',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'EUR',
    },
    description: 'Open accounting education platform tailored for Luxembourg SMEs, including PCN, VAT, and compliance guidance',
    url: baseUrl,
    provider: {
      '@type': 'Organization',
      name: 'Hexalab',
    },
    featureList: [
      'PCN 2020 Chart of Accounts',
      'VAT Compliance Tools',
      'eCDF Filing Guidance',
      'Interactive Accounting Calculators',
      'Multilingual Support (EN/FR/DE)',
    ],
  };

  // BreadcrumbList Schema
  const breadcrumbSchema = breadcrumbs
    ? {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((crumb, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: crumb.name,
          item: crumb.url,
        })),
      }
    : null;

  // Page-specific schema
  let pageSchema = null;
  if (type === 'homepage') {
    pageSchema = {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: title || siteConfig.title,
      description: description || siteConfig.tagline,
      url: currentUrl,
      mainEntity: {
        '@type': 'EducationalOrganization',
        name: 'LuxOpenFin',
        description: 'Financial education platform for Luxembourg SMEs',
      },
    };
  } else if (type === 'tools') {
    pageSchema = {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: title || 'Interactive Tools',
      description: description || 'Browser-based accounting calculators and practice utilities for Luxembourg SMEs',
      url: currentUrl,
      mainEntity: {
        '@type': 'SoftwareApplication',
        name: 'LuxOpenFin Interactive Tools',
        applicationCategory: 'FinancialApplication',
      },
    };
  } else if (type === 'article') {
    pageSchema = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: title,
      description: description,
      url: currentUrl,
      publisher: {
        '@type': 'Organization',
        name: 'LuxOpenFin',
        logo: {
          '@type': 'ImageObject',
          url: `${baseUrl}/img/logo.svg`,
        },
      },
    };
  }

  const schemas = [
    organizationSchema,
    websiteSchema,
    softwareApplicationSchema,
    breadcrumbSchema,
    pageSchema,
  ].filter(Boolean);

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{__html: JSON.stringify(schema, null, 2)}}
        />
      ))}
    </>
  );
}

