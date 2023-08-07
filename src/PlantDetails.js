import React from 'react';

const PlantDetails = ({ plant }) => {
    if (!plant) {
      return <div>Plant not found.</div>;
    }

    const imgPath = "https://drive.google.com/uc?export=view&id=1_aPIblL-tTtWKAADSSADASDNIloPB4QNlfFcl-" //+ plant.imgId;
  
    return (
      <div className="container mt-4">
        <div className="card">
          <img
            src={imgPath}
            alt={plant.name}
            className="card-img-top"
            style={{ objectFit: 'cover', height: '300px' }}
          />
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