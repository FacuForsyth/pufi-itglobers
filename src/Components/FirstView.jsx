import React from "react";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ImgCarousel1 from "../Assets/img/ImgCarousel1.jpg"
import ImgCarousel2 from "../Assets/img/ImgCarousel2.png"
import ImgCarousel3 from "../Assets/img/ImgCarousel3.jpg"
import { FirstViewContainer } from "../Styles/FirstViewStyle";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

function FirstView() {
  return (
    <FirstViewContainer>
      <Carousel
        className="carousel"
        responsive={responsive}
        swipeable={false}
        draggable={false}
        slidesToSlide={1}
        showDots={true}
        removeArrowOnDeviceType={["superLargeDesktop", "desktop", "tablet", "mobile"]}
      >
        <div className="item">
          <div className="text">
            <h1>Estár cómodo, nunca fue tan fácil.</h1>
            <button>Shop</button>
          </div>
          <img src={ImgCarousel1} alt="" />
        </div>
        <div className="item">
          <div className="text">
            <h1>Estár cómodo, nunca fue tan fácil.</h1>
            <button>Shop</button>
          </div>
          <img src={ImgCarousel2} alt="" />
        </div>
        <div className="item">
          <div className="text">
            <h1>Estár cómodo, nunca fue tan fácil.</h1>
            <button>Shop</button>
          </div>
          <img src={ImgCarousel3} alt="" />
        </div>
      </Carousel>
    </FirstViewContainer>
  );
}

export default FirstView;