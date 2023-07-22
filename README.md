# MenuChoice_backend

## 역할 분담

- 아현  
  -> 가게 분류(한식, 양식, 디저트…) → 밥, 면…  
  -> foodType 정리 (볶음밥 등)
  -> 선택 결과 받아와서 가게 보러가기 띄우기
- 아정  
  -> 가게 정보 정리 (영업시간, 브레이크 타임)  
  -> 값 받아와서 필터링 기능

## 규칙

- 카멜 표기법을 따를 것.
- get 방식
- 포트 번호 3000

## 개발 환경 및 사용 기술

- node.js
- mysql
- 프레임워크 : express
- git 배포

## 데이터 설계

- id(int) : 가게 번호
- storeType(int) : 가게 종류 (중복 없음)  
  -> 전체 : 0  
  -> 한식 : 1  
  -> 아시안 : 2  
  -> 양식 : 3  
  -> 술집 : 4  
  -> 디저트 : 5  
  -> 브런치 : 6
- menuType(int) : 선택 화면 종류  
  -> 밥  
  -> 빵  
  -> 면  
  -> 등등
- foodType(int) : 세부 메뉴 종류
  -> menuType 안 foodType  
  -> 볶음밥 등등...
- title(string) : 이름
- runningTimeDefault(string) : 영업 시간
- runningTimeOther(string) : 영업 시간 다를 경우
- breakTime(string) : 브레이크 타임
- dayOff(string) : 휴무일  
  -> 월, 화, 수, 목, 금, 토, 일
