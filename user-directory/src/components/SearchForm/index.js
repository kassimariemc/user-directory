import React, { Component } from "react";
import employees from "../../employees.json";

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      department: "",
      title: "",
      salary: "",
      employees
    };
  }

  handleInputChange = event => {
    let value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });

    const employees = this.state.employees;
    const newFilter = [];

    const filteredEmployees = employees.map(employee => {
      if(employee[name] === value) {
        newFilter.push(employee);
      }
      return newFilter;
    })
    
    this.props.filterEmployees(filteredEmployees);
  };

  handleFormSubmit = event => {
    event.preventDefault();

    this.setState({
      ...this.state,
      name: "",
      department: "",
      title: "",
      salary: ""
    });
  };

  render() {
    return (
      <div className="jumbotron">
        <h1 className="text-warning"><i className="fa fa-search"></i></h1>
        <form>
          <div className="form-group">
            <input className="form-control"
              value={this.state.name}
              name="name"
              onChange={this.handleInputChange}
              type="text"
              placeholder="Search by Name"
            />
          </div>
          <div className="form-group">
            <input className="form-control"
              value={this.state.department}
              name="department"
              onChange={this.handleInputChange}
              type="text"
              placeholder="Search by Department"
            />
          </div>
          <div className="form-group">
            <input className="form-control"
              value={this.state.title}
              name="title"
              onChange={this.handleInputChange}
              type="text"
              placeholder="Search by Title"
            />
          </div>
          <button className="btn btn-warning" onClick={this.handleFormSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default SearchForm;