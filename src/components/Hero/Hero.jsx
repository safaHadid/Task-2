import React from 'react';
import './Hero.css'; // Include the CSS for styling
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import banner01 from '../assets/banner-01.jpg';
import banner02 from '../assets/banner-02.jpg';
import banner03 from '../assets/banner-03.jpg';

const Hero = () => {
  return (
    <div className="hero-container">
      <div className="hero-text">
        <p className='hero-place'>Toranto, <span style={{color:"#f35525"}}>Canada</span></p>
      <h1 className="hero-title">HURRY <br /> GET THE <br /> BEST VILLA <br /> FOR YOU</h1>
      </div>
      
      <Carousel className="carousel">
        <Carousel.Item>
          <img className="d-block w-100" src={banner01} alt="First slide" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={banner02} alt="Second slide" />
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" src={banner03} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Hero;
