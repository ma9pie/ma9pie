import React from 'react';

import Head from '@/components/layouts/Head';
import PageLayout from '@/components/layouts/PageLayout';
import PDFLayout from '@/components/layouts/PDFLayout';
import Top from '@/components/layouts/Top';
import Portfolio from '@/components/pages/portfolio';

const PortfolioPage = () => {
  return (
    <PageLayout>
      <Head title="Portfolio"></Head>
      <Top
        printNode={
          <PDFLayout>
            <Portfolio></Portfolio>
          </PDFLayout>
        }
      ></Top>
      <Portfolio></Portfolio>
    </PageLayout>
  );
};

export default PortfolioPage;
