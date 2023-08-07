import React from 'react';
import { Link } from 'react-router-dom';

const PlantList = ({ plants }) => {
  const handlePlantClick = (plant) => {
    // Handle the plant click here
    console.log('Clicked plant:', plant);
    // You can navigate to PlantDetails here or use any other logic you need
  };

  return (
    <div className="container mt-4">
      <h2>Plant List</h2>
      <ul className="list-group">
        {plants.map((plant) => (
          <li key={plant.id} onClick={() => handlePlantClick(plant)} className='list-group-item'>
            <Link to={`/plant/${plant.scientific_name}`}>{plant.scientific_name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlantList;
