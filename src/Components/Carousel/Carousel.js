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

  componentDidMount() {}
  componentDidUpdate() {}

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
          >
            {this.state.drinks.map((drink) => (
              <SwiperSlide>
                <img
                  alt=""
                  className={styling.img}
                  id={drink.id}
                  key={drink.id}
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
