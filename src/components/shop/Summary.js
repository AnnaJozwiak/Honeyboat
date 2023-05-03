import React, {useContext, useEffect, useState} from 'react';
import {ThemeProvider, Container, Box, Typography, Button, IconButton, Link, CardContent} from '@mui/material';

import theme from "../../theme";
import {CartContext} from "./CartContext";
import supabase from "../../admin/SupabaseClient";


const Summary = () => {
    const cart=useContext(CartContext);

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
            <Container maxWidth="lg"
                       id='colaboration'
                       sx={{
                           backgroundColor:'transparent',
                           mt:{ xs: 1, md: 10, lg: '20px' },
                           maxHeight:'300px',

                       }}>
                <Box maxWidth="md"
                >


                </Box>
                <Box>
                    <CardContent sx={{
                        display:'flex',
                        flexDirection:'column',
                        alignItems:' center'
                    }}>

                        <Typography variant="body2"
                                    sx={{
                                        marginTop: { xs: '20px', md: '10px',lg:'10px', xl:'1px' },
                                        fontSize: { xs: 15,sm:20, md: 30, xl:30 },
                                        fontWeight: 700,
                                        fontFamily: 'Caveat',
                                        textAlign:'center'
                                    }}
                        >

                            Podsumowanie
                        </Typography>
                        <Typography>
                            Suma: {cart.getTotalCost()}zł





                        </Typography>
                    </CardContent>

                </Box>



            </Container >
        </ThemeProvider >
    )
}

export default Summary;