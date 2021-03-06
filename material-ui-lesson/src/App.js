import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  toolbarMargin: theme.mixins.toolbar,
});

const App = withStyles(styles)(({ classes }) => (
  <div>
    <div className={classes.toolbarMargin} />
    <nav>
      <Link to='/grids'>Grids</Link> | <Link to='/appbars'>App Bars</Link> |
      <Link to='/drawers'>Drawers</Link> |{' '}
      <Link to='/autocomplete'>Autocomplete</Link> |
      <Link to='/buttons'>Buttons</Link>
    </nav>
    <hr />
    <br />
    <Outlet />
  </div>
));

export default App;
