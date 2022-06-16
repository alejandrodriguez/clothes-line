import React from "react";
import Product from "./Product";

function Shop(props) {
    return (
        <div className="Shop">
            {props.products.map(product => (
                <Product
                    handleQuantityChange={props.handleQuantityChange}
                    key={product.id}
                    product={product}
                />
            ))}
        </div>
    );
}

export default Shop;
