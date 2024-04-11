import React from 'react';

import Grid from '@/components/common/Grid';
import Img from '@/components/common/Img';
import Spacing from '@/components/common/Spacing';
import Text from '@/components/common/Text';
import ProjectInfo from '@/components/pages/portfolio/ProjectInfo';
import { PORTFOLIO_PROJECTS } from '@/constants';
import { Project } from '@/types';

const PROJECT_INFO = PORTFOLIO_PROJECTS[Project.CryptoErp];

const CryptoErp = () => {
  return (
    <>
      <ProjectInfo {...PROJECT_INFO}></ProjectInfo>

      <Spacing height={24}></Spacing>

      <Img
        src="/images/screenshots/crypto-erp/portfolio.png"
        width="100%"
      ></Img>

      <Spacing height={8}></Spacing>

      <Text.P>
        {`${Project.CryptoErp}는 암호화폐 회계 관리 대시보드 SaaS PoC 프로젝트입니다. 빠르게 개발하기 위해서 UI library로 NextUI를 사용하였습니다. library size가 가볍고 design이 깔끔하여 사용하게 되었습니다.`}
      </Text.P>

      <Text.P>
        주요 기능의 경우 계정에 등록된 wallet들의 자산을 aggregation하여 자산
        변동률, 자산 현황, PNL 현황 및 히스토리를 보여주는 것 입니다.
      </Text.P>

      <Spacing height={24}></Spacing>

      <Grid col={4} gap={16}>
        <Img src="/images/screenshots/crypto-erp/signup.png" width="100%"></Img>
        <Img src="/images/screenshots/crypto-erp/login.png" width="100%"></Img>
        <Img
          src="/images/screenshots/crypto-erp/mobile-portfolio.png"
          width="100%"
        ></Img>
        <Img
          src="/images/screenshots/crypto-erp/mobile-pnl.png"
          width="100%"
        ></Img>
      </Grid>

      <Spacing height={8}></Spacing>

      <Text.P>
        로그인과 회원가입 페이지에는 react-hook-form을 도입하여 input state와
        Error message handling을 효율적으로 관리하였습니다. 모바일 반응형으로
        개발하였으며 차트의 경우 chart.js를 활용하여 구현하였습니다.
      </Text.P>
    </>
  );
};

export default CryptoErp;
