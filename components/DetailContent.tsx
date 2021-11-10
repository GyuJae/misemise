import React from "react";
import { Dimensions } from "react-native";
import styled from "styled-components/native";
import { useDailys } from "../contexts/DailyContext";
import { useStation } from "../contexts/MeasuringStation.context";
import Text from "../styled/Text";

const ContanerView = styled.View<{ width: number; grade: string }>`
  width: ${(props) => `${props.width}px`};
  align-items: center;
  height: 290px;
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
      : props.theme.subColor.veryBad};
`;

const DetailContent = () => {
  const { dailys } = useDailys();
  const { station } = useStation();
  const { width } = Dimensions.get("window");
  const content = (): string => {
    if (dailys[0].khaiGrade === "1") {
      return "좋음";
    } else if (dailys[0].khaiGrade === "2") {
      return "보통";
    } else if (dailys[0].khaiGrade === "3") {
      return "나쁨";
    }
    return "아주 나쁨";
  };
  return (
    <ContanerView width={width / 1.09} grade={dailys[0].khaiGrade}>
      <Text
        fontSize={12}
        content={`업데이트 시간: ${dailys[0].dataTime}`}
        marginTop={8}
      />
      <Text
        fontSize={12}
        content={`PM10 측정소 이름: ${station.stationName}`}
        marginTop={8}
      />
      <Text
        fontSize={12}
        content={`PM2.5 측정소 이름: ${station.stationName}`}
        marginTop={8}
      />
      <Text
        fontSize={12}
        content={`NO2 측정소 이름: ${station.stationName}`}
        marginTop={8}
      />
      <Text
        fontSize={12}
        content={`O3 측정소 이름: ${station.stationName}`}
        marginTop={8}
      />
      <Text
        fontSize={12}
        content={`CO 측정소 이름: ${station.stationName}`}
        marginTop={8}
      />
      <Text
        fontSize={12}
        content={`SO2 측정소 이름: ${station.stationName}`}
        marginTop={8}
      />
      <Text
        fontSize={12}
        content={`pm10 측정망 분류: ${station.mangName}`}
        marginTop={8}
      />
      <Text
        fontSize={12}
        content={`pm2.5 측정망 분류: ${station.mangName}`}
        marginTop={8}
      />
      <Text
        fontSize={12}
        content={`통합지수 값: ${dailys[0].khaiValue}`}
        marginTop={8}
      />
      <Text
        fontSize={12}
        content={`통합지수 상태: ${content()}`}
        marginTop={8}
      />
    </ContanerView>
  );
};

export default DetailContent;
