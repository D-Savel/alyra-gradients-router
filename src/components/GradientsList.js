import { useEffect } from 'react'
import { useFilter } from '../context/FilterContext'
import { useGradient } from '../context/GradientContext'
import Gradient from "./Gradient"

const GradientsList = () => {
  const { filter } = useFilter()
  const { state, dispatch } = useGradient()
  const { loading, gradients, full } = state

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
  }, [full])
  const list = gradients.filter((el) => {
    if (filter === "all") {
      return true
    }
    return el.tags.includes(filter)
  })
  return !!loading ? (
    <ul className="row list-unstyled" >
      {
        list.map((el) => {
          const { name, start, end, tags = [] } = el
          return (
            <Gradient
              key={name}
              colorStart={start}
              colorEnd={end}
              name={name}
              tags={tags}
            />
          )
        })
      }
    </ul >) : (<p>Loading...</p>)
}

export default GradientsList;
