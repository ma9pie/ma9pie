import React from 'react';

import { Li, Ul } from '@/components/common/List';
import Text from '@/components/common/Text';
import Container from '@/components/pages/resume/Container';

const Type = () => {
  return (
    <Container>
      <Text.Title>Type</Text.Title>

      <Ul>
        <Li>글쓰기처럼 논리 정연하고 깔끔한 코드 작성을 지향합니다.</Li>
        <Li>
          재사용성과 효율성을 위한 리팩토링에 시간을 많이 투자하는 편입니다.
        </Li>
        <Li>
          제품의 퀄리티와 사용자에게 좋은 경험을 전달하는 것을 중요시합니다.
        </Li>
        <Li>
          새로운 기술에 대해 호기심이 많고, 더 성장하고자 하는 열망이 강합니다.
        </Li>
        <Li>뛰어난 시간 복잡도와 최적화를 갖춘 웹 개발을 추구합니다.</Li>
        <Li>
          상호 존중과 투명성을 바탕으로 동료와의 신뢰를 구축하는 것에 관심이
          많습니다.
        </Li>
      </Ul>
    </Container>
  );
};

export default Type;
