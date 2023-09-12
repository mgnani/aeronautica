import axios from 'axios';

const port = "http://localhost:9000"
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
  return axios.post(`http://localhost:9000/create-payment`, data);
};
export const executePayment = (data) => {
  return axios.post(`${port}/execute-payment`, data);
};

export const generateSubscription = (data) => {
  return axios.post(`${port}/generate-subscription`);
};