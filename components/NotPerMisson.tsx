import React from "react";
import { Dimensions } from "react-native";
import Container from "../styled/Container";
import Text from "../styled/Text";
import Face from "./Face";

const NotPerMisson = () => {
  const { width, height } = Dimensions.get("window");
  return (
    <Container width={width} height={height} grade={"4"}>
      <Face size={450} wantGrade={"4"} />
      <Text content={"권한을 허용하여 주세요"} fontSize={20} />
    </Container>
  );
};

export default NotPerMisson;
