import { useFilter } from '../context/FilterContext'
import { useGradient } from '../context/GradientContext'
import Gradient from "./Gradient"

const GradientsList = () => {
  const { filter } = useFilter()
  const { gradients } = useGradient()


  console.log('gradientlist')

  console.log('gradients', gradients)
  console.log('filter', filter)

  const list = gradients.filter((el) => {
    if (filter === "all") {
      return true
    }
    return el.tags.includes(filter)
  })
  return (
    <ul className="row list-unstyled" >
      {
<<<<<<< HEAD
        list.map((el) => {
          const { name, start, end, tags, id = [] } = el
=======
        list.map((el, id) => {
          const { name, start, end, tags = [] } = el
>>>>>>> 6cb735726a383bb583a3fa7a7dd6b754d5aed2f6
          return (
            <Gradient
              key={id}
              colorStart={start}
              colorEnd={end}
              name={name}
              tags={tags}
              id={id + 1}
            />
          )
        })
      }
    </ul >)
}

export default GradientsList;
