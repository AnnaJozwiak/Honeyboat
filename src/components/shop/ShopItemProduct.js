import {useContext, useState} from 'react';
import {ThemeProvider,Container, Box, Typography, Button, IconButton, Link, CardContent, Paper} from '@mui/material';
import theme from "../../theme";

import {CartContext} from "./CartContext";

import blob from '../../assets/blob2.svg';
import iconMinus from '../../assets/minus-hexagon.svg';
import iconPlus from '../../assets/add-hexagon.svg';
import iconDelete from '../../assets/delete.svg';

const ShopItemProduct = ({product}) => {
    const cart = useContext(CartContext);

    const productQuantity = cart.getProductQuantity(product.id);

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
                        minHeight:'540px'
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
                            <img src={require(`../../images/products/${product.img}`)} alt ={product.name}
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
                                        minHeight:'120px'
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


                            {productQuantity > 0 ?
                                <>

                                    <Typography style={{textAlign:'right', marginRight:0, }}>
                                        <Button  onClick={()=> cart.removeOneFromCart(product.id)}>
                                            <img src={iconMinus}
                                                 style={{
                                                     height:'25px',
                                                 }}/></Button>

                                        {productQuantity}
                                        <Button style={{
                                            paddingRight:0
                                            }}
                                            onClick={() => cart.addOneToCart(product.id)}>
                                            <img src={iconPlus}
                                            style={{
                                                height:'25px',
                                                paddingRight:0
                                            }}/></Button>
                                    </Typography>

                                    <Button onClick={()=> cart.deleteFromCart(product.id)}>
                                        Usuń z koszyka
                                        <img src={iconDelete}
                                          style={{
                                             height:'30px',
                                              paddingRight:'5px'
                                             }}/></Button>
                                </>
                                :
                                <Button variant='contained'
                                        color='secondary'
                                        onClick={()=>cart.addOneToCart(product.id)}
                                >Dodaj do koszyka</Button>


                            }

                        </Box>

                    </CardContent>
                </Box>
            </Container >
        </ThemeProvider >
    )
}

export default ShopItemProduct;