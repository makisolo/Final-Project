import React from "react";
import PropertyCard from "../../components/PropertyCard";
import "../../styles/SellerDashboard.css";

const SellerDashboard = () => {
  const properties = [
    { id: 1, title: 'Modern Family Home', location: 'New York', price: 500000, imageUrl: '/images/home1.jpg' },
    { id: 2, title: 'Luxury Villa', location: 'California', price: 1200000, imageUrl: '/images/villa.jpg' },
  ];

  return (
    <div className="seller-dashboard">
      <h1>Seller Dashboard</h1>
      <div className="property-list">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
      <button className="add-property">Add New Property</button>
    </div>
  );
};


export default SellerDashboard;
