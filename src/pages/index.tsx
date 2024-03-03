import React from 'react';

import Head from '@/components/layouts/Head';
import PageLayout from '@/components/layouts/PageLayout';
import Top from '@/components/layouts/Top';
import Resume from '@/components/pages/resume';

const ResumePage = () => {
  return (
    <PageLayout>
      <Head title="Resume"></Head>
      <Top></Top>
      <Resume></Resume>
    </PageLayout>
  );
};

export default ResumePage;
