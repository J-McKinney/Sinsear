import React from "react";
import styling from "./Navbar.module.css";

function Navbar(props) {
  return (
    <>
      <div className={styling.wrapper}>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h3>Hello</h3>
            </div>
            <div className="col-md-6">
              <h3>World</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
