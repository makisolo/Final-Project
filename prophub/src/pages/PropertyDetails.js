import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const PropertyDetails = () => {
  const { id } = useParams();
  const [property, setProperty] = useState(null);

  useEffect(() => {
    fetch('/data/properties.json')
      .then(res => res.json())
      .then(data => {
        const selectedProperty = data.find(p => p.id === parseInt(id));
        setProperty(selectedProperty);
      });
  }, [id]);

  return (
    property ? (
      <div>
        <h2>{property.title}</h2>
        <p>Price: ${property.price}</p>
        <p>{property.description}</p>
      </div>
    ) : <p>Loading...</p>
  );
};

export default PropertyDetails;
