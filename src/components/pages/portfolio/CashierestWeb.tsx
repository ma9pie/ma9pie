import React from 'react';

import Flex from '@/components/common/Flex';
import Img from '@/components/common/Img';
import { Li, Ul } from '@/components/common/List';
import Spacing from '@/components/common/Spacing';
import Text from '@/components/common/Text';
import Info from '@/components/pages/portfolio/Info';
import { PORTFOLIO_PROJECTS } from '@/constants';
import { Project } from '@/types';

const INFO = PORTFOLIO_PROJECTS[Project.CashierestWeb];

const CashierestWeb = () => {
  return (
    <>
      <Info {...INFO}></Info>

      <Spacing height={24}></Spacing>

      <Img src="/images/screenshots/cashierest/trade.png" width="75%"></Img>

      <Spacing height={24}></Spacing>

      <Text.P>
        캐셔레스트는 암호화폐 거래소 서비스입니다. 새로운 캐셔레스트 2.0 서비스
        런칭을 위한 첫 FE 멤버로 합류를 하였고, 홈, 거래소, 자산 현황, 거래 내역
        페이지 부분을 담당하였습니다.
      </Text.P>

      <Ul>
        <Li>프로젝트 아키텍처 설계</Li>
        <Li>
          Tradingview chart library를 통한 거래소 차트 구현 및 customizing
        </Li>
        <Li>모바일 앱용 차트 Web view page 개발</Li>
        <Li>거래소 페이지 렌더링 성능 최적화</Li>
        <Li>chart history API 응답 시간 단축</Li>
        <Li>Jenkins 배포 스크립트 설정 및 PM2 세팅</Li>
        <Li>GA 연동</Li>
      </Ul>

      <Spacing height={16}></Spacing>

      <Text.P semibold>[리팩토링]</Text.P>
      <Text.P>
        거래소 페이지는 다른 페이지에 비해서 코드량이 많고 관리하고 있는 state가
        많았습니다. 주문 탭 부분을 담당하는 컴포넌트에서 사용되고 있는 state의
        개수가 20개 이상이었는데, 코드가 너무 길고 상태 업데이트 로직을
        분리해야겠다는 필요성이 생겨 useReducer를 활용하여 로직을 분리하고
        코드를 리팩토링 하여 가독성과 유지보수성을 높일 수 있었습니다.
      </Text.P>

      <Spacing height={24}></Spacing>

      <Text.P semibold>[퍼포먼스 향상]</Text.P>
      <Text.P>
        그리고 서비스 오픈 후 거래소 페이지 반응이 조금 느리다는 고객들의 문의가
        있어 거래소 페이지 최적화를 진행하였었습니다
      </Text.P>

      <Flex gap={16}>
        <Img
          src="/images/screenshots/cashierest/coin-list.png"
          width="25%"
        ></Img>
        <Img
          src="/images/screenshots/cashierest/orderbook.png"
          width="25%"
        ></Img>
      </Flex>

      <Spacing height={8}></Spacing>

      <Text.P>
        먼저 거래소 페이지의 경우 크게 코인 리스트, 차트, 주문, 체결 내역, 거래
        내역 컴포넌트 5가지로 나뉘는데, Devtools를 활용하여 코인 리스트와
        호가창에서 렌더링이 많이 일어나고 있는 것을 발견하였습니다.
      </Text.P>
      <Text.P>
        코인 리스트의 경우 웹소켓 메시지로 리스트를 저장하는 배열 데이터를
        업데이트할 때 새로운 배열 주소로 Redux state를 할당해서 Price가
        업데이트될 때마다 리스트 전체가 렌더링 되는 문제를 발견하여 해결하였고,
        화면상으로 보이는 부분만 렌더링 할 수 있도록 react-window 리스트 가상화
        라이브러리를 사용하여 최적화를 하였습니다.
      </Text.P>
      <Text.P>
        호가창의 경우 많은 웹소켓 메시지를 수신할 때 수량 막대가 버벅거리는
        현상이 발생했으나 정확한 원인은 알 수 없었기 때문에 트래픽이 매우 많은
        사이트인 Binance의 호가창 부분과 제가 만든 호가창 부분을 비교하였습니다.
        결론적으로는 스타일 속성에 따라 reflow, repaint로 인한 성능 저하가
        발생할 수 있다는 사실을 알게 되었고, reflow와 repaint 과정을 거치지 않는
        transform 속성 사용을 통해서 해당 문제를 해결할 수 있었습니다.
      </Text.P>

      <Spacing height={24}></Spacing>

      <Text.P semibold>[문제 해결]</Text.P>
      <Text.P>
        해당 프로젝트를 진행하면서 가장 힘들었던 점은 Tradingview chart
        library를 통한 차트 데이터 연동 및 차트 표시 기능을 개발하는
        것이었습니다. 공식 문서만으로는 개발에 한계가 있었으며, reference 및
        example 코드 또한 매우 적었고, 물어볼 수 있는 사수가 없었기 때문에
        스스로 문제를 해결해야 하는 상황이었습니다.
      </Text.P>
      <Text.P>
        따라서 Tradingview chart를 사용하는 다른 대형 사이트의 Network 요청
        탭에서 chart history 관련 응답 데이터를 어떤 형식으로 보내는지
        분석하였고, 모르는 부분에 대해서는 Discord tradingview 채널의 공식
        개발자에게 적극적으로 여러 질문을 해가면서 문제를 해결해 나갔습니다.
        그리하여 historyProvider와 stream으로 구성되는 Datefeed를 설계하고
        구축하여 실시간 차트 서비스 기능을 개발할 수 있었습니다.
      </Text.P>

      <Spacing height={16}></Spacing>

      <Text.P>
        그리고 거래소 페이지 진입 시 차트가 그려지는 시간이 타사에 비해 현저하게
        느린 문제가 있었습니다.
      </Text.P>

      <Img src="/images/screenshots/cashierest/chart.png" width="75%"></Img>
      <Spacing height={8}></Spacing>
      <Img
        src="/images/screenshots/cashierest/history-api.png"
        width="75%"
      ></Img>

      <Spacing height={8}></Spacing>

      <Text.P>
        원인은 차트 히스토리 API 응답 속도 자체가 평균 700ms였기 때문이었고,
        조회 기간이 길면 2200ms까지 소요되어 웹 서버 및 모바일 차트 웹뷰에서
        차트를 불러오기까지 시간이 많이 걸리게 된다는 점 때문이었습니다.
      </Text.P>
      <Text.P>
        회사 내부적으로는 차트 로딩 속도에 관련하여 FE part에서 해결해 주기를
        지속적으로 요청받았었지만, 아무리 최적화를 한다 하더라도 응답 속도
        자체가 느렸기 때문에 FE단에서는 할 수 있는 것이 없다고 판단되어 상용
        Chart data DB 쿼리 테스트 권한을 요청드려 테스트를 진행하였습니다.
      </Text.P>
      <Text.P>
        테스트 기간 동안 Influx DB 공식 문서와 구글링을 통해 Influx DB 쿼리문에
        대해 연구하였고, 기존 쿼리문이 비효율적으로 돌고 있다는 사실을 확인하여
        직접 쿼리문 수정 및 테스트를 하였습니다. 결론적으로 반영되어 API 응답
        속도를 70ms으로 8~10배가량 단축시킬 수 있었습니다.
      </Text.P>
    </>
  );
};

export default CashierestWeb;
