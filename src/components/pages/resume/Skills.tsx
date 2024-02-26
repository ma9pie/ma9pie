import React from 'react';

import Flex from '@/components/common/Flex';
import { Li, Ul } from '@/components/common/List';
import Text from '@/components/common/Text';
import Container from '@/components/pages/resume/Container';

const Skills = () => {
  return (
    <Container>
      <Text.Title>Skills</Text.Title>

      <Flex col gap={16}>
        <Text.SubTitle>Overall</Text.SubTitle>
        <Ul>
          <Li>서비스 런칭 경험이 있습니다.</Li>
          <Li>Next.js 사용에 익숙합니다.</Li>
          <Li>Styled component, Tailwindcss 방식의 스타일링을 선호합니다.</Li>
          <Li>Javascript ES6+ 와 Typescript 사용이 가능합니다.</Li>
          <Li>
            페이지 로드 시간과 사용자 이탈률 사이의 관계를 알고 웹 성능 최적화
            경험이 있습니다.
            <Ul>
              <Li>
                리렌더링 최적화(React.memo, useMemo, useCallback, React-query)
              </Li>
              <Li>
                성능 개선(Throttling, Debouncing, List virtualization, Code
                splitting)
              </Li>
              <Li>비동기 처리 최적화를 통한 로드 시간 단축</Li>
            </Ul>
          </Li>
          <Li>모바일 웹뷰를 위한 반응형 페이지 개발 경험이 있습니다.</Li>
          <Li>
            Chrome뿐만 아니라 Safari, Firefox와 같은 다양한 브라우저의 호환성을
            고려하여 개발한 경험이 있습니다.
          </Li>
          <Li>
            동료 평가로부터 작업량이 많고 이슈 대응이 빠르며, 프로덕트 오너쉽이
            크다는 평을 많이 받았습니다
          </Li>
        </Ul>
      </Flex>

      <Flex col gap={16}>
        <Text.SubTitle>Communication</Text.SubTitle>
        <Ul>
          <Li>
            할당된 업무만 하는 것이 아닌 필요한 기능이나 디자인에 관련하여
            적극적으로 아이디어를 제시하는 편입니다.
          </Li>
          <Li>
            건설적인 방식으로 피드백을 주고받을 수 있으며, 제품의 퀄리티를
            향상하기 위해서 피드백을 받아들일 준비가 항상 되어있습니다.
          </Li>
          <Li>
            개발자가 아닌 사람들과 효과적으로 소통하기 위해 의미를 간결하고
            구체적으로 전달하며, 이해를 돕기 위해 종종 예시를 제공합니다.
          </Li>
        </Ul>
      </Flex>

      <Flex col gap={16}>
        <Text.SubTitle>Tech Stack</Text.SubTitle>
        <Ul>
          <Li>Next.js, React, Typescript</Li>
          <Li>HTML, CSS, Javacript</Li>
          <Li>Redux, Recoil, Jotai</Li>
          <Li>Styled component, Emotion, Tailwind CSS, Sass</Li>
          <Li>React-query, Axios, Websoket</Li>
          <Li>Jest</Li>
        </Ul>
      </Flex>
    </Container>
  );
};

export default Skills;
