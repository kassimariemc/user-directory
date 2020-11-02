import React, { Component } from "react";
import EmployeeCard from "./components/EmployeeCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";

class App extends Component {
  state = {
    employees: []
  };

  removeEmployee = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const updatedEmployees = this.state.employees.filter(employee => employee.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ updatedEmployees });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Your Employee Directory</Title>
        {this.state.employees.map(employee => (
          <EmployeeCard
            removeFriend={this.removeEmployee}
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
      </Wrapper>
    );
  }
}

export default App;
