import React from 'react'
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

// Image imports 
import Vinyl from '../images/vinyl-sample.jpg';
import Carpet from '../images/carpet-sample.jpeg';
import Laminate from '../images/laminate-sample.jpg';
import Tile from '../images/tile-sample.jpg';
import Main from '../images/main-sample.jpg';
import { style } from '@mui/system';

// Styles
const classes = {
  root: {
    flexGrow: 1
  },
  vinylImage: {
    backgroundImage: `url(${Vinyl})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    height: '300px',
    marginLeft: '1rem',
  },
  carpetImage: {
    backgroundImage: `url(${Carpet})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    height: '300px',
    marginLeft: '1rem',
  },
  laminateImage: {
    backgroundImage: `url(${Laminate})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    height: '300px',
    marginLeft: '1rem',
  },
  tileImage: {
    backgroundImage: `url(${Tile})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    height: '300px',
    marginLeft: '1rem',
  },
  mainImage: {
    backgroundImage: `url(${Main})`,
    height: 700,
  },
  heading: {
    marginTop: 0,
    paddingTop: 400,
    textAlign: "center",
    color: "#F1FAEE",
    fontFamily: "Roboto",
    fontSize: 40,
    textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000',
  },
  paper: {
    padding: 20,
    textAlign: "center",
    color: "#1D3557",
    fontFamily: "Roboto",
    backgroundColor: "#F1FAEE",
  },
  gridItem: {
    justifyContent: "center",
  }
};

const Home = () => {
  return (
    <div style={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper style={classes.mainImage}><h1 style={classes.heading} >Find your new floors to fit your style and budget!</h1></Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div style={classes.vinylImage}></div>
        </Grid>
        <Grid item xs={12} sm={6} style={classes.gridItem} >
          <Paper style={classes.paper}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Paper>
        </Grid>
        <Grid item xs={12} sm={6} style={classes.gridItem} >
          <Paper style={classes.paper}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div style={classes.carpetImage}></div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div style={classes.laminateImage}></div>
        </Grid>
        <Grid item xs={12} sm={6} style={classes.gridItem} >
          <Paper style={classes.paper}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Paper>
        </Grid>
        <Grid item xs={12} sm={6} style={classes.gridItem} >
          <Paper style={classes.paper}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div style={classes.tileImage}></div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;