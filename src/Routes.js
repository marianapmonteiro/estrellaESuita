import React from "react";
import {
    createBrowserRouter,
} from "react-router-dom";
import "./index.css";
import Home from './pages/Home'
import Advogados from './pages/Advogados'
import Servicos from './pages/Servicos'
import SobreNos from './pages/SobreNos'


const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/advogados",
        element: <Advogados />,
    },
    {
        path: "/servicos",
        element: <Servicos />,
    },
    {
        path: "/sobrenos",
        element: <SobreNos />,
    },
]);

export default router;