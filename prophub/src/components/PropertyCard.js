import React from 'react';
import { Link } from 'react-router-dom';

const PropertyCard = ({ property }) => {
  return (
    
    <div className="property-card">
      <h3>{property.title}</h3>
      <p>Price: ${property.price}</p>
      <Link to={`/property/${property.id}`}>View Details</Link>
    </div>

  );
};

export default PropertyCard;