import { Route } from 'react-router-dom';
import RoutesApp from './routes';
import Home from './pages/Home';
import Links from './pages/Links';

function App() {
    return (
        <div className="app">
            <RoutesApp>
                <Route path="/" element={<Home />} />
                <Route path="/links" element={<Links />} />
            </RoutesApp>
        </div>
    );
}

export default App;
