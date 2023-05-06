import {CssBaseline} from '@mui/material';

import Header from "./Header";
import Footer from "./Footer";
import About from "./About";
import Contact from "./Contact";
import Banner from "./Banner";
import Colaboration from "./Colaboration";
import Products from "./Products";

import imageBack from '../assets/tlo4.png';
import {createRef} from "react";

const Main = () => {
    // const about = createRef();
    //
    // const handleScrollAbout = (e) => {
    //     e.preventDefault();
    //     const about = about.current;
    //     window.scrollTo({
    //         top: about.offsetTop,
    //         left: 0,
    //         behavior: "instant"
    //     });
    // };

    return (
        <div style={{
            backgroundImage: `url(${imageBack})`,
            backgroundRepeat: 'repeat',
            backgroundSize: 'contain',
        }}>
            <CssBaseline/>
           <Header />
            <Banner/>
            <About />
            <Products/>
            <Colaboration/>
            <Contact/>
            <Footer/>
        </div>
    );
}

export default Main;
