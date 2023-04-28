import React, {useState} from 'react';
import {ThemeProvider, Container, Box, Typography, Button, IconButton, Link, CardContent} from '@mui/material';

import theme from "../theme";

const Banner = () => {

    return(

        <ThemeProvider theme={theme}>
            <Container maxWidth="xl"
                       sx={{
                           backgroundColor:'transparent',
                           mt:{ xs: 1, md: 10, lg: '30px' },
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
                                        fontSize: { xs: 25,sm:30, md: 40, xl:50 },
                                        fontWeight: 700,
                                        fontFamily: 'Caveat'
                                    }}
                        >
                            Miody pszczele prosto z pasieki!
                        </Typography>
                        <Typography sx={{
                            fontSize: { xs: 20, md: 35, xl:45 },
                            fontWeight: 600,
                            fontFamily: 'Caveat'
                        }}>Poszukujesz prawidziwego miodu?
                        </Typography>
                        <Typography sx={{
                            fontSize: { xs: 20,sm:25, md: 35, xl:45 },
                            fontWeight: 600,
                            fontFamily: 'Caveat'
                        }}>Skontaktuj się z nami!</Typography>
                    </CardContent>

                </Box>



            </Container >
        </ThemeProvider >
    )
}

export default Banner;