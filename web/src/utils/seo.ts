/**
 * SEO Utility Functions
 * 
 * Provides consistent SEO metadata generation for LuxOpenFin pages.
 * Ensures all pages follow 2025 Google Search Essentials guidelines.
 */

import type {ReactNode} from 'react';

export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: 'website' | 'article' | 'profile';
  noindex?: boolean;
  nofollow?: boolean;
}

/**
 * Generates a complete page title with brand suffix
 */
export function generatePageTitle(title: string, includeBrand = true): string {
  const brandSuffix = includeBrand ? ' · LuxOpenFin' : '';
  return `${title}${brandSuffix}`;
}

/**
 * Generates meta description with optimal length (150-160 chars)
 */
export function generateMetaDescription(description: string): string {
  const maxLength = 160;
  if (description.length <= maxLength) {
    return description;
  }
  // Truncate at last complete sentence before maxLength
  const truncated = description.substring(0, maxLength);
  const lastPeriod = truncated.lastIndexOf('.');
  const lastSpace = truncated.lastIndexOf(' ');
  
  if (lastPeriod > maxLength - 20) {
    return truncated.substring(0, lastPeriod + 1);
  }
  if (lastSpace > maxLength - 20) {
    return truncated.substring(0, lastSpace) + '...';
  }
  return truncated + '...';
}

/**
 * Generates canonical URL
 */
export function generateCanonicalUrl(path: string, baseUrl = 'https://luxopenfin.com'): string {
  // Remove trailing slash for consistency
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  const cleanBase = baseUrl.replace(/\/$/, '');
  return `${cleanBase}${cleanPath}`;
}

/**
 * Generates OpenGraph image URL
 */
export function generateOGImage(imagePath?: string, baseUrl = 'https://luxopenfin.com'): string {
  if (imagePath) {
    return imagePath.startsWith('http') ? imagePath : `${baseUrl}${imagePath}`;
  }
  return `${baseUrl}/img/docusaurus-social-card.jpg`;
}

/**
 * Generates robots meta content
 */
export function generateRobotsMeta(noindex = false, nofollow = false): string {
  if (noindex && nofollow) {
    return 'noindex, nofollow';
  }
  if (noindex) {
    return 'noindex, follow';
  }
  if (nofollow) {
    return 'index, nofollow';
  }
  return 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';
}

/**
 * Validates SEO configuration
 */
export function validateSEOConfig(config: SEOConfig): {valid: boolean; errors: string[]} {
  const errors: string[] = [];
  
  if (!config.title || config.title.trim().length === 0) {
    errors.push('Title is required');
  } else if (config.title.length > 60) {
    errors.push(`Title is too long (${config.title.length} chars, max 60 recommended)`);
  }
  
  if (!config.description || config.description.trim().length === 0) {
    errors.push('Description is required');
  } else if (config.description.length < 120) {
    errors.push(`Description is too short (${config.description.length} chars, min 120 recommended)`);
  } else if (config.description.length > 160) {
    errors.push(`Description is too long (${config.description.length} chars, max 160 recommended)`);
  }
  
  return {
    valid: errors.length === 0,
    errors,
  };
}

/**
 * Financial industry specific keywords
 */
export const FINANCIAL_KEYWORDS = [
  'Luxembourg accounting',
  'PCN 2020',
  'VAT compliance',
  'eCDF filing',
  'financial education',
  'SME accounting',
  'Luxembourg tax',
  'regulatory compliance',
  'financial services',
  'RegTech',
  'accounting software',
  'financial reporting',
  'tax compliance',
  'bookkeeping',
  'financial statements',
];

/**
 * Combines base keywords with page-specific keywords
 */
export function combineKeywords(baseKeywords: string[], pageKeywords: string[]): string {
  return [...new Set([...baseKeywords, ...pageKeywords])].join(', ');
}

