import Link from 'next/link';
import React from 'react';
import tw, { styled } from 'twin.macro';

import Container from '@/components/pages/resume/Container';
import { BLOG_URL, EMAIL, GITHUB_URL, PHONE_NUMBER } from '@/constants';
import { InfoType } from '@/types';

const INFO = [
  {
    type: InfoType.Phone,
    value: PHONE_NUMBER,
  },
  {
    type: InfoType.Email,
    value: EMAIL,
  },
  {
    type: InfoType.Github,
    value: GITHUB_URL,
    target: '_blank',
  },
  {
    type: InfoType.Blog,
    value: BLOG_URL,
    target: '_blank',
  },
];

const Info = () => {
  const convertHrefByInfoType = (type: InfoType, value: string) => {
    switch (type) {
      case InfoType.Phone:
        return `tel:${value}`;
      case InfoType.Email:
        return `mailto:${value}`;
      default:
        return value;
    }
  };

  return (
    <Container>
      <div>
        <Title>안녕하세요.</Title>
        <Title>Frontend Developer</Title>
        <Title>김준영입니다.</Title>
      </div>
      <InfoBox>
        {INFO.map(({ type, value, target }) => (
          <Row key={type}>
            <Text>{type}</Text>
            <Link href={convertHrefByInfoType(type, value)} target={target}>
              <Text>{value}</Text>
            </Link>
          </Row>
        ))}
      </InfoBox>
    </Container>
  );
};

export default Info;

const Title = styled.h1`
  ${tw`font-semibold !leading-tight`};
  ${tw`mobile:text-3xl`};
  ${tw`desktop:text-6xl`};
`;
const InfoBox = styled.div`
  ${tw`flex flex-col`};
  ${tw`mobile:gap-1`};
  ${tw`desktop:gap-2`};
  a {
    ${tw`underline underline-offset-[6px] decoration-neutral-200 transition-colors duration-300`};
    ${tw`hover:decoration-neutral-400`};
  }
`;
const Row = styled.div`
  ${tw`flex`};
  ${tw`mobile:gap-2`};
  ${tw`desktop:gap-4`};
  & p:nth-of-type(1) {
    ${tw`mobile:min-w-16`};
    ${tw`desktop:min-w-24`};
  }
`;
const Text = styled.p`
  ${tw`mobile:text-sm break-all`};
  ${tw`desktop:text-lg`};
`;
