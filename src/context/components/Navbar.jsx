import { useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import { CartContext } from "../cart-context";

function Navbar() {
  const { cart } = useContext(CartContext);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="nav-shell">
      <Link className="brand" to="/">
        <span className="brand-mark">S</span>
        <span>ShopZone</span>
      </Link>

      <nav className="nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/shop">Shop</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>

      <Link className="cart-link" to="/cart" aria-label={`Cart with ${cartCount} items`}>
        Cart
        <span>{cartCount}</span>
      </Link>
    </header>
  );
}

export default Navbar;
