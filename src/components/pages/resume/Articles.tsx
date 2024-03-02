import React from 'react';

import Text from '@/components/common/Text';
import Content from '@/components/pages/resume/Content';
import { ARTICLE_URLS } from '@/constants';

const Articles = () => {
  return (
    <Content>
      <Text.T1>Articles</Text.T1>

      {ARTICLE_URLS.map(({ title, url }, idx) => (
        <div key={idx}>
          <Text.Link href={url} target="_blank">
            {title}
          </Text.Link>
        </div>
      ))}
    </Content>
  );
};

export default Articles;
