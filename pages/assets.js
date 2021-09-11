import * as svgComponent from '../components/icons';
import Head from 'next/head';
import layout from 'styles/layout.module.scss'
import styles from 'styles/packages.module.scss';
import nav from 'components/navigation-menu/nav.module.scss'
import icons from 'components/buttons/buttons.module.scss';

export default function Assets() {
  return (
    <div className={styles.container}>
      <Head>
        <title>UJET Packages | UJET</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <h1 className={styles.title}>Hello UJET!</h1>
        <section>
          <button className={`${icons['btn']} ${icons['btn-white']} ${icons['btn-big']}` }><span>Back</span></button>
          <button className={`${icons['btn']} ${icons['btn-orange']} ${icons['btn-big']}` }><span>Continue</span></button>
          <button className={`${icons['btn']} ${icons['btn-blue']} ${icons['btn-big']}` }><span>Buy Now</span></button>
          <button className={`${icons['btn']} ${icons['btn-blue']} ${icons['btn-small']}` }><span>Try Now</span></button>
          <button className={`${icons['btn']} ${icons['btn-skyblue']} ${icons['btn-medium']}` }><span>+ Compare all plans and features</span></button>
        </section>

        <div className={`${nav['grid-col-4']} ${styles['pt-30px']} ${styles['pb-30px']}`}>
            <div className={styles.relative}>
              <span>All Core Channels*</span>
                <span className={icons['tooltip-wrap']}>
                  <span className={icons['tooltip']}>
                          Support for inbound calls over the PSTN as well as outbound calling via the agent dialpad or click-to-call within the CRM.</span>
              </span>
            </div>
          </div>

          <div className={styles.clearfix}><svgComponent.UjetCxLogo/></div>
          <div><svgComponent.IconX/></div>
          <div><svgComponent.IconCheck/></div>
          <div><svgComponent.IconCheckCircle/></div>
          <span className={icons.circle}></span>

          <div className={styles.relative}><span className={icons['radio-btn']}></span></div>

          <div className={styles['table-headline-gray']}>Includes</div>   
          <div className={styles['table-headline-blue']}>Today's Charge</div>
          <div className={layout.grid}>
          <span className={`${styles.number} ${layout['align-center']}`}>1</span> 
        </div>
    </div>
  );
}
