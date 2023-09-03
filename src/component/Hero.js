import Carousel from 'react-bootstrap/Carousel';
import hero1 from './../asset/hero1.jpeg'

function Hero() {
  return (
    <div id="Home">
      <img
           className="d-block w-100 h-100"
           src={hero1}/>
           </div>
    
  );
}

export default Hero;