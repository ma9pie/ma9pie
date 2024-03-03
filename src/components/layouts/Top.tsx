import React from 'react';
import tw, { styled } from 'twin.macro';

import PrintButton from '@/components/common/buttons/PrintButton';
import Text from '@/components/common/Text';
import useCommit from '@/hooks/useCommit';

const Top = () => {
  const { lasCommitTime } = useCommit();

  return (
    <Wrapper>
      <Text sm neutral500>
        {lasCommitTime || '-'}
      </Text>
      <PrintButton></PrintButton>
    </Wrapper>
  );
};

export default Top;

const Wrapper = styled.div`
  ${tw`flex justify-end items-center gap-2`};
`;
