import React, {useState} from 'react';
import {ThemeProvider, Container, Box, Typography, Button, IconButton, Link, CardContent} from '@mui/material';

import theme from "../theme";

const imageFront= require('../images/foto4.jpg');

const About = () => {

    return(

        <ThemeProvider theme={theme}>
            <Container maxWidth="lg"
                       sx={{
                           backgroundColor:'transparent',
                           mt:{ xs: 1, md: 10, lg: '120px' },
                           // display: 'flex',
                           // justifyContent: 'space-between',
                           // flexWrap: 'wrap'
                           //    display: 'flex',
                           // flexWrap:'wrap',
                           // flexDirection: 'column'

                       }}>
                <Box maxWidth="md"
                >


                </Box>
                <Box>
                    <CardContent>
                        <img src={imageFront} alt='pasieka' style={{
                            width: '100%',
                            margin: '0 auto'
                        }}/>
                        <Typography variant="body2"
                                    sx={{
                                        mr: 3,
                                        display: 'flex',
                                        flexWrap:'wrap',
                                        ml:{ xs: 5, md: 17, xl:15 },
                                        mt:{ xs: 2, xl:3 },
                                        fontSize: 14,
                                        fontWeight: 600
                                    }}
                        >
                            Jesteśmy rodziną, która stawia pierwsze kroki w pszczelarstwie. Nasza pasieka znajduje się w malowniczej okolicy Łodzi.
                            W naszej ofercie znajdziesz różne rodzaje miodów, w tym m.in. miód lipowy, gryczany, rzepakowy oraz wielokwiatowy.

                        </Typography>
                    </CardContent>

                </Box>



            </Container >
        </ThemeProvider >
    )
}

export default About;