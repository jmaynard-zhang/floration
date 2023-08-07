import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PlantList from './PlantList';
import PlantDetails from './PlantDetails';

function App() {
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

  return (
    <>
      <Router>
        <Routes>
          {/* Route for the plant list page */}
          <Route path="/" element={<PlantList plants={plants} />} />

          {/* Route for individual plant details pages */}
          {plants.map((plant) => (
            <Route key={plant.id} path={`/plant/${plant.scientific_name}`} element={<PlantDetails plant={plant} />} />
          ))}
        </Routes>
      </Router>
    </>
  );
}

export default App;
