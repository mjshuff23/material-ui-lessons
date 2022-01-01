import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MUIGrid from './components/Grid/MUIGrid';
import AutoGrid from './components/Grid/AutoGrid';
import JustifiedGrid from './components/Grid/JustifiedGrid';
import AbstractingContainersAndItems from './components/Grid/AbstractingContainers';
import FixedColumnLayout from './components/Grid/FixedColumnGrid';
import Grids from './components/Grid/Grids';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='muigrid' element={<MUIGrid />} />
          <Route path='autogrid' element={<AutoGrid />} />
          <Route path='justifiedgrid' element={<JustifiedGrid />} />
          <Route
            path='abstracting'
            element={<AbstractingContainersAndItems />}
          />
          <Route path='fixed' element={<FixedColumnLayout />} />
          <Route path='grids' element={<Grids />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
