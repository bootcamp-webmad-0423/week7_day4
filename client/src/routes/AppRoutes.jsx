import { Routes, Route } from 'react-router-dom'
import CoastersListPage from '../pages/CoastersListPage/CoastersListPage'
import CoasterDetailsPage from '../pages/CoasterDetailsPage/CoasterDetailsPage'
import NewCoasterPage from '../pages/NewCoasterPage/NewCoasterPage'
import HomePage from '../pages/HomePage/HomePage'

const AppRoutes = () => {

    return (

        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/galeria" element={<CoastersListPage />} />
            <Route path="/crear" element={<NewCoasterPage />} />
            <Route path="/detalles/:coaster_id" element={<CoasterDetailsPage />} />
            <Route path="/registro" element={<h1>REGISTRO</h1>} />
            <Route path="/iniciar-sesion" element={<h1>LOGIN</h1>} />
            <Route path="/perfil" element={<h1>PERFIL</h1>} />
            <Route path="*" element={<h1>404</h1>} />
        </Routes>
    )
}

export default AppRoutes