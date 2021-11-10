import React from "react";
import { Dimensions, ScrollView } from "react-native";
import styled from "styled-components/native";
import { useDailys } from "../contexts/DailyContext";
import Container from "../styled/Container";
import { IDaily } from "../type";
import AnotherAirStatusItem from "./AnotherAirStatusItem";

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
  border-radius: 4px;
  background-color: ${(props) =>
    props.grade === "1"
      ? props.theme.subColor.good
      : props.grade === "2"
      ? props.theme.subColor.common
      : props.grade === "3"
      ? props.theme.subColor.bad
      : props.theme.subColor.veryBad};
`;

const AnotherAirStatus: React.FC<IDaily> = ({
  so2Grade,
  so2Value,
  coGrade,
  coValue,
  o3Grade,
  o3Value,
  no2Grade,
  no2Value,
  pm10Grade,
  pm10Value,
  pm25Grade,
  pm25Value,
  khaiGrade,
}) => {
  const { width } = Dimensions.get("window");
  return (
    <ContainerView height={120} grade={khaiGrade} width={width / 1.09}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
      >
        {pm10Grade && (
          <AnotherAirStatusItem
            wantGrade={pm10Grade}
            dustValue={pm10Value + " ㎍/㎥"}
            dustName={"미세먼지"}
          />
        )}
        {pm25Grade && (
          <AnotherAirStatusItem
            wantGrade={pm25Grade}
            dustValue={pm25Value + " ㎍/㎥"}
            dustName={"초미세먼지"}
          />
        )}
        {so2Grade && (
          <AnotherAirStatusItem
            wantGrade={so2Grade}
            dustValue={so2Value + " ppm"}
            dustName={"아황산가스"}
          />
        )}
        {coGrade && (
          <AnotherAirStatusItem
            wantGrade={coGrade}
            dustValue={coValue + " ppm"}
            dustName={"일산화탄소"}
          />
        )}
        {o3Grade && (
          <AnotherAirStatusItem
            wantGrade={o3Grade}
            dustValue={o3Value + " ppm"}
            dustName={"오존"}
          />
        )}
        {no2Grade && (
          <AnotherAirStatusItem
            wantGrade={no2Grade}
            dustValue={no2Value + " ppm"}
            dustName={"이산화질소"}
          />
        )}
      </ScrollView>
    </ContainerView>
  );
};

export default AnotherAirStatus;
