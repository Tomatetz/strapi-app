import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { CarouselItem } from './CarouselItem';

export const Carousel = ({ teamMembers }) => {
  return (
    <div className="slider-container">
      <Slider {...settings} className="our_team_slide_area">
        {teamMembers
          .sort((a, b) => a.id - b.id)
          .map(({ id, attributes }) => (
            <CarouselItem key={id} attributes={attributes} />
          ))}
      </Slider>
    </div>
  );
};
var settings = {
  className: '',
  dots: false,
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 4,
  adaptiveHeight: false,
  autoplay: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
