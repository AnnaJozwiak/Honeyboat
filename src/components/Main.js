import React, {useState} from 'react';
import {CssBaseline} from '@mui/material';

import Header from "./Header";
import Footer from "./Footer";
import About from "./About";
import Contact from "./Contact";

import imageBack from '../assets/tlo4.png';
import imageTop from '../assets/wave4.svg';

const Main = () => {


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
                height:'50hv',
            }}>
                <Header/>
                <About/>
                <Contact/>
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

export default Main;
