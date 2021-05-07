import React from "react";
import styling from "./Container.module.css";

function Container(props) {
  return (
    <>
      <div className={styling.container}>{props.children}</div>
    </>
  );
}

export default Container;
