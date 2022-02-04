import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import './menu.css';

function Menu() {
    return (
        <div className="menu">
            <a className="social" href="" target="_blank">
                <BsGithub color="#fff" size={24} />
            </a>
            <a className="social" href="" target="_blank">
                <BsLinkedin color="#fff" size={24} />
            </a>
            <Link className="menu-item" to="/links">
                Meus Links
            </Link>
        </div>
    );
}

export default Menu;
