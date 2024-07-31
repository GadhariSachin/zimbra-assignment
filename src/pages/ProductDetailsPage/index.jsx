import "./ProductDetailsPage.css";

import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import ProductDetails from "../../components/ProductDetails";
import { fetchProductDetails } from "../../service/api";

// eslint-disable-next-line react/prop-types
const ProductDetailsPage = () => {
  const { productId } = useParams();

  const [productDeatils, setProductDeatils] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const products = await fetchProductDetails(productId);

      setProductDeatils(products);
    };

    getProducts();
  }, [productId]);

  return (
    <div className="product-details-page-container">
      <header className="product-details-page-header">
        <Link to="/" className="product-details-page-backbutton">
          &#8678; Back to list
        </Link>
        <h1>Product Detail</h1>
      </header>
      <section>
        <ProductDetails product={productDeatils} />
      </section>
    </div>
  );
};

export default ProductDetailsPage;
