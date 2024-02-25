import React from 'react';

import Head from '@/components/layouts/Head';
import Layout from '@/components/layouts/Layout';
import Portfolio from '@/components/pages/Portfolio';

const PortfolioPage = () => {
  return (
    <Layout>
      <Head title="Portfolio"></Head>
      <Portfolio></Portfolio>
    </Layout>
  );
};

export default PortfolioPage;
