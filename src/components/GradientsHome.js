import Gradients from "./Gradients"
import GradientsHeader from "./GradientsHeader"
import Footer from "./Footer"

const GradientsHome = () => {
  return (
    <div className="App min-vh-100 d-flex flex-column" >
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
  )
}
export default GradientsHome