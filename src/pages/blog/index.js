import React from 'react';
import Head from 'next/head';
import Articles from '@containers/Articles';

const Blog = () => {
  return (
    <>
      <Head>
        <title>Blog.</title>
      </Head>
      <Articles />
    </>
  );
};

export default Blog;
