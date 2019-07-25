import React, { Fragment, Component } from 'react';
import Heading from '../layout/Heading';
import { Link } from "react-router-dom";

const Login = () => {
    return(
        <Fragment>
            <Heading/>

            <section className = "container">
            <h1>Log in: </h1>
            <form>
                <input type="text"></input> <br/>
                <Link to="/dashboard"><input type="submit" value="Login" className="linkText"/>
                </Link>
            </form>
            </section>
            
        </Fragment>
    )
}

export default Login;