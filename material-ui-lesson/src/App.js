import React from 'react';
import MUIGrid from './components/Grid/MUIGrid';
import AutoGrid from './components/Grid/AutoGrid';
import JustifiedGrid from './components/Grid/JustifiedGrid';
import AbstractingContainersAndItems from './components/Grid/AbstractingContainers';

const App = () => (
  <div>
    <MUIGrid />
    <br />
    <AutoGrid />
    <br />
    <JustifiedGrid />
    <br />
    <AbstractingContainersAndItems />
  </div>
);

export default App;
