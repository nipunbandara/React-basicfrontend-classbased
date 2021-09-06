import React, { Component } from 'react';
import axios from "axios";

class EmployeeDetails extends Component {
    constructor(props){
        super(props);

        this.state = {
            employee: []
        }
    }

    componentDidMount() {
        const id = this.props.match.params.id;

        axios.get(`/employee/get/${id}`).then((res) => {
            if (res.data.success){
                this.setState({
                    employee: res.data.employee
                });

                console.log(this.state.employee);
            }
        });
    }

    render() {
        const {name, age, gender} = this.state.employee;

        return (
            <div>
                <br/>
                <h5>{name}</h5>

                <p>Age = {age}</p>
                <p>Gender = {gender}</p>
            </div>
        );
    }
}

export default EmployeeDetails;