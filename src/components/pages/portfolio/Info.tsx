import React from 'react';
import tw, { styled } from 'twin.macro';

import Flex from '@/components/common/Flex';
import { EMAIL, NAME, PHONE_NUMBER } from '@/constants';
import { InfoType, Position } from '@/types';

const INFO = [
  {
    type: InfoType.Name,
    value: NAME,
  },
  {
    type: InfoType.Position,
    value: Position.Frontend,
  },
  {
    type: InfoType.Phone,
    value: PHONE_NUMBER,
  },
  {
    type: InfoType.Email,
    value: EMAIL,
  },
];

const Info = () => {
  return (
    <Flex col gap={4}>
      {INFO.map(({ type, value }) => (
        <Row key={type}>
          <Text>{type}</Text>
          <Text>{value}</Text>
        </Row>
      ))}
    </Flex>
  );
};

export default Info;

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
