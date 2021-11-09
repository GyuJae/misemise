import React from "react";
import styled from "styled-components/native";

const TextText = styled.Text<{ fontSize: number; marginTop?: number }>`
  color: white;
  font-size: ${(props) => `${props.fontSize}px`};
  margin-top: ${(props) => (props.marginTop ? `${props.marginTop}px` : "0px")};
`;

interface IText {
  content: string;
  fontSize: number;
  marginTop?: number;
}

const Text: React.FC<IText> = ({ content, fontSize, marginTop }) => {
  return (
    <TextText fontSize={fontSize} marginTop={marginTop}>
      {content}
    </TextText>
  );
};

export default Text;
