import React, { Fragment, Component } from 'react';
import axios from 'axios';

class Candidates extends Component {
    constructor(props) {
        super(props);
        this.state = {
            co_id: this.props.co_id,
            candidate: "",
            active: false,
            rejected: false,
            hired: false,
            prospective: false,
            activeCandidate: {
                candidate_id: null,
                name: "",
                job:""
            },
            candidateList: []
        }
    }
    componentDidMount() {
        // this.LoadList();
        // console.log(this.state.candidateList)
    }

    LoadList = () => {
        axios
        .get("/api/candidate_consideration")
        .then(res=>
            // this.setState({
            //     candidateList: res.data.filter(
            //         candidate => candidate.considered_for === this.props.co_id
            //     )
            // })
            console.log(res.data)
            )
            .catch(err => console.log(err));
    }

    renderCandidates=()=> {
      return(
        this.props.candidates.map(c =>(
            <ul>
                <li key={c.id}>
                   {c.id}.) { c.applicant.first_name } - email: { c.applicant.email }
                   <a className="linkText" href={c.resume} target="_blank">view resume</a>
                </li>
            </ul>
        ))
      );
    }

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
              className={this.state.rejected ? "rejected" : ""}
            >
              Rejected
            </span>
            <span
              onClick={() => this.displayHired(true)}
              className={this.state.hired ? "hired" : ""}
            >
              Hired
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
    render(){
        return(
            <Fragment>
            <div >
                <h2>THE CANDIDATES COMPONENT</h2>
                {this.renderTabList()} <br/>
                {this.renderCandidates()}
            </div>
            </Fragment>
        )
    }
}

export default Candidates;