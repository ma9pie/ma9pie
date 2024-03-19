import React from 'react';

import Grid from '@/components/common/Grid';
import Img from '@/components/common/Img';
import { Li, Ul } from '@/components/common/List';
import Spacing from '@/components/common/Spacing';
import Text from '@/components/common/Text';
import ProjectInfo from '@/components/pages/portfolio/ProjectInfo';
import { PORTFOLIO_PROJECTS } from '@/constants';
import { Project } from '@/types';

const PROJECT_INFO = PORTFOLIO_PROJECTS[Project.Polypoli];

const IMAGE_URL_LIST_0 = [
  '/images/screenshots/polypoli/login.png',
  '/images/screenshots/polypoli/feed.png',
  '/images/screenshots/polypoli/members.png',
  '/images/screenshots/polypoli/follow.png',
];
const IMAGE_URL_LIST_1 = [
  '/images/screenshots/polypoli/details.png',
  '/images/screenshots/polypoli/bill.png',
  '/images/screenshots/polypoli/barchart.png',
  '/images/screenshots/polypoli/search.png',
];

const Polypoli = () => {
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
        Polypoli는 자신이 관심 있어하는 국회의원에 대한 정보를 Instagram이나
        Twitter처럼 타임라인 피드로 볼 수 있는 서비스입니다.
      </Text.P>

      <Text.P semibold>[FE]</Text.P>
      <Ul>
        <Li>로그인, 회원 가입, 계정 찾기 기능 구현</Li>
        <Li>국회의원, 법안 검색 기능 구현</Li>
        <Li>카카오 로그인 연동</Li>
        <Li>좋아요, 팔로우 기능 구현</Li>
        <Li>홈, 랭킹, 핫이슈, 프로필, 마이 페이지 등등 개발</Li>
      </Ul>

      <Text.P semibold>[BE]</Text.P>
      <Ul>
        <Li>공공 데이터 포털 국회의원에 대한 정보 크롤링</Li>
        <Li>선거구 정보 크롤링</Li>
        <Li>열려라 국회 사이트 크롤링</Li>
        <Li>유저 관련 API 개발</Li>
      </Ul>

      <Spacing height={24}></Spacing>

      <Grid col={4} gap={16}>
        {IMAGE_URL_LIST_1.map((url, idx) => (
          <div key={idx}>
            <Img src={url}></Img>
          </div>
        ))}
      </Grid>

      <Spacing height={24}></Spacing>

      <Img
        src="/images/screenshots/polypoli/architecture.png"
        width="50%"
      ></Img>
    </>
  );
};

export default Polypoli;
