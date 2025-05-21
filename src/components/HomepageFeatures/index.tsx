import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Resolva os problemas',
    Svg: require('@site/static/img/cube.svg').default,
    description: (
      <>
        Utilizando as soluções Puzzle você atingirá seus objetivos rapidamente.
      </>
    ),
  },
  {
    title: 'Foco no que importa',
    Svg: require('@site/static/img/laptop.svg').default,
    description: (
      <>
        Resolva a raiz do problemas rapidamente e aproveite o tempo restante para produzir.
      </>
    ),
  },
  {
    title: 'Ideias brilhantes',
    Svg: require('@site/static/img/idea.svg').default,
    description: (
      <>
        Tire do papel as suas idéias e crie uma vantagem competitiva no mercado.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
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
    <section className={styles.features} id="features">
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
