import { Link } from "react-router-dom";
import heroImage from "../assets/hero.png";

function Home() {
  return (
    <section className="hero">
      <div className="hero-copy">
        <p className="eyebrow">Green gold collection</p>
        <h1>ShopZone</h1>
        <p>
          A refined shopping experience with premium picks, rich presentation,
          and a cart that is ready when you are.
        </p>
        <div className="hero-actions">
          <Link className="button" to="/shop">
            Shop Collection
          </Link>
          <Link className="ghost-button" to="/contact">
            Contact Us
          </Link>
        </div>
      </div>

      <div className="hero-media" aria-hidden="true">
        <img src={heroImage} alt="" />
      </div>
    </section>
  );
}

export default Home;
