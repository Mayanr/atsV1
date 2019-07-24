import React, { Fragment, Component } from 'react';
import SideNav from './SideNav';
import Stats from './Stats';
import TopNav from './TopNav';

const Dashboard = () => {
    return(
        <div>
            <h1>Welcome [recruiter_name] </h1>
            <TopNav/>
            <SideNav/>
            <Stats/>
        </div>
    )
}

export default Dashboard;