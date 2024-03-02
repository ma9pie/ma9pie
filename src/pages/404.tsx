import React from 'react';
import tw, { styled } from 'twin.macro';

import Head from '@/components/layouts/Head';
import PageLayout from '@/components/layouts/PageLayout';

const NotFound = () => {
  return (
    <PageLayout>
      <Head title="Page Not found"></Head>
      <Container>
        <Text>404</Text>
        <SubText>Not Found</SubText>
      </Container>
    </PageLayout>
  );
};

export default NotFound;

const Container = styled.div`
  ${tw`flex-1 flex flex-col justify-center items-center py-20`};
`;
const Text = styled.div`
  ${tw`font-bold`};
  ${tw`mobile:text-6xl`};
  ${tw`desktop:text-8xl`};
`;
const SubText = styled.div`
  ${tw`font-bold`};
  ${tw`mobile:text-5xl`};
  ${tw`desktop:text-7xl`};
`;
