import React from "react";
import { createContext, useContext, useState } from "react";
import { IDaily } from "../type";

interface IContext {
  dailys: IDaily[];
  setDailys: Function;
}

const DailyContext = createContext<IContext>({
  dailys: [],
  setDailys: Function,
});

export const DailyProvider = ({ children }: { children: React.ReactNode }) => {
  const [dailys, setDailys] = useState<IDaily[]>([]);
  return (
    <DailyContext.Provider
      value={{
        dailys,
        setDailys,
      }}
    >
      {children}
    </DailyContext.Provider>
  );
};

export const useDailys = () => useContext(DailyContext);
