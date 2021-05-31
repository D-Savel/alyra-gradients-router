import { Link, useParams } from 'react-router-dom';
import { useGradient } from '../context/GradientContext'
import GradientCode from './GradientCode';

const GradientFull = () => {
  const { gradients } = useGradient()
  const params = useParams()
  const { id } = params
  const style = {
    backgroundImage: `linear-gradient(to right, ${gradients[id - 1].start}, ${gradients[id - 1].end})`
  }
  return (
    <div className="min-vh-100 d-flex flex-column">
      <div className="flex-fill d-flex" style={style}>
        <nav className="fixed-top nav">
          <Link
            aria-label="Cliquer pour afficher tous les dégradés"
            type="button"
            className="btn btn-dark me-2"
            to="/"
          >Tous</Link>
          {id > 1 ?
            <Link
              aria-label="Cliquer pour afficher le dégradé précédent"
              type="button"
              className="btn btn-dark me-2"
              to={`/gradient/${Number(id) - 1}`}
            >Précédent</Link> : <></>}
          {id < gradients.length ?
            <Link
              aria-label="Cliquer pour afficher le dégradé suivant"
              type="button"
              className="btn btn-dark me-2"
              to={`/gradient/${Number(id) + 1}`}
            >Suivant</Link> : <></>}
        </nav>
        <div className="m-auto text-center">
          <h1 className="text-white display-1">{gradients[id - 1].name}</h1>
          <div className="bg-white shadow p-2 rounded">
            <GradientCode colorStart={gradients[id - 1].start} colorEnd={gradients[id - 1].end} />
          </div>
        </div>
      </div>
    </div >
  );
};

export default GradientFull;