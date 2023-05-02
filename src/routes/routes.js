import React from "react";

const mainPages = React.lazy(() => import("../Components/Main/Main"));
// 회원관리 및 메인
const acountPages = React.lazy(() => import("../Components/Acount/Account"));
// 로그인
const loginPages = React.lazy(() => import("../Components/Layout/LoginLayout"));
// 퍼블리셔 관리
const publisherPages = React.lazy(() => import("../Components/Publisher/PublisherLists"));
const publisherListInfoPages = React.lazy(() => import("../Components/Publisher/PublisherListInfo"));
// DSP 관리
const dspListPages = React.lazy(() => import("../Components/DSP/DspLists"));
// 매체 관리
const mediaListPages = React.lazy(() => import("../Components/Media/MediaLists"));
// 통계/정산 관리
const statsListPages = React.lazy(() => import("../Components/Stats/StatsLists"));
const statsDspPages = React.lazy(() => import("../Components/Stats/StatsDsp"));
const statsDspDayPages = React.lazy(() => import("../Components/Stats/StatsDspDay"));
const statsPublidsherPages = React.lazy(() => import("../Components/Stats/StatsPublisher"));
// 기타 관리
const ZoneTypePages = React.lazy(() => import("../Components/Etc/ZoneType"));
// const assetEdit = React.lazy(() => import("../Components/Auction/Edit/EditItem"));

const routes = [
  // { path: "/home/account", name: "Acount", element: acountPages },
  // { path: "/user/edit/:key1/:key2/:key3", name: "Edit", element: assetEdit },
  { path: "/", exact: true, name: "Home", element: acountPages },
  { path: "/Login", name: "Login", element: loginPages },
  { path: "/member/account", name: "Acount", element: acountPages }, // 회원 관리
  { path: "/publisher/lists", name: "Publisher Lists", element: publisherPages }, // 영역 현황
  { path: "/publisher/listinfo", name: "Publisher ListInfo", element: publisherListInfoPages }, // 노출 관리
  { path: "/dsp/lists", name: "Dsp", element: dspListPages }, // 영역 관리z
  { path: "/media/lists", name: "Media", element: mediaListPages }, // 매체 관리
  { path: "/stats/lists", name: "Stats Lists", element: statsListPages }, // 일별 통계
  { path: "/stats/publisher", name: "Stats Publisher", element: statsPublidsherPages }, // 퍼블리셔 정산
  { path: "/stats/dsp/day", name: "Stats Dsp Day", element: statsDspDayPages }, // DSP 통계
  { path: "/stats/dsp", name: "Stats Dsp", element: statsDspPages }, // DSP 정산
  { path: "/etc/zonetype", name: "Etc ZoneType", element: ZoneTypePages }, // 영역 타입
];

export default routes;
