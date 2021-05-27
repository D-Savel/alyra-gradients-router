import { useParams } from "react-router";
import GradientFull from "../components/GradientFull";

const FullScreen = () => {
  const params = useParams()
  const { id } = params

  return (
    <div>
      <GradientFull id={id} />
    </div>
  );
};

export default FullScreen;