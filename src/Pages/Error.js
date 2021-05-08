import React, { Component } from "react";
import Wrapper from "../Components/Wrapper/Wrapper";
import Container from "../Components/Container/Container";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

class Error extends Component {
  render() {
    return (
      <>
        <Wrapper>
          <Navbar />
          <Container>
            <h1 style={{ textAlign: "center" }}>Error</h1>
            <h3
              style={{
                textAlign: "center",
                padding: "20px 60px 20px 60px",
                display: "flex",
                flexDirection: "row",
              }}
            >
              Sorry, an error has occured while trying to find your page. Please
              refresh or click on our Navigation Bar to find where you are
              trying to go.
            </h3>
          </Container>
          <Footer />
        </Wrapper>
      </>
    );
  }
}

export default Error;
