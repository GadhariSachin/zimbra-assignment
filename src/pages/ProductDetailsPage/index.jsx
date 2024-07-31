import "./ProductDetailsPage.css";

import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import ProductDetails from "../../components/ProductDetails";
import { fetchProductDetails } from "../../service/api";

/**
 * @function ProductDetailsPage
 * @description Renders the product details page. Fetches product details from the API using the product ID from the URL params.
 * @returns {JSX.Element} The rendered product details page component.
 */
const ProductDetailsPage = () => {
  // Get the productId from the URL parameters
  const { productId } = useParams();

  // State to hold the product details fetched from the API
  const [productDeatils, setProductDeatils] = useState([]);

  /**
   * Fetches the product details when the component mounts or when the productId changes.
   */
  useEffect(() => {
    const getProducts = async () => {
      const products = await fetchProductDetails(productId);

      setProductDeatils(products);
    };

    // Fetch product details
    getProducts();
  }, [productId]);

  return (
    <div className="product-details-page-container">
      <header className="product-details-page-header">
        {/* Link to navigate back to the product list */}
        <Link to="/" className="product-details-page-backbutton">
          &#8678; Back to list
        </Link>
        <h1>Product Detail</h1>
      </header>
      <section>
        {/* Render the product details component with the fetched product details */}
        <ProductDetails product={productDeatils} />
      </section>
    </div>
  );
};

export default ProductDetailsPage;
