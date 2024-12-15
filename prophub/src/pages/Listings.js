import React from 'react';
import properties from '../data/properties.json'; 

const Listings = () => {
  return (
    <div>
      <h2>Available Properties</h2>
      <div className="property-list">
        {properties.map((property) => (
          <div key={property.id} className="property-card">
            <h3>{property.title}</h3>
            <p>{property.description}</p>
            <p><strong>Price:</strong> ${property.price.toLocaleString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Listings;
