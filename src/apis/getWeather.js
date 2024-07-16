import api from "@/utils/http";

export const getBaseWeatherApi = () => {
  return api({
    url:'baseWeather',
    method:'GET'
  })
}

export const getAllWeatherApi = () => {
  return api({
    url:'/allWeather',
    method:'GET'
  })
}

export const getOneWeatherApi = () => {
  return api({
    url:'/oneBaseWeather',
    method:'GET'
  })
}