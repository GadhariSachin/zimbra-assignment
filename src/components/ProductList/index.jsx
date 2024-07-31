import "./ProductList.css";

import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const ProductList = ({ productsList = [] }) => {
  const navigate = useNavigate();

  // Take user to product detail page
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
