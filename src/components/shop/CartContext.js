import {createContext, useEffect, useState} from 'react';
import supabase from "../../admin/SupabaseClient";

export const CartContext = createContext({
    items: [],
    getProductQuantity: () => {},
    addOneToCart:() => {},
    removeOneFromCart:() => {},
    deleteFromCart: () => {},
    getTotalCost: () => {}
});

export function CartProvider({children}) {
    const [products, setProducts] = useState([]);
    const [cartProducts, setCartProducts] = useState([])

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

    function getProductData(id) {
        let productData = products.find(product => product.id === id);

        if(productData === undefined) {
            console.log('Product data does not exist for ID:' +id);
            return undefined;
        }
        return productData;
    }

    function getProductQuantity(id) {
        const quantity= cartProducts.find(product=>product.id ===id)?.quantity

        if(quantity ===undefined) {
            return 0;
        }
        return quantity;
    }

    function addOneToCart(id) {
        const quantity= getProductQuantity(id);

        if(quantity===0) {
            setCartProducts(
                [...cartProducts,
                    {
                        id:id,
                        quantity:1
                    }]
            )
        } else {
            setCartProducts(
                cartProducts.map(
                product =>
                    product.id ===id
                     ? {...product,quantity: product.quantity+1}
                     : product
            ))
        }
    }

    function removeOneFromCart(id) {
        const quantity= getProductQuantity(id);

        if(quantity ===1) {
            deleteFromCart(id)
        } else {
            setCartProducts(
                cartProducts.map(
                    product =>
                        product.id ===id
                            ? {...product,quantity: product.quantity-1}
                            : product
                ));
        }
    }

    function deleteFromCart(id) {
        setCartProducts(
            cartProducts =>
                cartProducts.filter(currentProduct => {
                    return currentProduct.id !== id
                })
        );
    }

    function getTotalCost() {
        let totalCost = 0;
        cartProducts.map((cartItem) => {
            const productData = getProductData(cartItem.id);
            totalCost += (productData.price * cartItem.quantity);
        });
    }

    const contextValue = {
        item: [],
        getProductQuantity,
        addOneToCart,
        removeOneFromCart,
        deleteFromCart,
        getTotalCost
    }

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;