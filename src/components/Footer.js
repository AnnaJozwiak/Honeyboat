import React from 'react';
import {ThemeProvider, Container, Box, Typography, Button, IconButton, Link} from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';


import theme from "../theme";

const pagesCol1 = [
    {
        name:'O pasiece',
        link:'/#about'
    },
    // {
    // name:'Nasze przygody',
    // link:'/'
    // },
    {
        name:'Współpraca',
        link:'/#colaboration'
    },
    {
        name:'Sklep',
        link:'/shop'
    },
    {
        name:'Kontakt',
        link:'/#contact'
    },

];

const logo = require('../assets/Font.png');

const Footer =()=> {

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
                        sx={{
                            mr: 3,
                            display: 'flex',
                            height: { xs: '30px', sm: '40px', xl: '50px'},
                            ml:{ xs: 5, md: 17, xl:15 },
                            mt:{ xs: 2, xl:3 },
                        }}
                    >
                        <img src={logo} alt='logo' />
                        <IconButton
                            href='https://www.instagram.com/honeyboat.pl/'
                            target='_blank'
                            sx={{
                                mb:3,
                                fontSize: '40px',
                                // color:'black',
                                mt:'12px',
                                ml: '20px'
                            }}
                        >
                            <InstagramIcon />
                        </IconButton>
                        <IconButton
                            href='https://www.facebook.com/profile.php?id=100083395718000'
                            target='_blank'
                            sx={{
                                mb:3,
                                fontSize: '40px',
                                // color:'black',
                                mt:'12px'
                            }}
                        >
                            <FacebookIcon />
                        </IconButton>
                    </Typography>

                    <Typography
                        sx={{
                            mr: 3,
                            display: 'flex',
                            flexWrap:'wrap',
                            gap: { xs: '30px', sm: '100px'},
                            ml:{ xs: 5, md: 17, xl:15 },
                            mt:{ xs: 2, xl:3 },
                            fontSize: 14
                        }}
                    >

                        <Box style={{
                            display:'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            fontSize:13,
                            textDecoration: 'none',
                            textTransform:'none',

                        }}>
                            {pagesCol1.map((page) => (
                                   <Button
                                    sx={{ textTransform: 'none', marginLeft:0, paddingLeft:0, textAlign:'left'}}
                                    href={page.link}
                                    key={page.name}
                                >
                                    {page.name}
                                </Button>
                            ))}
                        </Box>


                        <Box style={{
                            display:'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            fontSize:13,
                            textDecoration: 'none',
                            textTransform:'none'
                        }} >
                            <Typography sx={{padding:'6px 8px 6px 0px', fontWeight:'500', fontSize:'14px'}}>Skontaktuj się z nami:</Typography>
                            <Button sx={{textTransform:'none'}} href ='mailto:honeyboat.pl@gmail.com' target="_blank" underline="none"><AlternateEmailIcon /> honeyboat.pl@gmail.com</Button>
                            <Button sx={{textTransform:'none'}} href ='tel:663150394' target="_blank"><PhoneIcon /> 663 150 394</Button>
                            <Button sx={{textTransform:'none'}} href ='https://wa.me/48663150394' target="_blank"><WhatsAppIcon /> Whats app</Button>


                        </Box>
                    </Typography>

                </Box>

                <Box sx={{
                    flexGrow: 1,
                    display: 'flex',
                    justifyContent:'center'
                }}>
                    <Typography sx={{
                        fontSize:13,
                        paddingTop:'30px'

                    }}>
                        Copyright © 2023 honeyboat.pl. All rights reserved.
                    </Typography>
                </Box>


            </Container >
        </ThemeProvider >
    )
}

export default Footer;