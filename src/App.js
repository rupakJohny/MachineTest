import { Fragment } from 'react';
import { useSelector } from "react-redux";
import { BrowserRouter} from 'react-router-dom';
import Header from './components/Header'
import Auth from './components/Auth'
import Homepage from './components/Homepage';
import Detailspage from './components/Detailspage';
import Routing from './components/routes'


function App() {
  const isAuth = useSelector(state => state.auth.isAuthenticated);
  return (
    <Fragment>
      <Header />     
      <BrowserRouter>  
      <Routing/>  
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
