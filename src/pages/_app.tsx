import '@/styles/globals.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { DefaultSeo } from 'next-seo';
import { useEffect } from 'react';

import { initializeGA, trackPageView } from '@/utils';

import seoConfig from '../../next-seo.config';

const queryClient = new QueryClient();
const isProduction = process.env.NEXT_PUBLIC_MODE === 'production';

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

  // Production 콘솔 제거
  useEffect(() => {
    if (isProduction) {
      console.log = () => {};
    }
  }, []);

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <DefaultSeo {...seoConfig}></DefaultSeo>
        <Component {...pageProps}></Component>
      </QueryClientProvider>
    </>
  );
};

export default App;
