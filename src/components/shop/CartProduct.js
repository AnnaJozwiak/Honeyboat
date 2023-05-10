import {Button, Typography} from '@mui/material';
import {CartContext} from "./CartContext";
import {useContext} from "react";
import iconDelete from "../../assets/delete.svg";
import iconMinus from "../../assets/minus-hexagon.svg";
import iconPlus from "../../assets/add-hexagon.svg";


const CartProduct =({id, quantity}) => {
    const cart = useContext(CartContext)

    const productDataCart = cart.getProductData(id);

    return (
        <div style={{
            border: '1px solid #F3D188',
            marginBottom: '15px',
            borderRadius:'4px',
            padding:'10px'
        }}>
            <h3 style = {{margin:'5px auto'}}>{productDataCart.name}</h3>
            <Typography>Ilość:

                <Button  onClick={()=> cart.removeOneFromCart(productDataCart.id)}>
                    <img src={iconMinus}
                         style={{
                             height:'25px',
                         }}/></Button>

                {quantity}
                <Button style={{
                    paddingRight:0
                }}
                        onClick={() => cart.addOneToCart(productDataCart.id)}>
                    <img src={iconPlus}
                         style={{
                             height:'25px',
                             paddingRight:0
                         }}/></Button>

            </Typography>
            <Typography>Cena: {(quantity * productDataCart.price)}zł</Typography>
            <Button sx ={{
                marginTop:'3px',
                // border:'1px solid #F3D188'
            }}
                    onClick={()=> cart.deleteFromCart(id)}>
                Usuń z koszyka
                <img src={iconDelete}
                         style={{
                             height:'30px',
                            paddingRight:'5px'
                            }}/>
            </Button>

        </div>
    )
}

export default CartProduct;