const axios = require("axios").default;
const urls = require("../../apiConfig");

const getProduct = async (productId) => {
  try {
    const response = await axios.get(urls.products.getProduct, productId);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const addProduct = async (product, token) => {
  try {
    const response = await axios.post(urls.products.addProduct, product, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        Accept: "application/hal+json",
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const addPicturesForProduct = async (product, token) => {
  try {
    const response = await axios.post(
      urls.products.addPicturesForProduct,
      product,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
          Accept: "application/hal+json",
        },
      },
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const getUserProductsSold = async (userId, token) => {
  try {
    const response = await axios.get(
      urls.products.getUserProductsSold(userId),
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
          Accept: "application/hal+json",
        },
      },
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const getUserActiveProducts = async (userId, token) => {
  try {
    response = await axios.get(urls.products.getUserActiveProducts(userId), {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        Accept: "application/hal+json",
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const getSimilarProducts = async (productId) => {
  try {
    response = await axios.get(urls.products.getSimilarProducts(productId), {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        Accept: "application/hal+json",
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const getProductSearchSuggestions = async (productId) => {
  try {
    response = await axios.get(
      urls.products.getProductSearchSuggestions(productId),
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/hal+json",
        },
      },
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const searchProducts = async ({
  query,
  page = 0,
  size = 9,
  sortField = "name",
  sortDirection = "asc",
}) => {
  try {
    const response = await axios.get(
      urls.products.searchProducts(query, page, size, sortField, sortDirection),
      {
        headers: {
          Accept: "application/hal+json",
        },
      },
    );
    return response.data;
  } catch (error) {
    console.error("Error searching products:", error);
    throw error;
  }
};

const getRecommendedProducts = async (userId) => {
  try {
    const response = await axios.get(
      urls.products.getRecommendedProducts(userId),
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/hal+json",
        },
      },
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const getHighlightedProduct = async () => {
  try {
    const response = await axios.get(urls.products.getHighlightedProduct, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/hal+json",
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const getAllSubCategoryProducts = async (subCategoryId, page = 0, size = 9) => {
  try {
    const response = await axios.get(
      urls.products.getAllSubCategoryProducts(subCategoryId, page, size),
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/hal+json",
        },
      },
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const getNewArrivals = async (page = 0, size = 8) => {
  try {
    const response = await axios.get(urls.products.getNewArrivals(page, size), {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/hal+json",
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const getLastChanceProducts = async (page = 0, size = 8) => {
  try {
    const response = await axios.get(
      urls.products.getLastChanceProducts(page, size),
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/hal+json",
        },
      },
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const deleteProduct = async (productName, token) => {
  try {
    const response = await axios.delete(
      urls.products.deleteProduct(productName),
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      },
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
