import invisible from "../../assets/invisible.svg";
import visible from "../../assets//visible.svg";
import {
  ComponetContainer,
  Title,
  WrapInputAndImage,
  ComponentInput,
  ImageContainer,
} from "./Email";
import { useState } from "react";

interface inputType {
  password: string;
}

const Password = () => {
  const [selecte, setSelecte] = useState(false);
  const [inputValue, setInputValue] = useState<inputType>({ password: "" });

  const { password } = inputValue;

  const onVisible = () => setSelecte(!selecte);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  return (
    <>
      <ComponetContainer>
        <Title>Password</Title>
        <WrapInputAndImage>
          <ComponentInput
            placeholder="Password"
            onChange={onChange}
            name="password"
            value={password}
            type={selecte ? "text" : "password"}
          ></ComponentInput>
          <ImageContainer onClick={onVisible}>
            {selecte ? (
              <img src={visible} width="24px" height="24px" alt="visible" />
            ) : (
              <img src={invisible} width="24px" height="24px" alt="invisible" />
            )}
          </ImageContainer>
        </WrapInputAndImage>
      </ComponetContainer>
    </>
  );
};

export default Password;
