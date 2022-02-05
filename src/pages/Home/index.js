import { FiLink } from 'react-icons/fi';
import Menu from '../../components/Menu';
import { useState } from 'react';
import LinkItem from '../../components/LinkItem';
import './home.css';

export default function Home() {
    const [link, setLink] = useState('');
    const [showModal, setShowModal] = useState(false);

    function handleShortLink() {
        setShowModal(true);
    }

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
                    <input
                        placeholder="Cole seu link aqui..."
                        value={link}
                        onChange={event => setLink(event.target.value)}
                    />
                </div>
                <button onClick={handleShortLink}>Encurtar Link</button>
            </div>
            {showModal && <LinkItem fecharModal={() => setShowModal(false)} />}
        </div>
    );
}
