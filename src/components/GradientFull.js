import { Link } from 'react-router-dom';
import { useGradient } from '../context/GradientContext'
import useFetching from '../hooks/useFetching';
import GradientCode from './GradientCode';

const GradientFull = ({ id }) => {
  useFetching(id, id)
  const { state } = useGradient()
  const { gradient } = state
  const style = {
    backgroundImage: `linear-gradient(to right, ${gradient.start}, ${gradient.end})`
  }
  return (
    <div className="App min-vh-100 d-flex flex-column">
      <div className="flex-fill d-flex" style={style}>
        <nav className="fixed-top nav">
          <Link
            aria-label="Cliquer pour afficher tous les dégradés"
            type="button"
            className="btn btn-dark me-2"
            to="/"
          >Tous</Link>
          <Link
            aria-label="Cliquer pour afficher le dégradé précédent"
            type="button"
            className="btn btn-dark text-white me-2"
            to={`/gradient/${Number(id) - 1}`}
          >Précédent</Link>
          <Link
            aria-label="Cliquer pour afficher le dégradé suivant"
            type="button"
            className="btn btn-dark text-white me-2"
            to={`/gradient/${Number(id) + 1}`}
          >Suivant</Link>
        </nav>
        <div className="m-auto text-center">
          <h1 className="text-white display-1">{gradient.name}</h1>
          <div className="bg-white shadow p-2 rounded">
            <GradientCode colorStart={gradient.start} colorEnd={gradient.end} />
          </div>
        </div>
      </div>
    </div >
  );
};

export default GradientFull;