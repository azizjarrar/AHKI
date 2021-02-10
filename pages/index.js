import Head from 'next/head'
import styles from '../styles/Home.module.scss'
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>AHKI</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="social media websites where people can talk about certain subjects that happen in daily life"></meta>
        <meta name="keywords" content="speak, talk, subjict"></meta>
      </Head>
    </div>
  )
}
