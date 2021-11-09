export interface IMeasuringStation {
  addr: string;
  dmX: string;
  dmY: string;
  item: string;
  mangName: string;
  stationName: string;
  year: string;
}

export interface IDaily {
  items: string;
  dataTime: string;
  mangName: string;
  so2Value: string;
  coValue: string;
  o3Value: string;
  no2Value: string;
  pm10Value: string;
  pm10Value24: string;
  pm25Value: string;
  pm25Value24: string;
  khaiValue: string;
  khaiGrade: string;
  so2Grade: string;
  coGrade: string;
  o3Grade: string;
  no2Grade: string;
  pm10Grade: string;
  pm25Grade: string;
  pm10Grade1h: string;
  pm25Grade1h: string;
  so2Flag: string;
  coFlag: string;
  o3Flag: string;
  no2Flag: string;
  pm10Flag: string;
  pm25Flag: string;
}

interface IFeelsLike {
  day: number;
  eve: number;
  morn: number;
  night: number;
}

export interface ITemp {
  day: number;
  eve: number;
  max: number;
  min: number;
  morn: number;
  night: number;
}

interface IWeather {
  description: string;
  icon: string;
  id: number;
  main: string;
}

export interface IWeatherDaily {
  clouds: number;
  dew_point: number;
  dt: number;
  feels_like: IFeelsLike;
  humidity: number;
  moon_phase: number;
  moonrise: number;
  moonset: number;
  pop: number;
  pressure: number;
  rain: number;
  sunrise: number;
  sunset: number;
  temp: ITemp;
  uvi: number;
  weather: IWeather[];
  wind_deg: number;
  wind_gust: number;
  wind_speed: number;
}
export interface IAirForecast {
  frcstOneCn: string;
  frcstTwoCn: string;
  frcstThreeCn: string;
  frcstFourCn: string;
  presnatnDt: string;
  frcstOneDt: string;
  frcstTwoDt: string;
  frcstThreeDt: string;
  frcstFourDt: string;
  gwthcnd: string;
}
