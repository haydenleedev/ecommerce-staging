import Head from "next/head";
import React from "react";
import ButtonFooter from "components/buttons/button-footer";
import NavigationStep from "components/progress-bar/navigation-step";
import SubscriptionCycle from "components/subscription-cycle/subscription-cycle-wrapper";
import Implementation from "components/implementation-services/implementation-wrapper";
import layout from "styles/layout.module.scss";

export default function Subscription() {
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
            UJET Packages / Subscription Cycle
          </h1>
        </div>
        <section
          className={`${layout.container} ${layout.grid} ${layout["mb-30px"]}`}
        >
          <div className={layout.inner}>
            <SubscriptionCycle />
            <Implementation />
          </div>
        </section>
        <ButtonFooter scroll={layout.scroll} />
      </main>
    </React.Fragment>
  );
}
