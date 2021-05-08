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
            <h1>Error</h1>
          </Container>
          <Footer />
        </Wrapper>
      </>
    );
  }
}

export default Error;
