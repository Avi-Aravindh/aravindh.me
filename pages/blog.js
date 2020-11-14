import React, { Fragment } from 'react';
import Head from 'next/head';

import Layout from '../components/Layout/layout';

const Blog = () => {
  return (
    <Layout>
      <Head>
        <title>Avi - Blog</title>
      </Head>
      <div>Blog</div>
    </Layout>
  );
};

export default Blog;
