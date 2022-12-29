import { Card, TextField, InputLabel, Select, FormControl, Button, MenuItem } from '@material-ui/core';
import { Outlet, Link, useNavigate } from "react-router-dom";
import './Register.css';
import React, { useEffect } from 'react';
export const Register = () => {
    const navigate = useNavigate();
    const handleRegister = (event) => {
        event.preventDefault();
        let submittedData = [];
        if (event.target.name.value &&
            event.target.password.value &&
            event.target.email.value &&
            event.target.phonenumber.value &&
            event.target.profession.value) {

            const data = {
                name: event.target.name.value,
                password: event.target.password.value,
                email: event.target.email.value,
                phonenumber: event.target.phonenumber.value,
                profession: event.target.profession.value
            }
            if (localStorage.getItem('registered-values')) {
                submittedData = JSON.parse(localStorage.getItem('registered-values'));
                if (submittedData.filter(x => x.email === data.email).length) {
                    alert('Already the email id is Registered, try login');
                } else {
                    storeFormData(data);
                }
            } else {
                storeFormData(data);
            }
        }

        function storeFormData(data) {
            submittedData.push(data);
            localStorage.setItem('registered-values', JSON.stringify(submittedData));
            navigate('/signin');
        }
    }

    useEffect(() => {
        localStorage.removeItem('sessionInfo');
    }, [])
    return (
        <div className='register-container'>
            <Card className='custom-card'>
                <h1>Register</h1>
                <form onSubmit={handleRegister}>
                    <FormControl className='form-control'>
                        <TextField
                            required
                            type="text"
                            name="name"
                            label="Name"
                            placeholder="Name"
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
                            type="text"
                            name="phonenumber"
                            label="Phone number"
                            placeholder="Phone number"
                            fullWidth
                        />
                    </FormControl>
                    <FormControl className='form-control'>
                        <InputLabel id="demo-simple-select-standard-label">Profession</InputLabel>
                        <Select
                            labelId="demo-simple-select-standard-label"
                            id="demo-simple-select-standard"
                            label="Profession"
                            name="profession"
                            placeholder="Profession"
                            fullWidth
                        >
                            <MenuItem value={1}>Ten</MenuItem>
                            <MenuItem value={2}>Twenty</MenuItem>
                            <MenuItem value={3}>Thirty</MenuItem>
                        </Select>
                    </FormControl>


                    <FormControl className='form-control'>
                        <Button type="submit" className='custom-button' variant="contained" color="primary">
                            Submit
                        </Button>
                    </FormControl>
                </form>
                <div className='already-register-section'>
                    Already Register ?&nbsp;<Link
                        component="button"
                        variant="body2"
                        to="/signin"
                    >
                        Login
                    </Link>
                    <Outlet />
                </div>
            </Card>
        </div>
    )


}