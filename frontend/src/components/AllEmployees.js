import React, { Component } from 'react';
import axios from 'axios';


class AllEmployees extends Component {
  constructor(props){
    super(props);

    this.state={
      employees:[]
    };
  }

  componentDidMount(){
    this.retrieveEmployees();
  }

  retrieveEmployees(){
    axios.get("/employee/").then(res =>{
      if(res.data.success){
        this.setState({
          employees:res.data.existingEmployees
        });

        console.log(this.state.employees)
      }
    })
  }

  onDelete = (id) => {
      axios.delete(`/employee/delete/${id}`).then((res) => {
          alert("Delete Successfull");
          this.retrieveEmployees();
      })
  }

  render() {
    return (
 
        
          <div className = "container">
            <p>All Eployees</p>
            <table className="table">
              <thead>
              <tr>
                <th scope= "col">#</th>
                <th scope= "col">Name</th>
                <th scope= "col">Age</th>
                <th scope= "col">Gender</th>
                <th scope= "col">Action</th>
              </tr>
              </thead>
              <tbody>
                {this.state.employees.map((employees, index) => (
                  <tr key = {index}>
                    <th scope="row">{index + 1}</th>
                    <td>
                        <a href = {`/details/${employees._id}`} style = {{textDecoration:"none"}}>
                        {employees.name}
                        </a>
                    </td>
                    <td>{employees.age}</td>
                    <td>{employees.gender}</td>
                    <td>
                      <a className = "btn btn-warning" href = {`/edit/${employees._id}`}>
                        <i className= "fas fa-edit"></i>&nbsp;Edit
                      </a>
                      &nbsp;
                      <a className = "btn btn-danger" href = "#" onClick = {() => this.onDelete(employees._id)}>
                        <i className= "far fa-trash-alt"></i>&nbsp;Delete
                      </a>

                    </td>
                  </tr>
                  ))}

              </tbody>
            </table>

            <button className = "btn btn-success"><a href = "/add" style = {{textDecoration:"none", color:"white"}}>Create</a></button>
            
          </div>
        
        
      
    );
  }
}

export default AllEmployees;