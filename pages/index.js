import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

import Social from '../components/Social';
import Skills from '../components/Skills';

import client from '../client';
import imageUrlFor from '../utils/imageUrlFor';

const Home = (props) => {
  console.log('props', props);
  return (
    <div className=' w-screen'>
      <Head>
        <title>Avi - Home</title>
        <link rel='icon' href='/favicon.ico' />
        <meta name='author' content='Aravindh Sankaranarayanan' />
        <meta name='author' content='Avi' />
        <meta name='description' content='aravindh.me home page' />
      </Head>

      <div className='w-full flex flex-col justify-start items-center leading-normal h-full '>
        <div className='w-full mt-8 md:mt-16 border-black flex flex-col justify-center'>
          <div className='flex justify-center'>
            <div>
              <img
                src={imageUrlFor(props.authors[0].mainImage).width(240).url()}
                width={'220'}
                className='rounded-full border-3 md:border-8 border-white shadow-profile'
                alt='Avi'
              />
            </div>
          </div>
          <div className='w-full font-SegoeUIRegular text-siteText text-lg md:text-4xl justify-center flex mt-10 '>
            Hello, I'm{' '}
            <span className='text-black'>
              {' '}
              &nbsp;Aravindh 'Avi' Sankaranarayanan
            </span>
          </div>

          <div
            className='w-full font-SegoeUIRegular 
           text-siteText text-lg pl-4 md:text-4xl justify-center flex flex-row mt-8 md:mt-12 '
          >
            I'm a full stack web/ mobile developer currently based out of NY/NJ
            region.
          </div>

          <div
            className='w-full font-SegoeUIRegular 
           text-siteText text-lg md:text-4xl justify-center flex mt-3 '
          >
            Logo was my first programming language.
          </div>
          <div
            className='w-full font-SegoeUIRegular 
           text-siteText text-lg pl-4 md:text-4xl justify-center flex mt-3 '
          >
            I have over a decade of experience in building digital products.
          </div>
          <div
            className='w-full font-SegoeUIRegular 
           text-siteText text-lg pl-4 md:text-4xl justify-center flex mt-10 '
          >
            <a
              href='./lab'
              className='text-blue inline-flex items-center  font-SegoeUIRegular'
            >
              View my lab
              {/* <svg
                className='w-6 h-6 ml-2'
                viewBox='0 0 24 24'
                stroke='currentColor'
                stroke-width='3'
                fill='none'
              >
                <path d='M5 12h14'></path>
                <path d='M12 5l7 7-7 7'></path>
              </svg> */}
            </a>
          </div>
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
