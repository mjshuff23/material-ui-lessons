import React from 'react';
import { Outlet, Link } from 'react-router-dom';

function AppBars() {
  return (
    <div>
      <Link to='fixed'>Fixed</Link>
      <Outlet />
    </div>
  );
}

export default AppBars;
