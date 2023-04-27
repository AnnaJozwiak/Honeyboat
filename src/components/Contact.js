import React, {useState} from 'react';
import {ThemeProvider,  Container, Box, Typography, Button, IconButton, Link, CardContent, Card, Grid, TextField} from '@mui/material';
import theme from "../theme";


const Contact = () => {


    return (
        <div id ='contact'>
            <ThemeProvider theme={theme}>
                <Card style={{
                    maxWidth: '450px',
                    margin: '0 auto 30px',
                    padding:'20px 5px'
                }}>
                    <CardContent>
                        <Typography variant='h3'
                                    style={{
                                        marginBottom: '10px',
                                    }}>
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
            </ThemeProvider>
        </div>
    )
}

export default Contact;


