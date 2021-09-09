import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import * as svgComponent from 'components/icons'
import NavigationMenu from 'components/navigation-menu'
import ContactForm from 'components/form'
import layout from 'styles/layout.module.scss'
import nav from 'styles/nav.module.scss'
import icons from 'styles/buttons.module.scss';
import styles from 'styles/packages.module.scss'

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

    <main role="main" className={layout.main}>
        <section  className={styles.container}>
            <div className={`${layout.container} ${layout.grid}`}>
                <div className={layout.row}>
                    <ContactForm />
                </div>
            </div>
        </section>
    </main>
  </React.Fragment>
  )
}
  