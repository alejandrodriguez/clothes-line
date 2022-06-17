import { NavLink } from "react-router-dom";
import cart_icon from "../images/cart-icon.svg";

function Navbar(props) {
    return (
        <div className="nav-wrapper">
            <nav>
                <NavLink to="/" className="home-link">
                    HOME
                </NavLink>
                <NavLink to="/shop" className="shop-link">
                    SHOP
                </NavLink>
                <div className="store-title">CLOTHES LINE</div>
                <div className="cart-icon-wrapper">
                    <NavLink to="/checkout">
                        <img
                            src={cart_icon}
                            alt="shopping cart icon"
                            className="cart-icon"
                        />
                    </NavLink>
                    <span className="products-in-cart">
                        {props.productsInCart}
                    </span>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
