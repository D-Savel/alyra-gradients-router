import { useEffect } from "react";
import { useParams } from "react-router";
import GradientFull from "../components/GradientFull";
import { useGradient } from "../context/GradientContext";

const FullScreen = () => {
  const params = useParams()
  const { id } = params
  const { state, dispatch } = useGradient()
  const { full } = state
  useEffect(() => {
    dispatch({ type: "FETCH_INIT" })
    fetch(`https://gradients-api.herokuapp.com/gradients/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`something wrong with request: ${response.status}`)
        }
        return response.json()
      })
      .then(data => {
        dispatch({ type: "FETCH_SUCCESS_ID", payload: data })
        console.log(data)
      })
      .catch(error => { dispatch({ type: "FETCH_FAILURE", payload: error.message }) })
  }, [full])
  return (
    <div>
      <GradientFull id={id} />
    </div>
  );
};

export default FullScreen;