import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/cart-context";

function Cart() {
  const { cart } = useContext(CartContext);
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <section className="section cart-page">
      <div className="section-heading">
        <p className="eyebrow">Your selection</p>
        <h1>Shopping Cart</h1>
      </div>

      {cart.length === 0 ? (
        <div className="empty-state">
          <h2>Your cart is empty</h2>
          <p>Explore the collection and add something exceptional.</p>
          <Link className="button" to="/shop">
            Start Shopping
          </Link>
        </div>
      ) : (
        <>
          <div className="cart-list">
            {cart.map((item) => (
              <article key={item.id} className="cart-item">
                <img src={item.thumbnail} alt={item.title} />
                <div>
                  <h3>{item.title}</h3>
                  <p>Quantity: {item.quantity}</p>
                </div>
                <p className="price">₹{item.price * item.quantity}</p>
              </article>
            ))}
          </div>

          <div className="cart-total">
            <span>Total</span>
            <strong>₹{total.toFixed(2)}</strong>
          </div>
        </>
      )}
    </section>
  );
}

export default Cart;
