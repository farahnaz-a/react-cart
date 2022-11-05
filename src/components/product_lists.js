import React from "react";
import { MyContext } from "../context";
import { Button } from "react-bootstrap";


const Products = () => {

 const context = React.useContext(MyContext);

    return (
        <div>
            <h1>Products</h1>
            <ul>
                {
                    context.state.products.map((product) => (
                       <div key={product.id}>
                        <li>
                            {product.name} - ${product.price} - qt . {product.quantity}
                        </li>

                       <Button onClick={() => {context.addToCart(product.id)}} variant="primary">Add to Cart</Button>
 
                       </div>
                    ))
                }
             </ul>   

        </div>
    )

}

export default Products;