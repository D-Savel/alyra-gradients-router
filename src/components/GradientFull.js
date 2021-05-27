import { useGradient } from '../context/GradientContext'

const GradientFull = ({ id }) => {
  const { state } = useGradient()
  const { gradient } = state
  return (
    <div>
      {gradient.name}
    </div>
  );
};

export default GradientFull;