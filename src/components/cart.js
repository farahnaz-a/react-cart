import React from "react";

import { MyContext } from "../context";

import { Button } from "react-bootstrap";

const Cart = () => {

    const context = React.useContext(MyContext);
    
    return (
    
        <div>
    
        <h1>Cart Total </h1>
    
        <ul>
    
            {context.state.cartProducts.map((product) => {

                return (

                    <li key={product.id}>

                        {product.name} - ${product.price} - qt . {product.quantity}

                    </li>

                )
             
            })}

            
    
        </ul>

             <h1> Total {context.state.cartProducts.reduce((acc, product) => {
                    return acc + product.price;
             }, 0)} </h1>
        </div>
    
    );
    

}

export default Cart;
