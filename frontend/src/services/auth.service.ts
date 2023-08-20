import axios from 'axios';

const API_URL = 'http://localhost:4000/';

const register = (username: string, email: string, password: string) => {
  return axios.post(API_URL + 'register', {
    user: username,
    email,
    pwd: password,
  });
};

const login = async (username: string, password: string) => {
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
  const user = localStorage.getItem('mern-user');
  if (user !== null) {
    return JSON.parse(user);
  }
  return null;
};

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
};

export default AuthService;
