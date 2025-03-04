import type { ReactNode } from "react";
import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<"svg">>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: "1️⃣ Get Hired for WordPress Jobs",
    Svg: require("@site/static/img/undraw_interview_yz52.svg").default,
    description: <>💼 Learn how to land WordPress-related jobs.</>,
  },
  {
    title: "2️⃣ Freelancing",
    Svg: require("@site/static/img/undraw_business-deal_nx2n.svg").default,
    description: (
      <>🚀 Discover how to make money by offering WordPress services.</>
    ),
  },
  {
    title: "3️⃣ Selling WordPress Products",
    Svg: require("@site/static/img/undraw_empty-cart_574u.svg").default,
    description: <>🛒 Learn how to build and sell themes, plugins e.t.c</>,
  },
];

function Feature({ title, Svg, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
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
