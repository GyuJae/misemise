import React from "react";
import { Dimensions } from "react-native";
import styled from "styled-components/native";

const ContainerView = styled.View<{
  width: number;
  height: number;
  grade?: string;
}>`
  width: ${(props) => `${props.width}px`};
  height: ${(props) => `${props.height}px`};
  justify-content: center;
  align-items: center;
  background-color: ${(props) =>
    props.grade === "1"
      ? props.theme.subColor.good
      : props.grade === "2"
      ? props.theme.subColor.common
      : props.grade === "3"
      ? props.theme.subColor.bad
      : props.grade
      ? props.theme.subColor.veryBad
      : "null"};
`;

const Container = ({
  children,
  height,
  width,
  grade,
}: {
  children: React.ReactNode;
  height: number;
  width?: number;
  grade?: string;
}) => {
  const { width: fullWidth } = Dimensions.get("window");
  return (
    <ContainerView
      width={width ? width : fullWidth}
      height={height}
      grade={grade}
    >
      {children}
    </ContainerView>
  );
};

export default Container;
