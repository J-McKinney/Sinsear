import React from "react";
import styling from "./Navbar.module.css";

function Navbar(props) {
  return (
    <>
      <div className={styling.wrapper}>
        <div className={styling.container}>
          <div className={styling.row}>
            <div id={styling.col} className="col-md-6"></div>
            <div id={styling.col} className="col-md-6"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
