import React from 'react';
import { Link } from 'react-router-dom';

const PlantList = ({ plants }) => {
  return (
    <div>
      <h2>Plant List</h2>
      <ul>
        {plants.map((plant) => (
          <li key={plant.id}>
            <Link to={`/plant/${plant.name}`}>{plant.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PlantList;