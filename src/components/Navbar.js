import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/shop">Shop</NavLink>
            <NavLink to="/checkout">Shopping Cart</NavLink>
        </nav>
    );
}

export default Navbar;
