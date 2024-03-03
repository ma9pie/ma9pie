import Link from 'next/link';
import React from 'react';
import { SiGithub, SiLinkedin, SiTistory } from 'react-icons/si';
import tw, { styled } from 'twin.macro';

import Flex from '@/components/common/Flex';
import Text from '@/components/common/Text';
import { BLOG_URL, GITHUB_URL, LINKEDIN_URL } from '@/constants';

const Footer = () => {
  return (
    <Wrapper>
      <Text sm neutral500 medium>
        Ⓒ ma9pie. All Rights Reserved.
      </Text>
      <Flex gap={8}>
        <IconWrapper title="github" href={GITHUB_URL} target="_blank">
          <SiGithub size={16}></SiGithub>
        </IconWrapper>
        <IconWrapper title="linked in" href={LINKEDIN_URL} target="_blank">
          <SiLinkedin size={16}></SiLinkedin>
        </IconWrapper>
        <IconWrapper title="tistory blog" href={BLOG_URL} target="_blank">
          <SiTistory size={12}></SiTistory>
        </IconWrapper>
      </Flex>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.div`
  ${tw`fixed bottom-0 flex justify-between items-center w-full h-8 bg-neutral-50 border-t border-solid border-neutral-200`};
  ${tw`mobile:px-4`};
  ${tw`desktop:px-6`};
`;
const IconWrapper = styled(Link)`
  ${tw`flex justify-center items-center w-6 h-6`};
  ${tw`svg:(fill-neutral-500 transition-colors duration-200)`};
  ${tw`svg:hover:fill-neutral-900`};
`;
