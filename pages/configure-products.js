import Head from "next/head";
import React from "react";
import ButtonFooter from "components/buttons/button-footer";
import NavigationStep from "components/progress-bar/navigation-step";
import Licenses from "components/configure-products/licenses";
import Addons from "components/configure-products/add-ons";
import SectionTitle from "components/configure-products/section-title";
import layout from "styles/layout.module.scss";

export default function ConfigureProducts() {
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
        <div className={`${layout["mb-20px"]} ${layout["align-center"]}`}>
          <h1 className={layout["page-title"]}>
            UJET Packages / Configure Products
          </h1>
        </div>
        <section
          className={`${layout.container} ${layout.grid} ${layout["mb-30px"]}`}
        >
          <div className={layout.inner}>
            <SectionTitle order="1" title="How many licenses do you need?" />
            <Licenses />
            <SectionTitle order="2" title="Choose Add-Ons ( Optional )" />
            <Addons />
          </div>
        </section>

        <ButtonFooter />
      </main>
    </React.Fragment>
  );
}
