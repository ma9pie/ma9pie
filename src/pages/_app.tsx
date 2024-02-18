import '@/styles/globals.css';

import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import { initializeGA, trackPageView } from '@/utils';

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  // Init GA
  useEffect(() => {
    initializeGA();
  }, []);

  // 페이지 view 추적
  useEffect(() => {
    trackPageView(router.pathname);
  }, [router.pathname]);

  return <Component {...pageProps}></Component>;
};

export default App;
