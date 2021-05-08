import React, { Component } from "react";
import Wrapper from "../Components/Wrapper/Wrapper";
import Container from "../Components/Container/Container";
import Navbar from "../Components/Navbar/Navbar";

class About extends Component {
  render() {
    return (
      <>
        <Wrapper>
          <Navbar />
          <Container>
            <h1>About</h1>
          </Container>
        </Wrapper>
      </>
    );
  }
}

export default About;
