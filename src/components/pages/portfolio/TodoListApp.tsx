import React from 'react';
import tw, { styled } from 'twin.macro';

import Grid from '@/components/common/Grid';
import Img from '@/components/common/Img';
import { Li, Ul } from '@/components/common/List';
import Spacing from '@/components/common/Spacing';
import Text from '@/components/common/Text';
import ProjectInfo from '@/components/pages/portfolio/ProjectInfo';
import { PORTFOLIO_PROJECTS } from '@/constants';
import { Project } from '@/types';

const PROJECT_INFO = PORTFOLIO_PROJECTS[Project.TodoListApp];

const IMAGE_URL_LIST_0 = [
  '/images/screenshots/todo-list-app/iphone-login.png',
  '/images/screenshots/todo-list-app/iphone-add-list.png',
  '/images/screenshots/todo-list-app/iphone-task.png',
];
const IMAGE_URL_LIST_1 = [
  '/images/screenshots/todo-list-app/home.png',
  '/images/screenshots/todo-list-app/delete-list.png',
  '/images/screenshots/todo-list-app/sidebar.png',
  '/images/screenshots/todo-list-app/settings.png',
];

const TodoListApp = () => {
  return (
    <>
      <ProjectInfo {...PROJECT_INFO}></ProjectInfo>

      <Spacing height={24}></Spacing>

      <Grid col={5} gap={16}>
        {IMAGE_URL_LIST_0.map((url, idx) => (
          <div key={idx}>
            <Img src={url} priority></Img>
          </div>
        ))}
      </Grid>

      <Spacing height={8}></Spacing>

      <Text.P>
        이 프로젝트는 Google, MS todo app를 사용하다가 기본적인 기능은 제공하되,
        좀 더 직관적이고 심플한 디자인을 가지고 있는 나만의 Todo List App이
        필요하다고 생각하여 개발하게 된 서비스입니다.
      </Text.P>

      <Text.P semibold>[FE]</Text.P>
      <Ul>
        <Li>Todo 생성 및 하위 task 생성 기능 개발</Li>
        <Li>라이트, 다크 모드 구현</Li>
        <Li>로그인 및 회원가입 기능 구현</Li>
        <Li>소셜 로그인 개발</Li>
        <Li>Sentry 에러 분석 및 bug fix</Li>
      </Ul>

      <Text.P semibold>[BE]</Text.P>
      <Ul>
        <Li>User API 개발</Li>
        <Li>Todo API 개발</Li>
      </Ul>

      <Spacing height={24}></Spacing>

      <Grid col={5} gap={16}>
        {IMAGE_URL_LIST_1.map((url, idx) => (
          <ImageWrapper key={idx}>
            <Img src={url} priority></Img>
          </ImageWrapper>
        ))}
      </Grid>

      <Spacing height={8}></Spacing>

      <Text.P>
        next-auth를 통해 Google, Github 소셜 로그인을 연동하였으며, Todo 생성 시
        팔레트 기능을 통해 직관적으로 구분될 수 있게 하였습니다.
      </Text.P>
      <Text.P>
        또한 미로그인 상태에서는 로컬 스토리지를 활용하여 데이터를 생성하고
        삭제할 수 있도록 개발하였습니다. 그리고 DB의 경우 MongoDB 무료
        클러스터와 Firestore를 비교해 봤을 때 체감상으로 좀 더 빠른 Firestore를
        사용하여 서버 개발을 하였습니다.
      </Text.P>
    </>
  );
};

export default TodoListApp;

const ImageWrapper = styled.div`
  ${tw`flex-1 shadow-lg`};
`;
