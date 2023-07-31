import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PlantList from './PlantList';
import PlantDetails from './PlantDetails';
import plants from './data/plants';

function App() {
  // Assuming you have fetched the plant data and stored it in the 'plants' state
  // const [plants, setPlants] = useState([]);

  // Example: Fetching the data from a JSON file
  // useEffect(() => {
  //   fetch('/path/to/plantData.json')
  //     .then((response) => response.json())
  //     .then((data) => setPlants(data));
  // }, []);

  return (
    <>
      <Router>
        <Routes>
          {/* Route for the plant list page */}
          <Route path="/" element={<PlantList plants={plants} />} />

         {/* Route for individual plant details pages */}
          {plants.map((plant) => (
            <Route key={plant.id} path={`/plant/${plant.name}`} element={<PlantDetails plant={plant} />} />
          ))}
        </Routes>
      </Router>
    </>
  );
}

export default App;
