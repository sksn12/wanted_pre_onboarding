import styled from "styled-components";
import Email from "./Email";
import Password from "./Password";

const Input = () => {
  return (
    <Container>
      <Email />
      <Password />
    </Container>
  );
};

export default Input;

const Container = styled.div`
  width: 400px;
  height: 200px;
  background-color: beige;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
