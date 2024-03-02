import React from 'react';

import Text from '@/components/common/Text';
import Content from '@/components/pages/resume/Content';

const Education = () => {
  return (
    <Content>
      <Text.T1>Education</Text.T1>

      <div>
        <Text.P>건국대학교 기계공학과 학사 졸업 (2015.03 - 2021.08)</Text.P>
        <Text.P>
          알고리즘, 자료구조, 컴퓨터 구조, 운영체제, 클라우드 웹 서비스, 컴퓨터
          프로그래밍 1,2, 시스템 프로그래밍 수강
        </Text.P>
      </div>
    </Content>
  );
};

export default Education;
