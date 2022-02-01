import { Routes, Route, useNavigate } from 'react-router-dom';
import Auth from './Auth'
import Homepage from './Homepage'
import { useSelector } from "react-redux";
import Detailspage from './Detailspage';

const Routing = () => {
    const isAuth = useSelector(state => state.auth.isAuthenticated);
    return (
        <Routes>
            <Route path='/' isAuth={isAuth} element={<Auth />} />
            <Route path='/Auth' isAuth={isAuth} element={<Auth />} />
            <Route path='/Homepage' isAuth={isAuth} element={<Homepage />} />
            <Route path='/Detailspage' isAuth={isAuth} element={<Detailspage />} />
        </Routes>
    )
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