import React, { useState } from "react";
import Product from "./Product";
import uniqid from "uniqid";

function Shop(props) {
    const [quantity, setQuantity] = useState(0);
    const [quantityToAdd, setQuantityToAdd] = useState(0);

    function handleQuantityChange(e) {
        if (e.target.type === "number") {
            setQuantity(quantity);
        } else if (e.target.classList.contains("add-to-cart")) {
            setQuantity(quantity + quantityToAdd);
            setQuantityToAdd(0);
        } else if (e.target.classList.contains("add-one")) {
            setQuantity(quantity + 1);
        } else if (e.target.classList.contains("subtract-one")) {
            setQuantity(quantity - 1);
        }
    }

    return (
        <div>
            {props.children.map(product => (
                <Product
                    {...product.props}
                    handleQuantityChange={handleQuantityChange}
                    inShoppingCart={props.inShoppingCart}
                    key={uniqid()}
                />
            ))}
        </div>
    );
}

export default Shop;
