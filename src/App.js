import Gradients from "./components/Gradients"
import GradientsHeader from "./components/GradientsHeader"
import Footer from "./components/Footer"
import { GradientContextProvider } from "./context/GradientContext"

function App() {
  console.log('App')
  return (
    <GradientContextProvider>
      <div className="App min-vh-100 d-flex flex-column">
        <main className="container">
          <GradientsHeader>
            <h1 className="display-1">Alyra Gradients</h1>
            <p className="tagline">Ultime collection de plus beaux dégradés</p>
          </GradientsHeader>
          <Gradients />
        </main>
        <Footer />
      </div>
    </GradientContextProvider>
  )
}

/*

*/

export default App
