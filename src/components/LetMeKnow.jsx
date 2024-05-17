import React, { useEffect } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import LaptopImage from "../assets/img/png/laptop.webp";
import Commonbtn from "../commonbtn/Commonbtn";
import EllipsTwo from "../assets/img/png/ellips-2.png";

const LetMeKnow = () => {
  return (
    <div className="pb-168 position-relative z-3">
      {/* ellips */}
      <img
        src={EllipsTwo}
        alt="ellipsTow"
        className="ellipsTwo d-none d-sm-block"
      />
      <Container>
        <Row className="align-items-center justify-content-between">
          <Col
            lg={6}
            className=" d-flex justify-content-center justify-content-lg-start"
          >
            <div data-aos="fade-right" className=" position-relative z-3">
              <img
                className="Laptop-size w-100"
                src={LaptopImage}
                alt="Laptop-image"
              />
              {/* ellips */}
              <div className="circle-ellips"></div>
            </div>
          </Col>
          <Col
            lg={6}
            className=" d-flex justify-content-lg-end justify-content-center mt-lg-0 mt-5"
          >
            <div data-aos="fade-left" className="max-532 w-100">
              <h3 className=" fw-bold text-center text-lg-start fs-30 lh-36 ff-Eurostile clr-white mb-29">
                Let me know where
                <span className="clr-yello"> you want me to send it </span>
              </h3>
              <Form className="d-flex flex-column gap-13 mb-47">
                <input
                  type="text"
                  className=" fw-normal fs-16 lh-20 ff-Manrope clr-white w-100"
                  placeholder="Name"
                />
                <input
                  type="email"
                  className=" fw-normal fs-16 lh-20 ff-Manrope clr-white w-100"
                  placeholder="Email"
                />
              </Form>
              <span className=" d-flex justify-content-center justify-content-lg-start">
                <Commonbtn name="Send It Here!" />
              </span>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LetMeKnow;
