import "./ProductListPage.css";

import { useEffect, useMemo, useState } from "react";

import { fetchCategories, fetchProducts } from "../../service/api";

import FilterDropdown from "../../components/FilterDropdown";
import ProductList from "../../components/ProductList";

const ProductListPage = () => {
  const [filterCategory, setFilterCategory] = useState("1");
  const [productsList, setProductsList] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const products = await fetchProducts();

      setProductsList(products);
    };

    const getCategories = async () => {
      const categories = await fetchCategories();

      setCategories(categories);
      setFilterCategory(categories[0].id);
    };

    getProducts();
    getCategories();
  }, []);

  const filteredProducts = useMemo(() => {
    return productsList.filter(
      (product) => product.categoryId == filterCategory
    );
  }, [filterCategory, productsList]);

  return (
    <div className="product-list-container">
      <header>
        <h1>Product List</h1>
      </header>
      <section>
        <FilterDropdown
          options={categories}
          setFilterCategory={setFilterCategory}
        />
        <ProductList productsList={filteredProducts} />
      </section>
    </div>
  );
};

export default ProductListPage;
