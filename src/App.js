import React, { Component } from 'react';
import './App.css';
import axios from "axios";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // viewCompleted: false,
      activeItem: {
        id: "",
        name: "",
        created_at: "",
        updated_at:""
      },
      industryList: []
    };
  }
  componentDidMount() {
    this.showList();
  }
  showList = () => {
    axios
      .get("http://localhost:8000/api/industry/")
      .then(res => this.setState({ industryList: res.data }))
      .catch(err => console.log(err));
  };
  renderItems =()=>{
    const allItems = this.state.industryList
    return allItems.map(item => (
      <li
        key={item.id}
        className="list-group-item d-flex justify-content-between align-items-center">
        {item.name}
        <button onClick={() => this.editItem(item)}
        className="btn btn-secondary mr-2">
          {" "}
          Edit{" "}
        </button>
        </li>
      ))
  }
  render(){
    return(
    <ul className="list-group list-group-flush">
      {this.renderItems()}
    </ul>
    )
  }
}

export default App;
