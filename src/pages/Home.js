import { Header } from "../components/Header/Header";

import { Link } from "react-router-dom";

import { Carousel } from "react-bootstrap"; //Bra att du har använt en externt hämtad komponent!

export const Home = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            // src="holder.js/800x400?text=First slide&bg=373940"
            src="../../images/slide1.jpg"
            alt="First slide"
          />
          <Carousel.Caption>
            <Link to="/movies">
              <h1 className="link-movies">MOVIES</h1>
            </Link>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../../images/slide2.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="../../images/slide3.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};
