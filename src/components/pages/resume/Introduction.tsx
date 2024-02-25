import React from 'react';
import tw, { styled } from 'twin.macro';

import Text from '@/components/common/Text';

const Introduction = () => {
  return (
    <Wrapper>
      <Text.Title>Introduction</Text.Title>

      <div>
        <Text.P>
          안녕하세요! 곧 3년 차가 되어가는 Frontend Developer 김준영이라고
          합니다!
        </Text.P>
        <Text.P>
          현재 수호아이오에서 FE 개발을 하고 있으며, 웹 서비스 런칭 및 운영을 한
          경험이 있습니다. 또한 사용자에게 좋은 경험을 전달하는 것에 관심이
          많고, 이를 위해 유저 피드백에 민감하게 반응하는 편입니다.
        </Text.P>
        <Text.P>
          저는 담당하고 있는 프로덕트에 오너쉽을 가지고 열정적인 분위기에서
          일하는 것을 선호하며, 이슈 발견 시 빠르게 대응할 수 있습니다.
        </Text.P>
        <Text.P>
          웹 개발시 저의 가장 큰 관심사는 최적화 부분이고 이를 수행하는 과정에서
          웹의 성능을 향상하는 다양한 기술과 방법을 연구하고 적용하고 있습니다.
          이를 통해 웹사이트의 로딩 속도를 줄이고 사용자 경험을 높이는데 중점을
          두고 있습니다.
        </Text.P>
      </div>
    </Wrapper>
  );
};

export default Introduction;

const Wrapper = styled.div`
  ${tw`flex flex-col`};
  ${tw`mobile:gap-4`};
  ${tw`desktop:gap-8`};
`;
