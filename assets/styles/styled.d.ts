import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    fullWidth: string;
    fullHeight: string;
    halfWidth: string;
    halfHeight: string;
    mainColor: {
      good: string;
      common: string;
      bad: string;
      veryBad: string;
    };
    subColor: {
      good: string;
      common: string;
      bad: string;
      veryBad: string;
    };
  }
}
