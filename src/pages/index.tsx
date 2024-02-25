import React from 'react';

import Head from '@/components/layouts/Head';
import PageLayout from '@/components/layouts/PageLayout';
import Resume from '@/components/pages/resume';

const ResumePage = () => {
  return (
    <PageLayout>
      <Head title="Resume"></Head>
      <Resume></Resume>
    </PageLayout>
  );
};

export default ResumePage;
