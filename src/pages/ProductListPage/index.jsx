import "./ProductListPage.css";

import { useEffect, useState } from "react";

import { fetchProducts } from "../../service/api";

import FilterDropdown from "../../components/FilterDropdown";
import ProductList from "../../components/ProductList";

const ProductListPage = () => {
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const products = await fetchProducts();

      setProductsList(products);
    };

    getProducts();
  }, []);

  return (
    <div className="product-list-container">
      <header>
        <h1>Product List</h1>
      </header>
      <section>
        <FilterDropdown />
        <ProductList productsList={productsList} />
      </section>
    </div>
  );
};

export default ProductListPage;
