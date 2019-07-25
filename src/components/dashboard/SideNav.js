import React, { Fragment, Component } from 'react';
import { Link, NavLink } from "react-router-dom";
import Jobs from '../data-content/Jobs';

const SideNav = () => {
    return(
        <Fragment>

            <section id = "sideNav">
            <ul>
                <li><NavLink to="/jobs" className="linkText">Jobs</NavLink></li>
                <li><NavLink to="/candidates" className="linkText">Candidates</NavLink></li>
                <li><NavLink to="/reports" className="linkText">Reports</NavLink></li>
                <li><NavLink to="/adminMngr" className="linkText">Admin</NavLink></li>
            </ul>
            </section>
            
        </Fragment>
    )
}

export default SideNav;