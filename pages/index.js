import Head from 'next/head'
import Image from 'next/image'
import icons from '../styles/buttons.module.scss'
import styles from '../styles/packages.module.scss'
import * as svgComponent from '../src/components/icons'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>UJET Packages | UJET</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="robots" content="noindex, nofollow" />
      </Head>

        <h1 className={styles.title}>Hello UJET!</h1>
        <div>
          <button className={`${icons['btn']} ${icons['btn-white']} ${icons['btn-big']}` }><span>Back</span></button>
          <button className={`${icons['btn']} ${icons['btn-orange']} ${icons['btn-big']}` }><span>Continue</span></button>
          <button className={`${icons['btn']} ${icons['btn-blue']} ${icons['btn-big']}` }><span>Buy Now</span></button>
          <button className={`${icons['btn']} ${icons['btn-blue']} ${icons['btn-small']}` }><span>Try Now</span></button>
          <button className={`${icons['btn']} ${icons['btn-skyblue']} ${icons['btn-medium']}` }><span>+ Compare all plans and features</span></button>
        </div>
          <div><svgComponent.UjetCxLogo/></div>
          <div><svgComponent.IconX/></div>
          <div><svgComponent.IconCheck/></div>
          <div><svgComponent.IconCheckCircle/></div>
          <div><svgComponent.IconInfo/></div>
          <span className={icons.circle}></span>

          <div className={styles.relative}><span className={icons['radio-btn']}></span></div>

          <div className={styles['table-headline-gray']}>Includes</div>   
          <div className={styles['table-headline-blue']}>Today's Charge</div>
          <div className={styles.grid}>
          <span className={`${styles.number} ${styles['align-center']}`}>1</span> 

        </div>
    </div>
  )
}
