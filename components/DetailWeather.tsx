import React from "react";
import { Dimensions, ScrollView } from "react-native";
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

const Container = styled.View<{
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

const WeatherIcon = styled.Image`
  width: 220px;
  height: 170px;
`;

const DeleteBtn = styled.TouchableOpacity`
  position: absolute;
  right: 23px;
  top: 20px;
`;

const MinMaxTemp = styled.Text`
  color: white;
  font-weight: 800;
  font-size: 16px;
  margin-bottom: 20px;
`;

const DetailWeather = ({
  setDetail,
}: {
  setDetail: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { width, height } = Dimensions.get("window");
  const { weathers } = useWeathers();
  const main = weathers[0].weather[0].main;
  return (
    <Container
      height={height / 1.7}
      width={width}
      backgroundColor={weatherMainBackgroundColors[main]}
    >
      <DeleteBtn onPress={() => setDetail(false)}>
        <AntDesign name="closecircle" size={20} color="white" />
      </DeleteBtn>
      <Text content={weathersMain[main]} fontSize={28} marginTop={28} />
      <Fontisto
        name={icons[weathers[0].weather[0].main]}
        size={120}
        color="white"
        style={{
          marginTop: 20,
          marginBottom: 20,
        }}
      />
      <Text content={weathers[0].temp.day + "°"} fontSize={40} />
      <MinMaxTemp>
        최고 {weathers[0].temp.max.toFixed(0)}º / 최저{" "}
        {weathers[0].temp.min.toFixed(0)}º
      </MinMaxTemp>
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
    </Container>
  );
};

export default DetailWeather;
