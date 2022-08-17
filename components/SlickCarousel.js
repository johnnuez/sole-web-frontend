import Slider from 'react-slick'

const SlickCarousel = ({ children, arrows = true }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows,
  }
  return <Slider {...settings}>{children}</Slider>
}

export default SlickCarousel
