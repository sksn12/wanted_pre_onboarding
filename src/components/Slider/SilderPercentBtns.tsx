import { useCallback } from "react";
import { memo } from "react";
import styled from "styled-components";
import { percentselectesType } from "./Slider";

const SilderPercentBtn = memo(
  ({
    percentselectes,
    setPersent,
  }: {
    percentselectes: percentselectesType[];
    setPersent: React.Dispatch<React.SetStateAction<string>>;
  }) => {
    const onClick = useCallback(
      (percent: string) => {
        setPersent(percent);
      },
      [setPersent]
    );

    return (
      <PerCentSelecteBox>
        {percentselectes.map((e) => {
          return (
            <PerCentSelecte
              key={e.id}
              onClick={() => onClick(e.percent)}
            >{`${e.percent}%`}</PerCentSelecte>
          );
        })}
      </PerCentSelecteBox>
    );
  }
);

export default SilderPercentBtn;

const PerCentSelecteBox = styled.div`
  width: 100%;
  height: 25px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const PerCentSelecte = styled.button`
  width: 10%;
  height: 100%;
  background-color: lightgrey;
  text-align: center;
  color: grey;
  border-radius: 40px;
  border: none;
  font-size: 12px;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
    background-color: #0a9696;
    color: white;
  }
`;
