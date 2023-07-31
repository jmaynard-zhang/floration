import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const PlantList = () => {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch(process.env.PUBLIC_URL + '/data/plants_test.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => setPlants(data))
      .catch((error) => {
        console.error('Error fetching plant data:', error);
      });
  }, []);

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