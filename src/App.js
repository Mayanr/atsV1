import React, { Fragment, Component } from 'react';
import { BrowserRouter as  Router, Route, Switch, Link } from 'react-router-dom';

import './App.css';
import axios from "axios";
import Footer from './components/layout/Footer';
import Landing from './components/layout/Landing';

const App= () => {

  return (
    <Router>
    <Fragment>
    <div className="wrapper">
      {/* <Navbar/> */}
      

      {/* <Route exact path='/' component={Landing} /> */}
      <Route path = "/" component={Landing}/>
    </div>
    </Fragment>
    <Footer />
    </Router>
  )

}

export default App;



  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     // viewCompleted: false,
  //     activeItem: {
  //       id: "",
  //       name: "",
  //       created_at: "",
  //       updated_at:""
  //     },
  //     industryList: []
  //   };
  // }
  // componentDidMount() {
  //   this.showList();
  // }
  // showList = () => {
  //   axios
  //     .get("/api/industry/")
  //     .then(res => this.setState({ industryList: res.data }))
  //     .catch(err => console.log(err));
  // };
  // renderItems =()=>{
  //   const allItems = this.state.industryList
  //   return allItems.map(item => (
  //     <li
  //       key={item.id}
  //       className="list-group-item d-flex justify-content-between align-items-center">
  //       {item.name}
  //       <button onClick={() => this.editItem(item)}
  //       className="btn btn-secondary mr-2">
  //         {" "}
  //         Edit{" "}
  //       </button>
  //       </li>
  //     ))
  // }
  // render(){
  //   return(
  //   <ul className="list-group list-group-flush">
  //     {this.renderItems()}
  //   </ul>
  //   )
  // }