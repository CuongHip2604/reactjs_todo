import { URL } from '../constants/constants';
import axiosClient from './axiosClient';

const ProductsAPI = {
  getProducts: (params) => {
    const url = URL.PRODUCTS;
    return axiosClient.get(url, { params });
  },

  getProduct: (id) => {
    const url = `${URL.PRODUCTS}/${id}`;
    return axiosClient.get(url);
  },

  addProduct: (data) => {
    const url = `${URL.PRODUCTS}`;
    return axiosClient.post(url, data);
  },

  updateProduct: (id, data) => {
    const url = `${URL.PRODUCTS}/${id}`;
    return axiosClient.put(url, data);
  },

  deleteProduct: (id) => {
    const url = `${URL.PRODUCTS}/${id}`;
    return axiosClient.delete(url);
  },
};

export default ProductsAPI;
