import React from "react";
import { Dimensions } from "react-native";
import styled from "styled-components/native";
import { useWeathers } from "../contexts/Weather.context";
import { weatherMainBackgroundColors } from "../weather.contants";
import MoreWeatherItem from "./MoreWeatherItem";

const ContainerView = styled.View<{ width: number; backgroundColor: string }>`
  width: ${(props) => `${props.width}px`};
  background-color: ${(props) => props.backgroundColor};
  justify-content: center;
  align-items: center;
`;

const MoreWeather = () => {
  const { width } = Dimensions.get("window");
  const { weathers } = useWeathers();
  return (
    <ContainerView
      width={width}
      backgroundColor={weatherMainBackgroundColors[weathers[0].weather[0].main]}
    >
      <MoreWeatherItem />
    </ContainerView>
  );
};

export default MoreWeather;
