import { useState } from "react";

function Product(props) {
    const [displaySuccessMessage, setDisplaySuccessMessage] = useState(false);
    const [messageTimeout, setMessageTimeout] = useState(null);

    function addToCart() {
        if (displaySuccessMessage) {
            clearTimeout(messageTimeout);
        } else {
            setDisplaySuccessMessage(true);
        }
        props.handleQuantityChange("add", props.product);
        setMessageTimeout(
            setTimeout(() => setDisplaySuccessMessage(false), 1500)
        );
    }
    return props.inShoppingCart ? (
        <div
            className="Product-In-Cart"
            data-testid={`Product-${props.product.id}`}
        >
            <img
                src={props.product.src}
                alt={props.product.name}
                className={props.product.className}
            />
            <div>{props.product.name}</div>
            <div>${props.product.price}</div>
            <div className="quantity-wrapper">
                <button
                    onClick={() =>
                        props.handleQuantityChange("subtract", props.product)
                    }
                >
                    -
                </button>
                <div>Quantity: {props.product.quantityInCart}</div>

                <button
                    onClick={() =>
                        props.handleQuantityChange("add", props.product)
                    }
                >
                    +
                </button>
            </div>
            <button
                onClick={() => props.handleQuantityChange(0, props.product)}
                className="remove-btn"
            >
                Remove
            </button>
        </div>
    ) : (
        <div className="Product" data-testid={`Product-${props.product.id}`}>
            {displaySuccessMessage && (
                <p className="success-message">
                    Added to Cart{" "}
                    <svg
                        style={{ width: "24px", height: "24px" }}
                        viewBox="0 0 24 24"
                    >
                        <path
                            fill="currentColor"
                            d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"
                        />
                    </svg>
                </p>
            )}
            <img
                src={props.product.src}
                alt={props.product.name}
                className={props.product.className}
            />
            <div>{props.product.name}</div>
            <div>${props.product.price}</div>
            <div>
                <button className="add-to-cart" onClick={addToCart}>
                    Add to Cart
                </button>
            </div>
        </div>
    );
}

export default Product;
