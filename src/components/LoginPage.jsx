import { useEffect } from "react";
import Cookies from "js-cookie";

import { requestLogin } from "../API_Request/profileReq";

const LoginPage = () => {
  const email = "adamblake@email.com";
  const password = "123";

  useEffect(() => {
    requestLogin(email, password).then((res) => {
      Cookies.set("auth_token", `Bearer ${res.data.token}`);
      console.log(res.data.token)
    })
  }, []);

  return (
    <></>
  )
}

export default LoginPage;