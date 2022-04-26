import { useState } from "react";
import styled from "styled-components";

const Toggle = () => {
  const [onToggle, setOnToggle] = useState(true);

  const onClick = () => {
    setOnToggle(!onToggle);
  };

  return (
    <Container onClick={onClick}>
      <Title Toggle={onToggle}>기본</Title>
      <Title2 Toggle={onToggle}>상세</Title2>
      <Slide Toggle={onToggle}></Slide>
    </Container>
  );
};

export default Toggle;

const Container = styled.div`
  width: 400px;
  height: 60px;
  background-color: lightgrey;
  border-radius: 40px;
  display: flex;
  flex-direction: row;
  align-items: center;
  position: relative;
  &:hover {
    cursor: pointer;
  }
`;

const Title = styled.p<{ Toggle: boolean }>`
  color: ${(props) => (props.Toggle ? "black" : "grey")};
  font-size: 20px;
  z-index: 1;
  margin-left: 21%;
`;

// 상속
const Title2 = styled(Title)`
  color: ${(props) => (props.Toggle ? "grey" : "black")};
  margin-left: 42%;
`;

const Slide = styled.div<{ Toggle: boolean }>`
  width: 50%;
  height: 90%;
  margin: 3px;
  border-radius: 40px;
  background-color: white;
  position: absolute;
  left: ${(props) => (props.Toggle ? 0 : 193)}px;
  transition: 0.5s;
`;
