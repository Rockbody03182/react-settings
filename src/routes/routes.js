import React from "react";

const mainPages = React.lazy(() => import("../Components/Main/Main"));
const acountPages = React.lazy(() => import("../Components/Acount/Acount"));
const publisherPages = React.lazy(() =>
  import("../Components/Publisher/Publisher")
);
const dspListPages = React.lazy(() => import("../Components/DSP/DspList"));
const mediaListPages = React.lazy(() =>
  import("../Components/Media/MediaList")
);
// const assetEdit = React.lazy(() => import("../Components/Auction/Edit/EditItem"));

const routes = [
  // { path: "/home/account", name: "Acount", element: acountPages },
  // { path: "/user/edit/:key1/:key2/:key3", name: "Edit", element: assetEdit },
  { path: "/", exact: true, name: "Home", element: mainPages },
  { path: "/acount", name: "Acount", element: acountPages }, // 회원 관리
  { path: "/publisher_list", name: "Publisher", element: publisherPages }, // 영역 관리
  { path: "/dsp_list", name: "DspList", element: dspListPages }, // 영역 관리
  { path: "/media_list", name: "MediaList", element: mediaListPages }, // 매체 관리
];

export default routes;
