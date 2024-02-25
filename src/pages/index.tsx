import React from 'react';

import Head from '@/components/layouts/Head';
import Layout from '@/components/layouts/Layout';
import Resume from '@/components/pages/Resume';

const ResumePage = () => {
  return (
    <Layout>
      <Head title="Resume"></Head>
      <Resume></Resume>
    </Layout>
  );
};

export default ResumePage;
