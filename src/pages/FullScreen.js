import { useParams } from "react-router";
import GradientFull from "../components/GradientFull";
import useFetching from "../hooks/useFetching";

const FullScreen = () => {
  const params = useParams()
  const { id } = params
  useFetching(id)
  return (
    <div>
      <GradientFull id={id} />
    </div>
  );
};

export default FullScreen;