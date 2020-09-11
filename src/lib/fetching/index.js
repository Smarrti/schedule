import React, { createContext, useState, useEffect } from "react"

export const DataContext = createContext()

const DataProvider = ({ children }) => {
  const [data, setData] = useState(null)

  const fetchData = () => {
    fetch("https://rs-react-schedule.firebaseapp.com/api/team/sh36team/events")
      .then((response) => response.json())
      .then((source) => source.data.map((task) => {
        task.key = task.id;
        return task;
      }))
      .then((source) => setData(source))
  }

  useEffect(() => {
    fetchData()
  }, [])

  return <DataContext.Provider value={data}>{children}</DataContext.Provider>
}

export { DataProvider }
