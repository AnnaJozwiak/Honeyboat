import React, {useState} from 'react';
import imageBack from "../assets/tlo4.png";
import {Button, Card, CardContent, CssBaseline, Grid, TextField, ThemeProvider, Typography} from "@mui/material";
import imageTop from "../assets/wave4.svg";
import { Route, Routes, Link, BrowserRouter} from 'react-router-dom';
import theme from "../theme";


const Login = () => {


    return (
        <div style={{
            backgroundImage: `url(${imageBack})`,
            backgroundRepeat: 'repeat',
            backgroundSize: 'contain',
            height:'100vh',
            padding:'100px',
            margin:0

        }}>
            <ThemeProvider theme={theme}>
                <Card style={{
                    maxWidth: '450px',
                    margin: '200px auto',
                }}>
                    <CardContent>
                        <Typography variant='h3'>
                            LOGOWANIE
                        </Typography>
                        <form>
                            <Grid container spacing={1}>
                                <Grid xs={12}  item>
                                    <TextField
                                        label = "Login"
                                        placeholder='Podaj swój login'
                                        variant='outlined'
                                        fullWidth
                                        required
                                        color='secondary'/>

                                </Grid>
                                <Grid xs={12}  item>
                                    <TextField
                                        label = "Hasło"
                                        placeholder='Podaj swoje hasło'
                                        variant='outlined'
                                        fullWidth
                                        required
                                        color='secondary'/>

                                </Grid>

                                <Grid xs={12}  item>
                                    <Button type='submit'
                                            variant='contained'
                                            fullWidth
                                            color='secondary'>Zaloguj się</Button>
                                </Grid>
                            </Grid>
                        </form>
                    </CardContent>
                </Card>
            </ThemeProvider>
        </div>
    )
}

export default Login;
