import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { AppBar, Button, Grid, IconButton, Toolbar, Typography } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import Login from './Login';
import Home from './Home';
import Sidebar from './Sidebar';

function App() {
  const theme = useTheme();

  return (
    <Router>
      <Grid container direction="column" justify="center" alignItems="center" style={{ height: "100vh" }}>
        <Grid direction="row" container>
          <AppBar position="static" >
            <Toolbar>
              <IconButton edge="start" color="inherit" aria-label="menu" style={{ marginRight: theme.spacing(2) }}>
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" style={{ flex: 1 }}>Welcome</Typography>
              <Button color="inherit" variant="outlined">Sign In</Button>
            </Toolbar>
          </AppBar>
        </Grid>
        <Grid direction="row" container style={{ flex: 1 }}>
          <Grid item>
            <Sidebar />
          </Grid>
          <Grid item style={{ flex: 1 }}>
            <Switch>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </Grid>
          <Grid item style={{ margin: theme.spacing(2) }}>
            <Typography variant="body1">Please ignore</Typography>
          </Grid>
        </Grid>
        <Grid direction="row" container item justify="space-between">
          <AppBar position="static" color="default">
            <Toolbar>
              <Grid item style={{ flex: 1 }}><Typography variant="caption">Copyright 2020</Typography></Grid>
              <Grid item><Typography variant="caption">Privacy Policy</Typography></Grid>
            </Toolbar>
          </AppBar>
        </Grid>
      </Grid>
    </Router>
  );
}

export default App;
