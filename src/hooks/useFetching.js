import { useEffect } from "react";
import { useGradient } from "../context/GradientContext";

const useFetching = (id, dep) => {
  const { dispatch } = useGradient()
  useEffect(() => {
    dispatch({ type: "FETCH_INIT" })
    fetch(`https://gradients-api.herokuapp.com/gradients/${id ? `${id}/` : ''}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`something wrong with request: ${response.status}`)
        }
        return response.json()
      })
      .then(data => {
        dispatch({ type: `FETCH_SUCCESS${id ? '_ID' : ''}`, payload: data })
        console.log(data)
      })
      .catch(error => { dispatch({ type: "FETCH_FAILURE", payload: error.message }) })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dep])
};

export default useFetching;