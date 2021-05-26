import { useEffect, useReducer } from "react"


const reducer = (state, action) => {

  switch (action.type) {
    case "FETCH_INIT":
      return {
        ...state,
        loading: true,
      }
    case "FETCH_SUCCESS":
      return {
        ...state,
        loading: false,
        gradients: action.payload
      }
    case "FETCH_FAILURE":
      return {
        ...state,
        error: action.payload,
      }
    default:
      throw new Error(`Unsupported action type ${action.type}`)
  }
}
const useGradient = () => {
  const [state, dispatch] = useReducer(reducer, {
    gradients: [],
    gradient: {},
    loading: false,
    full: false
  })
  useEffect(() => {
    fetch(`https://gradients-api.herokuapp.com/gradients/`)
    dispatch({ type: "FETCH_INIT" })
      .then(response => {
        if (!response.ok) {
          throw new Error(`something wrong with request: ${response.status}`)
        }
        return response.json()
      })
      .then(data => {
        dispatch({ type: "FETCH_SUCCESS", payload: data })
      })
      .catch(error => { dispatch({ type: "FETCH_FAILURE", payload: error.message }) })
  }, [state.full])

}
export default useGradient;