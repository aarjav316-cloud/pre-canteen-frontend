import React, { useState } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const { login } = useContext(login);
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await login(email, password);

      const storedUser = JSON.parse(localStorage.getItem("user"));

      if (storedUser.role === "admin" || storedUser.role === "staff") {
        navigate("/admin");
      } else {
        navigate("/");
      }
    } catch (err) {
      setError(`invalid creds  ${err}`);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded shadow-md w-96"
      >
        <h2>Login</h2>

        {error && <p className="text-red-500 mb-4 text-sm">{error}</p>}

        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 p-2 border-rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="enter password"
          className="w-full mb-4 p-2 border-rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Login
        </button>

      </form>
    </div>
  );
}

export default Login;
