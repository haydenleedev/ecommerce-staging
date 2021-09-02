import Head from 'next/head';
import styles from 'styles/packages.module.scss';

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
    </div>
  );
}
