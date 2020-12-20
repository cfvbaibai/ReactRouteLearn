import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import Login from './Login';
import Home from './Home';

function App() {
  return (
    <Grid container direction="column" component="div"
      style={{ minHeight: "100vh", overflow: "auto" }}>
      <Grid container item component="div" justify="space-between"
        style={{ backgroundColor: "#EEEEFF", padding: "8px" }}>
        <Grid item component="span">Welcome</Grid>
        <Grid item component="button">Sign In</Grid>
      </Grid>
      <Grid container item component="div" style={{ flex: 1 }}>
        <Router>
          <Grid item component="div" xs={1}>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/login">Login</Link></li>
            </ul>
          </Grid>
          <Grid item style={{flex: 1}}>
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
          <Grid item xs={1} style={{padding: "8px"}}>
            Please do not have a look at this.
          </Grid> 
        </Router>
      </Grid>
      <Grid container component="div" justify="space-between"
        style={{ backgroundColor: "#EEEEFF", padding: "8px" }}>
        <Grid item component="span">@Copyright 2020</Grid>
        <Grid item component="span">Privacy Policy</Grid>
      </Grid>
    </Grid>
  );
}

export default App;
