import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Modal from '@containers/Modal';
import { useRouter } from 'next/router';

export default function Post() {
  const router = useRouter();
  const [post, setPost] = useState();

  useEffect(() => {
    const { id } = router.query;
    if (!router?.isReady) return;
    async function getPost(id) {
      const response = await fetch();
      const data = await response.json();
      setPost(data);
    }
    getPost(id);
  }, [router?.isReady]);

  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>
      <Modal post={post} />
    </>
  );
}
