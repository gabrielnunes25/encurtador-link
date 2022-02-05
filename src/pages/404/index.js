import { Link } from 'react-router-dom';
import './404.css';

function Pagina404() {
    return (
        <div className="container-404">
            <img
                src="notfound.png"
                alt="Imagem do Erro 404, página não encontrada"
            ></img>
            <h1>Página não encontrada!</h1>
            <Link to="/">Volte para home</Link>
        </div>
    );
}

export default Pagina404;
