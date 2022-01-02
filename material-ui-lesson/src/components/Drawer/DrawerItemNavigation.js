import React, { useState } from 'react';
import { Route, Link, Routes } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import HomeIcon from '@material-ui/icons/Home';
import WebIcon from '@material-ui/icons/Web';

const styles = (theme) => ({
  alignContent: {
    alignSelf: 'center',
  },
});

function DrawerItemNavigation({ classes }) {
  const [open, setOpen] = useState(false);

  return (
    <Grid container justifyContent='space-between'>
      <Grid item className={classes.alignContent}>
        <Routes>
          <Route exact path='/' render={() => <Typography>Home</Typography>} />
          <Route
            exact
            path='/page2'
            render={() => <Typography>Page 2</Typography>}
          />
          <Route
            exact
            path='/page3'
            render={() => <Typography>Page 3</Typography>}
          />
        </Routes>
      </Grid>
      <Grid item>
        <Drawer
          className={classes.drawerWidth}
          open={open}
          onClose={() => setOpen(false)}
        >
          <List>
            {/* By default, the ListItem component will render a div element. It accepts a button property that when true, will render a  button element. You don't want either of these. Instead, you want the list items to be links that react-router will process. The component property accepts a custom component to use; in this example, you want to use the Link component from the react-router-dom package. This will render the appropriate link while maintaining the proper styles. The properties that you pass to ListItem are also passed to your custom component, which, in this case, is Link. This means that the required to property is passed to Link, pointing the link to /. Likewise, the onClick handler is also passed to the Link component, which is important because you want to close the temporary drawer whenever a link is clicked. */}
            <ListItem component={Link} to='/' onClick={() => setOpen(false)}>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText>Home</ListItemText>
            </ListItem>
            <ListItem
              component={Link}
              to='/page2'
              onClick={() => setOpen(false)}
            >
              <ListItemIcon>
                <WebIcon />
              </ListItemIcon>
              <ListItemText>Page 2</ListItemText>
            </ListItem>
            <ListItem
              component={Link}
              to='/page3'
              onClick={() => setOpen(false)}
            >
              <ListItemIcon>
                <WebIcon />
              </ListItemIcon>
              <ListItemText>Page 3</ListItemText>
            </ListItem>
          </List>
        </Drawer>
      </Grid>
      <Grid item>
        <Button onClick={() => setOpen(!open)}>
          {open ? 'Hide' : 'Show'} Drawer
        </Button>
      </Grid>
    </Grid>
  );
}
export default withStyles(styles)(DrawerItemNavigation);
