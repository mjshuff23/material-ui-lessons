import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    margin: '0 20px',
    border: '2px solid black',
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

const MUIGrid = withStyles(styles)(({ classes }) => (
  <div className={classes.root}>
    <h1>Basic Material-UI Grid</h1>
    <Grid container spacing={4}>
      {/* Breakpoints take values ranging from 1-12, but are better thought of in percentages.  Therefore with our code below, xs breakpoint will make the item take up 100% of the width, sm breakpoint 50%, and md breakpoint 25% */}
      <Grid item xs={12} sm={6} md={3}>
        <Paper className={classes.paper}>xs=12 sm=6 md=3</Paper>
      </Grid>
      {/* Here we are changing the sm breakpoint to take up 75% of the width */}
      <Grid item xs={12} sm={9} md={3}>
        <Paper className={classes.paper}>xs=12 sm=9 md=3</Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Paper className={classes.paper}>xs=12 sm=6 md=3</Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Paper className={classes.paper}>xs=12 sm=6 md=3</Paper>
      </Grid>
    </Grid>
  </div>
));

export default MUIGrid;
