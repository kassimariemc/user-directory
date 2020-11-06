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