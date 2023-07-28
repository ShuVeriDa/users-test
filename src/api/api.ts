import axios from "axios";

const token = import.meta.env.VITE_REACT_APP_API_TOKEN

const axiosOptions = {
  baseURL: `https://api.github.com/`,
  headers: {
    Authorization: `token ${token}`,
  }
}

export const axiosClassic = axios.create(axiosOptions)