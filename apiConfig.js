const BASE_API_URL = "http://localhost:8086/api"; 

const urls = {
  users: {
    register: `${BASE_API_URL}/user/register`,
    login: `${BASE_API_URL}/user/login`,
    deactivate: `${BASE_API_URL}/user/deactivate`,
    addUser: `${BASE_API_URL}/user`,
    getCurrentlyRegisteredUsers: `${BASE_API_URL}/user`,
    updateUser: `${BASE_API_URL}/user/current`,
    getInfoForCurrentUser: `${BASE_API_URL}/user/current`,
    insertPictureForCurrentUser: `${BASE_API_URL}/user/picture`,
    getUserPicture: `${BASE_API_URL}/user/picture`,
  },
  products: {
    getProduct: (productId) => `${BASE_API_URL}/product?id=${productId}`,
    addProduct: `${BASE_API_URL}/product`,
    addPicturesForProduct: (productName) =>
      `${BASE_API_URL}/product/add-picture?productName=${productName}`,
    getUserProductsSold: (userId) =>
      `${BASE_API_URL}/product/user/sold?userId=${userId}`,
    getUserActiveProducts: (userId) =>
      `${BASE_API_URL}/product/user/active?userId=${userId}`,
    getSimilarProducts: (productId) =>
      `${BASE_API_URL}/product/similar?productId=${productId}`,
    getProductSearchSuggestions: (productId) =>
      `${BASE_API_URL}/product/search-suggestions?productId=${productId}`,
    searchProducts: (
      query,
      page = 0,
      size = 9,
      sortField = "name",
      sortDirection = "asc",
    ) =>
      `${BASE_API_URL}/product/search-products?query=${query}&page=${page}&size=${size}&sortField=${sortField}&sortDirection=${sortDirection}`,
    getRecommendedProducts: (userId) =>
      `${BASE_API_URL}/product/recommended?userId=${userId}`,
    getHighlightedProduct: `${BASE_API_URL}/product/highlight`,
    getAllSubCategoryProducts: (subCategoryId, page = 0, size = 9) =>
      `${BASE_API_URL}/product/all/sub-category?subCategoryId=${subCategoryId}&page=${page}&size=${size}`,
    getNewArrivals: (page = 0, size = 8) =>
      `${BASE_API_URL}/product/all/new-arrivals?page=${page}&size=${size}`,
    getLastChanceProducts: (page = 0, size = 8) =>
      `${BASE_API_URL}/product/all/last-chance?page=${page}&size=${size}`,
    getAllCategoryProducts: (
      page = 0,
      size = 9,
      categoryId = 1,
      sortField = "name",
      sortDirection = "asc",
    ) =>
      `${BASE_API_URL}/product/all/category?page=${page}&size=${size}&categoryId=${categoryId}&sortField=${sortField}&sortDirection=${sortDirection}`,
    deleteProduct: (productName) =>
      `${BASE_API_URL}/product/delete?productName=${productName}`,
  },
  payment: {
    makePayment: (productId) =>
      `${BASE_API_URL}/payment/charge?productId=${productId}`,
  },
  categories: {
    getAllCategories: `${BASE_API_URL}/category`,
    getAllSubCategories: `${BASE_API_URL}/category/subcategories`,
    searchForCategories: (query) =>
      `${BASE_API_URL}/category/search?query=${query}`,
  },
  subcategories: {
    getSubCategoriesInOneCategory: (categoryId) =>
      `${BASE_API_URL}/sub-category/all/category?categoryId=${categoryId}`,
  },
  bids: {
    getAllUserBids: `${BASE_API_URL}/bid/user/all`,
    getAllProductBids: (productId, page, size) =>
      `${BASE_API_URL}/bid/product/all?productId=${productId}&page=${page}&size=${size}`,
  },
};

module.exports = urls;
