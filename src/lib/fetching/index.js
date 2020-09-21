import React, { createContext, useState, useEffect } from "react"
import { getTasks } from '@lib/getTasks';
export const DataContext = createContext()

const DataProvider = ({ children }) => {
  const [data, setData] = useState(null)

  const fetchData = async () => {
    setData(await getTasks())
  }

  useEffect(() => {
    fetchData()
  }, [])

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>
}

export { DataProvider }
