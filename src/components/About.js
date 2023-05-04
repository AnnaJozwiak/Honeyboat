import React, {useState} from 'react';
import {ThemeProvider,Container, Box, Typography, Button, IconButton, Link, CardContent, Paper} from '@mui/material';

import theme from "../theme";
import ImgCarousel from "./Carousel";

import iconBeeLeft from '../assets/bee-left.svg';
import iconTornadoLeft from '../assets/tornado-left.svg';
import iconBeeRight from '../assets/bee-right.svg';
import iconTornadoRight from '../assets/tornado-right.svg';

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
                    <CardContent sx={{position:'relative'}}>
                        {/*<img src={imageFront} alt='pasieka' style={{*/}
                        {/*    width: '100%',*/}
                        {/*    margin: '0 auto',*/}
                        {/*    borderRadius:'4px',*/}
                        {/*    objectFit: 'contain'*/}
                        {/*}}/>*/}

                        <img src={iconBeeLeft}
                             style={{
                                 height:'100px',
                                 position: 'absolute',
                                 top: '100px',
                                 // left: { lg: '30px',xl:'80px'},
                                 left: '30px',
                                 transform: 'rotate(-19deg)',
                                 display: { xs: 'none', md:'none'},

                             }}/>
                        <img src={iconTornadoLeft}
                             style={{
                                 height:'60px',
                                 position: 'absolute',
                                 top: '185px',
                                 // left: { lg: '9px',xl:'48px'},
                                 left: '9px',
                                 transform: 'rotate(230deg)'
                             }}/>

                        <img src={iconBeeRight}
                             style={{
                                 height:'100px',
                                 position: 'absolute',
                                 bottom: '225px',
                                 // right: { lg: '45px',xl:'113px'},
                                 right:  '45px',
                                 transform: 'rotate(19deg)'
                             }}/>
                        <img src={iconTornadoRight}
                             style={{
                                 height:'60px',
                                 position: 'absolute',
                                 bottom: '187px',
                                 // right: { lg: '8px',xl:'76'},
                                 right: '8px',
                                 transform: 'rotate(118deg)'
                             }}/>


                        <Box maxWidth='md'
                            sx={{
                                // display:'flex',
                                // justifyContent:'center',
                                margin: '0 auto',
                            }}>
                            <ImgCarousel />
                        </Box>

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