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
  return axios.post(`${port}/create-payment`, data);
};