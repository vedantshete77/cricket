import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} interval={3000}>
      <Carousel.Item>
        <div className="carousel-image-wrapper">
          <img
            className="d-block w-100"
            src="https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=2067&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="First slide"
          />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carousel-image-wrapper">
          <img
            className="d-block w-100"
            src="../assets/2.jpg"
            alt="Second slide"
          />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carousel-image-wrapper">
          <img
            className="d-block w-100"
            src="../assets/3.jpg█"
            alt="Third slide"
          />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carousel-image-wrapper">
          <img
            className="d-block w-100"
            src="../assets/4.jpg"
            alt="Fourth slide"
          />
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="carousel-image-wrapper">
          <img
            className="d-block w-100"
            src="../assets/5.jpg"
            alt="Fifth slide"
          />
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;
