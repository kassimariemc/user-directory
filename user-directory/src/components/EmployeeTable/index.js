import React from "react";

function EmployeeTable(props) {
  return (
    <tbody>
      <tr className="table-secondary text-primary">
        <th scope="row">{props.name}</th>
        <td>{props.department}</td>
        <td>{props.title}</td>
        <td>{props.manager}</td>
        <td>${props.salary}</td>
        <td><a href={"mailto:" + props.email}>{props.email}</a></td>
        <td>{props.phone}</td>
      </tr>
    </tbody>
  );
}

export default EmployeeTable;

  // {/* <div className="card-body">
  //       <ul className="list-group list-group-flush text-primary">
  //         <li className="list-group-item">
  //           <strong>Department:</strong> {props.department}
  //         </li>
  //         <li className="list-group-item">
  //           <strong>Title:</strong> {props.title}
  //         </li>
  //         <li className="list-group-item">
  //           <strong>Manager:</strong> {props.manager}
  //         </li>
  //         <li className="list-group-item">
  //           <strong>Salary:</strong> ${props.salary}
  //         </li>
  //         <li className="list-group-item">
  //           <strong>Email:</strong> <a href={"mailto:" + props.email}>{props.email}</a>
  //         </li>
  //         <li className="list-group-item">
  //           <strong>Phone:</strong> {props.phone}
  //         </li>
  //       </ul>
  //     </div> */}
  //     {/* <div className="card-body">
  //       <button type="button" className="card-link btn btn-warning">Edit Employee</button>
  //       <button type="button" className="card-link btn btn-primary" onClick={() => props.removeEmployee(props.id)}>Remove Employee</button>
  //     </div> */}