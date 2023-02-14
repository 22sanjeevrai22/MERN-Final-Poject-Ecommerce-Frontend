import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const CartContext = createContext([]);

export function CartProvider({children}){
const [cart, setCart] = useState([]);

    useEffect(() =>{
        if (cart.length > 0){
        localStorage.setItem('cartLocalStorage', JSON.stringify(cart));
        }
    }, [cart])



    useEffect(() => {
        const cartItems = JSON.parse(localStorage.getItem('cartLocalStorage'));
        setCart(cartItems);
        console.log(cartItems)

    }, [])


    const checkInCart = (id) =>{
        const item = cart.find(item => item.product === id);
        return item
        
    }

    const addToCart = (product) => {

        const item = checkInCart(product._id)
        if (!item){
            setCart((prev) =>([...prev, {product: product._id, qty :  1, pName : product.name, pPrice : product.price, pImage :  `http://localhost:8000/uploads/${product.image}`}]))
    
            return;

        }
    }


    const handleDecrease = (productID) => {
        const item = checkInCart(productID);

        if(!item){
            return;
        }const newCart = cart.map(cartItem => {
            if(cartItem.product === item.product){
                if(cartItem.qty > 1){ 
                cartItem.qty = cartItem.qty - 1;
                }
            }
            return cartItem;
        })
          
        setCart((prev) => {return [...newCart]})
        
    }


    const handleIncrease = (productID) => {
        const item = checkInCart(productID)
        const newCart = cart.map(cartItem => {
            if(cartItem.product === item.product){
    
                cartItem.qty = cartItem.qty + 1;
               
            }
            return cartItem;

        })
        
        setCart(() => [...newCart])

    }

    const clearCart = () =>{

        localStorage.setItem('cartLocalStorage', JSON.stringify([]))
        setCart([]);

    }

    const handleDelete = (id) => {
        const updatedCartItems = cart.filter(item => item.product !== id);
        setCart(updatedCartItems);
        localStorage.setItem("cartLocalStorage", JSON.stringify(updatedCartItems));
    }
    
    const calculateTotal = () => {
        let total = 0;
        cart.forEach(element => {
            total = total + element.pPrice * element.qty;
        });
        return total;
    }

    return(
        <CartContext.Provider value={{cart, checkInCart, addToCart, handleDecrease, handleIncrease, clearCart, handleDelete, calculateTotal}}>
            {children}
        </CartContext.Provider>

    )
}



