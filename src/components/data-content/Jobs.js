import React, { Fragment, Component} from 'react';
import axios from "axios";

import PropTypes from "prop-types"

class Jobs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      co_id: this.props.co_id,
      jobs: this.props.jobs,
      open: false,
      on_hold: false,
      closed: false,
      all: true
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
      <div className="my-5 tab-list">
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
  //    const j = Array.from(this.state.jobs)
  //    const g = j.map((job) =>
  //    <li>{job}</li>);   
    return(
      // this.props.jobs.map(j => (
      jobList.map(j => (
        <tr key={j.id}>
          <td>{j.id}</td>
          <td>{j.department.name}</td>
          <td>{j.title}</td>
          <td>{j.description}</td>
          <td>{j.candidates_applied.length}</td>  
          <td>{this.formatDate(j.created_at)}</td>
          <td>{this.formatDate(j.updated_at)}</td>
        </tr>   
      ))
    );
  }

    render(){
        // const j = Array.from(this.state.jobs)
        // const { jobs = [] } = this.state;
        // console.log(j)
        // console.log(this.props.jobs.length, "jobs from Jobs", this.props.jobs)
      return(
        <Fragment >
        <div >
          <button >
            Add Job
          </button>
          <h2>THE JOBS COMPONENT</h2>
              {this.renderTabList()}
          <table>
          <thead>
            <tr>
              <th> ID </th>
              <th> Department </th>
              <th> Title </th>
              <th> Description </th>
              <th> Candidates Applied </th>
              <th> Date Created </th>
              <th> Last Modified </th>
            </tr>
          </thead>
          <tbody>
            {this.renderJobs()}
          </tbody>
          </table>
        </div>
        </Fragment>
      )
    }
}

Jobs.propTypes = {
    jobs: PropTypes.array.isRequired
};

Jobs.defaultProps ={
    jobs: []
}

export default Jobs;