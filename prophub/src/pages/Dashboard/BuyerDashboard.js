import React, { useState } from "react";
import PropertyCard from '../../components/PropertyCard';
import "../../styles/BuyerDashboard.css";

const BuyerDashboard = () => {
  const [searchQuery, setSearchQuery] = useState(""); // For tracking the search query

  const properties = [
    { id: 1, title: 'Modern Family Home', location: 'New York', price: 500000, imageUrl: '/images/home1.jpg' },
    { id: 2, title: 'Luxury Villa', location: 'California', price: 1200000, imageUrl: '/images/villa.jpg' },
  ];

  // Filter properties based on the search query
  const filteredProperties = properties.filter(property => 
    property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    property.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="buyer-dashboard">
      <h1>Buyer Dashboard</h1>

      {/* Simple Search Field */}
      <div className="search-container">
        <input
          type="text"
          placeholder="Search properties..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)} // Update searchQuery on input change
          className="search-input"
        />
      </div>

      <div className="property-list">
        {filteredProperties.length > 0 ? (
          filteredProperties.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))
        ) : (
          <p>No properties found matching your search.</p>
        )}
      </div>

      <button className="add-to-wishlist">Add to Wishlist</button>
    </div>
  );
};

export default BuyerDashboard;
