import React, {useEffect, useState} from 'react';
import {CssBaseline, Typography} from '@mui/material';
import {useParams} from "react-router-dom";

import imageBack from '../../assets/tlo4.png';
import imageTop from '../../assets/wave4.svg';

import ShopHeader from "./ShopHeader";
import Footer from "../Footer";
import Cart from "./Cart";

import supabase from "../../admin/SupabaseClient";
import AllProducts from "../AllProducts";


const ShopPulpit = () => {
    const [products, setProducts] = useState([]);
    const [cartItems,setCartItems] =useState([])

    const { id } =useParams();

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

    const handleAddProduct =(product) => {
        const ProductExist = cartItems.find((item) => item.id === product.id);
        if(ProductExist) {
            setCartItems(cartItems.map((item) => item.id === product.id ?
                {...ProductExist, quantity: ProductExist.quantity +1}:item))
        } else  {
            setCartItems([...cartItems, {...product,quantity:1}])
        }
    }

    return (
        <div style={{
            backgroundImage: `url(${imageBack})`,
            backgroundRepeat: 'repeat',
            backgroundSize: 'contain',
            height:'100vh'
        }}>
            <CssBaseline/>
            <div style={{
                backgroundImage: `url(${imageTop})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                height:'50hv',
            }}>
                <ShopHeader/>
              {/*<Cart cartItems={cartItems}/>*/}
                <AllProducts/>

            </div>

            <div style={{
                // backgroundImage: `url(${image3})`,
                // backgroundRepeat: 'no-repeat',
                // backgroundSize: 'cover',
                // height:'100vh',
                backgroundColor:'#F3D188'

            }}>
                {/*<Footer/>*/}
            </div>


        </div>
    );
}

export default ShopPulpit;
