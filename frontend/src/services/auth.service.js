import axios from 'axios';

const API_URL = 'http://localhost:4000/';

const register = (username, email, password) => {
  return axios.post(API_URL + 'register', {
    user: username,
    email,
    pwd: password,
  });
};

const login = async (username, password) => {
  const response = await axios.post(API_URL + 'signin', {
    username,
    password,
  });
  if (response.data.username) {
    localStorage.setItem('mern-user', JSON.stringify(response.data));
  }
  return response.data;
};

const logout = async () => {
  localStorage.removeItem('mern-user');
  const response = await axios.post(API_URL + 'signout');
  return response.data;
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('mern-user'));
};

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
};

export default AuthService;
