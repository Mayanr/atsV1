import React, { Fragment, Component} from 'react';
import axios from "axios";

import PropTypes from "prop-types"


class Jobs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            co_id: this.props.co_id,
            jobs: [],
          active: false,
          rejected: false,
          hired: false,
          prospective: false,
        };
    }

    componentDidMount() {
        this.coJobs();
    }

    coJobs =()=> {
        const {co_id} = this.state;
        axios.get(`/api/jobs/${co_id}`)
        .then(res=>
            this.setState({
                jobs: [res.data]
                // jobs: JSON.stringify(res.data)
            }))
            .catch(err => console.log(err));
    }


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
              Active
            </span>
            <span
              onClick={() => this.displayRejected(true)}
              className={this.state.rejected ? "active" : ""}
            >
              Rejected
            </span>
            <span
              onClick={() => this.displayHired(true)}
              className={this.state.hired ? "hired" : ""}
            >
              Rejected
            </span>
            <span
              onClick={() => this.displayProspective(true)}
              className={this.state.prospective ? "prospective" : ""}
            >
            Prospective
        </span>
        </div>
    );
};
    joblist = () =>{
        const j = Array.from(this.state.jobs)
        const { jobs = [] } = this.props;
        return (<ul>{j.map(job =>
            <li key={job.id}>1 . {job.title}</li>)}</ul>);
    }
    
    // renderJobs =() => {
    //     const j = Array.from(this.state.jobs)
    //     const g = j.map((job) =>
    //     <li>{job}</li>);
       
    // }
    // );
    // return(
    //     <ul>{ listJ }</ul>
    // );
    //   return(
    //       <ul>
    //           {a.map(function(job, index){
    //               return <li key={ index }>{job} </li>;
    //           })}
    //       </ul>
    //   )
    

    render(){
        // const j = Array.from(this.state.jobs)
        const { jobs } = this.state;
        return(
            <Fragment >
            <div >
                <button >
                  Add Job
                </button>
                <h2>THE JOBS COMPONENT</h2>
                    {this.renderTabList()}
                    {/* <ul className="list-group list-group-flush">
                        {this.renderItems()}
                    </ul> */}
                    <ul>
                        {/* render jobs: {this.jobList()} <br/> */}
                       state.co_id: {this.state.co_id} <br/>
                        props.job: {this.props.jobs}<br />
                        state.job: {this.state.jobs} 

                    {jobs.map(job =>
                        <li key={job.id}><b>Job title: {job.title}</b></li>)}
                    </ul>
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