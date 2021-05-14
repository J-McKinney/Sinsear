import React, { Component } from "react";
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
import drinks from "../../drinks.json";
import styling from "./Carousel.module.css";

// install Swiper modules
SwiperCore.use([EffectFade, Navigation, Pagination]);

class Carousel extends Component {
  state = {
    drinks,
  };

  componentDidMount() {
    // console.log("Mount: ");
  }
  componentDidUpdate() {
    // console.log("update: ");
  }

  render() {
    return (
      <>
        <div className={styling.carouselWrapper}>
          <Swiper
            className={styling.swiper}
            spaceBetween={30}
            effect={"fade"}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            grabCursor={true}
            height={200}
          >
            {this.state.drinks.map((drink, index) => (
              <SwiperSlide className={styling.swiperSlide}>
                <img
                  alt="Gin Drinks"
                  className={styling.img}
                  id={drink.id}
                  key={drink.index}
                  src={drink.image}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </>
    );
  }
}

export default Carousel;
