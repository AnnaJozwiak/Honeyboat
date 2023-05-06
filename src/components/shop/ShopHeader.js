import {useState, useContext, useEffect} from 'react';
import {AppBar,Box,Toolbar,IconButton, Typography,Menu , Container,Button,MenuItem,ThemeProvider, Modal} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {NavLink} from "react-router-dom";
import theme from "../../theme";

import {CartContext} from "./CartContext";
import CartProduct from "./CartProduct";

import iconHoney from "../../assets/honey-cart.svg";
import imageTop from "../../assets/wave4.svg";


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


const logo = require('../../assets/logo bez tla.png');

const ShopHeader =() => {
    const cart = useContext(CartContext);

    const [anchorElNav, setAnchorElNav] = useState(null);

    const pages = [
        {
        name: 'Strona główna',
        link: '/'
        }
    ];
    //modal
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    //liczba produktow w koszyku
    const productCount = cart.items.reduce((sum,product)=> sum+product.quantity,0);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };


    return (
        <ThemeProvider theme={theme}>
            <AppBar
                position="static"
                sx ={{
                    backgroundColor:{xs:'#F3D188', md:'transparent'},
                    boxShadow:0,
                    backgroundImage: `url(${imageTop})`,
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    height: { xs: '120px', md: '170px',lg: '200px', xl: '270px'},
                }}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>

                        <Typography
                            sx={{
                                mr: 3,
                                display: 'flex',
                                height: { xs: '100px',lg: '150px', xl: '170px'},
                                ml:{ xs: 5, md: 12, lg: 17,xl:15 },
                                mt:{ xs: 2, xl:3 },
                            }}
                            component={NavLink}
                            to={'/'}>
                            <img src={logo} alt='logo' />
                        </Typography>

                        <Box sx={{
                            flexGrow: 1,
                            display: { xs: 'flex', md: 'none' },
                            justifyContent:'flex-end',
                            marginTop:'20px'}}>

                            <IconButton
                                onClick={handleOpen}
                                sx={{
                                    mr: 3,
                                    color: 'black'
                                }}
                            >
                                <ShoppingCartIcon sx={{
                                    fontSize: '30px'
                                }}/>
                                ({productCount})
                            </IconButton>
                            <IconButton
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="black"
                                sx={{
                                    mr: 3,
                                    color: 'black'
                                }}
                            >
                                <MenuIcon sx={{
                                    fontSize: '30px'
                                }}/>
                            </IconButton>

                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'block', md: 'none' },
                                    // backgroundColor: '#FEEEB2'
                                    mb:3
                                }}
                            >
                                {pages.map((page) => (
                                    <MenuItem key={page.name}
                                              component={NavLink}
                                              to={page.link}
                                              onClick={handleCloseNavMenu}>
                                        <Typography textAlign="center" sx={{
                                        }}>{page.name}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>

                        <Box
                            sx={{
                                flexGrow: 1,
                                display: { xs: 'none', md: 'flex' },
                                justifyContent:'flex-end' }}>
                            {pages.map((page) => (
                                <Button
                                    component ={NavLink}
                                    to={page.link}
                                    key={page.name}
                                    onClick={handleCloseNavMenu}
                                    sx={{ mb: 5,
                                        color: 'black',
                                        display:  'block',
                                        fontWeight: 700,
                                        fontSize: '16px',
                                        height:'100%'}}
                                >
                                    {page.name}
                                </Button>
                            ))}

                                <Button onClick={handleOpen} sx={{
                                    fontWeight: 700,
                                    fontSize: '16px',
                                    mb: 5,
                                }}>
                                    Koszyk ({productCount})
                                </Button>
                        </Box>

                        <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={style}>
                                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                    {productCount > 0 ?
                                        <>
                                            <Typography variant="h6">
                                                <img src={iconHoney}
                                                     style={{
                                                         height:'60px',
                                                         paddingTop:0
                                                     }}/>
                                                Mój koszyk
                                            </Typography>
                                            {cart.items.map((currentProduct, index)=> (
                                                <CartProduct key={index}
                                                             id={currentProduct.id}
                                                             quantity={currentProduct.quantity}
                                                             sx={{
                                                                 border: '1px solid #F3D188'
                                                             }}/>
                                            ))}

                                            <Typography id="modal-modal-title"
                                                        variant="h6"
                                                        component="h2"
                                                        sx={{
                                                            fontWeight: 700,
                                                            fontSize: '20px'
                                                        }}>
                                                Do zapłaty: {cart.getTotalCost()}zł
                                            </Typography>
                                            <Button variant='contained'
                                                    color='secondary'>
                                                Zamów
                                            </Button>
                                        </>
                                        :
                                        <h3>Brak produktów w koszyku</h3>

                                    }
                                </Typography>

                            </Box>
                        </Modal>
                    </Toolbar>
                </Container>
            </AppBar>
        </ThemeProvider>
    );
}
export default ShopHeader;