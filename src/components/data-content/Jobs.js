import React, { Fragment, Component} from 'react';
import axios from "axios";

import PropTypes from "prop-types"

class Jobs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            co_id: this.props.co_id,
            jobs: this.props.jobs,
          active: false,
          rejected: false,
          hired: false,
          prospective: false,
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


    displayActive = status => {
        if (status) {
          return this.setState({ active: true });
        }
        return this.setState({ active: false });
      };

    displayRejected = status => {
        if (status) {
            return this.setState({ rejected: true });
    }
        return this.setState({ rejected: false });
    };

    displayHired = status => {
        if (status) {
            return this.setState({ hired: true });
    }
        return this.setState({ hired: false });
    };

    displayProspective = status => {
        if (status) {
            return this.setState({ hired: true });
    }
        return this.setState({ hired: false });
    };
    renderTabList = () => {
        return (
          <div className="my-5 tab-list">
            <span
              onClick={() => this.displayActive(true)}
              className={this.state.active ? "active" : ""}
            >
              Open
            </span>
            <span
              onClick={() => this.displayHired(true)}
              className={this.state.hired ? "hired" : ""}
            >
              On Hold
            </span>
            <span
              onClick={() => this.displayProspective(true)}
              className={this.state.prospective ? "prospective" : ""}
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
    //    const j = Array.from(this.state.jobs)
    //    const g = j.map((job) =>
    //    <li>{job}</li>);   
    return(
        this.props.jobs.map(j =>(
         
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
    //   return(
    //       <ul>
    //           {a.map(function(job, index){
    //               return <li key={ index }>{job} </li>;
    //           })}
    //       </ul>
    //   )
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