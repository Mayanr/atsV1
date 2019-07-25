import React, { Fragment, Component } from 'react';
import { BrowserRouter as  Router, Route, Switch, Link } from 'react-router-dom';

import './App.css';
import axios from "axios";
import Footer from './components/layout/Footer';
import Landing from './components/layout/Landing';
import Dashboard from './components/dashboard/Dashboard';
import Jobs from './components/data-content/Jobs';
import Candidates from './components/data-content/Candidates';

const App= () => {
  return (
    <Router>
      <div className="wrapper">
        <Route path = "/" component={Landing}/>
      <Switch>
        <Route exact path = "/dashboard" component = {Dashboard}/>
        {/* <Route exact path = "/jobs" component = {Jobs}/>
        <Route exact path = "/candidates" component = {Candidates}/> */}

      </Switch>
      </div>
      <Footer />
    </Router>
  )

}

export default App;