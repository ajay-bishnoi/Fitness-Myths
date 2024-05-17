import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import fitnessBook from "../assets/img/png/fitness-book.webp";

function Hero() {
  return (
    <div className="hero-py-80 flex-lg-grow-1  align-items-center d-lg-flex">
      <Container>
        <Row data-aos="zoom-in" className="align-items-center">
          <Col lg={7}>
            <h1 className="mb-0 max-640 clr-whiteF2 text-center text-lg-start fw-bold fs-45 lh-59 ff-Eurostile">
              Get the EBook that reveals the
              <span className="clr-yello"> 7 fitness myths</span> that are
              holding you back from experiencing top-level fitness
            </h1>
          </Col>
          <Col lg={5} className=" d-flex justify-content-center mt-lg-0 mt-5">
            <img
              src={fitnessBook}
              className="hero-img-size"
              alt="fitness-book"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Hero;
