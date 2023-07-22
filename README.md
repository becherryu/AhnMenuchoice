# MenuChoice_backend

## 역할 분담

- 아현
- 아정

## 규칙

- 카멜 표기법을 따를 것.
- get 방식
- 포트 번호 3000

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
- detailMenuType(int) : 세부 메뉴 종류
  -> menuType 안 detailMenuType
- title(string) : 이름
- runningTime(string) : 영업 시간
- breakTime(string) : 브레이크 타임
