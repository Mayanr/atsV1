import React, { Fragment, Component} from 'react';
import JobModal from "./JobModal";

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
      activeJob: {
        title: "",
        description: "",
        department: "",
        status: null
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
    if(status=="open"){
      return this.setState({ 
        open: true, 
        on_hold: false, 
        closed: false,
        all: false
      });
    }
    else if (status=="on_hold"){
      return this.setState({ 
        open: false, 
        on_hold: true, 
        closed: false,
        all: false
      });
    }
    else if (status=="closed"){
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
          <td>{j.department.name}</td>
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
  createJob = () => {
    const job = { 
      title: "",
      description: "",
      department: "",
      status: null
    };
    this.setState({ activeJob: job, modal: !this.state.modal });
  };
  editJob = job => {
    this.setState({ activeJob: job, modal: !this.state.modal });
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