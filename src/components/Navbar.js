import { NavLink } from "react-router-dom";

function Navbar(props) {
    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/shop">Shop</NavLink>
            <div className="cart-icon">
                <NavLink to="/checkout">Shopping Cart</NavLink>
                {props.productsInCart > 0 && props.productsInCart}
            </div>
        </nav>
    );
}

export default Navbar;
