import React, { Fragment, Component } from 'react';
import { BrowserRouter as  Router, Route, Switch, Link } from 'react-router-dom';
import Main from '../home/Main';
import Login from '../home/Login';
import Demo from '../home/Demo';

class Landing extends Component{
    render(){
        return (
            <div>
                <Route exact path='/' component={Main} />
                <Switch>
                    <Route exact path = "/login" component = {Login}/>
                    <Route exact path = "/demo" component = {Demo}/>
                </Switch>
            </div>
        )
    }
}

export default Landing;