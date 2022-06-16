function Product(props) {
    return props.inShoppingCart ? (
        <div>
            <img src={props.product.src} alt={props.product.name} />
            <div>{props.product.name}</div>
            <div>{props.product.price}</div>
            <div>
                <div>Quantity: </div>
                <input
                    type="number"
                    min="1"
                    max="10"
                    value={props.product.quantity}
                    onChange={e =>
                        props.handleQuantityChange(
                            parseInt(e.target.value, 10),
                            props.product
                        )
                    }
                />
                <div>
                    <button
                        onClick={() =>
                            props.handleQuantityChange("add", props.product)
                        }
                    >
                        &#43;
                    </button>
                    <button
                        onClick={() =>
                            props.handleQuantityChange(
                                "subtract",
                                props.product
                            )
                        }
                    >
                        &#8722;
                    </button>
                    <button
                        onClick={() =>
                            props.handleQuantityChange(0, props.product)
                        }
                    >
                        Remove
                    </button>
                </div>
            </div>
        </div>
    ) : (
        <div>
            <img src={props.product.src} alt={props.altText} />
            <div>{props.product.name}</div>
            <div>{props.product.price}</div>
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
