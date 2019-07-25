import React, { Fragment, Component } from 'react';
import { Link, NavLink } from "react-router-dom";
import Jobs from '../data-content/Jobs';

const SideNav = () => {
    return(
        <Fragment>

            <section id = "sideNav">
            <ul>
                <li><NavLink to="/jobs" className="linkText">Jobs</NavLink></li>
                {/* <li><button className="linkText" onClick={Jobs}>Jobs</button></li> */}
                <li><Link to="/candidates" className="linkText">Candidates</Link></li>
                <li><Link to="/reports" className="linkText">Reports</Link></li>
                <li><Link to="/adminMngr" className="linkText">Admin</Link></li>
            </ul>
            </section>
            
        </Fragment>
    )
}

export default SideNav;