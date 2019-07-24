import React, { Fragment, Component } from 'react';
import axios from "axios";

import SideNav from './SideNav';
import Stats from './Stats';
import TopNav from './TopNav';

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
            <div id="dashboard">
            {/* Name: {this.state.name} {this.state.l_name} <br/>
            Co: {this.state.company}<br/>
            Role: {this.state.role} */}
                <TopNav id="topNav" name={this.state.name} l_name={this.state.l_name} co={this.state.company} role= {this.state.role}/>
                <SideNav id="sideNav"/>
                <Stats id="stats"/>
                <div id="data">This will eventually be the data Component <br/>
                Maecenas condimentum scelerisque quam. Pellentesque ut nunc massa. Cras vestibulum elit ut sem maximus, vel porttitor erat posuere. In eget mauris eros. Nam finibus volutpat elit, vel cursus urna vulputate sed. Proin porta libero interdum neque commodo lobortis. Donec volutpat, diam non mollis efficitur, odio elit efficitur dui, at accumsan nisi quam eget odio. Aliquam rutrum posuere nunc, nec consectetur nunc pretium in. Pellentesque sit amet est ac odio imperdiet molestie quis ultricies justo. Integer eget egestas quam, a porta sapien. In hac habitasse platea dictumst. Sed ut mi blandit, gravida orci in, convallis ante. Nunc finibus diam ac ante eleifend, sed elementum purus condimentum.</div>
            </div>
        )
    }
}


export default Dashboard;