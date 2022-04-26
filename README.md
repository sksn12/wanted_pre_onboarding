# 원티드 프리온보딩 프론트엔드 코스 선발 과제

## 과제를 진행하면서 새로 알게된 점들

- console.log대신 consloe.table 사용시 배열이나 객체의 구조를 더 파악하기 쉬워진다.
- ts에서 image,git,svg와 같은 값들을 import하기 위해선 @types폴더를 만들어 index.d.ts파일에 declare module "\*.svg";코드 추가 후 tsconfig.json파일 compilerOptions에 "typeRoots": ["./node_modules/@types", "@types"]코드를 추가해준다.
- onBlur => input 클릭 후 다른 곳 클릭시 이벤트 발생 , focusout도 같은 기능을 담당 하지만 버블링 발생!!!
- styled component로 만든 컴포넌트(?)는 상속이 가능하다.

## 1. Toggle

- 컴포넌트 클릭시 state변화 & 그에 따른 색상과 밑줄 위치 변경

## 2. Tab

- list객체 배열을 만들고 클릭 이벤트 발생시 해당 위치의 인덱스 번호를 찾아 이동

## 3. Slider

- 0,25,...등 모든 %값을 갖는 객체 배열을 만든 후 map을 통해 컴포넌트 생성
- 각 버튼은 state값에 따라 리랜더링이 발생되지 않게 memo사용 & 컴포넌트 분리

## 4. Input

- Email 컴포넌트에서는 input에 value값 변화에 따라 정규표현식의 조건이 맞는지 검사하고 만족한다면 fill로 색상을 채운 checked.svg을 불러옴 만족하지 않을시 check.svg반환
- Password 컴포넌트에서는 visible.svg클릭시 input에 type을 text로 변경 invisible.svg클릭시 password타입으로 변환
- 처음에는 컴포넌트를 분리 하지 않고 만들어 email에 state가 변경되면 password컴포넌트 또한 리랜더링 되는 현상이 있어 컴포넌트 분리
- stlyed.component가 겹치는게 많아 export로 내보낸 후 재사용

## 5. Dropdown

- Dropdown컴포넌트 클릭시 DropdownLists컴포넌트가 랜더링 되고 map을 통해 만들어진 리스트값들을 클릭시 해당 리스트 값이 선택된다.
- Dropdown컴포넌트에서 값을 입력시 filter함수를 통해 현재 입력된 값을 포함하는 배열 리스트만 반환시킴

## 아쉬웠던점 && 느낀점

- 각 컴포넌트마다 최적화 작업을 한다고 했는데 많이 부족한것 같다.
- 리액트에서 타입스크립트를 처음 사용해 봐서 생각보다 시간이 조금 더 걸린것 같고 익숙하지 않은 문법을 사용하다 보니 코드를 잘 사용한건지 확신이 서지 않는다.
- 원래는 PostCSS로 스타일링을 진행했는데 잘 사용해보지 않은 css-in-js방식인 styled-components를 사용하고 완성시켜 뿌듯하다.
