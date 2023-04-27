import React, {useEffect, useState} from 'react';
import {ThemeProvider,Container, Box, Typography, Button, IconButton, Link, CardContent, Paper} from '@mui/material';

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
                <Box maxWidth="md"
                >


                </Box>
                <Box>
                    <CardContent>
                        {products.map((product, index) => (
                            <ItemProduct
                                key={product.id}
                                product={product}
                                index = {index}
                                // onDelete = {handleDelete}
                            />
                        ))}



                    </CardContent>

                </Box>



            </Container >
        </ThemeProvider >
    )
}

export default AllProducts;