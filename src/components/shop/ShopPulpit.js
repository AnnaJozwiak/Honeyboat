import {CssBaseline, Typography} from '@mui/material';

import imageBack from '../../assets/tlo4.png';
import imageTop from '../../assets/wave4.svg';

import ShopHeader from "./ShopHeader";
import Footer from "../Footer";
import ShopAllProducts from "./ShopAllProducts";
import Summary from "./Summary";


const ShopPulpit = () => {

    return (
        <div style={{
            backgroundImage: `url(${imageBack})`,
            backgroundRepeat: 'repeat',
            backgroundSize: 'contain',
            // height:'100vh'
        }}>
            <CssBaseline/>
            <div style={{
                backgroundImage: `url(${imageTop})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                // height:'100hv',
            }}>
                <ShopHeader/>
                <ShopAllProducts/>
                <Summary/>

            </div>
            <div style={{
                // backgroundImage: `url(${image3})`,
                // backgroundRepeat: 'no-repeat',
                // backgroundSize: 'cover',
                // height:'100vh',
                backgroundColor:'#F3D188'
            }}>
                <Footer/>
            </div>


        </div>
    );
}

export default ShopPulpit;
