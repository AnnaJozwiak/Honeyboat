import React, {useState} from 'react';
import {ThemeProvider, Container, Box, Typography, Button, IconButton, Link, CardContent, Card, Grid, TextField, Paper
} from '@mui/material';
import theme from "../theme";
import imageFront from "../images/foto7.jpg";

import iconBeekeeper from "../assets/beekeeper.svg";


const Contact = () => {


    return (
            <ThemeProvider theme={theme}>
                <Container id ='contact'
                            maxWidth='xl'
                           sx={{
                    display:'flex',
                    justifyContent: 'space-around',
                    flexWrap:'wrap',
                    flexGrow: 1,
                }}>
                <Card sx ={{
                    margin: {xs:'0px 0px 20px 0px' ,sm:'0 60px 30px'},
                    maxWidth: '450px',
                    padding:'20px 21px'
                }}>
                    <CardContent sx={{
                            display:'flex',
                            justifyContent: 'center',
                    }}>
                        <img src={imageFront}
                             alt='pasieka'
                             style={{
                            maxHeight:'500px',
                            borderRadius:'4px',
                        }}/>
                    </CardContent>

                </Card>

                <Card sx={{
                    maxWidth: '450px',
                    padding:'20px 5px',
                    margin: {xs:'20px 0px 20px 0px' ,sm:'0 60px 30px'},
                }}>
                    <CardContent>

                        <Typography variant='h3'
                                    sx={{
                                        marginBottom: {xs:'25px' ,sm:'10px'},
                                        fontSize:{xs:'15px' ,sm:'20px'},
                                        textAlign:'center',
                                        position: 'relative',
                                    }}>
                            <img src={iconBeekeeper}
                                 style={{
                                     height:'60px',
                                     position: 'absolute',
                                     top: '-130%',
                                     left:'1%'
                                 }}/>
                                Skontaktuj się z nami!
                        </Typography>
                        <form>
                            <Grid container spacing={1}>
                                <Grid xs={12} sm={6} item>
                                    <TextField
                                        label = "Imię"
                                        placeholder='Podaj swoję imię'
                                        variant='outlined'
                                        fullWidth
                                        required
                                        color='secondary'/>

                                </Grid>
                                <Grid xs={12} sm={6} item>
                                    <TextField
                                        label = "Nazwisko"
                                        placeholder='Podaj swoję nazwisko'
                                        variant='outlined'
                                        fullWidth
                                        required
                                        color='secondary'/>

                                </Grid>
                                <Grid xs={12}  item>
                                    <TextField
                                        type='email'
                                        label = "Email"
                                        placeholder='Podaj swoj email'
                                        variant='outlined'
                                        fullWidth
                                        required
                                        color='secondary'/>
                                </Grid>
                                <Grid xs={12}  item>
                                    <TextField
                                        type='tel'
                                        label = "Numer telefonu"
                                        placeholder='Podaj swój numer telefonu'
                                        variant='outlined'
                                        fullWidth
                                        color='secondary'
                                    />
                                </Grid>
                                <Grid xs={12}  item>
                                    <TextField
                                        type='tel'
                                        label = "Temat wiadomości"
                                        placeholder='Podaj temat wiadomości'
                                        variant='outlined'
                                        fullWidth
                                        color='secondary'
                                        required
                                    />
                                </Grid>
                                <Grid xs={12}  item>
                                    <TextField
                                        type='tel'
                                        label = "Treść wiadomości"
                                        placeholder='Wpisz swoją wiadomość'
                                        variant='outlined'
                                        fullWidth
                                        required
                                        multiline rows={4}
                                        color='secondary'
                                    />
                                </Grid>
                                <Grid xs={12}  item>
                                    <Button type='submit'
                                            variant='contained'
                                            fullWidth
                                            color='secondary'>Wyślij wiadomość</Button>
                                </Grid>
                            </Grid>
                        </form>
                    </CardContent>
                </Card>
                </Container>
            </ThemeProvider>
    )
}

export default Contact;


