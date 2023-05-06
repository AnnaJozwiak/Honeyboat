import {useContext} from 'react';
import {ThemeProvider,Container, Box, Typography, Button,  Paper} from '@mui/material';

import theme from "../theme";

import ItemProduct from "./ItemProduct";
import {CartContext} from "./shop/CartContext";
import {NavLink} from "react-router-dom";


const Products = () => {
    const products = useContext(CartContext);

    return(

        <ThemeProvider theme={theme}>
            <Container maxWidth="xl"
                       component={Paper}
                       sx={{
                           marginTop: '100px',
                           padding:'30px 0'
                       }}>
                <Box maxWidth="xl"
                >
                    <Typography  variant='h3' sx={{

                        fontSize: 30,
                        fontWeight: 700,
                        textAlign:'center',
                        paddingBottom:'50px'
                    }}>Nasze miody</Typography>
                </Box>

                <Box sx={{
                    display:'flex',
                    flexGrow: 1,
                    flexWrap: 'wrap',
                    gap: '20px',
                    // margin: '0 auto',
                }}>
                        {products.dataProducts.map((product) => (
                            <ItemProduct
                                key={product.id}
                                product={product}
                            />
                        ))}
                </Box>
                <Button variant='contained'
                        color='secondary'
                        component={NavLink}
                        to={`/shop`}
                        // fullWidth
                        sx ={{marginTop:'20px',
                            width:'100%'
                        }}>
                    Przejdź do sklepu
                </Button>

            </Container >
        </ThemeProvider >
    )
}

export default Products;