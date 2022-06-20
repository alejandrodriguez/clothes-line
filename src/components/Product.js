function Product(props) {
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
            <img
                src={props.product.src}
                alt={props.product.name}
                className={props.product.className}
            />
            <div>{props.product.name}</div>
            <div>${props.product.price}</div>
            <div>
                <button
                    className="add-to-cart"
                    onClick={() =>
                        props.handleQuantityChange("add", props.product)
                    }
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
}

export default Product;
