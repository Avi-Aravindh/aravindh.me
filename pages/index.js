import Head from 'next/head';

import client from '../client';
import imageUrlFor from '../utils/imageUrlFor';

const Home = (props) => {
  const skillTags = [
    'React',
    'React Hooks',
    'Material-UI',
    'React Native',
    'Ag-Grid',
    'Highcharts',
    'Node JS',
    'Postgres',
    'AWS Lambda',
    'AWS API Gateway',
    'AWS DynamoDB',
  ];
  return (
    <div className='w-screen'>
      <Head>
        <title>Avi - Home</title>
        <link rel='icon' href='/favicon.ico' />
        <meta name='author' content='Aravindh Sankaranarayanan' />
        <meta name='author' content='Avi' />
        <meta name='description' content='aravindh.me home page' />
      </Head>

      <div className='w-full flex flex-col justify-start items-center leading-normal  '>
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
          <div className='flex justify-start flex-col w-full '>
            <div className='text-center justify-center font-SegoeUIRegular text-siteText text-lg md:text-2xl lg:text-3xl md:justify-center flex mt-10 '>
              Hello, I'm
              <span className='text-black'>
                &nbsp;Aravindh 'Avi' Sankaranarayanan
              </span>
            </div>
          </div>
          <div className='flex justify-start flex-col '>
            <div>
              <div
                className='text-center justify-center font-SegoeUIRegular
               text-siteText text-lg md:text-2xl lg:text-3xl  md:justify-center flex flex-row mt-8 md:mt-12 '
              >
                I'm a full stack developer with a front-end focus
              </div>

              <div
                className='text-center justify-center font-SegoeUIRegular 
           text-siteText text-lg md:text-2xl lg:text-3xl md:justify-center flex mt-3 '
              >
                Currently based out of greater New York area
              </div>
            </div>
          </div>
          <div className='flex justify-center w-full mt-16'>
            <div className='flex w-4/5 md:w-3/5 flex-wrap justify-center items-stretch'>
              {skillTags.map((tag) => (
                <div className='mr-5 rounded flex justify-center items-center'>
                  <div className='text-blueText mr-5 font-bold font-SegoeUIRegular mt-5 text-md md:text-md lg:text-xl'>
                    {tag}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div
            className='w-full font-SegoeUIRegular 
           text-siteText text-lg md:text-4xl justify-center flex mt-16 '
          >
            <a
              href='./lab'
              className='text-blue hover:text-opacity-75 inline-flex items-center  font-SegoeUIRegular text-lg md:text-2xl lg:text-3xl '
            >
              <div className='flex items-center text-md md:text-xl lg:text-2xl'>
                View my lab
                <svg
                  className='w-5 h-5 ml-1 mt-1 md:mt-2'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  strokeWidth='3'
                  fill='none'
                >
                  <path d='M5 12h14'></path>
                  <path d='M12 5l7 7-7 7'></path>
                </svg>
              </div>
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
