import React from 'react';
import Head from 'next/head';
import Main from '@containers/Main';

export default function Home() {
  return (
    <>
      <Head>
        <title>DaniBosna</title>
        <meta name="description" content="Digital Portfolio" />
      </Head>
      <Main />
    </>
  );
}
