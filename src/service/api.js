const BASE_URL = "http://localhost:3000";

/**
 * Fetches the list of product categories from the API.
 */
export const fetchCategories = async () => {
  try {
    const res = await fetch(`${BASE_URL}/categories`);
    const resJson = await res.json();

    return resJson;
  } catch (error) {
    console.error(error);
  }
};

/**
 * Fetches the list of products from the API.
 */
export const fetchProducts = async () => {
  try {
    const res = await fetch(`${BASE_URL}/products`);
    const resJson = await res.json();

    return resJson;
  } catch (error) {
    console.error(error);
  }
};

/**
 * Fetches the details of a specific product from the API using the product ID.
 */
// eslint-disable-next-line no-unused-vars
export const fetchProductDetails = async (productId) => {
  try {
    // Can use productId in actual API call
    const res = await fetch(`${BASE_URL}/productDetails`);
    const resJson = await res.json();

    return resJson;
  } catch (error) {
    console.error(error);
  }
};
