import React, { Fragment } from 'react';
import Head from 'next/head';

import Post from '../components/Post';
import client from '../client';

const Lab = ({ projects }) => {
  return (
    <Fragment>
      <Head>
        <meta name='description' content='aravindh.me lab project' />
        <title>Avi - Work</title>
      </Head>
      <div className='w-full flex flex-row flex-wrap justify-center items-start '>
        <div className='w-full border mt-2 border-black'>
          <div
            className='ml-md1 md:ml-md1 font-SegoeUIBold text-4xl md:text-10xl 
          uppercase text-watermarkText opacity-20'
          >
            Lab
          </div>
          <div className='w-4/6 md:w-3/6 -mt-6 md:-mt-20 ml-twenty md:ml-twenty bg-white p-5 md:p-6 flex justify-center items-center'>
            <div className='w-5/6 text-siteText font-SegoeUIRegular text-md md:text-2xl'>
              A collection of things I build out of my own interest. All of the
              work I do in my day job is NDA restricted. <br />
              <br />
              If you would like to discuss more about my experience, reach me at
              &nbsp;
              <a
                href='mailto:avi@aravindh.me'
                target='_blank'
                className='text-blue'
              >
                avi@aravindh.me
              </a>
            </div>
          </div>
        </div>
        <div className='w-full mt-8 md:flex md:flex-wrap md:w-3/5 md:justify-center'>
          {projects.map((project, index) => (
            <Post {...project} index={index} />
          ))}
        </div>
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
