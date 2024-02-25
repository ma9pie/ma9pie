import React from 'react';
import tw, { styled } from 'twin.macro';

import Text from '@/components/common/Text';

const Footer = () => {
  return (
    <Wrapper>
      <Text sm neutral500 medium>
        Ⓒ2024. ma9pie. All Rights Reserved.
      </Text>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.div`
  ${tw`fixed bottom-0 flex items-center w-full h-8 bg-neutral-50 border-t border-solid border-neutral-200`};
  ${tw`mobile:px-4`};
  ${tw`desktop:px-6`};
`;
