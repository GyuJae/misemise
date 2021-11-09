import React from "react";
import { Dimensions } from "react-native";
import styled from "styled-components/native";
import Container from "../styled/Container";
import Text from "../styled/Text";
import { IWeatherDaily } from "../type";

const WeatherIcon = styled.Image`
  width: 50px;
  height: 50px;
`;

const AnotherWeatherItem: React.FC<IWeatherDaily> = (weather) => {
  const { width } = Dimensions.get("window");
  const getWeek = (dt: number): string => {
    const date = new Date(dt * 1000).toString().substring(0, 10).split(" ");

    const weekObj = (week: string): string => {
      if (week === "Mon") {
        return "월";
      } else if (week === "Tue") {
        return "화";
      } else if (week === "Wed") {
        return "수";
      } else if (week === "Thu") {
        return "목";
      } else if (week === "Fri") {
        return "금";
      } else if (week === "Sat") {
        return "토";
      }
      return "일";
    };
    const week = weekObj(date[0]);

    return week;
  };
  return (
    <Container width={width / 5} height={150}>
      <Text fontSize={15} content={getWeek(weather.dt)} />
      <WeatherIcon
        source={{
          uri: `http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`,
        }}
      />
      <Text
        fontSize={12}
        content={`${weather.temp.max.toFixed(0)}º/ ${weather.temp.min.toFixed(
          0
        )}º`}
      />
    </Container>
  );
};

export default AnotherWeatherItem;
