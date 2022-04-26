import styled from "styled-components";

const DropCoinList = ({
  coin,
  setChoiceName,
}: {
  coin: string;
  setChoiceName: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const onClick = () => {
    setChoiceName(coin);
  };
  return <CoinList onClick={onClick}>{coin}</CoinList>;
};

export default DropCoinList;

const CoinList = styled.li`
  width: 92%;
  height: 50px;
  font-size: 18px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid gray;
  list-style: none;
  padding-left: 30px;
  cursor: pointer;
`;
