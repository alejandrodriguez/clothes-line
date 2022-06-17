import { NavLink } from "react-router-dom";

function Navbar(props) {
    return (
        <nav>
            <NavLink to="/">HOME</NavLink>
            <NavLink to="/shop">SHOP</NavLink>
            <div className="cart-icon">
                <NavLink to="/checkout">SHOPPING CART</NavLink>
                {props.productsInCart > 0 && props.productsInCart}
            </div>
        </nav>
    );
}

export default Navbar;
