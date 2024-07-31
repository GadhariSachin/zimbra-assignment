import "./ProductDetails.css";

// eslint-disable-next-line react/prop-types
const ProductDetails = ({ product = {} }) => {
  return (
    <div className="product-details-container">
      <div className="product-details-image">
        <img
          src={product.imageUrl}
          alt={product.name}
          height="500"
          width="500"
        />
      </div>
      <div className="product-details-summary">
        <h2>{product.name}</h2>
        <p>{product.description}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
