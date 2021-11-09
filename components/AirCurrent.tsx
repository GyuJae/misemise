import React from "react";
import { Dimensions, ScrollView, View } from "react-native";
import styled from "styled-components/native";
import { useDailys } from "../contexts/DailyContext";
import Text from "../styled/Text";
import AnotherAirStatus from "./AnotherAirStatus";
import DetailContent from "./DetailContent";
import FaceGrade from "./FaceGrade";
import LocationName from "./LocationName";
import TodayAirStatus from "./TodayAirStatus";
import Weather from "./Weather";

const Container = styled.View<{ grade: string }>`
  background-color: ${(props) =>
    props.grade === "1"
      ? props.theme.mainColor.good
      : props.grade === "2"
      ? props.theme.mainColor.common
      : props.grade === "3"
      ? props.theme.mainColor.bad
      : props.theme.mainColor.veryBad};
  justify-content: center;
  align-items: center;
`;

const FixedWeather = styled.View<{ width: number }>`
  width: ${(props) => `${props.width}px`};
`;

const AirCurrent = () => {
  const { dailys } = useDailys();
  const { width, height } = Dimensions.get("window");
  return (
    <View
      style={{
        height: height,
        backgroundColor:
          dailys[0].khaiGrade === "1"
            ? "#0277BD"
            : dailys[0].khaiGrade === "2"
            ? "#0098A6"
            : dailys[0].khaiGrade === "3"
            ? "#EF6C00"
            : "#C62827",
      }}
    >
      <ScrollView>
        <Container grade={dailys[0].khaiGrade}>
          <LocationName />
          <FaceGrade />
          <AnotherAirStatus {...dailys[0]} />
          <Text content={"오늘 대기"} fontSize={15} />
          <TodayAirStatus />
          <Text content={"세부사항"} fontSize={15} />
          <DetailContent />
        </Container>
      </ScrollView>
      <FixedWeather width={width}>
        <ScrollView>
          <Weather />
        </ScrollView>
      </FixedWeather>
    </View>
  );
};

export default AirCurrent;
