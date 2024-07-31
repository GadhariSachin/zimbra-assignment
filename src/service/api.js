const BASE_URL = "http://localhost:3000";

export const fetchProducts = async () => {
  try {
    const res = await fetch(`${BASE_URL}/products`);
    const resJson = await res.json();

    return resJson;
  } catch (error) {
    console.error(error);
  }
};

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
