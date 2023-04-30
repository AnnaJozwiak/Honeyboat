import React from "react";

const Cart = ({cartItems, handleAddProduct}) => {

    return (
        <div>
            <div>Cart Items </div>

            {cartItems.length ===0 && <div> Brak produktów w koszyku</div>}

            <div>
                {cartItems.map((item) => (
                    <div key ={item.id}>
                        <img src={require(`../../images/products/${item.img}`)} alt ={item.name} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Cart;