import {useContext} from 'react';
import {ThemeProvider,Container, Box, Typography, Paper} from '@mui/material';

import theme from "../../theme";
import ShopItemProduct from "./ShopItemProduct";
import {CartContext} from "./CartContext";


const AllProducts = () => {
    const products = useContext(CartContext);

    return(

        <ThemeProvider theme={theme}>
            <Container maxWidth="xl"
                       component={Paper}
                       sx={{
                           mt:{ xs: '50px', md: '70px', lg: '100px' },
                           mb:'100px',
                           padding:'30px 0',
                       }}>
                <Box maxWidth="xl"
                >
                    <Typography  variant='h3' sx={{
                        fontSize: { xs: '20px', sm: '25px',lg: '30px'},
                        fontWeight: 700,
                        textAlign:'center',
                        paddingBottom:'50px'
                    }}>W naszej ofercie posiadamy</Typography>

                </Box>
                <Box sx={{
                    display:'flex',
                    flexGrow: 1,
                    flexWrap: 'wrap',
                    gap: '20px',
                }}>
                    {products.dataProducts.map((product) => (
                        <ShopItemProduct
                            key={product.id}
                            product={product}
                        />
                    ))}
                </Box>

            </Container >
        </ThemeProvider >
    )
}

export default AllProducts;