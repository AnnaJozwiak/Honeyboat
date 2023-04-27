import React, {useState} from 'react';
import {ThemeProvider,Container, Box, Typography, Button, IconButton, Link, CardContent, Paper} from '@mui/material';

import theme from "../theme";

const imageFront= require('../images/foto6.jpg');

const ItemProduct = ({product}) => {

    return(

        <ThemeProvider theme={theme}>
            <Container maxWidth="xl"
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
                        {/*<img src={imageFront} alt='pasieka' style={{*/}
                        {/*    width: '100%',*/}
                        {/*    margin: '0 auto',*/}
                        {/*    borderRadius:'4px'*/}
                        {/*}}/>*/}
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
                            {product.name}

                        </Typography>
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
                        >Cena: {product.price} zł

                        </Typography>
                    </CardContent>

                </Box>



            </Container >
        </ThemeProvider >
    )
}

export default ItemProduct;