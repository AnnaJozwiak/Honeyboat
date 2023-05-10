import React, {useState} from 'react';
import {ThemeProvider, Typography, Button, CardContent, Card, Grid, TextField} from '@mui/material';
import theme from "../theme";

import supabase from "./SupabaseClient";
import {useNavigate} from "react-router-dom";

const AddProduct = ({onCancel}) => {
    const [name,setName] = useState('');
    const [description,setDescription] = useState('');
    const [count,setCount] = useState('');
    const [price,setPrice] = useState('');
    const [weight,setWeight] = useState('');
    const [img,setImgUrl] = useState('');
    const [formError, setFormError] =useState(null);

    //dodanie do bazy
    const handleSubmit = async () => {
        // e.preventDefault();

        if(!name || !description || !count || !weight || !price || !img) {
            setFormError('Proszę uzupełnić wszystkie pola')
            return
        }

        const { data,error } = await supabase
            .from("products")
            .insert([{name,description,count, price,weight, img}])

        if(error) {
            setFormError('Proszę uzupełnić wszystkie pola');
        }

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
                                        multiline rows={3}
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
                                    <Typography>Waga (g)</Typography>
                                </Grid>
                                <Grid xs={12} sm={10} item>
                                    <TextField
                                        variant='outlined'
                                        fullWidth
                                        color='secondary'
                                        value={weight}
                                        onChange={(e)=> setWeight(e.target.value)}/>
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


