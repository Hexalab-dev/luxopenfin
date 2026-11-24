import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Translate, {translate} from '@docusaurus/Translate';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">
          <Translate id="home.tagline">{siteConfig.tagline}</Translate>
        </p>
        <div className={styles.buttons}>
          <Link className="button button--secondary button--lg" to="/volume1/chapter-01/intro">
            <Translate id="home.cta.volume">Start Volume 1</Translate>
          </Link>
          <Link className="button button--outline button--lg margin-left--sm" to="/tools">
            <Translate id="home.cta.tools">Explore Tools</Translate>
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const pageDescription = translate({
    id: 'home.meta.description',
    message: 'An open accounting textbook tailored to Luxembourg SMEs, including PCN, VAT, eCDF filing, and compliance guidance. Interactive tools and educational resources for financial professionals.',
  });

  return (
    <Layout
      title="Financial & Regulatory Compliance Platform for Luxembourg SMEs"
      description={pageDescription}
      keywords="Luxembourg accounting, PCN 2020, VAT compliance, eCDF filing, financial education, SME accounting, Luxembourg tax, regulatory compliance, financial services, RegTech">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
