import React from 'react';
import { Link } from 'react-router-dom';

const PlantList = ({ plants }) => {
  return (
    <div className="container mt-4">
      <h2>Plant List</h2>
      <ul className="list-group">
        {plants.map((plant) => (
          <li key={plant.id} className="list-group-item">
            <Link to={`/plant/${plant.name}`}>{plant.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlantList;