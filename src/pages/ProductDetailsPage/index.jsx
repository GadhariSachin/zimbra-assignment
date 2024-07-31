import "./ProductDetailsPage.css";

import ProductDetails from "../../components/ProductDetails";
import { Link } from "react-router-dom";

const ProductDetailsPage = () => {
  return (
    <div className="product-details-container">
      <header className="product-details-header">
        <Link to="/" className="product-details-backbutton">
          &#8678; Back to list
        </Link>
        <h1>Product Detail</h1>
      </header>
      <section>
        <ProductDetails />
      </section>
    </div>
  );
};

export default ProductDetailsPage;
