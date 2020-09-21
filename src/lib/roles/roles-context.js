import React, { createContext, useReducer } from "react";
import { roles, switchRole } from "./roles-reducer";

export const Role = createContext();

export const RoleContext = ({ children }) => {
  const [state, dispatch] = useReducer(switchRole, roles);

  return (
    <Role.Provider value={{ ...state, dispatch }}>{children}</Role.Provider>
  );
};
