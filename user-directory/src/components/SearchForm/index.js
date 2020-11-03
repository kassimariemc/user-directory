import React, { Component } from "react";
import employees from "../../employees.json";

class SearchForm extends Component {
  state = {
    name: "",
    department: "",
    title: "",
    salary: "",
    manager: ""
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

    this.setState({
      name: "",
      department: "",
      title: "",
      salary: "",
      manager: ""
    });
  };

  render() {
    return (
      <div className="jumbotron">
        <h1 className="text-warning">Find Employee</h1>
        <form>
          <div className="form-group">
            <input className="form-control form-control-lg"
              value={this.state.name}
              name="name"
              onChange={this.handleInputChange}
              type="text"
              placeholder="Search by Name"
            />
          </div>
          <div className="form-group">
            <input className="form-control form-control-lg"
              value={this.state.department}
              name="department"
              onChange={this.handleInputChange}
              type="text"
              placeholder="Search by Department"
            />
          </div>
          <div className="form-group">
            <input className="form-control form-control-lg"
              value={this.state.title}
              name="title"
              onChange={this.handleInputChange}
              type="text"
              placeholder="Search by Title"
            />
          </div>
          <div className="form-group">
            <input className="form-control form-control-lg"
              value={this.state.manager}
              name="manager"
              onChange={this.handleInputChange}
              type="text"
              placeholder="Search by Manager"
            />
          </div>
          <button className="btn btn-warning" onClick={this.handleFormSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default SearchForm;