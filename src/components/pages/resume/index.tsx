import React from 'react';

import Divider from '@/components/layouts/Divider';
import Articles from '@/components/pages/resume/Articles';
import Blog from '@/components/pages/resume/Blog';
import Education from '@/components/pages/resume/Education';
import Experiences from '@/components/pages/resume/Experiences';
import Info from '@/components/pages/resume/Info';
import Introduction from '@/components/pages/resume/Introduction';
import Skills from '@/components/pages/resume/Skills';
import Type from '@/components/pages/resume/Type';

const SECTIONS = [
  {
    key: 'info',
    Component: Info,
  },
  {
    key: 'introduction',
    Component: Introduction,
  },
  {
    key: 'type',
    Component: Type,
  },
  {
    key: 'experiences',
    Component: Experiences,
  },
  {
    key: 'skills',
    Component: Skills,
  },
  {
    key: 'blog',
    Component: Blog,
  },
  {
    key: 'education',
    Component: Education,
  },
  {
    key: 'articles',
    Component: Articles,
  },
];

const Resume = () => {
  return (
    <div>
      {SECTIONS.map(({ key, Component }, idx) => (
        <section key={key}>
          {idx > 0 && <Divider></Divider>}
          <Component></Component>
        </section>
      ))}
    </div>
  );
};

export default Resume;
