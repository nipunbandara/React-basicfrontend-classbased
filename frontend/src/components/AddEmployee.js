import axios from 'axios';
import React, { Component } from 'react';

class AddEmployee extends Component {

    constructor(props){
        super(props);
        this.setEmployeeName = this.setEmployeeName.bind(this);
        this.setEmployeeAge = this.setEmployeeAge.bind(this);
        this.setEmployeeGender = this.setEmployeeGender.bind(this);
        this.saveEmployee = this.saveEmployee.bind(this);
        this.state = {
            name: '',
            age: '',
            gender: ''
        }
    }


    setEmployeeName(e){
        this.setState({name: e.target.value});
    }
    setEmployeeAge(e){
        this.setState({age : e.target.value});
    }
    setEmployeeGender(e){
        this.setState({gender : e.target.value});
    }

    saveEmployee(e){
        e.preventDefault();
        
        console.log('Employee data', this.state);

        const employee = {
            name : this.state.name,
            age: this.state.age,
            gender: this.state.gender
        }
        axios.post("/employee/add", employee).then(() => {
            alert('Employee added');
        })
        .catch(error => {
            alert (error.message);
        });
    }

    render() {
        return (
            <div className = "container">
            
                <div className="form-group">
                    <label for="name">Name</label>
                    <input type="text" className="form-control" id="name" placeholder="Enter name" value = {this.state.name} onChange = {this.setEmployeeName}/>
                    
                </div>
                <div className="form-group">
                    <label for="age">Age</label>
                    <input type="number" className="form-control" id="age" placeholder="Enter age" value = {this.state.age} onChange = {this.setEmployeeAge}/>
                    
                </div>
                <div className="form-group">
                    <label for="name">Gender</label>
                    <input type="text" className="form-control" id="gender" placeholder="Enter gender" value = {this.state.gender} onChange = {this.setEmployeeGender}/>
                    
                </div>
                  <button className="btn btn-primary" onClick = {this.saveEmployee}>Submit</button>
            
            </div>
        );
    }
}

export default AddEmployee;