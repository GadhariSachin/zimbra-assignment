import "./ProductListPage.css";

import FilterDropdown from "../../components/FilterDropdown";
import ProductList from "../../components/ProductList";

const ProductListPage = () => {
  return (
    <div className="product-list-container">
      <header>
        <h1>Product List</h1>
      </header>
      <section>
        <FilterDropdown />
        <ProductList />
      </section>
    </div>
  );
};

export default ProductListPage;
