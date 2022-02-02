import { Routes, Route, useNavigate } from 'react-router-dom';
import { Navigate, Outlet } from 'react-router';
import Auth from './Auth'
import Homepage from './Homepage'
import { useSelector } from "react-redux";
import Detailspage from './Detailspage';

const Routing = () => {
    const isAuth = useSelector(state => state.auth.isAuthenticated);
    return (
        <Routes>
            <Route path='/' isAuth={isAuth} element={<Auth />} />
            <Route element={<ProtectiveRoute />}>
                <Route path='/Homepage' isAuth={isAuth} element={<Homepage />} />
                <Route path='/Detailspage' isAuth={isAuth} element={<Detailspage />} />
            </Route>
        </Routes>
    )
}

const ProtectiveRoute = () => {
    const isAuth = useSelector(state => state.auth.isAuthenticated);
    return isAuth ? <Outlet /> : <Navigate to='/' /> 
}

/*const ProtectiveRoute = ({ isAuth, component: Component, ...rest }) => {
    const navigate = useNavigate()
    return (
        <Route
            {...rest}
            render={() => isAuth ? (<Homepage />) : (navigate('/Auth')
            )
            }
        />
    )
}
const ProtectiveLogin = ({ isAuth, component: Component, ...rest }) => {
    const navigate = useNavigate()
    return (
        <Route
            {...rest}
            render={() => isAuth ? (<Homepage />) : (navigate('/Auth')
            )
            }
        />
    )
}*/

export default Routing