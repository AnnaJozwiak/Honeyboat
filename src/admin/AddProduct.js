import {useState} from 'react';
import {ThemeProvider,  Container, Box, Typography, Button, Link, CardContent, Card, Grid, TextField} from '@mui/material';
import theme from "../theme";

import supabase from "./SupabaseClient";

const AddProduct = ({onCancel}) => {
    const [name,setName] = useState('');
    const [description,setDescription] = useState('');
    const [count,setCount] = useState('');
    const [price,setPrice] = useState('');
    const [img,setImgUrl] = useState('');
    const [formError, setFormError] =useState(null);


    //dodanie do bazy
    const handleSubmit = async () => {
        // e.preventDefault();

        if(!name || !description || !count || !price || !img) {
            setFormError('Proszę uzupełnić wszystkie pola')
            return
        }

        const { data } = await supabase
            .from("products")
            .insert([{name,description,count, price, img}])

        if(data) {
            setFormError(null)
            console.log(data)
        }
    }


    return (
        <div >
            <ThemeProvider theme={theme}>
                <Card
                      style={{
                          margin: '100px auto',
                          maxWidth: '1500px'
                      }}>
                    <CardContent>

                        <form onSubmit={handleSubmit}>
                            <Grid container spacing={1}>

                                <Grid xs={12} sm={2} item>
                                    <Typography>Nazwa produktu</Typography>
                                </Grid>
                                <Grid xs={12} sm={10} item>
                                    <TextField
                                        variant='outlined'
                                        fullWidth
                                        color='secondary'
                                        value={name}
                                        onChange={(e)=> setName(e.target.value)}/>
                                </Grid>

                                <Grid xs={12} sm={2} item>
                                    <Typography>Opis</Typography>
                                </Grid>
                                <Grid xs={12} sm={10} item>
                                    <TextField
                                        variant='outlined'
                                        fullWidth
                                        color='secondary'
                                        value={description}
                                        onChange={(e)=> setDescription(e.target.value)}/>
                                </Grid>

                                <Grid xs={12} sm={2} item>
                                    <Typography>Ilość</Typography>
                                </Grid>
                                <Grid xs={12} sm={10} item>
                                    <TextField
                                        variant='outlined'
                                        fullWidth
                                        color='secondary'
                                        value={count}
                                        onChange={(e)=> setCount(e.target.value)}/>
                                </Grid>

                                <Grid xs={12} sm={2} item>
                                    <Typography>Cena</Typography>
                                </Grid>
                                <Grid xs={12} sm={10} item>
                                    <TextField
                                        variant='outlined'
                                        fullWidth
                                        color='secondary'
                                        value={price}
                                        onChange={(e)=> setPrice(e.target.value)}/>
                                </Grid>

                                <Grid xs={12} sm={2} item>
                                    <Typography>Grafika</Typography>
                                </Grid>
                                <Grid xs={12} sm={10} item>
                                    <TextField
                                        variant='outlined'
                                        fullWidth
                                        color='secondary'
                                        value={img}
                                        onChange={(e)=> setImgUrl(e.target.value)}/>
                                </Grid>

                            </Grid>

                            <Button variant='contained'
                                    color='secondary'
                                    type='submit'
                            >Zapisz</Button>
                            <Button variant='contained'
                                    color='secondary'
                                    style={{
                                        marginLeft:'10px'
                                    }}
                                    onClick={onCancel}
                            >Cofnij</Button>


                            {formError && <Typography>{formError}</Typography>}

                        </form>
                    </CardContent>
                </Card>
            </ThemeProvider>
        </div>
    )
}

export default AddProduct;


