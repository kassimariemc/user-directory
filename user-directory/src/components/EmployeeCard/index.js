import React from "react";

function EmployeeCard(props) {
  return (
    <div className="card text-white bg-secondary mb-3">
      <div className="card-header">
        <h1>{props.name}</h1>
      </div>
      <div className="card-body">
        <ul className="list-group list-group-flush text-primary">
          <li className="list-group-item">
            <strong>Department:</strong> {props.department}
          </li>
          <li className="list-group-item">
            <strong>Title:</strong> {props.title}
          </li>
          <li className="list-group-item">
            <strong>Manager:</strong> {props.manager}
          </li>
          <li className="list-group-item">
            <strong>Salary:</strong> ${props.salary}
          </li>
          <li className="list-group-item">
            <strong>Email:</strong> <a href={"mailto:" + props.email}>{props.email}</a>
          </li>
          <li className="list-group-item">
            <strong>Phone:</strong> {props.phone}
          </li>
        </ul>
      </div>
      <div className="card-body">
        <button type="button" className="card-link btn btn-warning">Edit Employee</button>
        <button type="button" className="card-link btn btn-primary" onClick={() => props.removeEmployee(props.id)}>Remove Employee</button>
      </div>
    </div>
  );
}

export default EmployeeCard;