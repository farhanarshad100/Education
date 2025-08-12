import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from '@/redux/store'; // adjust path if needed

import Layout from '@/Component/common/Layout';
import '../styles/globals.css'; // Tailwind CSS or global styles

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}

export default MyApp;
