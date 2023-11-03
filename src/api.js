import axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5/',
    params:{
        units: "metric",
        lang: "kr",
        appid: "4f4bcb406c1ce5f3d6e2b4e9458c0fe2",
    },
  });

  export const getWeather = () =>{
    const lat = 37.567527100882025;
    const lon = 126.93157566233118 ;
    return instance.get(`weather?lat=${lat}&lon=${lon}`)
  }