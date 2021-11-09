import React from "react";
import { Dimensions, ScrollView } from "react-native";
import styled from "styled-components/native";
import { useDailys } from "../contexts/DailyContext";
import TodayAirStatusItem from "./TodayAirStatusItem";

const ContainerView = styled.View<{
  width: number;
  height: number;
  grade?: string;
}>`
  width: ${(props) => `${props.width}px`};
  height: ${(props) => `${props.height}px`};
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  margin-top: 10px;
  border-radius: 4px;
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

const TodayAirStatus = () => {
  const { dailys } = useDailys();
  const { width } = Dimensions.get("window");
  return (
    <ContainerView
      height={110}
      width={width / 1.09}
      grade={dailys[0].khaiGrade}
    >
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {dailys.map((daily, idx) => (
          <TodayAirStatusItem daily={daily} key={idx} />
        ))}
      </ScrollView>
    </ContainerView>
  );
};

export default TodayAirStatus;
