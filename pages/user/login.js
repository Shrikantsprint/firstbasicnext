// pages/login.js

import { useState, useContext } from "react";
import UserContext from "../../contexts/UserContext";
import { useRouter } from "next/router";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setUser, setUser1 } = useContext(UserContext);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Here, you'd typically make an API call to your backend to authenticate the user.
    // For this example, let's assume a successful login if username is "admin" and password is "password".

    if (username === "admin" && password === "password") {
      setUser(true); // Set user as authenticated
      setUser1("ashish");
      localStorage.setItem("user", true);
      router.push("/"); // Redirect to homepage or dashboard
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
