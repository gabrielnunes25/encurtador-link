import { FiX, FiCopy } from 'react-icons/fi';
import './linkItem.css';

export default function linkItem({ fecharModal, content }) {
    async function copiarLink() {
        await navigator.clipboard.writeText(content.link);
        alert('Link copiado!');
    }
    return (
        <div className="container-modal">
            <div className="modal-header">
                <h2>Link Encurtado</h2>
                <button onClick={fecharModal}>
                    <FiX size={28} color="#000" />
                </button>
            </div>

            <span>{content.long_url}</span>

            <button className="modal-link" onClick={copiarLink}>
                {content.link}
                <FiCopy size={20} color="#fff" />
            </button>
        </div>
    );
}
