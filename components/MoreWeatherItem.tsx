import React from "react";
import { Dimensions } from "react-native";
import styled from "styled-components/native";
import { useWeathers } from "../contexts/Weather.context";
import { Feather } from "@expo/vector-icons";
import { weatherBackgroundColors } from "../weather.contants";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import Text from "../styled/Text";

const ContainerView = styled.View<{ width: number; backgroundColor: string }>`
  width: ${(props) => `${props.width}px`};
  background-color: ${(props) => props.backgroundColor};
  height: 495px;
  margin-top: 20px;
  border-radius: 20px;
  margin-bottom: 20px;
`;

const ItemContainer = styled.View<{ width: number; border: boolean }>`
  width: ${(props) => `${props.width}px`};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  border-top-width: ${(props) => (props.border ? "1px" : "0px")};
  border-top-color: #fff;
`;

const IconContainer = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Icon = styled.Image`
  width: 55px;
  height: 50px;
  margin-right: 7px;
`;

const MoreWeatherItem = () => {
  const { width } = Dimensions.get("window");
  const { weathers } = useWeathers();
  const uviStandard = (u: number): string => {
    if (u >= 11) {
      return "위험";
    } else if (u < 11 && u >= 8) {
      return "매우높음";
    } else if (u < 8 && u >= 6) {
      return "높음";
    } else if (u < 6 && u >= 3) {
      return "보통";
    }
    return "낮음";
  };
  return (
    <ContainerView
      width={width / 1.05}
      backgroundColor={weatherBackgroundColors[weathers[0].weather[0].main]}
    >
      <ItemContainer width={width / 1.05} border={false}>
        <IconContainer>
          <Icon source={require("../assets/more_weathers/sunrise.png")} />
          <Text fontSize={15} content={"일출"} />
        </IconContainer>
        <Text
          fontSize={15}
          content={new Date(weathers[0].sunrise * 1000)
            .toString()
            .split(" ")[4]
            .slice(0, 5)}
        />
      </ItemContainer>
      <ItemContainer width={width / 1.05} border={true}>
        <IconContainer>
          <Icon source={require("../assets/more_weathers/sunset.png")} />
          <Text fontSize={15} content={"일몰"} />
        </IconContainer>
        <Text
          fontSize={15}
          content={new Date(weathers[0].sunset * 1000)
            .toString()
            .split(" ")[4]
            .slice(0, 5)}
        />
      </ItemContainer>
      <ItemContainer width={width / 1.05} border={true}>
        <IconContainer>
          <Icon source={require("../assets/more_weathers/sun.png")} />
          <Text fontSize={15} content={"자외선지수"} />
        </IconContainer>
        <Text
          fontSize={15}
          content={weathers[0].uvi + " (" + uviStandard(weathers[0].uvi) + ")"}
        />
      </ItemContainer>
      <ItemContainer width={width / 1.05} border={true}>
        <IconContainer>
          <Icon source={require("../assets/more_weathers/water.png")} />
          <Text fontSize={15} content={"습도"} />
        </IconContainer>
        <Text fontSize={15} content={weathers[0].humidity + "%"} />
      </ItemContainer>
      <ItemContainer width={width / 1.05} border={true}>
        <IconContainer>
          <Icon source={require("../assets/more_weathers/wind.png")} />
          <Text fontSize={15} content={"바람"} />
        </IconContainer>
        <Text fontSize={15} content={weathers[0].wind_speed + "m/s"} />
      </ItemContainer>
      <ItemContainer width={width / 1.05} border={true}>
        <IconContainer>
          <Icon source={require("../assets/more_weathers/moonrise.png")} />
          <Text fontSize={15} content={"월출"} />
        </IconContainer>
        <Text
          fontSize={15}
          content={new Date(weathers[0].moonrise * 1000)
            .toString()
            .split(" ")[4]
            .slice(0, 5)}
        />
      </ItemContainer>
      <ItemContainer width={width / 1.05} border={true}>
        <IconContainer>
          <Icon source={require("../assets/more_weathers/moon_set.png")} />
          <Text fontSize={15} content={"월몰"} />
        </IconContainer>
        <Text
          fontSize={15}
          content={new Date(weathers[0].moonset * 1000)
            .toString()
            .split(" ")[4]
            .slice(0, 5)}
        />
      </ItemContainer>
    </ContainerView>
  );
};

export default MoreWeatherItem;
