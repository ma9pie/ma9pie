import React from 'react';

import Grid from '@/components/common/Grid';
import Img from '@/components/common/Img';
import { Li, Ul } from '@/components/common/List';
import Spacing from '@/components/common/Spacing';
import Text from '@/components/common/Text';
import ProjectInfo from '@/components/pages/portfolio/ProjectInfo';
import { PORTFOLIO_PROJECTS } from '@/constants';
import { Project } from '@/types';

const PROJECT_INFO = PORTFOLIO_PROJECTS[Project.PPGG];

const IMAGE_URL_LIST_0 = [
  '/images/screenshots/ppgg/home.png',
  '/images/screenshots/ppgg/login.png',
  '/images/screenshots/ppgg/player-hsitory.png',
  '/images/screenshots/ppgg/player-chart.png',
];
const IMAGE_URL_LIST_1 = [
  '/images/screenshots/ppgg/tos.png',
  '/images/screenshots/ppgg/signup-input.png',
  '/images/screenshots/ppgg/select-profile.png',
  '/images/screenshots/ppgg/signup-completed.png',
];

const PPGG = () => {
  return (
    <>
      <ProjectInfo {...PROJECT_INFO}></ProjectInfo>

      <Spacing height={24}></Spacing>

      <Grid col={4} gap={16}>
        {IMAGE_URL_LIST_0.map((url, idx) => (
          <div key={idx}>
            <Img src={url}></Img>
          </div>
        ))}
      </Grid>

      <Spacing height={8}></Spacing>

      <Text.P>
        PP.GG는 LoL 전적 검색 사이트인 OP.GG를 벤치마킹 하였으며, 지인들과의
        탁구 전적을 기록하기 위해 만든 사이트입니다.
      </Text.P>
      <Ul>
        <Li>로그인 및 회원가입 기능 구현</Li>
        <Li>유저 검색 기능 구현</Li>
        <Li>유저 전적 히스토리 표시</Li>
        <Li>전적 등록 기능 구현</Li>
      </Ul>

      <Spacing height={24}></Spacing>

      <Grid col={4} gap={16}>
        {IMAGE_URL_LIST_1.map((url, idx) => (
          <div key={idx}>
            <Img src={url}></Img>
          </div>
        ))}
      </Grid>

      <Spacing height={8}></Spacing>

      <Text.P>
        DB의 경우 MongoDB에서 무료 클러스터를 사용하고 있기 때문에 Mobile LTE
        상황에서는 API 응답 속도가 굉장히 늦는 이슈가 있었습니다. 페이지 첫
        로드의 경우에는 어쩔 수 없었지만, 페이지간 이동 시 빠른 컨텐츠 표시를
        위해 React-query를 사용하여 캐싱된 API 응답 데이터를 보여주도록
        처리하였습니다.
      </Text.P>

      <Spacing height={24}></Spacing>

      <Img src="/images/screenshots/ppgg/architecture.png" width="50%"></Img>
    </>
  );
};

export default PPGG;
