import React, { Component } from "react";
import employees from "../../employees.json";

class AddForm extends Component {
  state = {
    name: "",
    department: "",
    title: "",
    salary: "",
    manager: "",
    email: "",
    phone: ""
  };

  handleInputChange = event => {
    let value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    let employee = {
      id: employees.length,
      name: this.state.name,
      department: this.state.department,
      title: this.state.title,
      salary: this.state.salary,
      manager: this.state.manager,
      email: this.state.email,
      phone: this.state.phone
    };

    employees.push(employee);

    this.setState({
      name: "",
      department: "",
      title: "",
      salary: "",
      manager: "",
      email: "",
      phone: ""
    });
  };

  render() {
    return (
      <div className="jumbotron">
        <h1 className="text-warning">Add Employee</h1>
        <form>
          <div className="form-group">
            <input className="form-control form-control-lg"
              value={this.state.name}
              name="name"
              onChange={this.handleInputChange}
              type="text"
              placeholder="Employee First and Last Name"
            />
          </div>
          <div className="form-group">
            <input className="form-control form-control-lg"
              value={this.state.department}
              name="department"
              onChange={this.handleInputChange}
              type="text"
              placeholder="Employee Department"
            />
          </div>
          <div className="form-group">
            <input className="form-control form-control-lg"
              value={this.state.title}
              name="title"
              onChange={this.handleInputChange}
              type="text"
              placeholder="Employee Title"
            />
          </div>
          <div className="form-group">
            <input className="form-control form-control-lg"
              value={this.state.salary}
              name="salary"
              onChange={this.handleInputChange}
              type="text"
              placeholder="Employee's Salary"
            />
          </div>
          <div className="form-group">
            <input className="form-control form-control-lg"
              value={this.state.manager}
              name="manager"
              onChange={this.handleInputChange}
              type="text"
              placeholder="Employee's Manager"
            />
          </div>
          <div className="form-group">
            <input className="form-control form-control-lg"
              value={this.state.email}
              name="email"
              onChange={this.handleInputChange}
              type="text"
              placeholder="Employee's Email"
            />
          </div>
          <div className="form-group">
            <input className="form-control form-control-lg"
              value={this.state.phone}
              name="phone"
              onChange={this.handleInputChange}
              type="text"
              placeholder="Employee's Contact #"
            />
          </div>
          <button className="btn btn-warning" onClick={this.handleFormSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default AddForm;