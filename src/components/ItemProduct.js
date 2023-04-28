import React, {useState} from 'react';
import {ThemeProvider,Container, Box, Typography, Button, IconButton, Link, CardContent, Paper} from '@mui/material';

import theme from "../theme";

const ItemProduct = ({product}) => {

    return(

        <ThemeProvider theme={theme}>
            <Container
                       component={Paper}
                       sx={{
                           paddingTop:'16px',
                           // backgroundColor:'transparent',
                           // mt:{ xs: 1, md: 10, lg: '120px' },
                           // display: 'flex',
                           // justifyContent: 'space-between',
                           // flexWrap: 'wrap'
                           // flexDirection: 'column'
                           border:'1px solid #F3D188',

                       }}>
                <Box>
                    <CardContent >

                        <Typography variant="body2"
                                    sx={{
                                        mr: 3,
                                        // ml:{ xs: 5, md: 17, xl:15 },
                                        mt:{ xs: 2, xl:3 },
                                        fontSize: 16,
                                        fontWeight: 600,
                                    }}
                        >
                            {product.name}  {product.weight} g

                        </Typography>

                        <Typography variant="body2"
                                    sx={{
                                        mr: 3,
                                        // ml:{ xs: 5, md: 17, xl:15 },
                                        mt:{ xs: 2, xl:3 },
                                        fontSize: 14,
                                        fontWeight: 400,
                                    }}
                        >
                            <img src={require(`../images/products/${product.img}?w=161&fit=crop&auto=format`)} alt ={product.name}/>


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

                        <Typography variant="body2"
                                    sx={{
                                        mr: 3,
                                        // ml:{ xs: 5, md: 17, xl:15 },
                                        mt:{ xs: 2, xl:3 },
                                        fontSize: 16,
                                        fontWeight: 600,
                                    }}
                        >Cena: {product.price} zł

                        </Typography>

                        <Button variant='contained'
                            // fullWidth
                            color='secondary'>Dodaj do koszyka</Button>
                    </CardContent>

                </Box>



            </Container >
        </ThemeProvider >
    )
}

export default ItemProduct;