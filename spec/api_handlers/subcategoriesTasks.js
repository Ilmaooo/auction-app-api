const axios = require("axios").default;
const urls = require("../../apiConfig");

const getSubCategoriesInOneCategory = async (categoryId) => {
  try {
    const response = await axios.get(
      urls.subcategories.getSubCategoriesInOneCategory(categoryId),
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/hal+json",
        },
      },
    );
  } catch (error) {
    console.error(error);
    throw error;
  }
};
