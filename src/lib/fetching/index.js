import React, { createContext, useState, useEffect } from "react"
import {eventsAPI} from "../../api/events-api";

export const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [data, setData] = useState(null)

const fetchData =  async () => {
    const res = await eventsAPI.getEvents()
    setData(res.data.map(item => {
        return { key: item.id, ...item}
      }
    ));
  }

  useEffect(() => {
    fetchData()
  }, [])

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>
}

export { DataProvider }
