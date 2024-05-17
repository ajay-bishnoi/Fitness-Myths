import React from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import person from "../assets/img/png/Man.webp";
import football from "../assets/img/png/football.webp";
import { Insta } from "../assets/Svgicon";
import EllipsThree from "../assets/img/png/ellips-3.png";
import EllipsFour from "../assets/img/png/ellips-4.png";

const About = () => {
  return (
    <div className="py-115-200 position-relative z-3">
      {/* ellips */}
      <img src={EllipsThree} alt="ellips-image" className="ellipsThree" />
      <img
        src={EllipsFour}
        alt="ellips-image"
        className="ellipsFour d-none d-lg-block"
      />
      <Container className="max-1200">
        <Row className=" align-items-end">
          <Col
            lg={6}
            className=" d-flex justify-content-center justify-content-lg-start mb-lg-0 mb-5"
          >
            <div data-aos="flip-up" className="menImg-size position-relative">
              <img src={person} className="w-100 h-100" alt="Men-img" />
              <img
                src={football}
                alt="football"
                className="football-img position-absolute"
              />
            </div>
          </Col>
          <Col
            lg={6}
            className="d-flex justify-content-lg-end mt-lg-0 mt-sm-5 mt-sm-4"
          >
            <div data-aos="flip-down" className="max-520">
              <h3 className="mb-14 fw-bold fs-30 lh-36 clr-whiteF2 ff-Eurostile text-center text-lg-start">
                About the <span className="clr-yello">Author</span>
              </h3>
              <div className="d-flex flex-column gap-10 mb-30 ">
                <p className="mb-0 fw-normal ff-Manrope fs-18 lh-28 text-center text-lg-start clr-whiteF2">
                  Francesco is a Pro fitness coach currently working as head of
                  Sport Science for Toronto FC Academy. He is a registered
                  nutritionist, certified strength and conditioning specialist,
                  holds a Master’s in exercise science and is a national level
                  soccer coach.
                </p>
                <p className="mb-0 fw-normal ff-Manrope fs-18 lh-28 text-center text-lg-start clr-whiteF2">
                  He has been a personal performance coach to a 1000+ elite
                  level footballers ranging from youth internationals all the
                  way to top level pro’s
                </p>
                <p className="mb-0 fw-normal ff-Manrope fs-18 lh-28 text-center text-lg-start clr-whiteF2">
                  Francesco believes every footballer should have access to a
                  rock-solid S&C program alongside a quality nutrition plan to
                  improve the chances of crushing their genetic athletic
                  potential and becoming the best version of themselves.
                </p>
              </div>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                className="insta-icon d-flex justify-content-center justify-content-lg-start align-items-center gap-17 mb-0 fw-bold fs-24 ff-Eurostile lh-32 clr-whiteF2"
              >
                <Insta />
                Hypervive
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
