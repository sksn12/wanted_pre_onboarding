import styled from "styled-components";
import Input from "./components/Input/Input";
import Slider from "./components/Slider/Slider";
import Tab from "./components/Tab";
import Toggle from "./components/Toggle";
import Dropdown from "./components/Dropdown/Dropdown";

const App = () => {
  return (
    <Total>
      <Main>
        <UnderBar />
        <Toggle />
        <UnderBar />
        <Tab />
        <UnderBar />
        <Slider />
        <UnderBar />
        <Input />
        <UnderBar />
        <Dropdown />
      </Main>
    </Total>
  );
};

export default App;

const Total = styled.div`
  width: 100%;
  height: 100%;
  background-color: wheat;
  display: flex;
  justify-content: center;
`;

const Main = styled.div`
  width: 60%;
  height: 100%;
  background-color: ivory;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  overflow-y: scroll;
`;

const UnderBar = styled.div`
  width: 80%;
  height: 60px;
  margin-bottom: 60px;
  border-bottom: 2px solid grey;
`;
