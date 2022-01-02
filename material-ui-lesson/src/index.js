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
import AppBars from './components/AppBar/AppBars';
import FixedPosition from './components/AppBar/FixedPosition';
import ScrolledAppBar from './components/AppBar/ScrolledAppBar';
import ToolbarAbstraction from './components/AppBar/ToolbarAbstraction';
import WithNavigation from './components/AppBar/WithNavigation';
import Drawers from './components/Drawer/Drawers';
import DrawerTypes from './components/Drawer/DrawerTypes';
import DrawerItemState from './components/Drawer/DrawerItemState';
import DrawerItemNavigation from './components/Drawer/DrawerItemNavigation';
import DrawerItemNavigationAlternate from './components/Drawer/DrawerItemNavigationAlternate';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          {/* Grids */}
          <Route path='grids' element={<Grids />} />
          <Route path='muigrid' element={<MUIGrid />} />
          <Route path='autogrid' element={<AutoGrid />} />
          <Route path='justifiedgrid' element={<JustifiedGrid />} />
          <Route
            path='abstracting'
            element={<AbstractingContainersAndItems />}
          />
          <Route path='fixed' element={<FixedColumnLayout />} />
          {/* App Bars */}
          <Route path='appbars' element={<AppBars />} />
          <Route path='appbars/fixed' element={<FixedPosition />} />
          <Route path='appbars/hidescroll' element={<ScrolledAppBar />} />
          <Route
            path='appbars/toolbarabstraction'
            element={<ToolbarAbstraction />}
          />
          <Route path='appbars/withnavigation/*' element={<WithNavigation />} />
          {/* Drawers */}
          <Route path='drawers' element={<Drawers />} />
          <Route
            path='drawers/temporary'
            element={<DrawerTypes variant='temporary' />}
          />
          <Route
            path='drawers/persistent'
            element={<DrawerTypes variant='persistent' />}
          />
          <Route
            path='drawers/permanent'
            element={<DrawerTypes variant='permanent' />}
          />
          <Route path='drawers/itemstate' element={<DrawerItemState />} />
          <Route path='drawers/navigation' element={<DrawerItemNavigation />} />
          <Route
            path='drawers/navigation-alternate/*'
            element={<DrawerItemNavigationAlternate />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
