import axios from "axios";

const ncMarketPlace = axios.create({
  baseURL: "https://nc-marketplace-sem-1.onrender.com/api",
});

export const fetchItem = (category = "") => {
  return ncMarketPlace.get(`/items?category_name=${category}`);
};
export const fetchItemById = (item_id) => {
  return ncMarketPlace.get(`/items/${item_id}`);
};

export const getCategories = () => {
  return ncMarketPlace.get(`categories`);
};
export const fetchUsers = (username) => {
  return ncMarketPlace.get(`/users/${username}`);
};

export const createUser = (username, avatar_url = "") => {
  return ncMarketPlace.post("/users", {
    username: username,
    avatar_url: avatar_url,
  });
};
export const insertItem = (name, description = "", price, url, category) => {
  return ncMarketPlace.post("/items", {
    description: description,
    item_name: name,
    img_url: url,
    price: Number(price),
    category_name: category,
  });
};

export const fetchUserBasket = (username) => {
  return ncMarketPlace.get(`/users/${username}/basket`);
};

export const addUserBasket = (username, itemId) => {
  return ncMarketPlace.post(`/users/${username}/basket`, {
    item_id: itemId,
  });
};

export const removeItemFromBasket = (username, itemId) => {
  return ncMarketPlace.delete(`/users/${username}/basket/${itemId}`);
};

export const addUserOrder = (username, itemId) => {
  return ncMarketPlace.post(`/users/${username}/orders`, {
    item_id: itemId,
  });
}