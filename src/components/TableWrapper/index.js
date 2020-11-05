import React from "react";
import "./style.css";

function TableWrapper(props) {
  return <div className="table-wrapper">{props.children}</div>;
}

export default TableWrapper;