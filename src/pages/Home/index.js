import { FiLink } from 'react-icons/fi';
import Menu from '../../components/Menu';
import './home.css';

export default function Home() {
    return (
        <div className="container-home">
            <Menu />

            <div className="logo">
                <h1>EncurtLinks</h1>
                <span>Cole o seu link para ser encurtado</span>
            </div>

            <div className="area-input">
                <div>
                    <FiLink size={24} color="#fff" />
                    <input placeholder="Cole seu link aqui..." />
                </div>
                <button>Encurtar Link</button>
            </div>
        </div>
    );
}
