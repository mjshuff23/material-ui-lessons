import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const App = () => (
  <div>
    <nav>
      <Link to='/grids'>Grids</Link>
    </nav>
    <hr />
    <br />
    <Outlet />
  </div>
);

export default App;
