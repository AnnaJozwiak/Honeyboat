import {CssBaseline} from '@mui/material';

import Header from "./Header";
import Footer from "./Footer";
import About from "./About";
import Contact from "./Contact";
import Banner from "./Banner";
import Colaboration from "./Colaboration";
import Products from "./Products";

import imageBack from '../assets/tlo4.png';

const Main = () => {

    return (
        <div style={{
            backgroundImage: `url(${imageBack})`,
            backgroundRepeat: 'repeat',
            backgroundSize: 'contain',
        }}>
            <CssBaseline/>
           <Header/>
            <Banner/>
            <About/>
            <Products/>
            <Colaboration/>
            <Contact/>
            <Footer/>
        </div>
    );
}

export default Main;
