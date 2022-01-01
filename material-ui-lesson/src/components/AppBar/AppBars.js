import React from 'react';
import { Outlet, Link } from 'react-router-dom';

function AppBars() {
  return (
    <div>
      <Link to='fixed'>Fixed</Link>
      <br />
      <Link to='hidescroll'>Hide AppBar With Scroll</Link>
      <Outlet />
    </div>
  );
}

export default AppBars;
