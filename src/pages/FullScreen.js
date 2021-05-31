import GradientFull from "../components/GradientFull";
import { useGradient } from "../context/GradientContext";

const FullScreen = () => {
const {loading} = useGradient()
  return loading ? <div className="bg-dark min-vh-100 text-light d-flex justify-content-center  align-items-center fs-4">loading...</div> : <GradientFull />
};

export default FullScreen;