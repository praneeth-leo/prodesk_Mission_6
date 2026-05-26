import { useEffect, useState } from "react";
import ProductCard from "../context/components/ProductCard";

const featuredFallback = [
  {
    id: 1,
    title: "Essence Mascara Lash Princess",
    price: 10,
    category: "beauty",
    thumbnail: "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp",
  },
  {
    id: 2,
    title: "Eyeshadow Palette with Mirror",
    price: 20,
    category: "beauty",
    thumbnail: "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/thumbnail.webp",
  },
  {
    id: 3,
    title: "Powder Canister",
    price: 14,
    category: "beauty",
    thumbnail: "https://cdn.dummyjson.com/product-images/beauty/powder-canister/thumbnail.webp",
  },
  {
    id: 4,
    title: "Red Lipstick",
    price: 13,
    category: "beauty",
    thumbnail: "https://cdn.dummyjson.com/product-images/beauty/red-lipstick/thumbnail.webp",
  },
];

function Shop() {
  const [products, setProducts] = useState(featuredFallback);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products || featuredFallback);
      })
      .catch(() => {
        setProducts(featuredFallback);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  return (
    <section className="section">
      <div className="section-heading">
        <p className="eyebrow">Curated edit</p>
        <h1>Luxury Finds</h1>
        <p>Polished essentials selected for elevated everyday shopping.</p>
      </div>

      {isLoading && <p className="status">Preparing the collection...</p>}

      <div className="grid">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default Shop;
