
import Head from 'next/head';
import React, { useEffect } from 'react';
import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css';
import MainLayout from '../layouts/MainLayout';

function MyApp({ Component, pageProps }) {
  // some logical effects to ensure bootstrap is imported.
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  useEffect(() => {
    typeof document !== undefined ? require('bootstrap/dist/js/bootstrap') : null
  }, [])
  return (
  <>
    <Head>
    <meta name='viewport' content='width=device-width, initial-scale=1' />
    </Head>
    {/* main layout act as HOC for components */}
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  </>)
}

export default MyApp
