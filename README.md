# Browser-controller

## 기능 설명

* master 노드에 해당하는 브라우저는 slave 노드에 해당하는 브라우저를 컨트롤 할 수 있습니다.

## 사용된 라이브러리

* express.js
* axios
* socket.io
  
## 현재 구현된 기능

* master 노드에서 요청한 uri에 해당하는 html파일을 소켓 연결을 통해서<br> slave 노드들의 페이지가 변경됩니다.
* master 노드에서 slave 노드에게 원하는 시점에 alert창을 띄울 수 있습니다.

## 사용 방법
* Dependency 를 설치 합니다
```
$ npm install
```
* 서버를 실행합니다
```
$ npm start
```
* 페이지로 접속합니다 http://localhost:3000/
* master 노드 페이지를 생성합니다
* 여러개의 slave 노드들을 생성합니다
* slave 노드에 alert창을 띄우는 명령을 실행합니다.

Alert Message 우측의 input창에 메시지를 입력하고 SEND 버튼을 클릭합니다

* slave 노드들에게 존재하는 sample 페이지를 렌더링 하도록 합니다.

Page URI 우측의 input 창에 부를 페이지 uri 를 입력하고 SEND 버튼을 클릭합니다.
샘플 페이지의 uri는 http://localhost:3000/sample.html 입니다.
