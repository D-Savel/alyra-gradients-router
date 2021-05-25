import { FilterContextProvider } from "../context/FilterContext"
import GradientsList from "./GradientsList"
import GradientsSelect from "./GradientsSelect"

const Gradients = () => {
  return (
    <FilterContextProvider>
      <GradientsSelect />
      <GradientsList />
    </FilterContextProvider>
  )
}

export default Gradients
