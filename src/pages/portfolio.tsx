import React from 'react';

import Head from '@/components/layouts/Head';
import PageLayout from '@/components/layouts/PageLayout';
import Portfolio from '@/components/pages/portfolio';

const PortfolioPage = () => {
  return (
    <PageLayout>
      <Head title="Portfolio"></Head>
      <Portfolio></Portfolio>
    </PageLayout>
  );
};

export default PortfolioPage;
