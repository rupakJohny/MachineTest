import classes from './Detailspage.module.css';
import { Link } from 'react-router-dom';
import { Fragment } from "react"
import { useSelector } from "react-redux";
import { useLocation } from 'react-router';
import tasks from '../assets/tasks.json'

const Detailspage = () => {
    const isAuth = useSelector(state => state.auth.isAuthenticated);
    const { state } = useLocation();
    const id = state.key - 1;
    const data = tasks.tasks[id];
    console.log(data.details[0])
    return (
        <Fragment>
            {isAuth &&
                <div className={classes.form}>
                    <div className='container mt-5'>
                        <h3>{data.name}</h3>
                        <p>{data.details[0].description}</p>
                        <p>Assignee:{data.details[0].assignee}</p>
                        <p>Cost:{data.details[0].cost}</p>
                        <button><Link to='/HomePage'>Back</Link></button>
                    </div>
                </div>

            }
        </Fragment>
    )
}

export default Detailspage