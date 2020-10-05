import React, { createContext, useReducer } from "react"
import { sizes, sizeReducer } from "./change-size"

export const Size = createContext()

const SizeContext = ({ children }) => {
  const [state, dispatch] = useReducer(sizeReducer, sizes)

  return (
    <Size.Provider value={{ ...state, dispatch }}>{children}</Size.Provider>
  )
}

export { SizeContext }
