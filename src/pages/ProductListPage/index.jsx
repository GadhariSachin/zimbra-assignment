import "./ProductListPage.css";

import { useEffect, useMemo, useState } from "react";

import { fetchCategories, fetchProducts } from "../../service/api";

import FilterDropdown from "../../components/FilterDropdown";
import ProductList from "../../components/ProductList";

/**
 * @function ProductListPage
 * @description Renders the product list page. Fetches product data and categories from the API, and allows filtering of products by category.
 * @returns {JSX.Element} The rendered product list page component.
 */

const ProductListPage = () => {
  // State to hold the selected category filter
  const [filterCategory, setFilterCategory] = useState("1");

  // State to hold the list of products fetched from the API
  const [productsList, setProductsList] = useState([]);

  // State to hold the list of categories fetched from the API
  const [categories, setCategories] = useState([]);

  /**
   * Fetches the product list and categories when the component mounts.
   */
  useEffect(() => {
    /**
     * Async function to fetch all products and update the state.
     */
    const getProducts = async () => {
      const products = await fetchProducts();
      setProductsList(products);
    };

    /**
     * Async function to fetch all categories and update the state. Also sets the initial filter category.
     */
    const getCategories = async () => {
      const categories = await fetchCategories();
      setCategories(categories);
      setFilterCategory(categories[0].id); // Set initial filter category to the first category
    };

    // Fetch products and categories
    getProducts();
    getCategories();
  }, []);

  /**
   * Filters the product list based on the selected category.
   */
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
        {/* Dropdown component to select the category filter */}
        <FilterDropdown
          options={categories}
          setFilterCategory={setFilterCategory}
        />
        {/* List of products filtered by the selected category */}
        <ProductList productsList={filteredProducts} />
      </section>
    </div>
  );
};

export default ProductListPage;
