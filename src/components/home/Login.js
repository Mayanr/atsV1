import React, { Fragment, Component } from 'react';
import Heading from '../layout/Heading';

const Login = () => {
    return(
        <Fragment>
            <Heading/>

            <section className = "container">
            <h1>Log in: </h1>
            <form>
                <input type="text"></input>
            </form>
            </section>
            
        </Fragment>
    )
}

export default Login;