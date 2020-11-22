// import '../styles/globals.css'
import '../styles/index.css';
import Layout from '../components/Layout/layout';

function MyApp({ Component, pageProps }) {
  return (
    <Layout className='leading-normal'>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
