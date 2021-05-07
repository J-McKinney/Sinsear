import React, { Component } from "react";
import drinks from "../../drinks.json";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/components/effect-fade/effect-fade.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
// import Swiper core and required modules
import SwiperCore, { EffectFade, Navigation, Pagination } from "swiper/core";
// My Styling
import styling from "./Carousel.module.css";

class Carousel extends Component {
  state = {
    drinks,
  };

  componentDidMount() {
    console.log("Drinks:");
    console.log(this.state.drinks);
  }

  render() {
    return (
      <>
        <div className={styling.carouselWrapper}></div>
      </>
    );
  }
}

export default Carousel;
