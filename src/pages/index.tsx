import React from 'react';

import Head from '@/components/layouts/Head';
import PageLayout from '@/components/layouts/PageLayout';
import PDFLayout from '@/components/layouts/PDFLayout';
import Top from '@/components/layouts/Top';
import Resume from '@/components/pages/resume';

const ResumePage = () => {
  return (
    <PageLayout>
      <Head title="Resume"></Head>
      <Top
        printNode={
          <PDFLayout>
            <Resume></Resume>
          </PDFLayout>
        }
      ></Top>
      <Resume></Resume>
    </PageLayout>
  );
};

export default ResumePage;
