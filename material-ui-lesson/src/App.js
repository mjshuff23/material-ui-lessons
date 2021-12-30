import React from 'react';
import AutoGrid from './components/AutoGrid.js';
import JustifiedGrid from './components/JustifiedGrid.js';
import MUIGrid from './components/MUIGrid.js';

const App = () => (
  <div>
    <MUIGrid />
    <AutoGrid />
    <br />
    <br />
    <JustifiedGrid />
  </div>
);

export default App;
