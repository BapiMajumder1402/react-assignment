import React, { memo } from "react";
import { Carousel, Button } from "react-bootstrap";

const Banner: React.FC = () => {
  return (
    <Carousel controls={true} indicators={true} interval={3000}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://static.vecteezy.com/system/resources/previews/000/693/160/original/technology-banner-background-with-connecting-dotted-design-vector.jpg"
          alt="First slide"
        />
        <Carousel.Caption className="none">
          <h3 className="text-white">Welcome to Our Website!</h3>
          <p>Your one-stop solution for all your needs.</p>
          <Button variant="light" size="lg">Get Started</Button>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://static.vecteezy.com/system/resources/previews/000/381/988/original/vector-abstract-colorful-dotted-banner-background.jpg"
          alt="Second slide"
        />
        <Carousel.Caption className="none">
          <h3 className="text-white">Join Us Today!</h3>
          <p>Become a part of our growing community.</p>
          <Button variant="light" size="lg">Sign Up</Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default memo(Banner);
