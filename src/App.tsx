import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { AppBar, Button, Grid, IconButton, Toolbar, Typography } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu'; 
import Login from './Login';
import Home from './Home';

function App() {
  const theme = useTheme();
  const bannerBackgroundColor = theme.palette.success.main;
  return (
    <Grid container direction="column" component="div"
      style={{ minHeight: "100vh", overflow: "auto" }}>
      <Grid container item>
        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" color="inherit" aria-label="menu" style={{marginRight: theme.spacing(2)}}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" style={{flex: 1}}>Welcome</Typography>
            <Button color="inherit" variant="outlined">Sign In</Button>
          </Toolbar>
        </AppBar>
      </Grid>
      <Grid container item style={{ flex: 1 }}>
        <Router>
          <Grid item xs={1}>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/login">Login</Link></li>
            </ul>
          </Grid>
          <Grid item style={{ flex: 1 }}>
            <Switch>
              <Route path="/login">
                <div style={{ padding: "8px" }}>
                  <Login />
                </div>
              </Route>
              <Route path="/">
                <div style={{ padding: "8px" }}>
                  <Home />
                </div>
              </Route>
            </Switch>
          </Grid>
          <Grid item xs={1} style={{ padding: "8px" }}>
            Please do not have a look at this.
          </Grid>
        </Router>
      </Grid>
      <Grid container component="div" justify="space-between"
        style={{ backgroundColor: bannerBackgroundColor, padding: "8px" }}>
        <Grid item component="span">@Copyright 2020</Grid>
        <Grid item component="span">Privacy Policy</Grid>
      </Grid>
    </Grid>
  );
}

export default App;
