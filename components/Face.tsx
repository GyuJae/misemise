import React from "react";
import { useDailys } from "../contexts/DailyContext";
// import { AntDesign } from "@expo/vector-icons";
// import { FontAwesome5 } from "@expo/vector-icons";
import styled from "styled-components/native";

const ContainerView = styled.View<{ marginTop?: number }>`
  margin-top: ${(props) => (props.marginTop ? `${props.marginTop}px` : "0px")};
`;

const FaceImage = styled.Image<{ size: number }>`
  width: ${(props) => `${props.size}px`};
  height: ${(props) => `${props.size}px`};
`;

const Face = ({
  size,
  wantGrade,
  marginTop,
}: {
  size: number;
  wantGrade?: string;
  marginTop?: number;
}) => {
  const { dailys } = useDailys();
  const grade = wantGrade ? wantGrade : dailys[0].khaiGrade;
  // const icons = () => {
  //   if (grade === "1") {
  //     return <AntDesign name="smileo" size={size} color="white" />;
  //   } else if (grade === "2") {
  //     return <AntDesign name="meh" size={size} color="white" />;
  //   } else if (grade === "3") {
  //     return <AntDesign name="frowno" size={size} color="white" />;
  //   }
  //   return <FontAwesome5 name="angry" size={size} color="white" />;
  // };

  const image_location =
    grade === "1"
      ? require("../assets/face/good.png")
      : grade === "2"
      ? require("../assets/face/normal.png")
      : grade === "3"
      ? require("../assets/face/bad.png")
      : require("../assets/face/veryBad.png");
  return (
    <ContainerView marginTop={marginTop}>
      {<FaceImage size={size} source={image_location} />}
    </ContainerView>
  );
};

export default Face;
