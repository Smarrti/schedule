import React, { createContext, useReducer } from "react"
import { styleReducer, styleStore } from "./style-reducer"

export const Style = createContext()

const StyleContext = ({ children }) => {
  const [state, dispatch] = useReducer(styleReducer, styleStore)

  return (
    <Style.Provider value={{ ...state, dispatch }}>{children}</Style.Provider>
  )
}

export { StyleContext }
