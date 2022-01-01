import React from 'react';
import MUIGrid from './MUIGrid';
import AutoGrid from './AutoGrid';
import JustifiedGrid from './JustifiedGrid';
import AbstractingContainersAndItems from './AbstractingContainers';
import FixedColumnLayout from './FixedColumnGrid';

function Grids() {
  return (
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
}

export default Grids;
