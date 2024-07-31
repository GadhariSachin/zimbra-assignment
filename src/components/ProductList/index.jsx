import "./ProductList.css";

import { useNavigate } from "react-router-dom";

/**
 * @function ProductList
 * @description Renders a list of product cards. Each card displays an image and name of a product and navigates to the product's detail page when clicked.
 * @param {Object[]} productsList - An array of product objects to be displayed as cards. Each product object should have an `id`, `imageUrl`, and `name`.
 * @returns {JSX.Element} The rendered product list component.
 */

// eslint-disable-next-line react/prop-types
const ProductList = ({ productsList = [] }) => {
  const navigate = useNavigate();

  /**
   * Navigates to the product detail page for the selected product.
   */
  const onProductCardClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className="product-card-container">
      {productsList.map((product) => (
        <div
          key={product.id}
          className="product-card"
          onClick={() => onProductCardClick(product.id)}
        >
          <img
            src={product.imageUrl}
            alt={product.name}
            height="200"
            width="200"
          />
          <h2>{product.name}</h2>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
