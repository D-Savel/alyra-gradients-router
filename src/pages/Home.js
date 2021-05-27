import Gradients from "../components/Gradients"
import GradientsHeader from "../components/GradientsHeader"
import Footer from "../components/Footer"
import { useEffect } from "react";
import { useGradient } from "../context/GradientContext";

const Home = () => {
  const { state, dispatch } = useGradient()
  const { full } = state
  console.log(full)
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
  return (
    <div className="App min-vh-100 d-flex flex-column">
      <GradientsHeader>
        <h1 className="display-1">Alyra Gradients</h1>
        <p className="tagline">Ultime collection de plus beaux dégradés</p>
      </GradientsHeader>
      <main className="container">
        <h1 className="text-center my-4">Alyra Gradients</h1>
        <Gradients />
      </main>
      <Footer />
    </div>
  );
};

export default Home;