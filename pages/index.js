import Head from "next/head";
import React from "react";
import Button from "components/buttons/button";
import NavigationStep from "components/progress-bar/navigation-step";
import PackageTitles from "components/packages/package-title";
import ProductFeatures from "components/packages/features";
import FreeTrial from "components/free-trial/free-trial";
import ComparisonChart from "components/comparison-chart/comparison-chart";
import ButtonFooter from "components/buttons/button-footer";
import layout from "styles/layout.module.scss";
import styles from "components/packages/packages.module.scss";

export default function Home() {
  return (
    <React.Fragment>
      <Head>
        <title>UJET Packages | UJET</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <NavigationStep />

      <main role="main">
        <div
          className={`${layout.container} ${layout.grid} ${layout["align-center"]}`}
        >
          <h1 className={layout["page-title"]}>UJET Packages</h1>
        </div>

        <section>
          <div
            className={`${layout.container} ${layout.grid} ${layout["align-center"]} ${styles["mb-10px"]}`}
          >
            <div className={layout.row}>
              <div className={`${layout.col}`}>
                <div className={`${layout.inner} ${layout.selected}`}>
                  <FreeTrial />
                  <span className={styles.cta}>
                    Get started for free -&gt;{" "}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div
            className={`${layout.container} ${layout.grid} ${layout["align-center"]}`}
          >
            <div className={layout.row}>
              <div className={`${layout.col} ${layout["col-4"]}`}>
                <div className={`${layout.inner} ${layout["pb-0"]}`}>
                  <PackageTitles title="Basic" price="$69" />

                  <div className={styles["b-divider"]}>
                    <Button color="btn-blue" size="btn-big" text="Buy Now" />
                  </div>
                  <ProductFeatures productId="accordion-state-basic" />
                </div>
              </div>

              <div className={`${layout.col} ${layout["col-4"]}`}>
                <div className={`${layout.inner} ${layout["pb-0"]}`}>
                  <PackageTitles title="Pro" price="$99" />

                  <div className={styles["b-divider"]}>
                    <Button color="btn-blue" size="btn-big" text="Buy Now" />
                  </div>
                  <ProductFeatures productId="accordion-state-pro" />
                </div>
              </div>

              <div className={`${layout.col} ${layout["col-4"]}`}>
                <span className={styles["flag-orange"]}>Most popular</span>
                <div className={`${layout.inner} ${layout["pb-0"]}`}>
                  <PackageTitles title="Enterprise" price="$120" />

                  <div className={styles["b-divider"]}>
                    <Button color="btn-blue" size="btn-big" text="Buy Now" />
                  </div>
                  <ProductFeatures productId="accordion-state-enterprise" />
                </div>
              </div>

              <div className={`${layout.col} ${layout["col-4"]}`}>
                <div className={`${layout.inner} ${layout["pb-0"]}`}>
                  <PackageTitles title="Basic" price="$69" />

                  <div className={styles["b-divider"]}>
                    <Button color="btn-blue" size="btn-big" text="Digital" />
                  </div>
                  <ProductFeatures productId="accordion-state-digital" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div
            className={`${layout.container} ${styles["pt-30px"]} ${layout["align-center"]}`}
          >
            <Button
              color="btn-skyblue"
              size="btn-medium"
              text="+ Compare all plans and features"
            />
          </div>
          <div className={layout["open-container"]}>
            <span
              className={`${layout.triangle} ${layout["align-center"]}`}
            ></span>
            <div
              className={`${layout.wrap} ${layout.grid} ${layout["align-center"]}`}
            >
              <div className={layout.row}>
                <ComparisonChart />
              </div>
            </div>
          </div>
        </section>
        <ButtonFooter scroll={layout.scroll} />
      </main>
    </React.Fragment>
  );
}
