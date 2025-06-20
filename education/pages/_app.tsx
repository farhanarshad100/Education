// src/pages/_app.js
import type { AppProps } from 'next/app';

import Layout from '@/Component/common/Layout';
import '../styles/globals.css'; // Tailwind CSS or global styles


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
