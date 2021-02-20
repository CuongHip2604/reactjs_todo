import { URL } from '../constants/constants';
import axiosClient from './axiosClient';

export const CategoryAPI = {
  getCategoties: (params) => {
    const url = URL.CATEGORIES;
    return axiosClient.get(url, { params });
  },

  getCategory: (id) => {
    const url = `${URL.CATEGORIES}/${id}`;
    return axiosClient.get(url);
  },

  addCategory: (data) => {
    const url = `${URL.CATEGORIES}`;
    return axiosClient.post(url, data);
  },

  updateCategory: (id, data) => {
    const url = `${URL.CATEGORIES}/${id}`;
    return axiosClient.put(url, data);
  },

  deleteCategory: (id) => {
    const url = `${URL.CATEGORIES}/${id}`;
    return axiosClient.delete(url);
  },
};
