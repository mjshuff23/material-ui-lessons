import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    textAlign: 'center',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

// The container or the item property of Grid components determines the role of the element. You can create two components that use these properties and create an element name that's easier to read when you have lots of layout components:
const Container = (props) => <Grid container {...props} />;

const Item = (props) => <Grid item {...props} />;

const AbstractingContainersAndItems = withStyles(styles)(({ classes }) => (
  <div className={classes.root}>
    <h1>Abstracting Containers and Items</h1>
    <Container spacing={4}>
      <Item xs={12} sm={6} md={3}>
        <Paper className={classes.paper}>xs=12 sm=6 md=3</Paper>
      </Item>
      <Item xs={12} sm={6} md={3}>
        <Paper className={classes.paper}>xs=12 sm=6 md=3</Paper>
      </Item>
      <Item xs={12} sm={6} md={3}>
        <Paper className={classes.paper}>xs=12 sm=6 md=3</Paper>
      </Item>
      <Item xs={12} sm={6} md={3}>
        <Paper className={classes.paper}>xs=12 sm=6 md=3</Paper>
      </Item>
    </Container>
  </div>
));
export default AbstractingContainersAndItems;
