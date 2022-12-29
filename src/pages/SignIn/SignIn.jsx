import { Card, TextField, FormControl, Button } from '@material-ui/core';
import { Outlet, Link, useNavigate } from "react-router-dom";
import './SignIn.css';
import React, { useEffect } from 'react';
export const SignIn = () => {
    const navigate = useNavigate();
    const handleLogin = (event) => {
        event.preventDefault();
        let getData = JSON.parse(localStorage.getItem('registered-values'));
        if (event.target.email.value &&
            event.target.password.value &&
            getData.filter(x => x.email === event.target.email.value && x.password === event.target.password.value).length) {
            localStorage.setItem('sessionInfo', JSON.stringify(getData.filter(x => x.email === event.target.email.value && x.password === event.target.password.value)[0]));
            navigate('/dashboard');
        }
    }

    useEffect(() => {
        localStorage.removeItem('sessionInfo');
    }, [])
    return (
        <div className='signin-container'>
            <Card className='custom-card'>
                <h1>SignIn</h1>
                <form onSubmit={handleLogin}>
                    <FormControl className='form-control'>
                        <TextField
                            required
                            type="email"
                            name="email"
                            label="Email"
                            placeholder="Email"
                            fullWidth
                        />
                    </FormControl>
                    <FormControl className='form-control'>
                        <TextField
                            required
                            type="password"
                            name="password"
                            label="Password"
                            placeholder="Password"
                            fullWidth
                        />
                    </FormControl>
                    <FormControl className='form-control'>
                        <Button type="submit" className='custom-button' variant="contained" color="primary">
                            Login
                        </Button>
                    </FormControl>
                </form>
                <div className='already-register-section'>
                    Not yet register ?&nbsp;<Link
                        component="button"
                        variant="body2"
                        to="/register"
                    >
                        Register
                    </Link>
                    <Outlet />
                </div>
            </Card>
        </div>
    )
}