import React from "react";
import "./style.css";

function Wrapper(props) {
  return <div className="wrapper jumbotron">{props.children}</div>;
}

export default Wrapper;