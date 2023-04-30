import React, {useEffect, useState, createContext} from 'react';
import {CssBaseline, Typography} from '@mui/material';
import {useParams} from "react-router-dom";

import imageBack from '../../assets/tlo4.png';
import imageTop from '../../assets/wave4.svg';

import supabase from "../../admin/SupabaseClient";

export const ShopContext = createContext(null);

export const ShopContextProvider = ({props}) => {

    const [products, setProducts] = useState([]);

    const getProducts = async () =>{
        const { data } = await supabase
            .from("products")
            .select();
        if(data) {
            setProducts(data);
        }
    }

    useEffect(() => {
        getProducts();
    }, []);

    const getDefaultCart = () => {
        let cart ={};
        for (let i =1; i<products.length +1; i++) {
            cart[i]=0;
        }
        return cart;
    }

    const [cartItems,setCartItems]=useState(getDefaultCart);

    const addToCart = (itemId)=> {
        setCartItems((prevCartItems)=> ({...prevCartItems, [itemId]:prevCartItems[itemId]+1}));
    }

    const removeFromCart = (itemId)=> {
        setCartItems((prevCartItems)=> ({...prevCartItems, [itemId]:prevCartItems[itemId]-1}));
    }

    const contextValue = {cartItems, addToCart, removeFromCart};

    return (
        <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
    )

}
