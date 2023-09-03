import Carousel from 'react-bootstrap/Carousel';
import slide1 from './../asset/slide1.jpeg'
import slide2 from './../asset/slide2.jpeg'

function Slide() {
  return (
    <Carousel className="mt-3">
      <Carousel.Item interval={5000}>
        <img src={slide1} text="First slide" className="d-block w-100 h-100" />
      </Carousel.Item>
      <Carousel.Item interval={5000}>
        <img src={slide2} text="Second slide" className="d-block w-100 h-100"/>
      </Carousel.Item>
      
    </Carousel>
  );
}

export default Slide;