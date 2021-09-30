import ContactForm from "components/form/form";
import NavigationMenu from "components/navigation-menu/navigation-menu";
import Head from "next/head";
import React from "react";
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
      <NavigationMenu />

      <main role="main" className={`${layout.main} ${styles["m-0px"]}`}>
        <div className={`${layout["mb-20px"]} ${layout["align-center"]}`}>
          <h1 className={layout["page-title"]}>
            UJET Packages / Contact Information
          </h1>
        </div>
        <section className={styles.container}>
          <div className={`${layout.container} ${layout.grid}`}>
            <div className={layout.row}>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
    </React.Fragment>
  );
}
