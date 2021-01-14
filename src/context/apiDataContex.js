import React, { useState, useEffect, createContext } from "react";
import api from "../api/api";

export const ApiDataContext = createContext();

export const ApiDataProvider = (props) => {
  const [cityData, setCityData] = useState();

  const api_url =
    "https://developers.zomato.com/api/v2.1/locations?query=new%20york"; //para testar api

  async function getApiData() {
    const response = await api.get(api_url);
    const city = response.data;
    setCityData(city);
    // console.log(city)
    // console.log(city.location_suggestions[0].city_name)
  }

  useEffect(() => {
    getApiData();
  }, []);
  console.log("aquuuui carai" + cityData);
  return (
    <ApiDataContext.Provider value={[cityData, setCityData]}>
      {props.children}
    </ApiDataContext.Provider>
  );
};
