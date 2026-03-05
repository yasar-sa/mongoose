import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api"
});

//User APIs
export const getUsers = () => API.get("/users");

export const createUser = (data) => API.post("/users", data);

export const updateUser = (id, data) => API.put(`/users/${id}`, data);

export const deleteUser = (id) => API.delete(`/users/${id}`);


//Address APIs
export const getAddresses = (userId) =>
  API.get(`/users/${userId}/address`);

export const createAddress = (userId, data) =>
  API.post(`/users/${userId}/address`, data);

export const updateAddress = (id, data) =>
  API.put(`/address/${id}`, data);

export const deleteAddress = (id) =>
  API.delete(`/address/${id}`);

export const getUsersWithAddress = () =>
  API.get("/users-with-address");