import React, { Component } from "react";
import Wrapper from "../Components/Wrapper/Wrapper";
import Container from "../Components/Container/Container";
import Carousel from "../Components/Carousel/Carousel";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

class Home extends Component {
  render() {
    return (
      <>
        <Wrapper>
          <Navbar />
          <Container>
            <h1 style={{ textAlign: "center" }}>Home</h1>
            <Carousel />
          </Container>
          <Footer />
        </Wrapper>
      </>
    );
  }
}

export default Home;
