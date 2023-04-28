import React, {useState} from 'react';
import {ThemeProvider,Container, Box, Typography, Button, IconButton, Link, CardContent, Paper} from '@mui/material';

import theme from "../theme";

import blob from '../assets/blob2.svg'
import imageTop from "../assets/wave4.svg";

const ItemProduct = ({product}) => {

    return(

        <ThemeProvider theme={theme}>
            <Container
                       component={Paper}
                       sx={{
                           // paddingTop:'16px',
                           border:'1px solid #F3D188',
                            width: '350px'
                       }}>
                <Box>
                    <CardContent sx={{
                        display:'flex',
                        flexDirection:'column',
                        justifyContent:'space-between',
                        flexGrow: 1,
                        height:'540px'
                    }} >

                        <Typography variant="body2"
                                    sx={{
                                        mr: 3,
                                        // ml:{ xs: 5, md: 17, xl:15 },
                                        mt:{ xs: 2, xl:3 },
                                        fontSize: 16,
                                        fontWeight: 600,
                                    }}
                        >
                            {product.name}  {product.weight}g

                        </Typography>

                        <Typography   sx={{
                                        mr: 3,
                                        // ml:{ xs: 5, md: 17, xl:15 },
                                        mt:{ xs: 2, xl:3 },
                                        // width: { xs: '30px', sm: '50px', xl: '150px'},
                                        backgroundImage: `url(${blob})`,
                                        backgroundRepeat: 'no-repeat',
                                        backgroundSize: 'cover',
                                        display:'flex',
                                         justifyContent:'center',
                                        backgroundPositionY:'-22px'
                                    }}
                        >
                            <img src={require(`../images/products/${product.img}`)} alt ={product.name}
                            style={{
                               maxHeight:'200px'
                            }}/>


                        </Typography>

                        <Typography variant="body2"
                                    sx={{
                                        mr: 3,
                                        // ml:{ xs: 5, md: 17, xl:15 },
                                        mt:{ xs: 2, xl:3 },
                                        fontSize: 14,
                                        fontWeight: 400,
                                    }}
                        >{product.description}

                        </Typography>

                        <Box sx ={{justifyItems:'flex-end', alignSelf:'flex-end'}}>
                        <Typography variant="body2"
                                    sx={{
                                        mr: 3,
                                        // ml:{ xs: 5, md: 17, xl:15 },
                                        mt:{ xs: 2, xl:3 },
                                        fontSize: 16,
                                        fontWeight: 600,
                                       textAlign:'right',
                                        marginRight:0
                                    }}
                        >Cena: {product.price}zł
                        </Typography>

                        <Button variant='contained'
                            color='secondary'
                        >Dodaj do koszyka</Button>
                      </Box>
                    </CardContent>

                </Box>



            </Container >
        </ThemeProvider >
    )
}

export default ItemProduct;