import React, {useEffect, useState} from 'react';
import {ThemeProvider,Container, Box, Typography,Grid, Button, IconButton, Link, CardContent, Paper} from '@mui/material';

import theme from "../theme";
import supabase from "../admin/SupabaseClient";
import ItemProduct from "./ItemProduct";

const imageFront= require('../images/foto6.jpg');

const AllProducts = () => {
    const [products, setProducts] = useState([]);

    const getProducts = async () =>{
        const { data } = await supabase
            .from("products")
            .select();
        if(data) {
            setProducts(data);
        }
    }

    useEffect(() => {
        getProducts();
    }, []);


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
                    }}>W naszej ofercie posiadamy</Typography>

                </Box>
                <Box sx={{
                    display:'flex',
                    flexGrow: 1,
                    flexWrap: 'wrap',
                    gap: '20px',
                    // margin: '0 auto',
                }}>
                    {/*<CardContent*/}
                    {/*    sx={{*/}
                    {/*    display:'flex',*/}
                    {/*   flexGrow: 1,*/}
                    {/*    flexWrap: 'wrap',*/}
                    {/*    gap: '30px',*/}
                    {/*    margin: '0 auto',*/}
                    {/*}}*/}
                    {/*>*/}
                        {products.map((product, index) => (
                            <ItemProduct
                                key={product.id}
                                product={product}
                                index = {index}
                            />
                        ))}

                    {/*</CardContent>*/}

                </Box>



            </Container >
        </ThemeProvider >
    )
}

export default AllProducts;