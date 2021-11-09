import React from "react";
import { createContext, useContext, useState } from "react";

interface IContext {
  location: string;
  setLocation: Function;
}
const LocationContext = createContext<IContext>({
  location: "",
  setLocation: Function,
});

export const LocationProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [location, setLocation] = useState<string>("");

  return (
    <LocationContext.Provider
      value={{
        location,
        setLocation,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};

export const useLocation = () => useContext(LocationContext);
