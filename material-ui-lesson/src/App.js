import React from 'react';
import MUIGrid from './components/Grid/MUIGrid';
import AutoGrid from './components/Grid/AutoGrid';
import JustifiedGrid from './components/Grid/JustifiedGrid';
import AbstractingContainersAndItems from './components/Grid/AbstractingContainers';
import FixedColumnLayout from './components/Grid/FixedColumnGrid';

const App = () => (
  <div>
    <MUIGrid />
    <br />
    <AutoGrid />
    <br />
    <JustifiedGrid />
    <br />
    <AbstractingContainersAndItems />
    <br />
    <FixedColumnLayout />
  </div>
);

export default App;
