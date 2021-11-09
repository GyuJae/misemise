import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import AirCurrent from "./components/AirCurrent";
import Loading from "./components/Loading";
import * as Location from "expo-location";
import { REACT_APP_API_GOOGLE_KEY } from "./env";
import { getAirData, getMeasuringStation, getWeatherData } from "./api";
import { IDaily, IMeasuringStation, IWeatherDaily } from "./type";
import { useStation } from "./contexts/MeasuringStation.context";
import { useDailys } from "./contexts/DailyContext";
import { useLocation } from "./contexts/Location.context";
import { useWeathers } from "./contexts/Weather.context";

const Container = styled.View``;

const Main = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [permission, setPermission] = useState<boolean>(false);
  const { setDailys } = useDailys();
  const { setStation } = useStation();
  const { setLocation } = useLocation();
  const { setWeather } = useWeathers();
  const getData = async () => {
    try {
      const { granted } = await Location.requestForegroundPermissionsAsync();
      if (!granted) {
        setPermission(false);
      }
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync({ accuracy: 5 });
      Location.setGoogleApiKey(REACT_APP_API_GOOGLE_KEY);
      const location = await Location.reverseGeocodeAsync(
        { latitude, longitude },
        { useGoogleMaps: false }
      );
      const {
        response: {
          body: { items },
        },
      } = await getMeasuringStation(
        location[0].city ? location[0].city : "서울특별시"
      );
      setLocation(`${location[0].city} ${location[0].street}`);
      const MeasuringStation: IMeasuringStation = items[0];
      setStation(MeasuringStation);
      const data: IDaily[] = await getAirData(MeasuringStation.stationName);
      setDailys(data);
      const weatherData: IWeatherDaily[] = await getWeatherData(
        latitude,
        longitude
      );
      setWeather(weatherData);
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return <Container>{loading ? <Loading /> : <AirCurrent />}</Container>;
};

export default Main;
