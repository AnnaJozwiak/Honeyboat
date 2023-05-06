import {CssBaseline} from '@mui/material';

import imageBack from '../../assets/tlo4.png';

import ShopHeader from "./ShopHeader";
import Footer from "../Footer";
import ShopAllProducts from "./ShopAllProducts";
import ShopFooter from "./ShopFooter";


const ShopPulpit = () => {

    return (
        <div style={{
            backgroundImage: `url(${imageBack})`,
            backgroundRepeat: 'repeat',
            backgroundSize: 'contain',
            // height:'100vh'
        }}>
            <CssBaseline/>
            <ShopHeader/>
            <ShopAllProducts/>
            <ShopFooter/>

        </div>
    );
}

export default ShopPulpit;
