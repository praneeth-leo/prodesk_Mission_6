import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <article className="card product-card">
      <Link className="product-image" to={`/product/${product.id}`}>
        <img src={product.thumbnail} alt={product.title} />
      </Link>

      <div className="product-copy">
        <p className="eyebrow">{product.category || "Signature"}</p>
        <h3>{product.title}</h3>
        <p className="price">₹{product.price}</p>
      </div>

      <Link className="button" to={`/product/${product.id}`}>
        View Details
      </Link>
    </article>
  );
}

export default ProductCard;
