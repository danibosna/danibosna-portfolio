import '@styles/globals.css';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Script from 'next/script';
import MenuContext from '@context/MenuContext';
import useViewMenu from '@hooks/useViewMenu';
import MainLayout from 'layout/MainLayout';
import * as gtag from '@utils/gtag';

function MyApp({ Component, pageProps, titleHead, descriptionHead }) {
  const viewMenu = useViewMenu();

  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    router.events.on('hashChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
      router.events.off('hashChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <title>{titleHead}</title>
        <meta name="description" content={descriptionHead} />
      </Head>
      <Script async strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`} />
      <Script
        async
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
      <Script src="https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1" />
      <MenuContext.Provider value={viewMenu}>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </MenuContext.Provider>
    </>
  );
}
MyApp.defaultProps = {
  titleHead: 'DaniBosna',
  descriptionHead: 'Digital Portfolio',
};

export default MyApp;
