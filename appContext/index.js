import { createContext, useContext } from "react";

const AppContext = createContext({name:""})
const AppProvider = AppContext.Provider
const useAppContext = ()=> useContext(AppContext)

export {AppProvider, useAppContext}