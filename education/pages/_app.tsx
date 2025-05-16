// src/pages/_app.js


import Layout from '@/Component/common/Layout';
import '../styles/globals.css'; // Tailwind CSS or global styles

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
