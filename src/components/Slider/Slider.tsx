import { useCallback } from "react";
import { useState } from "react";
import styled from "styled-components";
import SilderPercentBtn from "./SilderPercentBtns";

export interface percentselectesType {
  id: number;
  percent: string;
}

const percentselectes: percentselectesType[] = [
  {
    id: 1,
    percent: "0",
  },
  {
    id: 2,
    percent: "25",
  },
  {
    id: 3,
    percent: "50",
  },
  {
    id: 4,
    percent: "75",
  },
  {
    id: 5,
    percent: "100",
  },
];

const Slider = () => {
  const [persent, setPersent] = useState("50");

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setPersent(e.target.value);
    },
    [setPersent]
  );

  return (
    <Container>
      <PerCentBox>{`${persent} %`}</PerCentBox>
      <SliderBarContainer>
        <SliderBar
          type="range"
          min="0"
          max="100"
          onChange={onChange}
          value={persent}
        ></SliderBar>
        <SilderFill persent={persent}></SilderFill>
        <SliderBarPointContainer>
          {percentselectes.map((e) => {
            return (
              <SliderBarPoint
                key={e.id}
                myPersent={e.percent}
                persent={persent}
              ></SliderBarPoint>
            );
          })}
        </SliderBarPointContainer>
      </SliderBarContainer>

      <SilderPercentBtn
        percentselectes={percentselectes}
        setPersent={setPersent}
      />
    </Container>
  );
};

export default Slider;

const Container = styled.div`
  width: 400px;
  height: 120px;
  display: flex;
  flex-direction: column;
`;

const PerCentBox = styled.div`
  width: 93%;
  height: 60px;
  border: 1px solid grey;
  border-radius: 5px;
  display: flex;
  justify-content: right;
  align-items: center;
  padding-right: 7%;
  color: grey;
`;

const SliderBarContainer = styled.div`
  width: 100%;
  height: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const SliderBar = styled.input`
  -webkit-appearance: none;
  width: 100%;
  height: 6px;
  background-color: lightgray;
  cursor: pointer;
  z-index: 2;
  position: absolute;
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 16px;
    width: 16px;
    background-color: #0a9696;
    box-shadow: 0 0 0 3px white;
    border-radius: 50%;
    &:hover {
      transform: scale(1.1);
    }
  }
`;

const SilderFill = styled.div<{ persent: string }>`
  width: 100%;
  height: 6px;
  width: ${(props) => props.persent}%;
  background-color: #0a9696;
  position: absolute;
  z-index: 3;
  left: 0;
`;

const SliderBarPointContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: absolute;
`;

const SliderBarPoint = styled.div<{
  myPersent: string;
  persent: string;
}>`
  height: 16px;
  width: 16px;
  position: relative;
  border-radius: 50%;
  background-color: ${(props) =>
    parseInt(props.myPersent) >= parseInt(props.persent)
      ? "lightgray"
      : "#0a9696"};
`;
