import { useState, useEffect } from "react";
import Product from "./Product";
import { Link } from "react-router-dom";

function Checkout(props) {
    let [productsInCart, setProductsInCart] = useState(props.products);

    useEffect(() => {
        setProductsInCart(
            props.products.filter(product => product.quantityInCart > 0)
        );
    }, [props.products]);

    return productsInCart.length > 0 ? (
        <div>
            {productsInCart.map(product => (
                <Product
                    handleQuantityChange={props.handleQuantityChange}
                    key={product.id}
                    product={product}
                    inShoppingCart={true}
                />
            ))}
        </div>
    ) : (
        <div className="checkout-no-items">
            No items in shopping cart. Visit our <Link to="/shop">shop</Link>{" "}
            now to add some!
        </div>
    );
}

export default Checkout;
