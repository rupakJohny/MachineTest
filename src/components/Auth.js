import classes from './Auth.module.css';
import { Fragment } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { authActions } from '../store'

const Auth = () => {
  const dispatch=useDispatch();
  const navigate = useNavigate();
  const loginHandler=()=>{
    dispatch(authActions.login())
    navigate('/Homepage')
  }
  return (
    <Fragment >
      <div className={classes.form}>
        <div className='container form'>
          <h3>Log In</h3>
          <div className="form-group">
            <label>Email </label>
            <input type="email" className="form-control" name='email' placeholder="Enter email" />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" name='password' placeholder="Enter password"  />
          </div>
          <div className={classes.button}>
            <button type="submit" className="btn btn-primary btn-block" onClick={loginHandler}>Login</button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Auth;
