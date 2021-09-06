import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import AllEmployees from './components/AllEmployees';
import AddEmployee from './components/AddEmployee';
import UpdateEmployee from './components/UpdateEmployee';
import EmployeeDetails from './components/EmployeeDetails';
import Header from './components/Header';
 

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className = "container">
          <Header/>
          <Route path="/" exact component={AllEmployees}></Route>
          <Route path="/add" component={AddEmployee}></Route>
          <Route path="/edit/:id" component={UpdateEmployee}></Route>
          <Route path = "/details/:id" component={EmployeeDetails}></Route>
          

        </div>
    
      
      </BrowserRouter>
       )
  }
}
