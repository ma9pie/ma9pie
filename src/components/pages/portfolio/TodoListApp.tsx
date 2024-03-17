import React from 'react';
import tw, { styled } from 'twin.macro';

import Img from '@/components/common/Img';
import Info from '@/components/pages/portfolio/Info';
import { PORTFOLIO_PROJECTS } from '@/constants';
import { Project } from '@/types';

const INFO = PORTFOLIO_PROJECTS[Project.TodoListApp];

const TodoListApp = () => {
  return (
    <Wrapper>
      <Info {...INFO}></Info>
      <Img
        src="/images/screenshots/todo-list-app/iphone-login.png"
        width="20%"
      ></Img>
      <Img
        src="/images/screenshots/todo-list-app/iphone-add-list.png"
        width="20%"
      ></Img>
      <Img
        src="/images/screenshots/todo-list-app/iphone-task.png"
        width="20%"
      ></Img>

      <Img src="/images/screenshots/todo-list-app/home.png" width="20%"></Img>
      <Img
        src="/images/screenshots/todo-list-app/delete-list.png"
        width="20%"
      ></Img>
      <Img
        src="/images/screenshots/todo-list-app/sidebar.png"
        width="20%"
      ></Img>
      <Img
        src="/images/screenshots/todo-list-app/settings.png"
        width="20%"
      ></Img>
    </Wrapper>
  );
};

export default TodoListApp;

const Wrapper = styled.div`
  ${tw``};
`;
