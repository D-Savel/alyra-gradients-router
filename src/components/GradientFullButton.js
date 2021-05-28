import { Link } from 'react-router-dom'

const GradientFullButton = ({ id }) => {
  return (
    <div className="mt-3">
      <Link className="btn btn-outline-dark w-100" to={`/gradient/${id}`}>Plein écran</Link>
    </div>
  );
};

export default GradientFullButton;