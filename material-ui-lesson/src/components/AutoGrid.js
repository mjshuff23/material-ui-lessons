import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    margin: '0 20px',
    border: '2px solid red',
    textAlign: 'center',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  header: {
    fontSize: '50px',
  },
});

const AutoGrid = withStyles(styles)(({ classes }) => (
  <div className={classes.root}>
    <h1>Auto Grid</h1>
    <Grid container spacing={4}>
      <Grid item xs='auto' sm='auto' md='auto'>
        <Paper className={classes.paper}>xs=auto sm=auto md=auto</Paper>
      </Grid>
      <Grid item xs='auto' sm='auto' md='auto'>
        <Paper className={classes.paper}>xs=auto sm=auto md=auto</Paper>
      </Grid>
      <Grid item xs='auto' sm='auto' md='auto'>
        <Paper className={classes.paper}>xs=auto sm=auto md=auto</Paper>
      </Grid>
      <Grid item xs='auto' sm='auto' md='auto'>
        <Paper className={classes.paper}>xs=auto sm=auto md=auto</Paper>
      </Grid>
    </Grid>
  </div>
));

export default AutoGrid;
