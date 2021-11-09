import React from "react";
import { Dimensions } from "react-native";
import styled from "styled-components/native";
import Text from "../styled/Text";
import { IDaily } from "../type";
import Face from "./Face";

interface ITodayAirStatusItem {
  daily: IDaily;
}

const ContanerView = styled.View<{ width: number }>`
  width: ${(props) => `${props.width}px`};
  justify-content: center;
  align-items: center;
  height: 110px;
`;

const TodayAirStatusItem: React.FC<ITodayAirStatusItem> = ({
  daily: { khaiGrade, dataTime },
}) => {
  const { width } = Dimensions.get("window");
  const content = (): string => {
    if (khaiGrade === "1") {
      return "좋음";
    } else if (khaiGrade === "2") {
      return "보통";
    } else if (khaiGrade === "3") {
      return "나쁨";
    }
    return "아주 나쁨";
  };
  return (
    <ContanerView width={width / 6}>
      <Text fontSize={13} content={dataTime.split(" ")[1]} />
      <Face size={40} wantGrade={khaiGrade} marginTop={0} />
      <Text fontSize={15} content={content()} marginTop={0} />
    </ContanerView>
  );
};

export default TodayAirStatusItem;
