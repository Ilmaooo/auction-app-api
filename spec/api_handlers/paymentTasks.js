const axios = require("axios").default;
const urls = require("../../apiConfig");

const makePayment = async (token, amount, productId) => {
  try {
    const response = await axios.post(urls.payment.makePayment(productId), {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/hal+json",
        Authorization: `Bearer ${token}`,
        amount: amount,
      },
    });
  } catch (error) {
    console.error(error);
    throw error;
  }
};
