import Cookies from "js-cookie";
import { useState } from "react";
import { requestLogin } from "../API_Request/profileReq";

const LoginPage = () => {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState();

  //handle submit form
  function handleSubmit(e) {
    e.preventDefault();

    requestLogin(email, password).then((res) => {
      setError();
      Cookies.set("auth_token", `Bearer ${res.data.token}`)
    }).catch(() => {
      setError("Unable to login.")
    })
  }

  return (
    <div className="login-page">

      <div id="login-div">
        <h2 id="title-heading">Finance Market</h2>

        <p>{error}</p>

        <form onSubmit={handleSubmit} >
          <label htmlFor="email" >Email</label>
          <input
            name="email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            required />
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            required />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  )
}

export default LoginPage;