import serach from "../../assets/serach.svg";
import styled from "styled-components";
import CoinList from "./DropCoinList";
import { memo, useState } from "react";

interface inputType {
  inputSerach: string;
}
const coinsList: string[] = [
  "BTCUSD",
  "ETHUSD",
  "SOLUSD",
  "LUNAUSD",
  "DOGEUSD",
  "GMTUSD",
];

const Dropdownlists = memo(
  ({
    setChoiceName,
  }: {
    setChoiceName: React.Dispatch<React.SetStateAction<string>>;
  }) => {
    const [SerachValue, setSerachValue] = useState<inputType>({
      inputSerach: "",
    });
    const [coins, setCoins] = useState(coinsList);
    const { inputSerach } = SerachValue;

    const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
      const { name, value } = e.target;
      // 이부분 헷갈렸음 filter조건에 따라 상태가 변경되는 coins이 아닌 고정된 값 coinsList를 가지고 filter를 돌려야함!
      let tmp = coinsList.filter((coin) => coin.toLowerCase().includes(value));
      setCoins(tmp);
      setSerachValue({ ...SerachValue, [name]: value });
    };

    return (
      <DropDownListContainer>
        <ImageBox>
          <img src={serach} width="18px" height="18px" alt="search" />
        </ImageBox>
        <Search
          placeholder="Serach Coin"
          value={inputSerach}
          name="inputSerach"
          onChange={onChange}
        ></Search>
        <CoinUl>
          {coins.map((coin, i) => (
            <CoinList coin={coin} key={i} setChoiceName={setChoiceName} />
          ))}
        </CoinUl>
      </DropDownListContainer>
    );
  }
);

export default Dropdownlists;

const DropDownListContainer = styled.div`
  width: 90%;
  height: 280px;
  margin-top: 10px;
  border: 1px solid gray;
  display: flex;
  position: relative;
  overflow-y: auto;
  flex-direction: column;
`;

const Search = styled.input`
  width: 90%;
  height: 50px;
  border: none;
  border-bottom: 1px solid gray;
  display: flex;
  justify-content: center;
  font-size: 18px;
  background-color: beige;
  padding-left: 40px;
`;

const ImageBox = styled.div`
  width: 20px;
  height: 50px;
  display: flex;
  align-items: center;
  position: absolute;
  margin-left: 10px;
`;

const CoinUl = styled.ul`
  width: 100%;
  height: 80%;
  margin: 0;
  padding: 0;
`;
