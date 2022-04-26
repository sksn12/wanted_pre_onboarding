import { useState } from "react";
import styled from "styled-components";
import down from "../../assets/down.svg";
import Dropdownlist from "./Dropdownlists";

const Dropdown = () => {
  const [listVisible, setListVisible] = useState<boolean>(false);
  const [ChoiceName, setChoiceName] = useState<string>("BTCUSD");
  const onClick = () => {
    setListVisible(!listVisible);
  };

  return (
    <Container>
      <DropDown onClick={onClick}>
        {ChoiceName}
        <img src={down} width="18px" height="18px" alt="down" />
      </DropDown>
      {listVisible ? (
        <Dropdownlist setChoiceName={setChoiceName}></Dropdownlist>
      ) : null}
    </Container>
  );
};

export default Dropdown;

const Container = styled.div`
  width: 400px;
  height: 400px;
  background-color: beige;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const DropDown = styled.div`
  width: 85%;
  height: 50px;
  margin-top: 20px;
  border: 1px solid gray;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 12px;
  font-size: 18px;
  cursor: pointer;
`;
