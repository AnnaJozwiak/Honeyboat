import {ThemeProvider,Container, Box, Typography, CardContent, Paper} from '@mui/material';
import theme from "../theme";
import blob from '../assets/blob2.svg'
import {NavLink} from "react-router-dom";

const ItemProduct = ({product}) => {

    return(

        <ThemeProvider theme={theme}>
            <Container
                       component={Paper}
                       sx={{
                           // paddingTop:'16px',
                           border:'1px solid #F3D188',
                            width: '350px'
                       }}>
                <Box>
                    <CardContent sx={{
                        display:'flex',
                        flexDirection:'column',
                        justifyContent:'space-between',
                        flexGrow: 1,
                        height:'540px'
                    }} >

                        <Typography variant="body2"
                                    sx={{
                                        mr: 3,
                                        // ml:{ xs: 5, md: 17, xl:15 },
                                        mt:{ xs: 2, xl:3 },
                                        fontSize: 16,
                                        fontWeight: 600,
                                    }}>
                            {product.name}  {product.weight}g
                        </Typography>

                        <Typography   component={NavLink}
                                      to={`/shop`}
                                         sx={{
                                         mr: 3,
                                         mt:{ xs: 2, xl:3 },
                                        backgroundImage: `url(${blob})`,
                                        backgroundRepeat: 'no-repeat',
                                        backgroundSize: 'cover',
                                        display:'flex',
                                         justifyContent:'center',
                                        backgroundPositionY:'-22px'
                                    }}>
                            <img src={require(`../images/products/${product.img}`)} alt ={product.name}
                            style={{
                               maxHeight:'210px'
                            }}/>
                        </Typography>

                        <Typography variant="body2"
                                    sx={{
                                        mr: 3,
                                        // ml:{ xs: 5, md: 17, xl:15 },
                                        mt:{ xs: 2, xl:3 },
                                        fontSize: 14,
                                        fontWeight: 400,
                                        minHeight:'120px'
                                    }}>
                            {product.description}
                        </Typography>

                    </CardContent>
                </Box>
            </Container >
        </ThemeProvider >
    )
}

export default ItemProduct;