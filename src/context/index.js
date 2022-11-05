import React from "react";
import JSON from "../db.json";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MyContext = React.createContext();

const MyProvider = ({children}) => { 
     
    const [state, setState] = useState({ 
        products: JSON,
        cartProducts: [], 
        total: 0
    });

    const addToCart = (id) => {
    
         const product = state.products.find((product) => product.id === id);
        if(product.quantity < 1)
        {
            toast.error("Product is out of stock", {
                position: "top-right",
                autoClose: 2000,
            });
        }
        else 
        {
            product.quantity -= 1;
            // reduce the quantity of the product and add to cart 
            const cartProduct = state.cartProducts.find((product) => product.id === id);
            if(cartProduct)
            {
                cartProduct.quantity += 1;
                cartProduct.price = product.price * cartProduct.quantity;
                setState({...state, cartProducts: [...state.cartProducts]});
            }
            else
            {
                setState({...state, cartProducts: [...state.cartProducts, {...product, quantity: 1}]});
            }

 
            
            toast.success("Product added to cart", {
                position: "top-right",
                autoClose: 2000,
            });
        }
        
    }
    
    return  (
        <>
         <MyContext.Provider value={{ state : state, addToCart : addToCart }}>
                {children}
         </MyContext.Provider>
        <ToastContainer />
        </>
    )

}

export {MyContext, MyProvider};