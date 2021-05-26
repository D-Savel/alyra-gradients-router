import { useState, useEffect, useReducer } from "react"


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
        hasNext: !!action.payload.next,
        planets: [...state.planets, ...action.payload.results],
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
  const [state, dispatch] = useReducer(reducer, {})
  const [gradients, setGradients] = useState([])
  useEffect(() => {
    fetch(`https://gradients-api.herokuapp.com/gradients/`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`something wrong with request: ${response.status}`)
        }
        return response.json()
      })
      .then(data => {
        setGradients(data)
      })
  })
}
export default useGradient;