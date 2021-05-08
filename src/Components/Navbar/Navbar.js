import React from "react";
import { Link } from "react-router-dom";
import styling from "./Navbar.module.css";

function Navbar(props) {
  return (
    <>
      <div className={styling.firstWrapper}>
        <div className={styling.wrapper}>
          <div id={styling.container} className="container">
            <div className="row">
              <div id={styling.colOne} className="col-md-2">
                <Link to="/" className={styling.link}>
                  <h3>Sinséar Gin</h3>
                </Link>
              </div>
              <div id={styling.colTwo} className="col-md-4" />
              <div id={styling.colThree} className="col-md-2">
                <Link to="/" className={styling.link}>
                  <h3>About Us</h3>
                </Link>
              </div>
              <div id={styling.colFour} className="col-md-2">
                <Link to="/Home" className={styling.link}>
                  <h3>Home</h3>
                </Link>
              </div>
              <div id={styling.colFive} className="col-md-2">
                <Link to="/Contact" className={styling.link}>
                  <h3>Contact Us</h3>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
