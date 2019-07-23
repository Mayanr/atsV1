import React, { Fragment, Component } from 'react';
import { BrowserRouter as  Router, Route, Switch, Link } from 'react-router-dom';
import Main from '../home/Main';
import Login from '../home/Login';
import Demo from '../home/Demo';

const Landing = () => {
    return (
        <Fragment>
            <nav>
                <a href="">Company Logo</a>
                <a href="/#features">Features</a>
                <a href="/#testimonials">Testimonials</a>
                <a href="/#blog">Blog</a>
                <a href="/#pricing">Pricing</a>
            </nav>

            <Link to="/login"><button>Login</button></Link>
            <Link to="/demo"><button>Demo</button></Link>

            <Route exact path='/' component={Main} />
            <section className = "container">
            <Switch>
                <Route exact path = "/login" component = {Login}/>
                <Route exact path = "/demo" component = {Demo}/>
            </Switch>
            </section>
    </Fragment>
    )
}

export default Landing;