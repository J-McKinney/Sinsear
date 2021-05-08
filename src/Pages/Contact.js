import React, { Component } from "react";
import Wrapper from "../Components/Wrapper/Wrapper";
import Container from "../Components/Container/Container";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

class Contact extends Component {
  render() {
    return (
      <>
        <Wrapper>
          <Navbar />
          <Container>
            <h1 style={{ textAlign: "center" }}>Contact Us</h1>
            <br />
            <div
              className="container"
              style={{
                textAlign: "center",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                className="row"
                style={{
                  textAlign: "center",
                }}
              >
                <div
                  className="col-md-6"
                  style={{
                    textAlign: "center",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <h3>Mission Statement:</h3>
                  <br />
                  <h4>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </h4>
                </div>
                <div
                  className="col-md-6"
                  style={{
                    textAlign: "center",
                  }}
                >
                  <h3>Contact Info:</h3>
                  <br />
                  <h4>Location: Marietta, GA</h4>
                  <br />
                  <h4>
                    Phone:
                    <a href="tel:+15555555555">
                      <h4>(555)555-5555</h4>
                    </a>
                  </h4>
                  <br />
                  <h4>
                    Email:
                    <a href="mailto:WouldntYouLikeToKnow@gmail.com">
                      <h4>WouldntYouLikeToKnow@gmail.com</h4>
                    </a>
                  </h4>
                </div>
              </div>
            </div>
          </Container>
          <Footer />
        </Wrapper>
      </>
    );
  }
}

export default Contact;
