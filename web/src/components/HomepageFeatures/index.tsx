import type {ReactNode} from 'react';
import clsx from 'clsx';
import Translate, {translate} from '@docusaurus/Translate';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: translate({id: 'home.feature.content.title', message: 'Luxembourg-first content'}),
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <Translate id="home.feature.content.body">
        PCN 2020, VAT, eCDF, and FAIA guidance woven through every chapter so Luxembourg SMEs can apply accounting principles
        immediately.
      </Translate>
    ),
  },
  {
    title: translate({id: 'home.feature.practice.title', message: 'Interactive practice'}),
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <Translate id="home.feature.practice.body">
        From VAT calculators to journal-entry validators, the React components make every topic clickable, coachable, and ready for
        classroom use.
      </Translate>
    ),
  },
  {
    title: translate({id: 'home.feature.platform.title', message: 'Open education platform'}),
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <Translate id="home.feature.platform.body">
        Built with open-source tools and published under CC BY 4.0 so educators, students, and practitioners can collaborate freely.
      </Translate>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg 
          className={styles.featureSvg} 
          role="img" 
          aria-label={title}
        />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
