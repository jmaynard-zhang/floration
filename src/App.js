import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PlantList from './PlantList';
// import PlantDetails from './PlantDetails';
import plants from './plants';

function App() {
  // Assuming you have fetched the plant data and stored it in the 'plants' state
  // const [plants, setPlants] = useState([]);

  // Example: Fetching the data from a JSON file
  // useEffect(() => {
  //   fetch('/path/to/plantData.json')
  //     .then((response) => response.json())
  //     .then((data) => setPlants(data));
  // }, []);
  console.log(plants);

  return (
    <>
      <Router>
        <Routes>
          {/* Route for the plant list page */}
          <Route path="/" element={<PlantList plants={plants} />} />

          {/* Route for individual plant details pages */}
          {/* <Route path="/plant/:name" element={<PlantDetails plants={plants} />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
