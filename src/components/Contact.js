import React, {useState} from 'react';
import {ThemeProvider, Container, Box, Typography, Button, CardContent, Card, Grid, TextField, Modal} from '@mui/material';
import theme from "../theme";
import imageFront from "../images/foto7.jpg";
import { useForm, ValidationError } from '@formspree/react';
import iconBeekeeper from "../assets/beekeeper.svg";
import iconBee from '../assets/bee-right.svg'
import iconHoney from "../assets/honey-cart.svg";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #F3D188',
    boxShadow: 24,
    p: 4,
};

const Contact = () => {
    const [state, handleSubmit] = useForm("xayzvlkj");
    const [subject,setSubject] =useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName,setLastName] =useState('');
    const [email,setEmail] =useState('');
    const [phone,setPhone] =useState('');
    const [message,setMessage] =useState('');

    const [open, setOpen] = useState(true);
    // const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
        setSubject('');
        setPhone('');
        setEmail('');
        setMessage('');
        setFirstName('');
        setLastName('');
    }

    return (
            <ThemeProvider theme={theme}>
                <Container id ='contact'
                            maxWidth='xl'
                           sx={{
                    display:'flex',
                    justifyContent: 'space-around',
                    flexWrap:'wrap',
                    flexGrow: 1,
                }}>
                <Card sx ={{
                    margin: {xs:'0px 0px 20px 0px' ,sm:'0 60px 30px'},
                    maxWidth: '450px',
                    padding:'20px 21px'
                }}>
                    <CardContent sx={{
                            display:'flex',
                            justifyContent: 'center',
                    }}>
                        <img src={imageFront}
                             alt='pasieka'
                             style={{
                            maxHeight:'500px',
                            borderRadius:'4px',
                        }}/>
                    </CardContent>

                </Card>

                <Card sx={{
                    maxWidth: '450px',
                    padding:'20px 5px',
                    margin: {xs:'20px 0px 20px 0px' ,sm:'0 60px 30px'},
                }}>
                    <CardContent>

                        <Typography variant='h3'
                                    sx={{
                                        marginBottom: {xs:'25px' ,sm:'12px'},
                                        fontSize:{xs:'15px' ,sm:'20px'},
                                        textAlign:'center',
                                        position: 'relative',
                                    }}>
                            <img src={iconBeekeeper}
                                 style={{
                                     height:'60px',
                                     position: 'absolute',
                                     top: '-130%',
                                     left:'1%'
                                 }}/>
                                Skontaktuj się z nami!
                        </Typography>
                        <form onSubmit={handleSubmit}>
                            <Grid container spacing={1}>
                                <Grid xs={12} sm={6} item>
                                    <TextField
                                        label = "Imię"
                                        name="name"
                                        value={firstName}
                                        onChange={(e)=> setFirstName(e.target.value)}
                                        placeholder='Podaj swoję imię'
                                        variant='outlined'
                                        fullWidth
                                        required
                                        color='secondary'/>

                                </Grid>
                                <Grid xs={12} sm={6} item>
                                    <TextField
                                        label = "Nazwisko"
                                        name='surname'
                                        value ={lastName}
                                        onChange={(e)=> setLastName(e.target.value)}
                                        placeholder='Podaj swoję nazwisko'
                                        variant='outlined'
                                        fullWidth
                                        required
                                        color='secondary'/>

                                </Grid>
                                <Grid xs={12}  item>
                                    <TextField
                                        id="email"
                                        type="email"
                                        name="email"
                                        label = "Email"
                                        value={email}
                                        onChange={(e)=> setEmail(e.target.value)}
                                        placeholder='Podaj swoj email'
                                        variant='outlined'
                                        fullWidth
                                        required
                                        color='secondary'/>
                                    <ValidationError
                                        prefix="Email"
                                        field="email"
                                        errors={state.errors}
                                    />
                                </Grid>
                                <Grid xs={12}  item>
                                    <TextField
                                        type='tel'
                                        name='phone'
                                        value={phone}
                                        onChange={(e)=> setPhone(e.target.value)}
                                        label = "Numer telefonu"
                                        placeholder='Podaj swój numer telefonu'
                                        variant='outlined'
                                        fullWidth
                                        color='secondary'
                                    />
                                </Grid>
                                <Grid xs={12}  item>
                                    <TextField
                                        type='text'
                                        name="subject"
                                        value= {subject}
                                        onChange={(e)=> setSubject(e.target.value)}
                                        label = "Temat wiadomości"
                                        placeholder='Podaj temat wiadomości'
                                        variant='outlined'
                                        fullWidth
                                        color='secondary'
                                        required
                                    />
                                </Grid>
                                <Grid xs={12}  item>
                                    <TextField
                                        id="message"
                                        name="message"
                                        type='text'
                                        value={message}
                                        onChange={(e)=> setMessage(e.target.value)}
                                        label = "Treść wiadomości"
                                        placeholder='Wpisz swoją wiadomość'
                                        variant='outlined'
                                        fullWidth
                                        required
                                        multiline rows={4}
                                        color='secondary'
                                    />
                                    <ValidationError
                                        prefix="Message"
                                        field="message"
                                        errors={state.errors}
                                    />
                                </Grid>
                                <Grid xs={12}  item>
                                    <Button type='submit'
                                            variant='contained'
                                            fullWidth
                                            color='secondary'
                                            disabled={state.submitting}
                                    >Wyślij wiadomość
                                    </Button>
                                </Grid>
                            </Grid>
                        </form>

                        {state.succeeded && <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={style}>
                                <Typography id="modal-modal-title"
                                            variant="h6"
                                            component="h3"
                                            sx={{
                                                fontWeight: 700,
                                                fontSize: '20px',
                                                position:'relative'
                                            }}>
                                    Dziękujemy!
                                    <img src={iconBee}
                                         style={{
                                             height:'60px',
                                             paddingTop:0,
                                             position: 'absolute',
                                             top: '-25%',
                                             right: '-5%',
                                         }}/>
                                    <br/>
                                    Wiaodmość została wysłana.
                                    <br/>
                                    Wkrótce odpowiemy!
                                </Typography>
                            </Box>
                        </Modal> }
                    </CardContent>
                </Card>
                </Container>
            </ThemeProvider>
    )
}

export default Contact;


