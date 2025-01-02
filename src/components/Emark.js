import { Link } from 'react-router-dom';
import '../styles/Emark.css';

function Emark() {

  return (
    <Link to="https://certifikat.emaerket.dk/pokemonshop.dk" className="emark">
      <img src="/emark.svg" alt="e-mærket"
      target="_blank"
      rel="noopener noreferrer" />
    </Link>
  );
};

export default Emark;
