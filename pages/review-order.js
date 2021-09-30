import Head from "next/head";
import React from "react";
import ButtonFooter from "components/buttons/button-footer";
import NavigationStep from "components/progress-bar/navigation-step";
import TodaysCharge from "components/review-order/todays-charge";
import RecurringCharge from "components/review-order/recurring-charge";
import review from "components/review-order/review-order.module.scss";
import layout from "styles/layout.module.scss";

export default function ReviewOrder() {
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
          <h1 className={layout["page-title"]}>UJET Packages / Review Order</h1>
        </div>
        <section
          className={`${layout.container} ${layout.grid} ${layout["mb-30px"]}`}
        >
          <div className={`${layout.inner} ${layout["narrow-wrap"]}`}>
            <div className={review["table-headline-blue"]}>Today's Charge</div>
            <TodaysCharge />
            <div className={review["table-headline-blue"]}>
              Recurring Chanrge
            </div>
            <RecurringCharge />
          </div>
        </section>
        <ButtonFooter scroll={layout.scroll} />
      </main>
    </React.Fragment>
  );
}
