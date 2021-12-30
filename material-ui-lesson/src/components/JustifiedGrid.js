import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    border: '2px solid green',
    textAlign: 'center',
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

// Notice how we have classes AND justify this time
const JustifiedGrid = withStyles(styles)(({ classes, justify }) => (
  <div className={classes.root}>
    <h1>Justified Grid</h1>
    <Grid container spacing={4}>
      <Grid item xs={12} sm={6} md={3}>
        <Paper className={classes.paper}>
          <Grid container justify='center'>
            <Grid item>
              <Chip label='xs=12' />
            </Grid>
            <Grid item>
              <Chip label='sm=6' />
            </Grid>
            <Grid item>
              <Chip label='md=3' />
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Paper className={classes.paper}>
          <Grid container justify='flex-end'>
            <Grid item>
              <Chip label='xs=12' />
            </Grid>
            <Grid item>
              <Chip label='sm=6' />
            </Grid>
            <Grid item>
              <Chip label='md=3' />
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Paper className={classes.paper}>
          <Grid container justify='space-between'>
            <Grid item>
              <Chip label='xs=12' />
            </Grid>
            <Grid item>
              <Chip label='sm=6' />
            </Grid>
            <Grid item>
              <Chip label='md=3' />
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Paper className={classes.paper}>
          <Grid container justify='space-around'>
            <Grid item>
              <Chip label='xs=12' />
            </Grid>
            <Grid item>
              <Chip label='sm=6' />
            </Grid>
            <Grid item>
              <Chip label='md=3' />
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  </div>
));

export default JustifiedGrid;
