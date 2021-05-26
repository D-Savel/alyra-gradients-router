import { useState } from "react"
import { gradients as list } from "../gradients"
import GradientCode from "./GradientCode"

const GradientFullScreen = (props) => {

  const length = list.length
  const [randomGradient, setRandomGradient] = useState(1)

  const handleNextClick = () => {
    setRandomGradient(randomGradient === length - 1 ? 0 : randomGradient + 1)
  }
  const handlePrevClick = () => {
    setRandomGradient(randomGradient === 0 ? length - 1 : randomGradient - 1)
  }
  const style = {
    backgroundImage: `linear-gradient(to right, ${list[randomGradient].start}, ${list[randomGradient].end})`
  }
  return (
    <div className="App min-vh-100 d-flex flex-column">
      <div className="flex-fill d-flex" style={style}>
        <nav className="fixed-top nav">
          <li
            aria-label="Cliquer pour afficher tous les dégradés"
            type="button"
            className="btn btn-dark me-2"
          >Tous</li>
          <li
            aria-label="Cliquer pour afficher le dégradé précédent"
            type="button"
            className="btn btn-dark text-white me-2"
            onClick={handlePrevClick}
          >Précédent</li>
          <li
            aria-label="Cliquer pour afficher le dégradé suivant"
            type="button"
            className="btn btn-dark text-white me-2"
            onClick={handleNextClick}
          >Suivant</li>
        </nav>
        <div className="m-auto text-center">
          <h1 className="text-white display-1">{list[randomGradient].name}</h1>
          <div className="bg-white shadow p-2 rounded">
            <GradientCode colorStart={list[randomGradient].start} colorEnd={list[randomGradient].end} />
          </div>
        </div>
      </div>
    </div >
  )
}

export default GradientFullScreen