import React, { Fragment, Component } from 'react';
import { Link } from "react-router-dom";

class TopNav extends Component {
    constructor(props) {
        super(props);
    }
    render(){
        return(
            <Fragment>

                <section id = "topNav">
                <Link to="" id="logoutLink">Logout</Link>
                {/* <h1>TopNav Component</h1> */}
                <h2>Welcome {this.props.name} {this.props.l_name}</h2>
                <h3>{this.props.role} at {this.props.co}</h3>
                </section>
                
            </Fragment>
        )
    }
}

export default TopNav;