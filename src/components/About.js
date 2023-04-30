import React, {useState} from 'react';
import {ThemeProvider,Container, Box, Typography, Button, IconButton, Link, CardContent, Paper} from '@mui/material';

import theme from "../theme";

const imageFront= require('../images/foto6.jpg');

const About = () => {

    return(

        <ThemeProvider theme={theme}>
            <Container maxWidth="xl"
                       id='about'
                       component={Paper}
                       sx={{
                           paddingTop:'16px'
                           // backgroundColor:'transparent',
                           // mt:{ xs: 1, md: 10, lg: '120px' },
                           // display: 'flex',
                           // justifyContent: 'space-between',
                           // flexWrap: 'wrap'
                           //    display: 'flex',
                           // flexWrap:'wrap',
                           // flexDirection: 'column'

                       }}>

                <Box>
                    <CardContent>
                        <img src={imageFront} alt='pasieka' style={{
                            width: '100%',
                            margin: '0 auto',
                            borderRadius:'4px'
                        }}/>
                        <Typography variant="body2"
                                    sx={{
                                        mr: 3,
                                        display: 'flex',
                                        flexWrap:'wrap',
                                        // ml:{ xs: 5, md: 17, xl:15 },
                                        mt:{ xs: 2, xl:3 },
                                        fontSize: 14,
                                        fontWeight: 600,
                                        textAlign:'center'
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