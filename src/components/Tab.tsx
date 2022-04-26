import { useState } from "react";
import styled from "styled-components";

interface stateObj {
  name: string;
  id: number;
  Toggle: boolean;
}

const Tab = () => {
  const [list, setList] = useState<stateObj[]>([
    { name: "감자", id: 1, Toggle: true },
    { name: "고구마", id: 2, Toggle: false },
    { name: "카레라이스", id: 3, Toggle: false },
  ]);

  const onClick = (e: number) => {
    const arr = list.map((li) => {
      if (li.id === e) {
        return { ...li, Toggle: !li.Toggle };
      }
      return { ...li, Toggle: false };
    });
    setList(arr);
  };

  return (
    <Container>
      {list.map((e) => {
        return (
          <List
            key={e.id}
            onClick={() => onClick(e.id)}
            elementId={e.id}
            Toggle={e.Toggle}
          >
            {e.name}
          </List>
        );
      })}
      <Highlight list={list} />
    </Container>
  );
};

export default Tab;

const Container = styled.div`
  width: 400px;
  height: 60px;
  border-bottom: 2px solid lightgrey;
  position: relative;
  display: flex;
  flex-direction: row;
  &:hover {
    cursor: pointer;
  }
`;

// Highlight부분이 앞에 있어 해당 부분 클릭시 선택 x
const Highlight = styled.div<{
  list: stateObj[];
}>`
  width: 33%;
  height: 100%;
  border-bottom: 2px solid #0a9696;
  position: absolute;
  transition: 0.5s;
  left: ${(props) => {
    let tmp = props.list.findIndex((e) => e.Toggle);
    if (tmp === 0) return 0;
    else if (tmp === 1) return 33;
    else return 66;
  }}%;
`;

const List = styled.div<{
  Toggle: boolean;
  elementId: number;
}>`
  width: 33%;
  padding: 10px;
  text-align: center;
  color: ${(props) => (props.Toggle ? "black" : "gray")};
`;
