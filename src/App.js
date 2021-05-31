import Home from "./pages/Home"
import FullScreen from "./pages/FullScreen"
import { GradientContextProvider } from "./context/GradientContext"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"


function App() {
  return (
    <GradientContextProvider>
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
    </GradientContextProvider>
  )
}

export default App
