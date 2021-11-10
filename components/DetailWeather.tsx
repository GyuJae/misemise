import React from "react";
import { Dimensions, ScrollView, TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";
import { useWeathers } from "../contexts/Weather.context";
import Text from "../styled/Text";
import {
  icons,
  weatherBackgroundColors,
  weatherMainBackgroundColors,
  weathersMain,
} from "../weather.contants";
import { AntDesign } from "@expo/vector-icons";
import AnotherWeatherItem from "./AnotherWeatherItem";
import { Fontisto } from "@expo/vector-icons";
import MoreWeather from "./MoreWeather";
import Face from "./Face";
import { useDailys } from "../contexts/DailyContext";

const ContainerView = styled.View<{
  width: number;
  height: number;
  backgroundColor: string;
}>`
  width: ${(props) => `${props.width}px`};
  height: ${(props) => `${props.height}px`};
  align-items: center;
  background-color: ${(props) => props.backgroundColor};
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`;

const MinMaxTemp = styled.Text`
  color: white;
  font-weight: 800;
  font-size: 14px;
  margin-bottom: 20px;
`;

const MainContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

const Temp = styled.Text`
  font-size: 18px;
  color: white;
  margin-left: 7px;
`;

const MainName = styled.View`
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const MainText = styled.Text`
  font-size: 10px;
  color: white;
`;

const DetailMiseMiseContainer = styled.View<{
  height: number;
  width: number;
  backgroundColor: string;
}>`
  height: ${(props) => `${props.height}px`};
  width: ${(props) => `${props.width}px`};
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  background-color: ${(props) => props.backgroundColor};
`;

const WeatherIcon = styled.Image`
  width: 150px;
  height: 150px;
  margin-top: 10px;
`;

const DetailWeather = ({
  setDetail,
}: {
  setDetail: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { width, height } = Dimensions.get("window");
  const { weathers } = useWeathers();
  const main = weathers[0].weather[0].main;
  const { dailys } = useDailys();
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
  const icon = weathers[0].weather[0].icon;
  const weatherIcon =
    icon === "01d"
      ? require(`../assets/weathers/01d.png`)
      : icon === "02d"
      ? require(`../assets/weathers/02d.png`)
      : icon === "03d"
      ? require(`../assets/weathers/03d.png`)
      : icon === "04d"
      ? require(`../assets/weathers/04d.png`)
      : icon === "09d"
      ? require(`../assets/weathers/09d.png`)
      : icon === "10d"
      ? require(`../assets/weathers/10d.png`)
      : icon === "11d"
      ? require(`../assets/weathers/11d.png`)
      : icon === "13d"
      ? require(`../assets/weathers/13d.png`)
      : require(`../assets/weathers/50d.png`);
  return (
    <ContainerView
      height={height}
      width={width}
      backgroundColor={weatherMainBackgroundColors[main]}
    >
      <ScrollView>
        <MainContainer>
          <Text content={weathersMain[main]} fontSize={28} marginTop={28} />
          <WeatherIcon source={weatherIcon} />
          <Text content={weathers[0].temp.day + "°"} fontSize={40} />
          <MinMaxTemp>
            최고 {weathers[0].temp.max.toFixed(0)}º / 최저{" "}
            {weathers[0].temp.min.toFixed(0)}º
          </MinMaxTemp>
        </MainContainer>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{
            backgroundColor: weatherBackgroundColors[main],
          }}
        >
          {weathers.map((weather, idx) => (
            <AnotherWeatherItem key={idx} {...weather} />
          ))}
        </ScrollView>
        <MoreWeather />
      </ScrollView>
      <TouchableOpacity onPress={() => setDetail(false)}>
        <DetailMiseMiseContainer
          height={60}
          width={width}
          backgroundColor={
            dailys[0].khaiGrade === "1"
              ? "#0277BD"
              : dailys[0].khaiGrade === "2"
              ? "#0098A6"
              : dailys[0].khaiGrade === "3"
              ? "#EF6C00"
              : "#C62827"
          }
        >
          <MainName>
            <MainText>미세먼지</MainText>
          </MainName>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Face size={50} />
            <Temp>{content()}</Temp>
          </View>
          <AntDesign name="upcircle" size={24} color="white" />
        </DetailMiseMiseContainer>
      </TouchableOpacity>
    </ContainerView>
  );
};

export default DetailWeather;
