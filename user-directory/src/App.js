import React, { Component } from "react";
import EmployeeCard from "./components/EmployeeCard";
import Wrapper from "./components/Wrapper";
import CardWrapper from "./components/CardWrapper";
import Title from "./components/Title";
import AddForm from "./components/AddForm";
import SearchForm from "./components/SearchForm";
import employees from "./employees.json";

class App extends Component {
  state = {
    employees
  };

  // need to fix remove employee function
  removeEmployee = id => {
    const updatedEmployees = this.state.employees.filter(employee => employee.id !== id);
    this.setState({ updatedEmployees });
  };

  render() {
    return (
      <Wrapper>
        <Title>Your Employee Directory</Title>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <AddForm />
            </div>
            <div className="col-md-6">
              <SearchForm />
            </div>
          </div>
        </div>
        
        <CardWrapper>
          {this.state.employees.map(employee => (
            <EmployeeCard
              removeEmployee={this.removeEmployee}
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
          ))}
        </CardWrapper>
      </Wrapper>
    );
  }
}

export default App;
