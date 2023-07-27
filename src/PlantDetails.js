import React from 'react';

const PlantDetails = ({ plant }) => {
  if (!plant) {
    // If no matching plant is found, you can show an error message or redirect to a 404 page
    return <div>Plant not found.</div>;
  }

  return (
    <div>
      <h2>{plant.name}</h2>
      <p>Kingdom: {plant.kingdom}</p>
      <p>Habitat: {plant.habitat}</p>
      {/* Add more details as needed */}
    </div>
  );
};

export default PlantDetails;