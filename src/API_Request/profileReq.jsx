import axios from "axios"
import Cookies from 'js-cookie';

const url = import.meta.env.VITE_BASE_URL;
const axiosAuth = axios.create();
axiosAuth.defaults.headers.common['Authorization'] = Cookies.get("auth_token");

export const requestGetProfile = () => {
  return (
    axiosAuth.get(`${url}/profile`)
  );
}

export const requestLogin = (email, password) => {
  const payload = { email, password };
  return (
    axios.post(`${url}/login`, payload)
  );
}

export const requestUpdateLastActive = () => {
  return (
    axiosAuth.patch(`${url}/lastActive`)
  )
}