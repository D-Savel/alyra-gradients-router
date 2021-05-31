import Home from "./pages/Home"
import FullScreen from "./pages/FullScreen"
import { GradientContextProvider } from "./context/GradientContext"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"


function App() {
  console.log('App')
  return (
    <GradientContextProvider>
<<<<<<< HEAD
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
=======
      <Router>  
        <Switch>
          <Route path="/gradient/:id/">
            <FullScreen />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
>>>>>>> 6cb735726a383bb583a3fa7a7dd6b754d5aed2f6
    </GradientContextProvider>
  )
}

/*

*/

export default App
