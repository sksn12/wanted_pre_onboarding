import { useState } from "react";
import styled from "styled-components";
import check from "../../assets/check.svg";
import checked from "../../assets/checked.svg";
import { ValidData } from "../../utils/ValidDate";

interface inputType {
  email: string;
}

const Email = () => {
  const [val, setVal] = useState(false);
  const [hiddenTag, setHiddenTag] = useState(false);
  const [inputValue, setInputValue] = useState<inputType>({ email: "" });

  const { email } = inputValue;

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // !!
    if (ValidData(value)) {
      setVal(true);
    } else {
      setVal(false);
    }

    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  // onBlur => input 클릭 후 다른 곳 클릭시 이벤트 발생
  // focusout도 같은 기능을 담당 하지만 버블링 발생!!!
  const onBlur: React.FocusEventHandler<HTMLInputElement> = () => {
    if (!ValidData(inputValue.email)) setHiddenTag(true);
    else setHiddenTag(false);
  };

  return (
    <>
      <ComponetContainer>
        <Title>E-mail</Title>
        <WrapInputAndImage>
          <ComponentInput
            placeholder="E-mail"
            onChange={onChange}
            name="email"
            value={email}
            onBlur={onBlur}
          ></ComponentInput>
          <ImageContainer>
            {val ? (
              <img src={checked} width="24px" height="24px" alt="checked" />
            ) : (
              <img src={check} width="24px" height="24px" alt="check" />
            )}
          </ImageContainer>
        </WrapInputAndImage>
      </ComponetContainer>
      {hiddenTag ? <HiddenTag>이메일 형식을 확인하세요!</HiddenTag> : null}
    </>
  );
};

export default Email;

export const ComponetContainer = styled.div`
  width: 90%;
  height: 30%;
  margin-bottom: 20px;
`;

export const Title = styled.p`
  font-size: 12px;
  left: 0;
  margin-bottom: 5px;
`;

export const WrapInputAndImage = styled.div`
  width: 100%;
  height: 70%;
  position: relative;
  display: flex;
  align-items: center;
`;

export const ComponentInput = styled.input`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  font-size: 18px;
  position: absolute;
`;

export const ImageContainer = styled.div`
  width: 32px;
  height: 32px;
  position: absolute;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const HiddenTag = styled.p`
  font-size: 14px;
  color: red;
  margin: 0;
  padding-top: 4px;
  left: 0;
`;
