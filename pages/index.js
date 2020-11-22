import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

import Social from '../components/Social/social';
import client from '../client';
import imageUrlFor from '../utils/imageUrlFor';

const Home = (props) => {
  console.log('props', props);
  return (
    <div className='bg-white h-screen w-screen'>
      <Head>
        <title>Avi - Home</title>
        <link rel='icon' href='/favicon.ico' />
        <meta name='author' content='Aravindh Sankaranarayanan' />
        <meta name='author' content='Avi' />
        <meta name='description' content='aravindh.me home page' />
      </Head>

      <div className='w-full flex flex-col justify-center items-center'>
        <div className='w-4/5 mt-8 md:mt-16 border-black flex flex-col justify-center'>
          <div className='flex justify-center'>
            <div>
              <img
                // src='/avi.jpeg'
                src={imageUrlFor(props.authors[0].mainImage).width(100).url()}
                width={100}
                height={100}
                className='rounded-full shadow-md'
                alt='Avi'
              />
            </div>
          </div>
          <div className='font-montserratBold text-xl md:text-3xl flex justify-center mt-8  '>
            Aravindh 'Avi'
          </div>
          <div className='font-montserratBold text-xl md:text-3xl flex justify-center mt-1  '>
            Sankaranarayanan
          </div>

          <div className='font-montserrat w-full text-md md:text-2xl flex items-center flex-col justify-center mt-4  '>
            <div className='w-5/5 md:w-3/6 justify-center flex text-center tracking-wide'>
              Full stack web developer
            </div>
            <div className='w-4/5 md:w-3/6 justify-center flex text-center mt-2 tracking-wide'>
              <a
                className='text-blue-800'
                href='https://en.wikipedia.org/wiki/Logo_(programming_language)'
                target='_blank'
              >
                Logo was my first programming language
              </a>
            </div>
            <div className='w-6/7 md:w-3/6 justify-center flex text-center mt-2 tracking-wide'>
              Over a decade of experience in building products
            </div>

            <div className='w-6/7 md:w-2/5 justify-center flex text-center mt-2 tracking-wide'>
              Currently based out of NY/NJ region
            </div>
          </div>
        </div>
        <div className='w-full justify-center flex mt-8 '>
          <Social />
        </div>
      </div>
    </div>
  );
};

Home.getInitialProps = async (context) => {
  const authors = await client.fetch(`*[_type=="siteContent"]`);
  return { authors: authors };
};
export default Home;
