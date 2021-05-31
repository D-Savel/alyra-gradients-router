<<<<<<< HEAD

import { createContext, useContext, useReducer, useEffect } from "react";
import gradientsReducer from "../reducers/gradientsReducer";
import { useIsMounted } from "../hook/useIsMounted"
=======
import { createContext, useContext, useEffect, useReducer } from "react";
import { useIsMounted } from "../hooks/useIsMounted";
import gradientsReducer from '../reducers/gradientsReducer';
>>>>>>> 6cb735726a383bb583a3fa7a7dd6b754d5aed2f6

export const GradientContext = createContext()

export const GradientContextProvider = ({ children }) => {
  const isMounted = useIsMounted()
  const [state, dispatch] = useReducer(gradientsReducer, {
    gradients: [],
<<<<<<< HEAD
    gradient: {},
    loading: true,
    full: false
  })

  console.log('context')
  const { loading, gradients } = state
  const isMounted = useIsMounted()

=======
    loading: true
  })
  const {gradients, loading} = state
>>>>>>> 6cb735726a383bb583a3fa7a7dd6b754d5aed2f6
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
<<<<<<< HEAD
  }, [])

  return (
    <GradientContext.Provider value={{ gradients }}>
      {loading ? <p>loading...</p> : children}
    </GradientContext.Provider>
=======
  }, [isMounted])

  return (
    <GradientContext.Provider value={{ gradients, loading }}>
      {children}
      </GradientContext.Provider>
>>>>>>> 6cb735726a383bb583a3fa7a7dd6b754d5aed2f6
  )
}

export const useGradient = () => {
  const context = useContext(GradientContext)
  if (context === undefined) {
    throw new Error('You try to use FilterContext outside of his provider')
  }
  return context
}
