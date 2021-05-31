import { createContext, useContext, useEffect, useReducer } from "react";
import { useIsMounted } from "../hooks/useIsMounted";
import gradientsReducer from '../reducers/gradientsReducer';

export const GradientContext = createContext()

export const GradientContextProvider = ({ children }) => {
  const isMounted = useIsMounted()
  const [state, dispatch] = useReducer(gradientsReducer, {
    gradients: [],
    loading: true
  })
  const {gradients, loading} = state
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
        if (isMounted.current) {
          dispatch({ type: "FETCH_SUCCESS", payload: data })
        }
      })
      .catch(error => {
        if (isMounted.current) {
          dispatch({ type: "FETCH_FAILURE", payload: error.message })
        }
      })
  }, [isMounted])

  return (
    <GradientContext.Provider value={{ gradients, loading }}>
      {children}
      </GradientContext.Provider>
  )
}

export const useGradient = () => {
  const context = useContext(GradientContext)
  if (context === undefined) {
    throw new Error('You try to use FilterContext outside of his provider')
  }
  return context
}
