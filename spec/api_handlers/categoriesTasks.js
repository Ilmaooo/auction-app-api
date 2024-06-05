const axios = require("axios").default;
const urls = require("../../apiConfig");

const getAllCategories = async () => {
  try {
    const response = await axios.get(urls.categories.getAllCategories, {
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

const getAllSubCategories = async () => {
  try {
    const response = await axios.get(urls.categories.getAllSubCategories, {
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

const searchForCategories = async (query) => {
  try {
    const response = await axios.get(
      urls.categories.searchForCategories(query),
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
