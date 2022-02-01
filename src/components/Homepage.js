import { Fragment } from 'react'
import tasks from '../assets/tasks.json'
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux";
import { useState } from 'react';

function Homepage() {
    //const isAuth = useSelector(state => state.auth.isAuthenticated);
    const [data, setData] = useState(tasks.tasks)

    console.log(data)
    const navigate = useNavigate();

    const sortByName = () => {
        let sorted = data.sort((a, b) => a.name.localeCompare(b.name))
        setData(sorted)
        console.log(data)
    }

    const sortByDate = () => {
        let sorted = data.sort((a, b) => new Date(...a.dueDate.split('/').reverse()) - new Date(...b.dueDate.split('/').reverse()))
        setData(sorted)
        console.log(data)

    }
    return (
        <Fragment>
            <div className='container mt-5'>
                <table className='table table-stripped'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th> <button type="button" onClick={sortByName}>
                                Name
                            </button></th>
                            <th>Priority</th>
                            <th> <button type="button" onClick={sortByDate}>
                                DueDate
                            </button></th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((data) => (
                            <tr key={data.id}>
                                <td>{data.id}</td>
                                <td>{data.name}</td>
                                <td>{data.priority}</td>
                                <td>{data.dueDate}</td>
                                <td><button onClick={() => {
                                    navigate('/Detailspage',
                                        {
                                            state:
                                                { key: data.id }
                                        }
                                    )
                                }
                                }>Details</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Fragment>
    )
}

export default Homepage;
