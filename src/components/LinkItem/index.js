import { FiX, FiCopy } from 'react-icons/fi';
import './linkItem.css';

export default function linkItem({ fecharModal }) {
    return (
        <div className="container-modal">
            <div className="modal-header">
                <h2>Link Encurtado</h2>
                <button onClick={fecharModal}>
                    <FiX size={28} color="#000" />
                </button>
            </div>

            <span>https://google.com</span>

            <button className="modal-link">
                https://bit.ly/487236
                <FiCopy size={20} color="#fff" />
            </button>
        </div>
    );
}
