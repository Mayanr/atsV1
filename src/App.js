import React, { Fragment, Component } from 'react';
import { BrowserRouter as  Router, Route, Switch, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Footer from './components/layout/Footer';
import Landing from './components/layout/Landing';
import Dashboard from './components/dashboard/Dashboard';

const App= () => {
  return (
    <Router>
      <div className="wrapper">
        <Route path = "/" component={Landing}/>
      <Switch>
        <Route path = "/dashboard/" component = {Dashboard}/>
      </Switch>
      </div>
      <Footer />
    </Router>
  )

}

export default App;