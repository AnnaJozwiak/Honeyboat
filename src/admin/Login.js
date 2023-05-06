import React, {useEffect, useState} from 'react';
import imageBack from "../assets/tlo4.png";
import {Button, Card, CardContent, CssBaseline, Grid, TextField, ThemeProvider, Typography} from "@mui/material";

import theme from "../theme";

import FakeAPI from './fakeAPI';
import AdminPulpit from "./AdminPulpit";
import {useNavigate} from "react-router-dom";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const [userData, setUserData] = useState();

    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const validationErros = [];
        if(username.length < 3) {
            validationErros.push("Login musi być dłuższy niż 2 znaki");
        }
        if(password.length < 5) {
            validationErros.push("Hasło musi być dłuższe niż 4 znaki");
        }

        if (validationErros.length === 0) {
            setErrors([]);
            FakeAPI.login({ username, password }).then(user => {
                setUserData(user);
                console.log(user);
            }).catch(err => {
                setErrors([err]);
            })
        } else {
            setErrors(validationErros);
        }
    }
    if (userData) {
        // return (
        //     <AdminPulpit/>
        // )
        navigate('/admin');
    }

    return (
        <div style={{
            backgroundImage: `url(${imageBack})`,
            backgroundRepeat: 'repeat',
            backgroundSize: 'contain',
            height:'100vh',
            padding:'100px',
            margin:0

        }}>
            <CssBaseline/>
            <ThemeProvider theme={theme}>
                <Card style={{
                    maxWidth: '450px',
                    margin: '200px auto',
                }}>
                    <CardContent>
                        <Typography variant='h6'>
                            LOGOWANIE
                        </Typography>
                        <form onSubmit={handleSubmit}>
                            <Grid container spacing={1}>
                                <Grid xs={12}  item>
                                    <TextField
                                        label = "Login"
                                        placeholder='Podaj swój login'
                                        variant='outlined'
                                        fullWidth
                                        required
                                        color='secondary'
                                        type="text"
                                        name="username"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}/>

                                </Grid>
                                <Grid xs={12}  item>
                                    <TextField
                                        label = "Hasło"
                                        placeholder='Podaj swoje hasło'
                                        variant='outlined'
                                        fullWidth
                                        required
                                        color='secondary'
                                        type="password"
                                        name="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />

                                </Grid>

                                <Grid xs={12}  item>
                                    <Button type='submit'
                                            variant='contained'
                                            fullWidth
                                            color='secondary'>Zaloguj się</Button>
                                </Grid>
                            </Grid>
                            <Typography>
                                <ul>
                                    {errors.map((error, index) => {
                                        return <li key={index}>{error}</li>
                                    })}
                                </ul>
                            </Typography>



                        </form>
                    </CardContent>
                </Card>
            </ThemeProvider>
        </div>
    )
}

export default Login;
