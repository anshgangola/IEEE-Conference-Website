import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Carousel from "react-bootstrap/Carousel";
import styles from "./HomeCaraousel.module.css";
import First from '../../../assets/lnmiit.jpeg'
import Third from "../../../assets/jalMahal.jpeg";
import Second from '../../../assets/amber.jpeg'

export default function HomeCarousel() {
  return (
    <div className={styles.caraousel}>
      <Carousel>
        <Carousel.Item interval={1300}>
          <img
            className="d-block w-100"
            src={First}
            alt="Image One"
          />
          <Carousel.Caption>
            <h2>IEEE International Conference</h2>
            <h3>10-15 Jan 2024</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1300}>
          <img
            className="d-block w-100"
            src={Second}
            alt="Image Two"
          />
          <Carousel.Caption>
            <h2>IEEE International Conference</h2>
            <h3>10-15 Jan 2024</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={1300}>
          <img className="d-block w-100" src={Third} alt="Image Two" />
          <Carousel.Caption>
            <h2>IEEE International Conference</h2>
            <h3>10-15 Jan 2024</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
