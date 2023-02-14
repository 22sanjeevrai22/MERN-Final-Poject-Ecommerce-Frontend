import './cart.css'
import { AiOutlinePlus, AiOutlineMinus, AiOutlineDelete } from "react-icons/ai";
import {useContext} from 'react';
import { CartContext, CartProvider } from '../../context/CartContext';


export function Cart(){
    return(
        <CartProvider>
            <OneCart/>
        </CartProvider>
    
    )
}


    function OneCart(){

    const {cart, handleDecrease, handleIncrease, clearCart, handleDelete, calculateTotal} = useContext(CartContext);


    //Getting data of respective token from backend


    
    
    return(
        <>
        <section className = 'main-cart-section container'>
            <h1>Shopping Cart</h1>
            <p className ='total-items'> You have <b>{cart.length}</b> items</p>

            <div className='cart-items'>
                <div className='cart-items-container'>
                    {cart.map((soloCart) =>(
                         <div className ='items-info' key={soloCart.product}>
                        <div className = 'product-img'>
                        <img src = {soloCart.pImage} alt = 'none'></img>
                        </div>

                        <div className = 'title'>
                            {soloCart.pName}
                        </div>

                        <div className='add-minus-quantity'>
                            <button onClick={() => handleDecrease(soloCart.product)}><AiOutlineMinus className='minus'/></button>{soloCart.qty}
                            <button onClick={()=> handleIncrease(soloCart.product)}><AiOutlinePlus className='plus'/></button>     
                        </div>

                        <div className ='price'>
                            <small>{soloCart.pPrice}</small>
                            
                            
                        </div>

                        <div className ='remove-item' onClick = {() => handleDelete(soloCart.product)}>
                            <AiOutlineDelete className='remove'/>
                        </div>
                        <hr/>
                        

                        </div>
                        
                    ))
                       
                     }
                    <div className = 'card-total'>
                        <b>Total : ${calculateTotal()} </b>
                        <button className='btn2' onClick ={clearCart}>Checkout</button>
                    </div>

                </div>

            </div>

        </section>
        </>
    )
}