import { createContext, useContext, useEffect, useReducer } from "react";
import gradientsReducer from "../reducers/gradientsReducer";

export const GradientContext = createContext()

export const GradientContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(gradientsReducer, {
    gradients: [],
    gradient: {},
    loading: false,
    full: false
  })
  useEffect(() => {
    dispatch({ type: "FETCH_INIT" })
    fetch(`https://gradients-api.herokuapp.com/gradients/`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`something wrong with request: ${response.status}`)
        }
        return response.json()
      })
      .then(data => {
        dispatch({ type: "FETCH_SUCCESS", payload: data })
        console.log(data)
      })
      .catch(error => { dispatch({ type: "FETCH_FAILURE", payload: error.message }) })
  }, [state.full])
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