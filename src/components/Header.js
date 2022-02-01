import classes from './Header.module.css';
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { authActions } from '../store';

const Header = () => {
  const dispatch=useDispatch();
  const isAuth= useSelector(state=>state.auth.isAuthenticated); 
  
  const logoutHandler=()=>{
    console.log("LogOut")
    dispatch(authActions.logout())
  }

  return (
    <header className={classes.header}>
      <h1>Sample Project</h1>
      {isAuth && (
      <nav>
        <ul>
          <li>
            <button onClick={logoutHandler}>Logout</button>
          </li>
        </ul>
      </nav>
      )}
    </header>
  );
};

export default Header;
