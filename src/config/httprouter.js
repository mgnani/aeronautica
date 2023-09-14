import axios from 'axios';

const port = "https://api-7aph.onrender.com"
export const getTest = () => {
  return axios.get(`${port}/api/users`);
};
export const postAfiliado = (data) => {
  return axios.post(`${port}/api/users`, data);
};
export const postSugerencia = (data) => {
  return axios.post(`${port}/api/sugerencia`, data);
};
export const getSugerencia = (data) => {
  return axios.get(`${port}/api/sugerencia`, data);
};
export const postPaypal = (data) => {
  return axios.post(`${port}/create-payment`, data);
};
export const executePayment = (data) => {
  return axios.post(`${port}/execute-payment`, data);
};

export const generateSubscription = (data) => {
  return axios.post(`${port}/generate-subscription`);
};