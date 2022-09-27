import React, { Component } from "react";
import Carousel from 'react-bootstrap/Carousel';
import fst from "../assets/01.jpg"
import snd from "../assets/02.jpg"
import thd from "../assets/03.jpg"
import fourth from "../assets/04.jpg"
import fivth from "../assets/05.jpg"


export default class CarouselBox extends Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img 
            className="d-block w-100"
            src={fst}
            alt="city-pic"
          />
          <Carousel.Caption>
            <h3>City picture</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dautem impedit consectetur!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img 
            className="d-block w-100"
            src={snd}
            alt="city-pic"
          />
          <Carousel.Caption>
            <h3>City picture</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dautem impedit consectetur!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img 
            className="d-block w-100"
            src={thd}
            alt="city-pic"
          />
          <Carousel.Caption>
            <h3>City picture</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dautem impedit consectetur!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img 
            className="d-block w-100"
            src={fourth}
            alt="city-pic"
          />
          <Carousel.Caption>
            <h3>City picture</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dautem impedit consectetur!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img 
            className="d-block w-100"
            src={fivth}
            alt="city-pic"
          />
          <Carousel.Caption>
            <h3>City picture</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dautem impedit consectetur!</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    )
  }
}