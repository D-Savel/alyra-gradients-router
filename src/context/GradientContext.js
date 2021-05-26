import { createContext, useContext, useReducer } from "react";
import gradientsReducer from "../reducers/gradientsReducer";

export const GradientContext = createContext()

export const GradientContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(gradientsReducer, {
    gradients: [],
    gradient: {},
    loading: false,
    full: false
  })
  return (
    <GradientContext.Provider value={{ state, dispatch }}>{children}</GradientContext.Provider>
  )
}
export const useGradient = () => {
  const context = useContext(GradientContext)
  if (context === undefined) {
    throw new Error('You try to use FilterContext outside of his provider')
  }
  return context
}