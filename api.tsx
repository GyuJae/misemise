import axios from "axios";
import { REACT_APP_API_WEATHER_KEY } from "./env";

export const getMeasuringStation = async (city: string) => {
  try {
    const { data } = await axios.get(
      "http://apis.data.go.kr/B552584/MsrstnInfoInqireSvc/getMsrstnList",
      {
        params: {
          serviceKey:
            "X7VhRALdifkkGij+LfmVbmnXX5dXWIUTQR7Ud4kOJ2qb5J3X5ZeQny+wahpR3ok1loY6K+2FMIHpRvJP2LPlZQ==",
          returnType: "json",
          addr: city,
        },
      }
    );
    return data;
  } catch {
    alert("your location error");
  }
};

export const getAirData = async (stationName: string) => {
  try {
    const {
      data: {
        response: {
          body: { items },
        },
      },
    } = await axios.get(
      "http://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getMsrstnAcctoRltmMesureDnsty",
      {
        params: {
          serviceKey:
            "X7VhRALdifkkGij+LfmVbmnXX5dXWIUTQR7Ud4kOJ2qb5J3X5ZeQny+wahpR3ok1loY6K+2FMIHpRvJP2LPlZQ==",
          returnType: "json",
          stationName,
          dataTerm: "DAILY",
          ver: "1.3",
        },
      }
    );
    return items;
  } catch {
    alert("air data error");
  }
};

export const getWeatherData = async (latitude: number, longitude: number) => {
  const { daily } = await fetch(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=alerts&appid=${REACT_APP_API_WEATHER_KEY}&units=metric`
  )
    .then((res) => {
      if (!res.ok) {
        throw new Error("api error");
      }
      return res.json();
    })
    .catch((e) => {
      alert(e);
    });
  return daily;
};
