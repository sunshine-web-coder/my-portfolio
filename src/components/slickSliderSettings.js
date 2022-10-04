import { NextArrow } from "../components/sliderArrow/SliderArrow";
import { PrevArrow } from "../components/sliderArrow/SliderArrow";

export const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 0,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
  

  responsive: [
    {
      breakpoint: 950,
      settings: {
        arrows: false,
      },
    },
  ],
};

export const settingsTwo = {
  dots: false,
  infinite: true,
  autoplay: true,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  arrows: false,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
  

  responsive: [
    {
      breakpoint: 815,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      },
    },
  ],
};
