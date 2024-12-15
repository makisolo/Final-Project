import React, { useState } from "react";
import "../styles/Register.css";

const Register = () => {
  const [role, setRole] = useState("buyer");

  const handleRegister = (e) => {
    e.preventDefault();
    alert("Registered successfully!");
  };

  return (
    <div className="register-page">
      <section className="register-header">
        <h1>Create Your Account</h1>
        <p>Join PropHub today and experience seamless property management.</p>
      </section>
      <form className="register-form" onSubmit={handleRegister}>
        <label htmlFor="name">Full Name</label>
        <input type="text" id="name" name="name" placeholder="Enter your full name" required />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" placeholder="Enter your email" required />

        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" placeholder="Enter a secure password" required />

        <label htmlFor="role">Role</label>
        <select id="role" value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="buyer">Buyer</option>
          <option value="seller">Seller</option>
          <option value="admin">Admin</option>
        </select>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
