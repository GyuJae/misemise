import React from "react";
import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./assets/styles/theme";
import { MeasuringStationProvider } from "./contexts/MeasuringStation.context";
import { DailyProvider } from "./contexts/DailyContext";
import Main from "./Main";
import { LocationProvider } from "./contexts/Location.context";
import { WeatherProvider } from "./contexts/Weather.context";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <MeasuringStationProvider>
        <LocationProvider>
          <DailyProvider>
            <WeatherProvider>
              <StatusBar barStyle="default" />
              <Main />
            </WeatherProvider>
          </DailyProvider>
        </LocationProvider>
      </MeasuringStationProvider>
    </ThemeProvider>
  );
}
