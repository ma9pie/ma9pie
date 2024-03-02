import React from 'react';

import Spacing from '@/components/common/Spacing';
import Text from '@/components/common/Text';
import Content from '@/components/pages/resume/Content';
import { BLOG_URL } from '@/constants';

const Blog = () => {
  return (
    <Content>
      <Text.T1>Blog</Text.T1>

      <div>
        <Text.Link href={BLOG_URL} target="_blank">
          {BLOG_URL}
        </Text.Link>
        <Spacing height={16}></Spacing>
        <Text.P>
          2020년도 2월부터 시작한 개발 블로그입니다. 블로그를 시작하게 된 계기는
          개발 공부를 하면서 배웠던 내용(TIL)을 기록하기 위함이였고, 주 로
          알고리즘 문제 풀이 과정과 설명에 대한 내용을 포스팅하였습니다. 현재는
          총 800개 이상의 게시글과 일 평균 2000명 정도의 방문자 수를 기록하고
          있으며, 요즘은 시간 날 때마다 실무를 하면서 마주한 에러를 해결했던
          내용이나 새롭게 알게 된 사실에 대해 포스팅을 하고 있습니다.
        </Text.P>
        <Text.P>
          글쓰기를 하면서 “어떻게 하면 내 생각을 명확하고 간결하게 표현할 수
          있을까?”에 대한 고민을 많이 하면서 포스팅을 했었고, 그 과정을 통해서
          실무에서의 소통 능력과 코드 스타일에 좋은 영향을 주었다고 생각합니다.
        </Text.P>
      </div>
    </Content>
  );
};

export default Blog;
