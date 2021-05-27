import { Link } from 'react-router-dom'

const GradientFullButton = ({ id }) => {
  return (
    <div className="mt-3">
      <div>
        <Link to={`/gradient/${id}`}>Plein écran</Link>
      </div>
    </div>
  );
};

export default GradientFullButton;