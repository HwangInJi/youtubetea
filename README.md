## 유튜브 데이터를 활용한 Tea(차) 영상 정보 검색 사이트

### 📑 제작 의도
- 최근에 녹차를 선물받아서 그 향이 너무 좋아서 차(Tea)에 대한 관심이 더 생겼습니다. 이를 바탕으로 Youtube API를 활용하여 차(Tea) 사이트를 개발하고자 합니다.

### 🏷️ 사용한 기술 & 스택

- React : 수집한 JSON파일의 데이터를 React로 웹사이트에 연동 및 scss로 전체적인 레이아웃 디자인 진행
- Youtube : 채널정보를 통해 API자료 수
- Vercel : 완성한 결과물을 다른 사람들도 볼 수 있게 Vercel에서 웹사이트로 링크화함

### 👍 주요 기능

- Tea 카테고리별 해당 키워드와 관련된 영상 확인 가능
- 검색 기능을 통해 Tea외 영상들도 검색해서 볼 수 있음
- 해당 영상의 채널정보 및 채널에 올라간 영상들도 한번에 볼 수 있

### ✨사이트 프리뷰

#### [홈화면]

![image](https://github.com/HwangInJi/youtubetea/assets/163365140/ce534501-e536-4aad-bb04-88c0766e128f)
![image](https://github.com/HwangInJi/youtubetea/assets/163365140/2b426537-aed5-4814-b51f-6625d1b1546e)

- 홈 화면은 Aside 구조로 레이아웃을 만들었으며, 좌측은 메뉴탭이 있고 우측엔 메인 정보들을 확인 할 수 있음
- 컨셉과 어울리는 배너 안에 검색 기능을 넣어 홈화면에서도 검색할 수 있도록 기능 설정
- 하단엔 Tea와 관련된 영상 하나가 새로고침 할 때마다 랜덤으로 재생되며, 이 사이트가 어떤 사이트인지에 대한 간략한 소개
  
#### [메뉴탭 & 영상 목록]

![image](https://github.com/HwangInJi/youtubetea/assets/163365140/63d953e4-bd18-4408-ad6e-2fb9e30e53e4)
![image](https://github.com/HwangInJi/youtubetea/assets/163365140/cacc7e3f-a0a7-40e7-ac94-e3923cfacbc0)
![image](https://github.com/HwangInJi/youtubetea/assets/163365140/5cae4eed-1fe7-4e48-86ce-39c0179d65e6)


- 메뉴탭에 있는 카테고리를 누르면 해당 키워드와 연관된 유튜브 영상이 50개가 나오며, 하단에 더보기 버튼을 누르면 추가로 50개씩 나오도록 설정하여 해당 키워드 영상을 모두 볼 수 있도록 기능 구현
- 카테고리 밑에 있는 작은 키워드 또한 마찬가지로 해당 키워드가 연관된 유튜브 영상이 나오도록 추가 기능 설정
  
#### [유튜브 채널 정보 확인]

![image](https://github.com/HwangInJi/youtubetea/assets/163365140/b6d99a39-4f15-44df-ad0f-2b1761337f1b)
![image](https://github.com/HwangInJi/youtubetea/assets/163365140/28fb8bd2-819b-47a2-9df7-40125595da6d)
![image](https://github.com/HwangInJi/youtubetea/assets/163365140/b824c9bf-1266-492f-8dd3-1bb5fb9ecc9f)

- 타이틀 제목 밑에 있는 채널명을 누르면 해당 채널 정보 페이지로 넘어가고, 마찬가지로 채널에 등록된 영상이 50개가 뜨게 되며 더보기를 누르면 50개씩 영상을 추가로 더 볼 수 있도록 설정



### 🛠️ 필요한 라이브러리 설치 순서

````bash
- react 설치 `npx create-react-app 폴더이름` : 폴더를 생략하고 싶으면 app . 으로 설치
- react-router-dom 설치 `npm install react-router-dom` : 주소 설정을 위한 라이브러리
- axios 설치 `npm install axios` : API라이브러리
- react icon 설치 `npm install react-icons` : 리액트에 필요한 아이콘
- react-player 설치 `npm install react-player` : 유튜브 영상 재생
- sass 설치 `npm install sass` : CSS 라이브러리
- react-helmet-async 설치 `npm install react-helmet-async` : SEO
- swiper 설치 `npm install swiper` : 이미지 슬라이드
````

- 필요한 라이브러리 한번에 설치할 때

```bash
npm install react-router-dom, axios, react-icons, react-player, sass, react-helmet-async, swiper
npm i react-spinners
npm i react-datepicker
npm i react-toastify
npm i react-modal
```

- src폴더에 폴더 추가 생성

```bash
- assets
- components
- context
- hook
- pages
- utils
````

- 작업 순서

```bash
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
````

### ⚡ 트러블 슈팅

1. npx create-react-app . 실행 후 에러 발생 시
   -> 만약 경로 설정 관련 에러가 발생한다면, 해당 경로에 들어가 폴더에 npm 초기화 폴더를 만들어준 후 다시 npx create-react-app .을 입력하고 'y'를 눌러줍니다.

2. 다른 사람의 소스를 가져올 경우
   -> 새로운 임의의 파일을 하나 만든 후 git clone 해주기
   -> 노드 모듈은 없기 때문에 해당 cd를 통해 해당 폴더에 들어간 후
   -> `npm i`로 인스톨 해주기
   -> 그래도 안된다면 버전이 맞는지 확인(버전이 다를 경우 충돌)
