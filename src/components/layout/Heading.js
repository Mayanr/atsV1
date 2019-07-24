import React, { Fragment, Component } from 'react';
import { BrowserRouter as  Router, Route, Switch, Link } from 'react-router-dom';

const Heading = () => {
    return(
        <div id="heading">
            <nav id="headingNav">
                <Link to="/">Company Logo</Link>|
                <a href="/#features">Features</a>|
                <a href="/#testimonials">Testimonials</a>|
                <a href="/#blog">Blog</a>|
                <a href="/#pricing">Pricing</a>
            </nav>

            <div id="headingButtons">
                <Link to="/login"><button>Login</button></Link>
                <Link to="/demo"><button>Demo</button></Link>
            </div>
        </div>
    )
}

export default Heading;