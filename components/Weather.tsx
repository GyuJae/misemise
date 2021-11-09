import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import styled from "styled-components/native";
import { useWeathers } from "../contexts/Weather.context";
import { AntDesign } from "@expo/vector-icons";
import DetailWeather from "./DetailWeather";

const Container = styled.View`
  height: 60px;
  background-color: #e7e7e7;
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
`;

const MainName = styled.View`
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const MainText = styled.Text`
  font-size: 10px;
`;

const Weather = () => {
  const [detail, setDetail] = useState<boolean>(false);
  const { weathers } = useWeathers();

  return (
    <>
      {detail ? (
        <DetailWeather setDetail={setDetail} />
      ) : (
        <TouchableOpacity onPress={() => setDetail(true)}>
          <Container>
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
              <WeatherIcon
                source={{
                  uri: `http://openweathermap.org/img/wn/${weathers[0].weather[0].icon}@2x.png`,
                }}
              />
              <Temp>{weathers[0].temp.day}°</Temp>
            </View>
            <AntDesign name="upcircle" size={24} color="black" />
          </Container>
        </TouchableOpacity>
      )}
    </>
  );
};

export default Weather;
