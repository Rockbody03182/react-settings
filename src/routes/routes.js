import React from "react";

const mainPages = React.lazy(() => import("../Components/Main/Main"));
const acountPages = React.lazy(() => import("../Components/Acount/Account"));
const publisherPages = React.lazy(() => import("../Components/Publisher/PublisherLists"));
const dspListPages = React.lazy(() => import("../Components/DSP/DspLists"));
const mediaListPages = React.lazy(() => import("../Components/Media/MediaLists"));
// const assetEdit = React.lazy(() => import("../Components/Auction/Edit/EditItem"));

const routes = [
  // { path: "/home/account", name: "Acount", element: acountPages },
  // { path: "/user/edit/:key1/:key2/:key3", name: "Edit", element: assetEdit },
  /**
   * 메인
   */
  { path: "/", exact: true, name: "Home", element: mainPages },
  /**
   * 회원 관리
   */
  { path: "/account", name: "Acount", element: acountPages }, // 회원 관리
  /**
   * 퍼블리셔 관리
   */
  { path: "/publisher/lists", name: "PublisherLists", element: publisherPages }, // 영역 현황
  { path: "/publisher/listinfo", name: "PublisherListInfo", element: publisherPages }, // 노출 관리
  /**
   * DSP 관리
   */
  { path: "/dsp/lists", name: "Dsp", element: dspListPages }, // 영역 관리
  /**
   * 매체 관리
   */
  { path: "/media/lists", name: "Media", element: mediaListPages }, // 매체 관리

  /**
   * 통계/정산 관리
   */

  /**
   * 기타 관리
   */
];

export default routes;
