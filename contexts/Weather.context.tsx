import React from "react";
import { createContext, useContext, useState } from "react";
import { IWeatherDaily } from "../type";

interface IContext {
  weathers: IWeatherDaily[];
  setWeather: Function;
}
const WeatherContext = createContext<IContext>({
  weathers: [],
  setWeather: Function,
});

export const WeatherProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [weathers, setWeather] = useState<IWeatherDaily[]>([]);

  return (
    <WeatherContext.Provider
      value={{
        weathers,
        setWeather,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeathers = () => useContext(WeatherContext);
