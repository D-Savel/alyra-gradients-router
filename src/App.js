import Gradients from "./components/Gradients"
import GradientsHeader from "./components/GradientsHeader"
import Footer from "./components/Footer"
import { GradientContextProvider } from "./context/GradientContext"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import GradientFull from "./components/GradientFull"

function App() {
  return (
    <GradientContextProvider>
      <Router>
        <Switch>
          <Route path="/">
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
          </Route>
          <Route path="/gradients/:id">
            <GradientFull />
          </Route>
        </Switch>
      </Router>
    </GradientContextProvider>
  )
}

export default App
