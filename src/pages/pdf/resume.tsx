import React from 'react';

import PDFLayout from '@/components/layouts/PDFLayout';
import Resume from '@/components/pages/resume';

const OriginalResume = () => {
  return (
    <PDFLayout>
      <Resume></Resume>
    </PDFLayout>
  );
};

export default OriginalResume;
