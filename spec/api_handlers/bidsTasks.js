const axios = require("axios").default;
const urls = require("../../apiConfig");

const getAllUserBids = async (token) => {
  try {
    const response = await axios.get(urls.bids.getAllUserBids, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/hal+json",
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const getAllProductBids = async (token, productId, page, size) => {
  try {
    const response = await axios.get(
      urls.bids.getAllProductBids(productId, page, size),
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/hal+json",
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
