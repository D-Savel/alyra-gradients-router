import { useGradient } from '../context/GradientContext'

const GradientFull = () => {
  const { state } = useGradient()
  const { gradient } = state


  return (
    <div>
      {gradient.name}
    </div>
  );
};

export default GradientFull;