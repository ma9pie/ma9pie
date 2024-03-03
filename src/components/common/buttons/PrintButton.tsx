import React, { useRef } from 'react';
import { IoPrintSharp } from 'react-icons/io5';
import ReactToPrint from 'react-to-print';
import tw, { styled } from 'twin.macro';

import PDFLayout from '@/components/layouts/PDFLayout';
import Resume from '@/components/pages/resume';

const PrintButton = () => {
  const resumeRef = useRef<HTMLDivElement>(null);

  return (
    <Wrapper>
      <ReactToPrint
        trigger={() => <PrintIcon size={20}></PrintIcon>}
        content={() => resumeRef.current}
      ></ReactToPrint>

      <ContentWrapper>
        <div ref={resumeRef}>
          <PDFLayout>
            <Resume></Resume>
          </PDFLayout>
        </div>
      </ContentWrapper>
    </Wrapper>
  );
};

export default PrintButton;

const Wrapper = styled.div`
  ${tw`relative`};
`;
const ContentWrapper = styled.div`
  ${tw`hidden`};
`;
const PrintIcon = styled(IoPrintSharp)`
  ${tw`cursor-pointer transition-colors duration-200`};
  ${tw`fill-neutral-400`};
  ${tw`hover:fill-neutral-800`};
`;
