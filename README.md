# Youtube API를 이용한 차(Tea) 사이트
- 최근에 녹차를 선물받아서 그 향이 너무 좋아서 차(Tea)에 대한 관심이 더 생겼습니다.   
이를 바탕으로 Youtube API를 활용하여 차(Tea) 사이트를 개발하고자 합니다.

## 작업 순서
1. Node.js 설치
노드 다운로드 페이지(https://nodejs.org/en/download)에서 버전 20을 다운로드 받습니다.   
설치가 완료되면 터미널에서 node -v를 입력하여 버전을 확인합니다.

2. 프로젝트 폴더 설정
깃허브에서 youtube-api라는 이름의 새로운 폴더를 생성합니다.   
이 폴더를 열어서 작업을 진행합니다.

3. 불필요한 파일 제거 및 셋팅
새로 생성한 youtube-api 폴더 내에는 필요 없는 파일들을 삭제하고, 프로젝트에 필요한 설정을 해줍니다.

4. App.js
내용 삭제 후 rafce로 입력하기

5. index.js
- assets폴더에 파일 가져온 후 import './assets/scss/style.scss'; 추가하여 스타일 적용시키기

6. App.js 설정 (자동완성 이용하기)
- `<BrowserRouter>, <Suspense>, <Routes>, <Route>`

7. 각 페이지마다 메타 태그 설정
- Main.jsx파일에 `<HelmetProvider>` 태그 및 `<Helmet>` 태그 설정
- pages의 파일에 `<Helmet>` 태그 내용 적용시키기

## 단축키
- rafce : 파일 내용 자동 생성
- npm start : 터미널에서 node 실행
- npm run build : 터미널에서 build 파일 생성

## 필요한 라이브러리 설치
- react 설치  `npx create-react-app 폴더이름` : 폴더를 생략하고 싶으면 app . 으로 설치
- react-router-dom 설치 `npm install react-router-dom` : 주소 설정을 위한 라이브러리
- axios 설치 `npm install axios` : API라이브러리
- react icon 설치 `npm install react-icons` : 리액트에 필요한 아이콘
- react-player 설치 `npm install react-player` : 유튜브 영상 재생
- sass 설치 `npm install sass` : CSS 라이브러리
- react-helmet-async 설치 `npm install react-helmet-async` : SEO
- swiper 설치 `npm install swiper` : 이미지 슬라이드

## 필요한 라이브러리 한번에 설치

````bash
npm install react-router-dom, axios, react-icons, react-player, sass, react-helmet-async, swiper
````

## 사용 스택
- node.js 설치

## 트러블 슈팅
1. npx create-react-app . 실행 후 에러 발생 시
-> 만약 경로 설정 관련 에러가 발생한다면, 해당 경로에 들어가 폴더에 npm 초기화 폴더를 만들어준 후 다시 npx create-react-app .을 입력하고 'y'를 눌러줍니다.
