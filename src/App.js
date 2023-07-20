// Import necessary libraries and components
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
// import PlantList from './PlantList';
// import PlantDetails from './PlantDetails';

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
    <Router>
      <div>
        <h1>Plant Database</h1>
        {/* <Switch> */}
          {/* Route for the plant list page */}
          {/* <Route exact path="/"> */}
            {/* <PlantList plants={plants} /> */}
          {/* </Route> */}

          {/* Route for individual plant details pages */}
          {/* <Route path="/plant/:name"> */}
            {/* <PlantDetails plants={plants} /> */}
          {/* </Route> */}
        {/* </Switch> */}
      </div>
    </Router>
  );
}

export default App;

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
