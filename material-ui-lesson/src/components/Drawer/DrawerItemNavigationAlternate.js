import React, { useState } from 'react';
import clsx from 'clsx';
import { Routes, Route, Link, NavLink } from 'react-router-dom';
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
  activeListItem: {
    color: theme.palette.primary.main,
  },
});

const NavListItem = withStyles(styles)(
  ({ classes, Icon, text, active, ...other }) => (
    <ListItem component={NavLink} {...other}>
      <ListItemIcon
        classes={{
          root: clsx({ [classes.activeListItem]: active }),
        }}
      >
        <Icon />
      </ListItemIcon>
      <ListItemText
        classes={{
          primary: clsx({
            [classes.activeListItem]: active,
          }),
        }}
      >
        {text}
      </ListItemText>
    </ListItem>
  )
);

const NavItem = (props) => (
  <Routes>
    <Route
      exact
      path={props.to}
      render={() => <NavListItem active={true} {...props} />}
    />
    <Route path='/' render={() => <NavListItem {...props} />} />
  </Routes>
);

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
            <NavItem
              to='/'
              text='Home'
              Icon={HomeIcon}
              onClick={() => setOpen(false)}
            />
            <NavItem
              to='/page2'
              text='Page 2'
              Icon={WebIcon}
              onClick={() => setOpen(false)}
            />
            <NavItem
              to='/page3'
              text='Page 3'
              Icon={WebIcon}
              onClick={() => setOpen(false)}
            />
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
