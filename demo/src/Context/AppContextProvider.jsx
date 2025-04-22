import React, { createContext, useContext, useReducer } from "react";
import { appReducer, Initials } from "./Reducer";

const context = createContext();
export const AppContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, Initials);
  return (
    <context.Provider value={{ state, dispatch }}>{children}</context.Provider>
  );
};

//cstm HOKS

export const useAppContext = () => {
  const appContext = useContext(context);
  if (appContext) {
    return appContext;
  }
  throw new Error("Context Error");
};
