import React from "react";
import styling from "./Wrapper.module.css";

function Wrapper(props) {
  return (
    <>
      <div className={styling.wrapper}>{props.children}</div>
    </>
  );
}

export default Wrapper;
