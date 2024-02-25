import React from 'react';
import tw, { styled } from 'twin.macro';

import Text from '@/components/common/Text';
import Container from '@/components/pages/resume/Container';

const LIST = [
  '글쓰기처럼 논리 정연하고 깔끔한 코드 작성을 지향합니다.',
  '재사용성과 효율성을 위한 리팩토링에 시간을 많이 투자하는 편입니다.',
  '제품의 퀄리티와 사용자에게 좋은 경험을 전달하는 것을 중요시합니다.',
  '새로운 기술에 대해 호기심이 많고, 더 성장하고자 하는 열망이 강합니다.',
  '뛰어난 시간 복잡도와 최적화를 갖춘 웹 개발을 추구합니다.',
  '상호 존중과 투명성을 바탕으로 동료와의 신뢰를 구축하는 것에 관심이 많습니다.',
];

const Type = () => {
  return (
    <Container>
      <Text.Title>Type</Text.Title>

      <Ul>
        {LIST.map((item, idx) => (
          <Li key={idx}>
            <Text.P>{item}</Text.P>
          </Li>
        ))}
      </Ul>
    </Container>
  );
};

export default Type;

const TextBox = styled.div`
  ${tw``};
`;
const Ul = styled.ul`
  ${tw``};
`;
const Li = styled.li`
  ${tw`text-sm list-disc ml-5`};
  ${tw`desktop:text-2xl`};
`;
