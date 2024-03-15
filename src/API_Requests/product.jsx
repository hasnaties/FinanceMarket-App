import axios from "axios"

export const getProducts = () => {
  return (axios.get(import.meta.env.VITE_BASE_URL + "/products"));
}