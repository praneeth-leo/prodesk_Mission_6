import { useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { CartContext } from "../context/cart-context";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { addToCart } = useContext(CartContext);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      })
      .catch(() => {
        setProduct(null);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [id]);

  if (isLoading) {
    return <p className="status">Loading product...</p>;
  }

  if (!product) {
    return <p className="status">Product could not be loaded.</p>;
  }

  return (
    <section className="detail-layout">
      <div className="detail-image">
        <img src={product.thumbnail} alt={product.title} />
      </div>

      <div className="detail-copy">
        <p className="eyebrow">{product.category || "Premium pick"}</p>
        <h1>{product.title}</h1>
        <p className="price large">₹{product.price}</p>
        <p>{product.description}</p>
        <button onClick={() => addToCart(product)}>Add To Cart</button>
      </div>
    </section>
  );
}

export default ProductDetails;
