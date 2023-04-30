import React, {useState} from 'react';
import {ThemeProvider, Container, Box, Typography, Button, IconButton, Link, CardContent} from '@mui/material';

import theme from "../theme";

const Colaboration = () => {

    return(

        <ThemeProvider theme={theme}>
            <Container maxWidth="lg"
                       id='colaboration'
                       sx={{
                           backgroundColor:'transparent',
                           mt:{ xs: 1, md: 10, lg: '20px' },
                           maxHeight:'300px',

                       }}>
                <Box maxWidth="md"
                >


                </Box>
                <Box>
                    <CardContent sx={{
                        display:'flex',
                        flexDirection:'column',
                        alignItems:' center'
                    }}>

                        <Typography variant="body2"
                                    sx={{
                                        marginTop: { xs: '20px', md: '10px',lg:'10px', xl:'1px' },
                                        fontSize: { xs: 15,sm:20, md: 30, xl:30 },
                                        fontWeight: 700,
                                        fontFamily: 'Caveat',
                                        textAlign:'center'
                                    }}
                        >
                           Jesteś sadownikiem lub rolnikiem z uprawami kwitnącymi? <br/>
                            Chcesz mieć większe plony?<br/>
                            Skontaktuj się z naszą pasieką wędrowną. Wypełnij formularz kontaktowy lub zadzwoń!
                        </Typography>
                    </CardContent>

                </Box>



            </Container >
        </ThemeProvider >
    )
}

export default Colaboration;