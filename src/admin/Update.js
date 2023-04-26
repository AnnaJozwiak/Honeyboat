import {useParams, useNavigate, Link} from "react-router-dom";
import {useEffect,useState} from'react';

import {Button, Card, CardContent, Grid, TextField, ThemeProvider, Typography} from '@mui/material';

import supabase from "./SupabaseClient";
import theme from "../theme";
import imageBack from "../assets/tlo4.png";

const Update =() => {
    const { id } =useParams();
    const navigate = useNavigate();

    const [name,setName] = useState('');
    const [description,setDescription] = useState('');
    const [count,setCount] = useState('');
    const [price,setPrice] = useState('');
    const [img,setImgUrl] = useState('');
    const [formError, setFormError] =useState(null);


//pobranie pojedynczego wiersza z bazy
    const updateProducts = async () =>{
        const { data,error } = await supabase
            .from("products")
            .select()
            .eq('id', id)
            .single()

        if(error) {
            navigate('/admin', {replace:true})
        }
        if(data) {
            setName(data.name)
            setDescription(data.description)
            setCount(data.count)
            setPrice(data.price)
            setImgUrl(data.img)
        }
    }

    useEffect(() => {
        updateProducts();
    }, [id, navigate]);




// zaktualizowanie
    const handleSubmit = async (e) => {
        e.preventDefault();

        if(!name || !description || !count || !price || !img) {
            setFormError('Proszę uzupełnić wszystkie pola');
            return
        }

        const { data,error } = await supabase
            .from("products")
            .update({name, description,count,price,img})
            .eq('id', id)

        if(error) {
            setFormError('Proszę uzupełnić wszystkie pola');
        }
        if(data) {
            setFormError(null);
            navigate('/admin');
        }
    }

    return (
        <div style={{
            backgroundImage: `url(${imageBack})`,
            backgroundRepeat: 'repeat',
            backgroundSize: 'contain',
            height:'100vh'
        }}>

        <ThemeProvider theme={theme}>

            <Card maxWidth="xl" sx={{margin: '0 auto'}}>
                <Typography>Zaktualizuj produkt id: {id}</Typography>
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
;
                        </Grid>
                        <Button variant='contained'
                                color='secondary'
                                type='submit'
                        >Zaktualizuj</Button>
                        <Link to={'/admin'}>
                            <Button variant='contained'
                                color='secondary'
                                style={{
                                    marginLeft:'10px'
                                }}
                        >Cofnij</Button>
                    </Link>
                        {formError && <Typography>{formError}</Typography>}
                    </form>
                </CardContent>
            </Card>
        </ThemeProvider>
        </div>
    )
}


export default Update