import React, { Fragment, Component } from 'react';
import Heading from '../layout/Heading';

const Demo = () => {
    return(
        <Fragment>
            <Heading/>

            <section className = "container">
            <h1>Request a demo: </h1>
            <form>
                <input type="text"></input>
            </form>
            </section>
        </Fragment>
    )
}

export default Demo;