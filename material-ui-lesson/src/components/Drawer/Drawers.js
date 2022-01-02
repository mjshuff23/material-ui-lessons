import React from 'react';
import { Outlet, Link } from 'react-router-dom';

function Drawers() {
  return (
    <div>
      <span>Drawer Types</span>
      <ul>
        <Link to='temporary'>
          <li>Temporary</li>
        </Link>
        <Link to='persistent'>
          <li>Persistent</li>
        </Link>
        <Link to='permanent'>
          <li>Permanent</li>
        </Link>
      </ul>
      <br />
      <Outlet />
    </div>
  );
}

export default Drawers;
