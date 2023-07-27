import React from 'react';

const PlantDetails = ({ plant }) => {
    if (!plant) {
      return <div>Plant not found.</div>;
    }
  
    return (
      <div className="container mt-4">
        <div className="card">
          <div className="card-body">
            <h2 className="card-title">{plant.name}</h2>
            <p className="card-text">Kingdom: {plant.kingdom}</p>
            <p className="card-text">Habitat: {plant.habitat}</p>
            {/* Add more plant details as needed */}
          </div>
        </div>
      </div>
    );
  };

export default PlantDetails;