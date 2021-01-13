
import React, { useState, useEffect, createContext } from "react";
import axios from "axios";

export const ApiDataContext = createContext();

export const ApiDataProvider = (props) => {
  const [userData, setUserData] = useState([]);

  const api = axios.create({
    baseURL: 'https://developers.zomato.com/api/v2.1',
    headers: {
        'user-key': '5da17e64ca3931cc962de699d11dd82e'
    }
}
);
  const api_url = "http://www.mocky.io/v2/5c923b0932000029056bce39";

  async function getApiData() {
    const response = await axios.get(api);
    setUserData([response.data]);
  }

  useEffect(() => {
    getApiData();
  }, []);

  return (
    
    <ApiDataContext.Provider value={[userData, setUserData]}>
      {props.children}
    </ApiDataContext.Provider>
    
  );
};