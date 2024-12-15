import React, { useState } from "react";
import "../styles/Login.css";  

const Login = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("buyer"); // Default to "buyer", or use form input for role selection

  const handleLogin = (e) => {
    e.preventDefault();
    // Logic for verifying user credentials (could be an API call)
    
    // After successful login, pass the role to parent component
    onLoginSuccess(role); // Call the function passed as prop with the role (admin, buyer, seller)
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleLogin}>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <label>Role</label>
        <select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="buyer">Buyer</option>
          <option value="seller">Seller</option>
          <option value="admin">Admin</option>
        </select>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
