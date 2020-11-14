import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

import Layout from '../components/Layout/layout';

export default function Home() {
  return (
    <div className='bg-gray-100 h-screen w-screen'>
      <Head>
        <title>Avi - Home</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Layout></Layout>

      <footer className={styles.footer}></footer>
    </div>
  );
}
