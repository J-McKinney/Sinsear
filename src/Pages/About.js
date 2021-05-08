import React, { Component } from "react";
import Wrapper from "../Components/Wrapper/Wrapper";
import Container from "../Components/Container/Container";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

class About extends Component {
  render() {
    return (
      <>
        <Wrapper>
          <Navbar />
          <Container>
            <h1 style={{ textAlign: "center" }}>About Us</h1>
            <br />
            <h3
              style={{ textAlign: "center", padding: "20px 100px 20px 100px" }}
            >
              Sinséar Gin is made from all fresh ingredients. We pride ourselves
              on only making the finest gin with the finest ingredients. Located
              in Marietta, GA. We started our production in 2020, the same year
              as the global pandemic with COVID-19. We started with just an
              Instagram account and a couple of personal 'How-To' videos. After
              realizing how popular the videos got, we decided to move in the
              direction of making our own gin at home. With our own fresh
              ingredients from our garden and the help of some local sources. We
              came up with a couple of different recipes. Each one different and
              more elegant than the last, until we found the perfect concoction.
              This is when Sinséar Gin was born.{" "}
            </h3>
            <br />
          </Container>
          <Footer />
        </Wrapper>
      </>
    );
  }
}

export default About;
