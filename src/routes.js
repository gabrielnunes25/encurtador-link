import { BrowserRouter, Routes } from 'react-router-dom';

function RoutesApp({ children }) {
    return (
        <BrowserRouter>
            <Routes>{children}</Routes>
        </BrowserRouter>
    );
}

export default RoutesApp;
