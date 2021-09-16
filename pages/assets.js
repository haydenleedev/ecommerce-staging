import * as svgComponent from '../components/icons';
import Head from 'next/head';
import Button from 'components/buttons/button'
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
        <Button color='btn-white' size='btn-big' text='Back' />
        <Button color='btn-orange' size='btn-big' text='Continue' />
        <Button color='btn-blue' size='btn-big' text='Buy Now' />
        <Button color='btn-blue' size='btn-small' text='Try Now' />
        <Button color='btn-skyblue' size='btn-medium' text='+ Compare all plans and features' />
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
