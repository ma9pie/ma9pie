import React from 'react';

import Text from '@/components/common/Text';
import Container from '@/components/pages/resume/Container';
import { ARTICLE_URLS } from '@/constants';

const Articles = () => {
  return (
    <Container>
      <Text.Title>Articles</Text.Title>

      {ARTICLE_URLS.map(({ title, url }, idx) => (
        <div key={idx}>
          <Text.Link href={url} target="_blank">
            {title}
          </Text.Link>
        </div>
      ))}
    </Container>
  );
};

export default Articles;
