import { useEffect, useState } from "react";

const GradientFull = () => {
  const [gradient, setGradient] = useState({}) //usereducer
  const [gradientId, setGradientId] = useState(0) //usereducer

  useEffect(() => {
    fetch(`https://gradients-api.herokuapp.com/gradients/${gradientId}/`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`something wrong with request: ${response.status}`)
        }
        return response.json()
      })
      .then(data => {
        setGradient(data)
      })
  }, [gradientId])
  return (
    <div>
      <button onClick={setGradientId(gradientId + 1)}>Right</button>
      {gradient.name}
    </div>
  );
};

export default GradientFull;