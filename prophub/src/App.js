import React, { useState } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';  

import Home from './pages/Home';
import About from './pages/About';
import Listings from './pages/Listings';
import PropertyDetails from './pages/PropertyDetails';
import Contact from './pages/Contact';
import Register from './pages/Register';
import Login from './pages/Login';
import AdminDashboard from './pages/Dashboard/AdminDashboard';
import BuyerDashboard from './pages/Dashboard/BuyerDashboard';
import SellerDashboard from './pages/Dashboard/SellerDashboard';

function App() {
  const [role, setRole] = useState(null); // Track user role (buyer, seller, admin)
  const navigate = useNavigate(); 

  // After successful login, set role and navigate to the respective dashboard
  const handleLoginSuccess = (userRole) => {
    setRole(userRole);
    if (userRole === 'admin') {
      navigate('/admin-dashboard');
    } else if (userRole === 'buyer') {
      navigate('/buyer-dashboard');
    } else if (userRole === 'seller') {
      navigate('/seller-dashboard');
    }
  };

  return (
    <div>
      <header>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            {role === 'admin' && <li><Link to="/admin-dashboard">Admin Dashboard</Link></li>}
            {role === 'buyer' && <li><Link to="/buyer-dashboard">Buyer Dashboard</Link></li>}
            {role === 'seller' && <li><Link to="/seller-dashboard">Seller Dashboard</Link></li>}
          </ul>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/listings" element={<Listings />} />
        <Route path="/property" element={<PropertyDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login onLoginSuccess={handleLoginSuccess} />} />
        
        {/* Dashboard Routes */}
        <Route 
          path="/admin-dashboard" 
          element={role === "admin" ? <AdminDashboard /> : <Login />} 
        />
        <Route 
          path="/buyer-dashboard" 
          element={role === "buyer" ? <BuyerDashboard /> : <Login />} 
        />
        <Route 
          path="/seller-dashboard" 
          element={role === "seller" ? <SellerDashboard /> : <Login />} 
        />
      </Routes>
    </div>
  );
}

export default App;
