import React from "react";
import { Link } from "react-router-dom";
import styling from "./Footer.module.css";

function Footer(props) {
  return (
    <>
      <div className={styling.wrapper}>
        {/*Top NavBar*/}
        <div id={styling.container} className="container">
          <div className="row">
            <div className="col-md-6">
              <h4 style={{ color: "white" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </h4>
            </div>
            <div className="col-md-6">
              <h4 style={{ color: "white" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </h4>
            </div>
          </div>
        </div>
        {/*Bottom NavBar*/}
        <div id={styling.container} className="container">
          <div className="row" style={{ paddingTop: "40px" }}>
            <div id={styling.colOne} className="col-md-2">
              <Link to="/" className={styling.link}>
                <h3>Sinséar Gin</h3>
              </Link>
            </div>
            <div id={styling.colTwo} className="col-md-10" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
