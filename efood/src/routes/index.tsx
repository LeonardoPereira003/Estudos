// Importa os componentes necessários do React Router
import { Routes, Route } from 'react-router-dom'

// Importa as páginas
import Home from '../pages/Home'
import Profile from '../pages/Profile'
import Checkout from '../pages/Checkout'

// Componente responsável pelas rotas da aplicação
const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/restaurante/:id" element={<Profile />} />
            <Route path="/checkout" element={<Checkout />} />
        </Routes>
    )
}

export default AppRoutes
