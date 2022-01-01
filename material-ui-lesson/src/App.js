import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const App = () => (
  <div>
    <nav>
      <Link to='/grids'>Grids</Link> | <Link to='/appbars'>App Bars</Link>
    </nav>
    <hr />
    <br />
    <Outlet />
  </div>
);

export default App;
