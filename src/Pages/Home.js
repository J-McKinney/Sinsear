import React, { Component } from "react";
import Wrapper from "../Components/Wrapper/Wrapper";
import Container from "../Components/Container/Container";
import Carousel from "../Components/Carousel/Carousel";

class Home extends Component {
  render() {
    return (
      <>
        <Wrapper>
          <Container>
            <h1>Home</h1>
            <Carousel />
          </Container>
        </Wrapper>
      </>
    );
  }
}

export default Home;
