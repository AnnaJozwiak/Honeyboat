import {useState, useEffect} from 'react';
import {ThemeProvider, IconButton, Container, Box, Typography, Button, Link, CardContent, Card, Grid, TextField} from '@mui/material';
import theme from "../theme";

import supabase from "./SupabaseClient";

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

const ProductsTable = ({onAdd}) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
    }, []);

    const getProducts = async () =>{
        const { data } = await supabase
            .from("products")
            .select();
        setProducts(data);
    }


    return (
        <div >
            <ThemeProvider theme={theme}>
                <Card maxWidth="md"
                      sx={{
                          // maxWidth: '1200px',
                          margin: '100px 50px',
                          padding:'20px 5px'
                      }}>
                    <CardContent>
                        <Typography variant='h3'>
                            <Button variant='contained'
                                    color='secondary'
                                    sx={{
                                        mb: '20px'
                                    }}
                                    onClick={onAdd}>Dodaj</Button>
                        </Typography>

                        <Grid container spacing={1}>

                            <Grid xs={12} sm={1} item >
                                <Typography>Lp.</Typography>
                                {products.map((product, index) => (
                                    <Typography>{index+1}</Typography>
                                ))}
                            </Grid>

                            <Grid xs={12} sm={2} item>
                                <Typography >Nazwa</Typography>
                                {products.map((product) => (
                                    <Typography>{product.name}</Typography>
                                ))}
                            </Grid>
                            <Grid xs={12} sm={3} item>
                                <Typography>Opis</Typography>
                                {products.map((product) => (
                                    <Typography>{product.description}</Typography>
                                ))}
                            </Grid>

                            <Grid xs={12} sm={1} item>
                                <Typography>Ilość</Typography>
                                {products.map((product) => (
                                    <Typography>{product.count}</Typography>
                                ))}
                            </Grid>

                            <Grid xs={12} sm={1} item>
                                <Typography>Cena</Typography>
                                {products.map((product) => (
                                    <Typography>{product.price}</Typography>
                                ))}
                            </Grid>

                            <Grid xs={12} sm={2} item>
                                <Typography>Grafika</Typography>
                                {products.map((product) => (
                                    <Typography>{product.img}</Typography>
                                ))}
                            </Grid>

                            <Grid xs={12} sm={1} item>
                                <Typography>Edytuj</Typography>
                                {products.map((product) => (
                                    <Typography> <IconButton>
                                        <EditIcon size='large'/></IconButton></Typography>
                                ))}

                            </Grid>

                            <Grid xs={12} sm={1} item>
                                <Typography>Usuń</Typography>
                                {products.map((product) => (
                                    <Typography> <IconButton  ><DeleteIcon size='large'
                                                                           onClick={async () => {
                                        const { data} = await supabase
                                            .from('products')
                                            .delete()
                                            .eq('id', product.id)
                                    }}/>
                                    </IconButton>
                                    </Typography>
                                ))}
                            </Grid>

                        </Grid>

                    </CardContent>
                </Card>
            </ThemeProvider>
        </div>
    )
}

export default ProductsTable;


