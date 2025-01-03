import { Link } from 'react-router-dom';
import '../styles/Emark.css';

function Emark() {

  return (
    <Link to="https://certifikat.emaerket.dk/pokemonshop.dk" className="emark" target="_blank"
    rel="noopener noreferrer">
      <img src="/emark.svg" alt="e-mærket"
      />
    </Link>
  );
};

export default Emark;
