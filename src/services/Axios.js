import axios from "axios";

const serverURL = "http://localhost:9000";
axios.defaults.headers.common["Content-Type"] = "application/json";
axios.defaults.headers.common["Authorization"] = `Bearer ${localStorage.getItem(
  "token"
)}`;

// LOG USER
export const login = async (email, password) => {
  const res = await axios.post(`${serverURL}/api/login`, {
    email,
    password,
  });

  if (!res.data.success) return false;
  window.localStorage.setItem("token", res.data.token);
  window.localStorage.setItem("myId", res.data.user.id);
  return res;
};

// LOGOUT USER
export const logout = () => {
  window.localStorage.setItem("token", "");
  window.localStorage.setItem("myId", "");
  return;
};

// GET ALL USER
export const getAllUsers = async () => {
  const res = await axios.get(`${serverURL}/api/collaborateurs`);
  return res;
};

// GET USER
export const getUser = async (userId) => {
  const res = await axios.get(`${serverURL}/api/collaborateurs/${userId}`);
  return res;
};

// GET RANDOM USER
export const getRandomUser = async () => {
  const res = await axios.get(`${serverURL}/api/collaborateurs/random`);
  return res;
};

// ADD USER
export const addUser = async (
  gender,
  service,
  lastname,
  firstname,
  email,
  password,
  phone,
  birthdate,
  city,
  country,
  photo,
  isAdmin
) => {
  const res = await axios.post(`${serverURL}/api/collaborateurs`, {
    gender,
    service,
    lastname,
    firstname,
    email,
    password,
    phone,
    birthdate,
    city,
    country,
    photo,
    isAdmin,
  });
  return res;
};

// MODIFY USER
export const editUser = async (
  userId,
  gender,
  service,
  lastname,
  firstname,
  email,
  password,
  phone,
  birthdate,
  city,
  country,
  photo,
  isAdmin
) => {
  const res = await axios.put(`${serverURL}/api/collaborateurs/${userId}`, {
    gender,
    service,
    lastname,
    firstname,
    email,
    password,
    phone,
    birthdate,
    city,
    country,
    photo,
    isAdmin,
  });
  return res;
};

// DELETE USER
export const deleteUser = async (userId) => {
  if (!confirm("Voulez-vous vraiment suprimer cet utilisateur ?")) return;
  const res = await axios.delete(`${serverURL}/api/collaborateurs/${userId}`);
  return res;
};
