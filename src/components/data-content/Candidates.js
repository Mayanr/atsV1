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
                   {c.id}.) { c.applicant.first_name }
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
    render(){
        return(
            <Fragment>
            <div >
                <h2>THE CANDIDATES COMPONENT</h2>
                {this.renderTabList()}
                {this.renderCandidates()}
                    <p>Maecenas condimentum scelerisque quam. Pellentesque ut nunc massa. Cras vestibulum elit ut sem maximus, vel porttitor erat posuere. In eget mauris eros. Nam finibus volutpat elit, vel cursus urna vulputate sed. Proin porta libero interdum neque commodo lobortis. Donec volutpat, diam non mollis efficitur, odio elit efficitur dui, at accumsan nisi quam eget odio. Aliquam rutrum posuere nunc, nec consectetur nunc pretium in. Pellentesque sit amet est ac odio imperdiet molestie quis ultricies justo. Integer eget egestas quam, a porta sapien. In hac habitasse platea dictumst. Sed ut mi blandit, gravida orci in, convallis ante. Nunc finibus diam ac ante eleifend, sed elementum purus condimentum.</p>
            </div>
            </Fragment>
        )
    }
}

export default Candidates;