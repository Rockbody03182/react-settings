# react18 + webpack5

리액트18 를 이용한 스타터킷입니다.<br>
정말 아무것도 없는 깔끔한 스타터 킷입니다.<br>
웹팩 최적화와 진짜 기본 셋팅만 되어 있습니다.<br>

### 최초 다운로드 후 해야할 것들 🐈

<!-- npm install -->

1. npm install -g
2. npm dev(실행 (개발용)-config/webpack.dev.js 기반)
3. npm build(빌드 (운영용)-config/webpack.prod.js 기반)

<!-- yarn install -->

1. npm install -g yarn (yarn 설치)
2. yarn install(node_modules 다운로드)
3. yarn dev(실행 (개발용)-config/webpack.dev.js 기반)
4. yarn build(빌드 (운영용)-config/webpack.prod.js 기반)

### 추천하는 설치 할만한 것들 🐈

- styled-components / Emotion / TailWind (스타일링)
- redux / recoil(추천) / mobx / Jotai / Zustand ( Client 상태관리)
- react Query (Server 상태관리)
- axios(API 통신)
- lodash-es(자바스크립트 라이브러리(객체,배열,구조 변환 등))
- dayjs(날짜)
- immer(불변성)
- jest & @Testing-library/react (테스트)

## 아키텍쳐

### CRA 디렉토리 구조

```bash
  ├─ node_modules
  ├─ public
  │   └─index.html
  ├─ src
  │   ├─App.css
  │   ├─App.js
  │   ├─index.css
  │   └─index.js
  ├─ package.json
  └─ yarn.lock
```

### 기본 SSP 디렉토리 구조

```bash
  ├─ node_modules
  ├─ public
  │   └─index.html
  ├─ src
  │   ├─Api
  │   │   └─api-caller.js
  │   ├─Components
  │   │   ├─Header : Header.js
  │   │   ├─Footer : Footer.js
  │   │   ├─Aside : Aside.js
  │   │   ├─Content : AppContent.js : 라우트 설정 부분을 감싸고 있다.
  │   │   ├─Layout : DefaultLayout.js : 뼈대 형태의 레이아웃 Header, Footer, AppContent 프로젝트에 따라 추가 적으로 프레임을 커스텀 하면된다.
  │   │   └─Utils : 여러군데서 쓸수 있는 스크립트
  │   ├─Context : 전역 데이터 관리 디렉토리
  │   ├─css : css
  │   ├─img : image
  │   ├─pages :
  │   ├─routes :route.js
  │   ├─App.css
  │   ├─App.js
  │   ├─index.css
  │   └─index.js
  ├─ .babelrc
  ├─ .env
  ├─ README.md
  └─ package.json
```
