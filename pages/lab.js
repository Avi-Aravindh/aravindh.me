import React, { Fragment } from 'react';

import Head from 'next/head';

import client from '../client';
import Post from '../components/Post';

const Lab = ({ projects }) => {
  return (
    <Fragment>
      <Head>
        <meta name='description' content='aravindh.me lab project' />
        <title>Avi - Lab</title>
      </Head>
      <div className='w-full flex flex-row flex-wrap justify-center items-start '>
        <div className='w-full border mt-2  flex justify-center flex-col '>
          <div
            className='w-full md:w-3/5 font-SegoeUIBold text-4xl md:text-10xl 
          uppercase text-watermarkText opacity-40 flex justify-center'
          >
            Lab
          </div>

          <div className='w-full flex justify-center'>
            <div
              className='-mt-6 md:-mt-20 w-4/5 md:w-2/5 bg-white p-5 md:p-6 flex justify-center 
            items-center backdropFilter-blur opacity-90 rounded-md bg-opacity-75 bg-clip-padding shadow-xl'
            >
              <div className='w-5/6 text-siteText font-SegoeUIRegular text-md md:text-2xl'>
                A collection of things I build out of my own interest. All of
                the work I do in my day job is NDA restricted. <br />
                <br />
                If you would like to discuss more about my experience, reach me
                at &nbsp;
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
    `*[_type=="project"] | order(order_id asc){title, description, tags, screenshot, buttons, order_id}`
  );
  return { props: { projects } };
}
