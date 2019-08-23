import React, { Component} from 'react';
import JobModal from "./JobModal";
import axios from "axios";

import PropTypes from "prop-types"

class Jobs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      co_id: this.props.co_id,
      // jobs: this.props.jobs,
      open: false,
      on_hold: false,
      closed: false,
      all: true, 
      // user_id: this.props.user_id,
      activeJob: {
        company: this.props.co_id,
        title: "",
        description: "",
        hiring_team: [],
        department: null,
        req_id: "",
        status: null,
        created_by: null,
        edited_by: null,
      }
    };
  } 

    // componentDidMount() {
    //     this.coJobs();
    // }

    // coJobs =()=> {
    //     const {co_id} = this.state;
    //     axios.get(`/api/jobs/${co_id}`)
    //     .then(res=>
    //         this.setState({
    //             jobs: res.data
    //         }))
    //         .catch(err => console.log(err));
    // }

  displaySelectedTab = status =>{
    if(status==="open"){
      return this.setState({ 
        open: true, 
        on_hold: false, 
        closed: false,
        all: false
      });
    }
    else if (status==="on_hold"){
      return this.setState({ 
        open: false, 
        on_hold: true, 
        closed: false,
        all: false
      });
    }
    else if (status==="closed"){
      return this.setState({
        open: false, 
        on_hold: false, 
        closed: true,
        all: false
      });
    }
    else {
      return this.setState({
        open: false, 
        on_hold: false, 
        closed: false,
        all: true
      });
    }
  }

  renderTabList = () => {
    return (
      <div className="tab-list">
        <span
            onClick={()=> this.displaySelectedTab("all")}
            className={this.state.all ? "active" : ""}
        >
          All
        </span>
        <span
          onClick={()=> this.displaySelectedTab("open")}
          className={this.state.open ? "active" : ""}
        >
          Open
        </span>
        <span
          onClick={()=> this.displaySelectedTab("on_hold")}
          className={this.state.on_hold ? "active" : ""}
        >
          On Hold
        </span>
        <span
          onClick={()=> this.displaySelectedTab("closed")}
          className={this.state.closed ? "active" : ""}
        >
          Closed
        </span>
      </div>
    );
  };

  formatDate=(date)=>{
    return date.substring(0, 10);
  }
    
  renderJobs =() => {
    const {open, on_hold, closed} = this.state;
    const { jobs } = this.props
    var jobList = jobs
    if(open){
      jobList = jobs.filter(
        job => job.status === 1
      )
    }
    else if(on_hold){
      jobList = jobs.filter(
        job => job.status === 2
      )
    }
    else if(closed){
      jobList = jobs.filter(
        job => job.status === 3
      )
    }
    return(
      // this.props.jobs.map(j => (
      jobList.map(j => (
        <tr key={j.id}>
          <td>{j.id}</td>
          <td>
            {j.department === 1 && "Engineering"}
            {j.department === 2 && "Marketing"}
            {j.department === 3 && "HR"}
          </td>
          {/* <td>{j.department }</td> */}
          <td>{j.title}</td>
          {/* <td>{j.description}</td> */}
          <td>{j.candidates_applied.length}</td> 
          <td>
            {j.status === 1 && "Open"}
            {j.status === 2 && "On Hold"}
            {j.status === 3 && "Closed"}
          </td> 
          <td>{this.formatDate(j.created_at)}</td>
          <td>{this.formatDate(j.updated_at)}</td>
          <td>
          <button
            onClick={() => this.editJob(j)}
            className="editButton"
          >
            Edit
          </button>
          <button
            onClick={() => this.handleDelete(j)}
            className="deleteButton"
          >
            Delete
          </button>
          </td>
        </tr>   
      ))
    );
  }

  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };

  // JobModal onSave function
  handleSubmit = job => {
    this.toggle();
    console.log(job.department)
    // job.department = JSON.parse(job.department)
    // console.log("job req:" ,job.req_id)
    if (job.id) {
      console.log("updating job:" ,job)
      axios
        .put(`/api/job/${job.id}/`, job)
        .then(res => this.renderJobs())
        .catch(err => console.log(err));
      return;
    }
    // generate a random unique requisition id
    // if(job.department === 1 || job.department === "Product"){
    //   var dep = job.department.name.substring(0, 4)
    // } else {
    //   var dep = job.department.name.substring(0, 2)
    // }
    var dep = "mk"
    var unique_id = Date.now()
    job.req_id = dep.toUpperCase().concat(unique_id)
    console.log("the job is:" ,job)
    axios
      .post("http://localhost:8000/api/job/", job)
      .then(res => console.log("res.data is:" , res.data))
      .catch(err => console.log(err));
  };

  createJob = () => {
    const job = { 
      company: this.props.co_id,
      title: "",
      description: "",
      hiring_team: [],
      department: null,
      req_id: "",
      status: null,
      created_by: this.props.user_id,
      edited_by: this.props.user_id
    };
    this.setState({ activeJob: job, modal: !this.state.modal });
  };
  editJob = job => {
    const editedJob = {
      ...job,
      edited_by: this.props.user_id
    }
    this.setState({ activeJob: editedJob, modal: !this.state.modal });
  };

  render(){
    return(
      <main >
      <div>
        <button onClick={this.createJob}>
          Add Job
        </button>
        <h2>Job Listings</h2>
        <br/>
            {this.renderTabList()}
            <div className="responsiveTable">
        <table>
        <thead>
          <tr>
            <th> ID </th>
            <th> Department </th>
            <th> Title </th>
            {/* <th> Description </th> */}
            <th> Applicants </th>
            <th> Status </th>
            <th> Date Created </th>
            <th> Last Modified </th>
            <th> Actions </th>
          </tr>
        </thead>
        <tbody>
          {this.renderJobs()}
        </tbody>
        </table>
        </div>
      </div>

      {this.state.modal ? (
        <JobModal
          activeJob={this.state.activeJob}
          toggle={this.toggle}
          onSave={this.handleSubmit}
          employees={this.props.employees}
          departments={this.props.departments}
        />
      ) : null}
      </main>
    )
  }
}

// Jobs.propTypes = {
//     jobs: PropTypes.array.isRequired
// };

// Jobs.defaultProps ={
//     jobs: []
// }

export default Jobs;