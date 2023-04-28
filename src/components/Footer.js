import React from 'react';
import {ThemeProvider, Container, Box, Typography, Button, IconButton, Link} from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

// import { makeStyles } from '@mui/styles';

import theme from "../theme";

const pages = ['O pasiece', 'Nasze przygody', 'Sklep', 'Kontakt'];


const Footer =()=> {
    // const classes = useStyles();

    return (
        <ThemeProvider theme={theme}>
            <Container   maxWidth="xl"
                         sx={{
                             backgroundColor:'#F3D188'
                         }}>

                <Box sx={{
                    flexGrow: 1,
                    display: 'flex',
                    flexWrap:'wrap',}}>

                    <Typography
                        variant="string"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 3,
                            display: 'flex',
                            height: { xs: '30px', sm: '40px', xl: '50px'},
                            ml:{ xs: 5, md: 17, xl:15 },
                            mt:{ xs: 2, xl:3 },
                        }}
                    >
                        <img src={require('../assets/Font.png')} alt='logo' />
                        <IconButton
                            size="large"
                            href='https://www.instagram.com/honeyboat.pl/'
                            color="black"
                            rel="noopener"
                            sx={{
                                mb:3,
                            }}
                        >
                            <InstagramIcon />

                        </IconButton>
                        <IconButton
                            size="large"
                            href='https://www.facebook.com/profile.php?id=100083395718000'
                            color="black"
                            rel="noopener"
                            sx={{
                                mb:3,
                            }}
                        >
                            <FacebookIcon />
                        </IconButton>
                    </Typography>

                    <Typography
                        component="a"
                        href="/"
                        sx={{
                            mr: 3,
                            display: 'flex',
                            flexWrap:'wrap',
                            // display: { xs: 'none', md: 'flex' },
                            // height: { xs: '30px', md: '40px', xl: '50px'},
                            ml:{ xs: 5, md: 17, xl:15 },
                            mt:{ xs: 2, xl:3 },
                            fontSize: 14
                        }}
                    >
                        {/*<ul>*/}
                        {/*    <a href ='#>'><li>O pasiece</li></a>*/}
                        {/*    <a href ='#>'><li>Nasze przygody</li></a>*/}
                        {/*    <a href ='#>'><li>Sklep</li></a>*/}
                        {/*</ul>*/}
                        <Box style={{
                            display:'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            fontSize:13,
                            textDecoration: 'none',
                            textTransform:'none'
                        }}>
                            <Button sx={{textTransform:'none', textDecoration:'none'}} href ='#' >O pasiece</Button>
                            <Button sx={{textTransform:'none', textDecoration:'none'}} href ='#'>Nasze przygody</Button>
                            <Button sx={{textTransform:'none', textDecoration:'none'}}  href ='#'>Sklep</Button>
                            <Button sx={{textTransform:'none', textDecoration:'none'}}  href ='#'>Kontakt</Button>
                        </Box>

                        <Box style={{
                            display:'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                             fontSize:13,
                             textDecoration: 'none',
                             textTransform:'none'
                        }}>
                            <Button sx={{textTransform:'none'}} >Regulamin</Button>
                            <Button sx={{textTransform:'none', textDecoration:'none'}}  href ='#'>Dostawa i płatności</Button>
                            <Button sx={{textTransform:'none', textDecoration:'none'}} href ='#'>Polityka prywatności</Button>
                            <Button sx={{textTransform:'none', textDecoration:'none'}}  href ='#'>Współpraca</Button>
                        </Box>
                        {/*<ul>*/}
                        {/*      <a href ='#>'><li>Regulamin</li></a>*/}
                        {/*      <a href ='#>'><li>Dostawa i płatności</li></a>*/}
                        {/*      <a href ='#>'><li>Polityka prywatności</li></a>*/}
                        {/*</ul>*/}
                        <Typography style={{
                            display:'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            fontSize:13,
                            textDecoration: 'none',
                            textTransform:'none'
                        }} >
                            <Link  underline="none">Skontaktuj się z nami:</Link>
                            <Button sx={{textTransform:'none'}} href ='#' target="_blank" underline="none"><AlternateEmailIcon /> honeyboat.pl@gmail.pl</Button>
                            <Button sx={{textTransform:'none'}} href ='#' target="_blank"><PhoneIcon /> 663 150 394</Button>
                            <Button sx={{textTransform:'none'}} href ='https://wa.me/48663150394' target="_blank"><WhatsAppIcon /> Whats app</Button>


                        </Typography>
                    </Typography>

                </Box>

                <Box sx={{
                    flexGrow: 1,
                    display: 'flex',
                    justifyContent:'center'
                }}>
                    <Typography >
                        Copyright © 2023 honeyboat.pl. All rights reserved.
                    </Typography>
                </Box>


            </Container >
        </ThemeProvider >
    )
}

export default Footer;