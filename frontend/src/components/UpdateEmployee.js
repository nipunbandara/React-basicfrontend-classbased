import React, { Component } from 'react';
import axios from 'axios';

class UpdateEmployee extends Component {

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
        const id = this.props.match.params.id;
        
        console.log('Employee data', this.state);

        const employee = {
            name : this.state.name,
            age: this.state.age,
            gender: this.state.gender
        }
        axios.put(`/employee/update/${id}`, employee).then(() => {
            alert('Employee updated');
        })
        .catch(error => {
            alert (error.message);
        });
    }


    componentDidMount() {
        const id = this.props.match.params.id;

        axios.get(`/employee/get/${id}`).then((res) => {
            if (res.data.success){
                this.setState({
                    name: res.data.employee.name,
                    age: res.data.employee.age,
                    gender: res.data.employee.gender
                });

                console.log(res.data.employees);
            }
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
              <button className="btn btn-primary" onClick = {this.saveEmployee}>Update</button>
        
        </div>
        );
    }
}

export default UpdateEmployee;