import React, { Fragment, Component } from 'react';
import axios from "axios";
import { BrowserRouter as  Router, Route, Switch, Link } from 'react-router-dom';

import SideNav from './SideNav';
import Stats from './Stats';
import TopNav from './TopNav';
import Jobs from '../data-content/Jobs';
import Candidates from '../data-content/Candidates';
import Reports from '../data-content/Reports';


class Dashboard extends Component {
    constructor() {
        super();
        this.state = {
            company: "",
            name: "",
            l_name:"",
            email:"",
            role: ""
        };
      }

    
    // retreive data from api
    componentDidMount() {
        this.employeeAccount();
        // this.companyList();
    }
    employeeAccount = () => {
    const userID = 1;
    axios.get(`/api/employee/${userID}/`)
        .then(res => {
            this.setState({ 
            name: res.data.first_name,
            l_name: res.data.last_name,
            email: res.data.email 
        })
        this.companyName(res.data.company)
        this.employeeRole(res.data.hiring_role)
    })
        .catch(err => console.log(err));
    };

    companyName = (coID) =>{
    axios.get(`/api/company/${coID}/`)
            .then(res=>
                this.setState({
                    company: res.data.name
                }))            
            .catch(err => console.log(err))
    }

    employeeRole = (roleID) => {
        axios.get(`/api/role/${roleID}/`)
            .then(res=>
                this.setState({
                    role: res.data.name
                }))
            // .then(res=>console.log("companyName function:", res.data.name))
            
            .catch(err => console.log(err))
    }
    render() {
        // setTimeout(() => {
        //     this.setState({user:{name: "Greg", company: "Disney", role: "Recruiter"}})
        // }, 5000)
        return(
            <Router>
            <div id="dashboard">
            {/* Name: {this.state.name} {this.state.l_name} <br/>
            Co: {this.state.company}<br/>
            Role: {this.state.role} */}
                <TopNav id="topNav" name={this.state.name} l_name={this.state.l_name} co={this.state.company} role= {this.state.role}/>
                <SideNav id="sideNav"/>
                <Stats id="stats"/>
                <div id="data">
                    <Route  path = "/jobs"  component={Jobs} />
                <Switch>
                    <Route exact path = "/candidates" component={Candidates} />
                    <Route exact path = "/reports" component={Reports} />
                </Switch>
                </div>
            </div>
            </Router>
        )
    }
}


export default Dashboard;