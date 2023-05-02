import {useState, useContext, useEffect} from 'react';
import {AppBar,Box,Toolbar,IconButton, Typography,Menu , Container,Button,MenuItem,ThemeProvider, Modal} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import {useNavigate,NavLink} from "react-router-dom";
import theme from "../../theme";

import {CartContext} from "./CartContext";

const style = {
    position: 'absolute',
    top: '26%',
    left: '85%',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #F3D188',
    boxShadow: 24,
    p: 4,
};

const ShopHeader =() => {
    const cart = useContext(CartContext);

    const [anchorElNav, setAnchorElNav] = useState(null);

    const pages = [{
        name: 'Strona główna',
        link: '/'
    }
    ];
    //modal
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    //liczba produktow w koszyku
    // const [productsCount, setProductsCount] = useState([]);
    // useEffect(()=> {
    //     setProductsCount(cart.items?.reduce((sum, product)=> sum + product.quantity,0));
    // },[cart.items]);

    // const productsCount= cart.items&&cart.items.reduce((sum, product)=>parseFloat(sum + Number(product.quantity)),0);


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
                    // backgroundColor:'#F3D188',
                    backgroundColor:'transparent',
                    boxShadow:0,

                }}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>

                        <Typography
                            sx={{
                                mr: 3,
                                display: 'flex',
                                // display: { xs: 'none', md: 'flex' },
                                height: { xs: '120px', md: '100px',lg: '150px', xl: '170px'},
                                ml:{ xs: 5, md: 12, lg: 17,xl:15 },
                                mt:{ xs: 2, xl:3 },
                            }}
                            component={NavLink}
                            to={'/'}
                        >
                            <img src={require('../../assets/logo bez tla.png')} alt='logo' />

                        </Typography>

                        <Box sx={{
                            flexGrow: 1,
                            display: { xs: 'flex', md: 'none' },
                            justifyContent:'flex-end'}}>
                            <IconButton
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="black"
                                sx={{
                                    mb:6,
                                    mr: 3,
                                    fontSize: '30px'
                                }}
                            >
                                <MenuIcon size="large"/>
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
                                              href ={page.link}
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
                                    component = 'a'
                                    href ={page.link}
                                    key={page.name}
                                    onClick={handleCloseNavMenu}
                                    sx={{ mb: 5,
                                        color: 'black',
                                        display: 'block' ,
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
                                    mb: 5}}>Koszyk ()</Button>
                                <Modal
                                    open={open}
                                    onClose={handleClose}
                                    aria-labelledby="modal-modal-title"
                                    aria-describedby="modal-modal-description"
                                >
                                    <Box sx={style}>
                                        <Typography id="modal-modal-title" variant="h6" component="h2">
                                            Text in a modal
                                        </Typography>
                                        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                            {cart.items?.map((currentProduct, idx) =>{
                                                <Typography>{currentProduct.name}</Typography>
                                            })}
                                            Suma: {cart.getTotalCost()}
                                        </Typography>
                                    </Box>
                                </Modal>
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </ThemeProvider>
    );
}
export default ShopHeader;