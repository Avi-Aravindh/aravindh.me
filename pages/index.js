import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

import Layout from '../components/Layout/layout';

export default function Home() {
  return (
    // <div className='bg-gray-100 h-screen w-screen'>
    <div className='bg-gray-100 h-screen w-screen'>
      <Head>
        <title>Avi - Home</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {/* <Layout> */}
      <div className='w-50 h-50 bg-black'>
        <div className='w-50 h-50 bg-black'>Text</div>
        <footer className={styles.footer}></footer>
      </div>
      {/* </Layout> */}
    </div>
  );
}
