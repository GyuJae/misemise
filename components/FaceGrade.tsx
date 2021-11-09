import React from "react";
import { useDailys } from "../contexts/DailyContext";
import Container from "../styled/Container";
import Text from "../styled/Text";
import Face from "./Face";

const FaceGrade = () => {
  const { dailys } = useDailys();
  const grade = dailys[0].khaiGrade;
  const content = (): string => {
    if (grade === "1") {
      return "좋음";
    } else if (grade === "2") {
      return "보통";
    } else if (grade === "3") {
      return "나쁨";
    }
    return "아주 나쁨";
  };
  return (
    <Container height={300}>
      <Face size={240} />
      <Text fontSize={30} content={content()} marginTop={-15} />
    </Container>
  );
};

export default FaceGrade;
