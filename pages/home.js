import Head from 'next/head'
import Image from 'next/image'
import React from 'react'
import NavigationStep from 'components/navigation-step'
import ProductFeatures from 'components/features';
import FreeTrial from 'components/free-trial';
import ComparisonChart from 'components/comparison-chart';
import ButtonFooter from 'components/button-footer';
import layout from 'styles/layout.module.scss'
import icons from 'styles/buttons.module.scss';
import styles from 'styles/packages.module.scss';
import nav from 'styles/nav.module.scss'

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

    <main role="main" >
        <div className={`${layout.container} ${layout.grid} ${layout['align-center']}`}>
            <h1>UJET Packages</h1>
        </div>
        <section>
            <div className={`${layout.container} ${layout.grid} ${layout['align-center']} ${styles['mb-10px']}`}>
                 <div className={layout.row}>
                    <div className={`${layout.col}`}>
                        <div className={`${layout.inner} ${layout.selected}`}>
                        <FreeTrial />
                        <span className={icons.cta}>Get started for free -&gt; </span>
                        </div>
                    </div>
                 </div>
            </div>
        </section>
        
        <section>
            <div className={`${layout.container} ${layout.grid} ${layout['align-center']}`}>
                <div className={layout.row}>
                    <div className={`${layout.col} ${layout['col-4']}`}>
                        <div className={layout.inner}>
                            <h2 className={styles['card-title']}>Basic</h2>
                            <p className={`${styles.pricing} ${styles['pb-20px']}`}>$10</p>

                            <div className={icons['b-divider']}>
                                <button className={`${icons['btn']} ${icons['btn-blue']} ${icons['btn-big']}` }><span>Buy Now</span></button>
                            </div>
                             <ProductFeatures/>
                            
                        </div>
                    </div>
                    <div className={`${layout.col} ${layout['col-4']}`}>
                        <div className={layout.inner}>
                            <h2 className={styles['card-title']}>Pro</h2>
                        </div>
                    </div>
                    <div className={`${layout.col} ${layout['col-4']}`}>
                    <span className={styles['flag-orange']}>Most popular</span>
                        <div className={`${layout.inner} ${layout.selected}`}>
                            <h2 className={styles['card-title']}>Enterprise</h2>
                        </div>
                    </div>
                    <div className={`${layout.col} ${layout['col-4']}`}>
                        <div className={layout.inner}>
                            <h2 className={styles['card-title']}>Digital</h2>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section>
        <div className={`${layout.container} ${styles['pt-30px']} ${layout['align-center']}`}>
            <button className={`${icons['btn']} ${icons['btn-skyblue']} ${icons['btn-medium']}` }><span>+ Compare all plans and features</span></button>
        </div>
        <div className={layout['open-container']}>
            <span className={`${layout.triangle} ${layout['align-center']}`}></span>
                <div className={`${layout.wrap} ${layout.grid} ${layout['align-center']}`}>
                    <div className={layout.row}>
                        <ComparisonChart/>
                    </div>
                </div>
            </div>
        </section>
        <ButtonFooter/>
    </main>
  </React.Fragment>
  )
}
  