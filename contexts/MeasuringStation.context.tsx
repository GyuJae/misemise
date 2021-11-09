import React from "react";
import { createContext, useContext, useState } from "react";
import { IMeasuringStation } from "../type";

interface IContext {
  station: IMeasuringStation;
  setStation: Function;
}
const MeasuringStationContext = createContext<IContext>({
  station: {
    addr: "",
    dmX: "",
    dmY: "",
    item: "",
    mangName: "",
    stationName: "",
    year: "",
  },
  setStation: Function,
});

export const MeasuringStationProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [station, setStation] = useState<IMeasuringStation>({
    addr: "",
    dmX: "",
    dmY: "",
    item: "",
    mangName: "",
    stationName: "",
    year: "",
  });

  return (
    <MeasuringStationContext.Provider
      value={{
        station,
        setStation,
      }}
    >
      {children}
    </MeasuringStationContext.Provider>
  );
};

export const useStation = () => useContext(MeasuringStationContext);
