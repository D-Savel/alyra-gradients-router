import { useFilter } from '../context/FilterContext'
import { useGradient } from '../context/GradientContext'
import Gradient from "./Gradient"

const GradientsList = () => {
  const { filter } = useFilter()
  const { state } = useGradient()
  const { loading, gradients } = state

  const list = gradients.filter((el) => {
    if (filter === "all") {
      return true
    }
    return el.tags.includes(filter)
  })
  return !!loading ?
    <ul className="row list-unstyled" >
      {
        list.map((el, id) => {
          const { name, start, end, tags = [] } = el
          return (
            <Gradient
              key={name}
              colorStart={start}
              colorEnd={end}
              name={name}
              tags={tags}
              id={id}
            />
          )
        })
      }
    </ul > : <p>Loading...</p>
}

export default GradientsList;
