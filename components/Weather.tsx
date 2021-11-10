import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";
import { useWeathers } from "../contexts/Weather.context";
import { AntDesign } from "@expo/vector-icons";
import DetailWeather from "./DetailWeather";
import { weatherBackgroundColors } from "../weather.contants";

const Container = styled.View<{ backgroundColor: string }>`
  height: 60px;
  background-color: ${(props) => props.backgroundColor};
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const WeatherIcon = styled.Image`
  width: 50px;
  height: 50px;
`;

const Temp = styled.Text`
  font-size: 24px;
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

const Weather = () => {
  const [detail, setDetail] = useState<boolean>(true);
  const { weathers } = useWeathers();
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
    <>
      {detail ? (
        <DetailWeather setDetail={setDetail} />
      ) : (
        <TouchableOpacity onPress={() => setDetail(true)}>
          <Container
            backgroundColor={
              weatherBackgroundColors[weathers[0].weather[0].main]
            }
          >
            <MainName>
              <MainText>날씨</MainText>
            </MainName>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <WeatherIcon source={weatherIcon} />
              <Temp>{weathers[0].temp.day}°</Temp>
            </View>
            <AntDesign name="upcircle" size={24} color="white" />
          </Container>
        </TouchableOpacity>
      )}
    </>
  );
};

export default Weather;
