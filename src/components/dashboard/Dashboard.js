import React, { Fragment, Component } from 'react';
import axios from "axios";
import { BrowserRouter as  Router, Route, Switch, Link } from 'react-router-dom';

import PropTypes from "prop-types"

import SideNav from './SideNav';
import Stats from './Stats';
import TopNav from './TopNav';
import Jobs from '../data-content/Jobs';
import Candidates from '../data-content/Candidates';
import Reports from '../data-content/Reports';


class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            company: "",
            co_id: "",
            name: "",
            l_name:"",
            email:"",
            role: "",
            jobs : [
                // id:null,
                // company: "",
                // title: "",
                // description: "",
                // hiring_team: "",
                // department: "",
                // req_id: '',
                // status: "",
                // created_at:"",
                // updated_at: ""
            ],
            candidates:[]
        };
      }

    
    // retreive data from api
    componentDidMount() {
        this.employeeAccount()   
    }
    employeeAccount = () => {
    const userID = 1;
    axios.get(`/api/employee/${userID}/`)
        .then(res => {
            this.setState({ 
            name: res.data.first_name,
            l_name: res.data.last_name,
            email: res.data.email,
            co_id: res.data.company
        })
        this.companyName(res.data.company)
        this.employeeRole(res.data.hiring_role)
        this.coJobs(res.data.company);
        this.candidates_considered(res.data.company);
    })
        .catch(err => console.log(err));
    };

    companyName = (coID) => {
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

    // obtain all jobs posted with this co.
    
    coJobs =(coID)=> {
        axios.get(`/api/job`)
        // axios.get(`/api/jobs/${coID}`)
        .then(res=>
            this.setState({
                jobs: res.data.filter(
                    job => job.company === coID
                )
            }))
            .catch(err => console.log(err));
    }

    candidates_considered = (coID) => {
        axios
        .get("/api/candidate_consideration")
        .then(res=>
            this.setState({
                candidates: res.data.filter(
                    candidate => candidate.considered_for.company === coID
                )
            }))
            .catch(err => console.log(err));
    }

    // renderJobs=() => {
    //     return this.state.jobs.map(job => <li key={job.id}>{job.title} </li>)
    // }
    // obtain all candidates that have applied to roles at this co.
    
    render() {
        console.log(this.state.jobs.length, "jobs in render function", this.state.jobs)
        console.log("candidates in render function", this.state.candidates)

        const { jobs, candidates, co_id } = this.state
        return(
            <Router>
            <div id="dashboard">
            {/* Name: {this.state.name} {this.state.l_name} <br/>
            Co: {this.state.company}<br/>
            Role: {this.state.role} */}
            {/* {this.renderJobs()} */}
            {/* {this.state.jobs} */}
                <TopNav id="topNav" name={this.state.name} l_name={this.state.l_name} co={this.state.company} role= {this.state.role}/>
                <SideNav id="sideNav"/>
                <Stats id="stats"/>
                <div id="data">
                    <Route exact path = "/(dashboard|jobs)/"  render={(props) => <Jobs {...props} jobs ={jobs} co_id = {co_id} />} />
                    {/* <Route path = "/dashboard"  component={Jobs} /> */}
                <Switch>
                    {/* <Route exact path = "/candidates" component={Candidates} /> */}
                    <Route exact path = "/candidates" render={(props) => <Candidates {...props} candidates ={candidates} co_id ={co_id}/>}/>

                    <Route exact path = "/reports" component={Reports} />
                    {/* <Route path = "/jobs"  render={(props) => <Jobs {...props} jobs ={jobList} co_id = {this.state.co_id} />} /> */}
                </Switch>
                </div>
            </div>
            </Router>
        )
    }
}
// Dashboard.propTypes = {
//     jobs: PropTypes.array.isRequired
// };
// Dashboard.defaultProps ={
//     jobs: []
// }

export default Dashboard;