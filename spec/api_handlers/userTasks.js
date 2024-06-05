const axios = require("axios").default;
const urls = require("../../apiConfig");

const register = async (user) => {
  try {
    const response = await axios.post(urls.users.register, user, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/hal+json",
      },
    });
    return response;
  } catch (error) {
    console.error(error);
  }
};

const login = async (user) => {
  try {
    const response = await axios.post(urls.users.login, user, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/hal+json",
      },
    });
    return response;
  } catch (error) {
    console.error(error);
  }
};

const deactivateUser = async (token) => {
  try {
    const response = await axios.patch(urls.users.deactivate, 
      {},
      {
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/hal+json",
        "Authorization": `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const addUser = async (user) => {
  try {
    const response = await axios.post(urls.users.addUser, user, {
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/hal+json",
      },
    });
    return response;
  } catch (error) {
    console.error(error);
  }
};

const getCurrentlyRegisteredUsers = async (token) => {
  try {
    const response = await axios.get(urls.users.getCurrentlyRegisteredUsers, {
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/hal+json",
        "Authorization": `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    console.error(error);
  }
};

const updateUser = async (user, token) => {
  try {
    const response = await axios.put(urls.users.updateUser, user, {
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/hal+json",
        "Authorization": `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    console.error(error);
  }
};

const getInfoForCurrentUser = async (token) => {
  try {
    const response = await axios.get(urls.users.getInfoForCurrentUser, {
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/hal+json",
        "Authorization": `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    console.error(error);
  }
};

const insertPictureForCurrentUser = async (picture, token) => {
  try {
    const response = await axios.put(
      urls.users.insertPictureForCurrentUser,
      picture,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          "Accept": "application/hal+json",
          "Authorization": `Bearer ${token}`,
        },
      },
    );
    return response;
  } catch (error) {
    console.error(error);
  }
};

const getUserPicture = async (token) => {
  try {
    const response = await axios.get(urls.users.getUserPicture, {
      headers: {
        "Authorization": `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  register,
  login,
  deactivateUser,
  addUser,
  getCurrentlyRegisteredUsers,
  updateUser,
  getInfoForCurrentUser,
  insertPictureForCurrentUser,
  getUserPicture,
};
