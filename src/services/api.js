import "dotenv/config";
import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "Authorization": `Bearer ${localStorage.getItem("tokenMyPhotos")}`
  }
});

export default api;