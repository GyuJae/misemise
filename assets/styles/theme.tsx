import { Dimensions } from "react-native";
import { DefaultTheme } from "styled-components";

const { width, height } = Dimensions.get("window");

export const theme: DefaultTheme = {
  fullWidth: `${width}px`,
  fullHeight: `${height}px`,
  halfWidth: `${width / 2}px`,
  halfHeight: `${height / 2}px`,

  mainColor: {
    good: "#0277BD",
    common: "#0098A6",
    bad: "#EF6C00",
    veryBad: "#C62827",
  },
  subColor: {
    good: "#039BE6",
    common: "#00BCD5",
    bad: "#FB8C00",
    veryBad: "#C62D2D",
  },
};
