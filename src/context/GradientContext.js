
import { createContext, useContext, useReducer, useEffect } from "react";
import gradientsReducer from "../reducers/gradientsReducer";
import { useIsMounted } from "../hook/useIsMounted"

export const GradientContext = createContext()

export const GradientContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(gradientsReducer, {
    gradients: [],
    gradient: {},
    loading: true,
    full: false
  })

  console.log('context')
  const { loading, gradients } = state
  const isMounted = useIsMounted()

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
  }, [])

  return (
    <GradientContext.Provider value={{ gradients }}>
      {loading ? <p>loading...</p> : children}
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
