import axios from 'axios';


export const getTest = () => {
  return axios.get('http://localhost:9000/api/users');
};
export const postAfiliado = (data) => {
  return axios.post('http://localhost:9000/api/users', data);
};
export const postSugerencia = (data) => {
  return axios.post('http://localhost:9000/api/sugerencia', data);
};
export const getSugerencia = (data) => {
  return axios.get('http://localhost:9000/api/sugerencia', data);
};
export const postPaypal = (data) => {
  return axios.post('http://localhost:9000/create-payment', data);
};