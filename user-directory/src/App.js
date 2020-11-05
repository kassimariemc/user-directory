import React, { Component } from "react";
import EmployeeTable from "./components/EmployeeTable";
import Wrapper from "./components/Wrapper";
import TableWrapper from "./components/TableWrapper";
import Title from "./components/Title";
import SearchForm from "./components/SearchForm";
import employees from "./employees.json";

class App extends Component {
  state = {
    employees,
    filteredEmployees: [],
    showAllEmployees: true
  };

  filterEmployees = filteredEmployees => {
    this.setState({ ...this.state, filteredEmployees: filteredEmployees, showAllEmployees: false });
  };

  sortByName = () => {
    const sort = employees.sort((a, b) => (a.name > b.name) ? 1 : -1);
    this.setState({ ...this.state, filteredEmployees: sort, showAllEmployees: false });
  }

  sortByDept = () => {
    const sort = employees.sort((a, b) => (a.department > b.department) ? 1 : -1);
    this.setState({ ...this.state, filteredEmployees: sort, showAllEmployees: false });
  }

  sortByMgr = () => {
    const sort = employees.sort((a, b) => (a.manager > b.manager) ? 1 : -1);
    this.setState({ ...this.state, filteredEmployees: sort, showAllEmployees: false });
  }

  render() {
    return (
      <Wrapper>
        <Title>Your Employee Directory</Title>
        <div className="container-full">
          <div className="row">
            <div className="col-md-6">
              <SearchForm 
                filterEmployees={this.filterEmployees}
              />
            </div>
            <div className="col-md-6">
            </div>
          </div>
        </div>

        <TableWrapper>
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">Employee <button className="btn btn-primary" onClick={this.sortByName}><i className="fa fa-sort"></i></button></th>
                <th scope="col">Department <button className="btn btn-primary" onClick={this.sortByDept}><i className="fa fa-sort"></i></button></th>
                <th scope="col">Title</th>
                <th scope="col">Manager <button className="btn btn-primary" onClick={this.sortByMgr}><i className="fa fa-sort"></i></button></th>
                <th scope="col">Salary</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
              </tr>
            </thead>
            {this.state.showAllEmployees ?
              (this.state.employees.map(employee => (
                <EmployeeTable
                  id={employee.id}
                  key={employee.id}
                  name={employee.name}
                  department={employee.department}
                  title={employee.title}
                  salary={employee.salary}
                  manager={employee.manager}
                  email={employee.email}
                  phone={employee.phone}
                />
              ))) :
              (this.state.filteredEmployees.map(employee => (
                <EmployeeTable
                  id={employee.id}
                  key={employee.id}
                  name={employee.name}
                  department={employee.department}
                  title={employee.title}
                  salary={employee.salary}
                  manager={employee.manager}
                  email={employee.email}
                  phone={employee.phone}
                />
              )))
            }
          </table>
        </TableWrapper>
      </Wrapper>
    );
  }
}

export default App;
