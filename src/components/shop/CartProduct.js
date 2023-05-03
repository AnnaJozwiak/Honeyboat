import {Button} from '@mui/material';
import {CartContext} from "./CartContext";
import {useContext,useEffect, useState} from "react";
import supabase from "../../admin/SupabaseClient";


const CartProduct =({id, quantity}) => {
    const cart = useContext(CartContext)

    const productDataCart = cart.getProductData(id);

    return (
        <>
            <h3>{productDataCart.name}</h3>
            <p>{quantity}</p>
            <p>{(quantity * productDataCart.price)}zł</p>
            <Button onClick={()=> cart.deleteFromCart(id)}>Usuń z koszyka</Button>

        </>
    )
}

export default CartProduct;