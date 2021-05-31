import { useState } from "react"
import { ReactComponent as SvgToggle } from "bootstrap-icons/icons/arrow-clockwise.svg"
import { ReactComponent as Next } from "bootstrap-icons/icons/arrow-right.svg"
import { ReactComponent as Prev } from "bootstrap-icons/icons/arrow-left.svg"
import { useGradient } from '../context/GradientContext'


<<<<<<< HEAD
const GradientsHeader = (props) => {
  const { children } = props
  const { gradients: list } = useGradient()
  const length = list.length
  console.log('list', list)
=======
const GradientsHeader = ({ children, loading }) => {
  const { gradients } = useGradient()
  const length = gradients.length

>>>>>>> 6cb735726a383bb583a3fa7a7dd6b754d5aed2f6

  const chooseGradient = () => Math.floor(Math.random() * length)

  const [randomGradient, setRandomGradient] = useState(chooseGradient)
  const handleReloadClick = () => {
    setRandomGradient(chooseGradient)
  }
  const handleNextClick = () => {
    setRandomGradient(randomGradient === length - 1 ? 0 : randomGradient + 1)
  }
  const handlePrevClick = () => {
    setRandomGradient(randomGradient === 0 ? length - 1 : randomGradient - 1)
  }
<<<<<<< HEAD
  console.log('list Header', list)
  const style = {
    backgroundImage: `linear-gradient(to right, ${list[randomGradient].start}, ${list[randomGradient].end})`
  }
  return (
    <div className="text-center bg-dark text-white py-5 mb-5" style={style}>
=======
  const style = {
    backgroundImage: loading ? '' :`linear-gradient(to right, ${gradients[randomGradient].start}, ${gradients[randomGradient].end})`
  }
  return (
    <header className="text-center bg-dark text-white py-5 mb-5" style={style}>
>>>>>>> 6cb735726a383bb583a3fa7a7dd6b754d5aed2f6
      {children}
      <button
        aria-label="Clicker pour afficher le dégradé précédant"
        type="button"
        className="btn btn-outline-light m-1"
        onClick={handlePrevClick}
      >
        <Prev />
      </button>
      <button
        aria-label="Clicker pour changer le dégradé"
        type="button"
        className="btn btn-outline-light m-1"
        onClick={handleReloadClick}
      >
        <SvgToggle />
      </button>
      <button
        aria-label="Clicker pour afficher le dégradé suivant"
        type="button"
        className="btn btn-outline-light m-1"
        onClick={handleNextClick}
      >
        <Next />
      </button>
    </div>
  )
}

export default GradientsHeader
