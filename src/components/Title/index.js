import React from "react";
import "./style.css";

function Title(props) {
  return <h1 className="title text-white">{props.children}</h1>;
}

export default Title;