import React, { Fragment, Component } from 'react';
import { BrowserRouter as  Router, Route, Switch, Link } from 'react-router-dom';

import './App.css';
import axios from "axios";
import Footer from './components/layout/Footer';

const App= () => {

  return (
    <Router>
    <Fragment>
    <div className="wrapper">
    {/* <Navbar/> */}
    <nav>
      <a href="">Company Logo</a>
      <a href="#features">Features</a>
      <a href="#testimonials">Testimonials</a>
      <a href="#blog">Blog</a>
      <a href="#pricing">Pricing</a>
    </nav>
    {/* <Route exact path='/' component={Landing} /> */}
    <h1>Landing page: Supercharge Your Recruiting Team </h1>

    <section className = "container">
    <h1>Alert </h1>

    {/* <Alert/> */}
      <Switch>
        <Route exact path = "/login"/>
        <Route exact path = "/demo"/>
        {/* <Route exact path = "/login" component = {Login}/>
        <Route exact path = "/register" component = {Register}/>
        <Route exact path = "/profiles" component = {Profiles}/>
        <Route exact path = "/profile/:id" component = {Profile}/>

        <PrivateRoute exact path = "/dashboard" component = {Dashboard}/>

        <PrivateRoute exact path = "/create-profile" component = {CreateProfile}/>
        <PrivateRoute exact path = "/edit-profile" component = {EditProfile}/> */}
      </Switch>
    </section>

    <section id= "features">
      <h1>Features</h1>
    </section>

    <section id= "testimonials">
      <h1>Testimonials</h1>
    </section>

    <section id= "blog">
      <h1>Blog</h1>
    </section>

    <section id= "pricing">
      <h1>Pricing</h1>
    </section>
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