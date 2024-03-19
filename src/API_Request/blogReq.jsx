import axios from "axios"

export const getBlogs = () => {
  return (axios.get(`${import.meta.env.VITE_BASE_URL}/blogs`));
}