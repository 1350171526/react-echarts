import api from "@/utils/http";

export const getBaseWeatherApi = (codeArr) => {
  return api({
    url:'baseWeather',
    method:'GET',
    params: codeArr
  })
}

export const getAllWeatherApi = (codeArr) => {
  return api({
    url:'/allWeather',
    method:'GET',
    params: codeArr
  })
}

export const getOneWeatherApi = (codeArr) => {
  return api({
    url:'/oneBaseWeather',
    method:'GET',
    params: codeArr
  })
}