import React from "react";
import { Dimensions } from "react-native";
import Container from "../styled/Container";
import Text from "../styled/Text";
import Face from "./Face";

interface IAnotherAirStatusItem {
  wantGrade: string;
  dustValue: string;
  dustName: string;
}

const AnotherAirStatusItem: React.FC<IAnotherAirStatusItem> = ({
  wantGrade,
  dustValue,
  dustName,
}) => {
  const { width } = Dimensions.get("window");
  const content = (): string => {
    if (wantGrade === "1") {
      return "좋음";
    } else if (wantGrade === "2") {
      return "보통";
    } else if (wantGrade === "3") {
      return "나쁨";
    }
    return "아주 나쁨";
  };
  return (
    <Container height={120} width={width / 3.3}>
      <Text content={dustName} fontSize={13} />
      <Face wantGrade={wantGrade} size={35} marginTop={6} />
      <Text content={content()} fontSize={16} marginTop={5} />
      <Text content={dustValue} fontSize={12} />
    </Container>
  );
};

export default AnotherAirStatusItem;
