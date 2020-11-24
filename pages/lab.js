import React, { Fragment } from 'react';
import Head from 'next/head';

import Post from '../components/Post';
import client from '../client';

const Lab = ({ projects }) => {
  console.log('lab', projects);
  return (
    <Fragment>
      <Head>
        <meta name='description' content='aravindh.me lab project' />
        <title>Avi - Work</title>
      </Head>
      <div className='w-full flex flex-row flex-wrap justify-center items-start '>
        {/* <div className='w-4/5 md:w-3/5 mt-8 flex justify-center flex-row flex-wrap'>
          <div className='filter backdrop-brightness w-full font-montserrat text-md md:text-xl justify-center'>
            A collection of things I build out of my own interest. All of the
            work I do in my day job is NDA restricted.
          </div>
          <div className='w-full font-montserrat mt-5 text-md md:text-xl'>
            If you would like to discuss more about my experience, reach me at{' '}
            <span className='text-blue-700'>
              <a href='mailto:avi@aravindh.me' target='_blank'>
                avi@aravindh.me
              </a>
            </span>
          </div>
        </div>
        <div className='w-full mt-8 md:flex md:flex-wrap md:w-3/5 md:justify-center'>
          {projects.map((project, index) => (
            <Post {...project} index={index} />
          ))}
        </div> */}
      </div>
    </Fragment>
  );
};

export default Lab;

export async function getServerSideProps() {
  const projects = await client.fetch(
    `*[_type=="project"]{title, description, tags, screenshot, buttons}`
  );
  return { props: { projects } };
}
