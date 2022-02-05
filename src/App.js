import { Route } from 'react-router-dom';
import RoutesApp from './routes';
import Home from './pages/Home';
import Links from './pages/Links';
import Pagina404 from './pages/404';

function App() {
    return (
        <div className="app">
            <RoutesApp>
                <Route path="/" element={<Home />} />
                <Route path="/links" element={<Links />} />
                <Route path="*" element={<Pagina404 />} />
            </RoutesApp>
        </div>
    );
}

export default App;
