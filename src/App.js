import React from "react"
import { MyTable } from "./pages/"
import { DataProvider } from "./lib/fetching"

const App = () => {
  return (
    <DataProvider>
      <MyTable />
    </DataProvider>
  )
}

export { App }
