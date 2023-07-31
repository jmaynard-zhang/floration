const fs = require('fs');
const Papa = require('papaparse');

const csvFilePath = './src/data/plants.csv';
const jsonDataPath = './src/data/plants.json';

fs.readFile(csvFilePath, 'utf-8', (err, data) => {
  if (err) {
    console.error('Error reading CSV file:', err);
    return;
  }

  const jsonData = Papa.parse(data, { header: true, skipEmptyLines: true });

  fs.writeFile(jsonDataPath, JSON.stringify(jsonData.data, null, 2), (err) => {
    if (err) {
      console.error('Error writing JSON file:', err);
      return;
    }

    console.log('CSV to JSON conversion successful!');
  });
});
