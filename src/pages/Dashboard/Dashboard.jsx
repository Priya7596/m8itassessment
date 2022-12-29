import { Card, Checkbox } from '@material-ui/core';
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import './Dashboard.css';
export const Dashboard = () => {
    const getSessionInfo = JSON.parse(localStorage.getItem('sessionInfo'));
    const [datas, setDatas] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then((response) => response.json())
            .then((data) => {
                setDatas(data);
            })
            .catch((err) => {
                console.log(err.message);
            });
    }, [])


    return (
        <div className='dashboard-container'>
            <header className='header'>
                <nav>
                    <ul>
                        <li><Link to="/dashboard" className='link active' component="button" variant="body2">Dashboard</Link></li>
                        <li><Link to="/contact" className='link' component="button" variant="body2">Contact Info</Link></li>
                    </ul>
                </nav>
                {getSessionInfo && getSessionInfo.name && <div className='profile-info'>{getSessionInfo.name} |&nbsp;<Link to="/signin" className='link'>Logout</Link></div>}
            </header>
            <div className='dashboard-content'>
                {datas.map((data, index) => {
                    return (<Card className='dashboard-card' key={data.id}>
                        <h5>{data.title}</h5>
                        <p>UserId : {data.userId}</p>
                        <p>Completed : <Checkbox
                            checked={data.completed}
                        /> {data.completed.toString()}</p>
                    </Card>)
                })}
            </div>
        </div>
    )
}