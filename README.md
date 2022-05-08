

# 개요

 TODO 를 관리하는 모바일 웹 어플리케이션을 개발합니다. 

아래 링크로 접속하시면, 배포된 산출물을 바로 확인할 수 있습니다.

[https://todo-list-tawny-one.vercel.app/](https://todo-list-tawny-one.vercel.app/) 

# 실행 방법

## 애플리케이션 실행

```bash
# 개발 서버 실행
npm install
npm start

# 또는 아래 명령어를 실행하여 빌드 결과물을 확인할 수 있습니다. 
npm install 
npm run build
npm run serve 
```

## 스토리북 실행

```bash
npm install
npm run storybook
# localhost:6006 접속

```

# 자세한 실행방법

- [이번주 날씨](#이번주-날씨)

- [Todo 생성 및 수정](#todo-생성-및-수정)

- [Todo 확인, 체크, 제거](#todo-확인-체크-제거)

## 이번주 날씨 
1. Chrome 브라우저 접속 후 개발자 콘솔을 엽니다. moblie device toolbar를 클릭하여 모바일모드로 전환합니다. 

<img src="https://user-images.githubusercontent.com/67041750/167295756-1c5b96eb-316a-4ad2-811f-56b804c67fce.png" width="500px" height="auto"/>

2. 처음 접속 시 날씨 데이터가 로딩 중임을 피드백 받습니다. 
<img src="https://user-images.githubusercontent.com/67041750/167295768-757131fb-ec19-4958-91bc-2909c61f9322.png" width="250px" height="auto"/>

3. 데이터 요청에 실패한다면 에러메시지를 피드백 받습니다.
<img src="https://user-images.githubusercontent.com/67041750/167295777-cbac8535-b6ca-4df3-806f-7646edf63164.png" width="250px" height="auto"/>

4. 로드된 날씨 데이터를 확인합니다. 오늘날짜의 날씨데이터가 화면 왼쪽에 위치합니다. 
<img width="250" alt="image" src="https://user-images.githubusercontent.com/67041750/167296004-9e8d749b-5f29-4590-bb38-2a8fd1545482.png">

5. 좌우로 스크롤 할 수 있습니다. 오늘날짜가 포함된 일주일의 데이터를 보여줍니다. 
<img width="250" alt="image" src="https://user-images.githubusercontent.com/67041750/167296143-c0d3e16a-e7aa-45c1-ae5c-a6ec20e603e9.png">

## Todo 생성 및 수정 

1. 메인화면의 추가하기 버튼을 눌러서 생성페이지로 이동할 수 있습니다. 제목과 내용은 필수값으로, 두가지 내용을 입력하면 저장하기 버튼이 활성화됩니다.
<img width="250" alt="image" src="https://user-images.githubusercontent.com/67041750/167296233-4b26f4f7-a19e-4a5f-9f15-3cc90982ec59.png">

2. 마감일자 입력 버튼을 누르면 아래와 같이 캘린더가 활성화되며 날짜 클릭 후 확인 버튼 클릭을 통해 입력할 수 있습니다. 
<img width="250" alt="image" src="https://user-images.githubusercontent.com/67041750/167296294-04502ff7-0bd6-493f-a709-9de96bc40723.png">

3. 저장하기 버튼을 누르면 메인화면으로 이동하며, 다음과 같이 추가한 투두가 보여집니다. 

<img width="250" alt="image" src="https://user-images.githubusercontent.com/67041750/167296427-b7dd8319-5baf-49ce-8dcb-4b671835dfa2.png">

4. 투두 내용부분을 클릭하면 다음과 같이 수정페이지로 이동합니다. 수정 후 저장버튼을 누르면 수정한 내용이 반영됩니다.
<img width="250" alt="image" src="https://user-images.githubusercontent.com/67041750/167296510-f6bea9c2-a679-4e8d-ad14-4d9ba727fd51.png">

## Todo 확인, 체크, 제거 
<img width="250" alt="image" src="https://user-images.githubusercontent.com/67041750/167296583-7dcbbff2-a4a7-44c0-aa1c-c5b3cba9949e.png">

1. 투두 목록은 다음과 같이 보여집니다. 체크 박스를 클릭시 체크 표시가 나타나고 투두 내용은 strike 처리됩니다. 마감일자가 오늘 이상인 경우 텍스트 컬러가 red가 됩니다.  
<img width="250" alt="image" src="https://user-images.githubusercontent.com/67041750/167296877-d45327cf-8ce7-4f8e-85a1-5b3efbdbd0d4.png">

2. 제거하기 버튼을 통해 투두를 제거할 수 있습니다. 
<img width="250" alt="image" src="https://user-images.githubusercontent.com/67041750/167297050-5866d027-1a35-4eb0-990d-b01afefc7c04.png">



# 언어, 프레임워크, 라이브러리

## 언어

- javascript ES6+ 문법을 사용합니다.
- typescript 로 작성합니다.

## 프레임워크

- React 17

## 라이브러리

- create-react-app
- react-router
- styled component
- react-query
- react testing library
- jest
- react-day-picker & date-fns

# 날씨 API

[https://openweathermap.org/api/one-call-api](https://openweathermap.org/api/one-call-api) 

- 현재 날짜 기준 7일의 예보를 제공합니다.
- 어제로부터 5일의 과거 일기 데이터를 제공합니다.
