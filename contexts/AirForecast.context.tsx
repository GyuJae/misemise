import React from "react";
import { createContext, useContext, useState } from "react";
import { IAirForecast } from "../type";

interface IContext {
  airForecas: IAirForecast[];
  setAirForecast: Function;
}

const AirForecastContext = createContext<IContext>({
  airForecas: [],
  setAirForecast: Function,
});

export const AirForecastProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [airForecas, setAirForecast] = useState<IAirForecast[]>([]);
  return (
    <AirForecastContext.Provider
      value={{
        airForecas,
        setAirForecast,
      }}
    >
      {children}
    </AirForecastContext.Provider>
  );
};

export const useAirForecast = () => useContext(AirForecastContext);
