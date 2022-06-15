function Product(props) {
    return props.inShoppingCart ? (
        <div>
            <img src={props.image} alt={props.altText} />
            <div>{props.name}</div>
            <div>{props.price}</div>
            <div>
                <div>Quantity: </div>
                <input
                    type="number"
                    value={props.quantity}
                    onChange={props.handleQuantityChange}
                />
                <div>
                    <button
                        className="add-one"
                        onClick={props.handleQuantityChange}
                    >
                        &#43;
                    </button>
                    <button
                        className="subtract-one"
                        onClick={props.handleQuantityChange}
                    >
                        &#8722;
                    </button>
                </div>
            </div>
        </div>
    ) : (
        <div>
            <img src={props.image} alt={props.altText} />
            <div>{props.name}</div>
            <div>{props.price}</div>
            <div>
                <div>Quantity: </div>
                <input type="number" value={props.quantityToAdd} />
                <button
                    className="add-to-cart"
                    onClick={props.handleQuantityChange}
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
}

export default Product;
