import React, {useState} from 'react';
import {ThemeProvider, Container, Box, Typography, Button, IconButton, Link, CardContent, Card, Grid, TextField, Paper
} from '@mui/material';
import theme from "../theme";
import imageFront from "../images/foto7.jpg";


const Contact = () => {


    return (
            <ThemeProvider theme={theme}>
                <Container id ='contact'
                     maxWidth='xl' sx={{
                    display:'flex',
                    justifyContent: 'space-between',
                    flexWrap:'wrap',
                    flexGrow: 1,
                }}>
                <Box  component={Paper}  style ={{
                    margin: '0 60px 30px',
                    padding:'35px',
                    maxWidth: '450px'}}>
                    <CardContent sx={{
                            display:'flex',
                            justifyContent: 'center'}}>
                        <img src={imageFront} alt='pasieka' style={{
                            // width: '100%',
                            maxHeight:'500px',
                            borderRadius:'4px',
                        }}/>
                    </CardContent>

                </Box>

                <Card style={{
                    maxWidth: '450px',
                    margin: '0 60px 30px',
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
                </Container>
            </ThemeProvider>
    )
}

export default Contact;


