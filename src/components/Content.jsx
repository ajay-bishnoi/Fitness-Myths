import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Ipad from "../assets/img/png/ipad.webp";

const Content = () => {
  return (
    <div className="py-110-70 bg-blk-gray">
      <Container>
        <div className="Yellow-img">
          <Row className=" align-items-center align-items-xxl-stretch">
            <Col data-aos="fade-left" lg={6} className="h-100">
              <h2 className="mb-10 fw-bold fs-45 lh-59 ff-Eurostile text-lg-start text-center clr-blk-01">
                7 Fitness Myths to Avoid
              </h2>
              <p className=" fw-normal ff-Manrope fs-18 lh-28 text-lg-start text-center clr-blk-01 mb-32">
                Grab your free copy now!
              </p>
              <div className="free-border pointer d-flex mx-auto mx-lg-0">
                <button className=" fw-bold fs-16 lh-16 clr-whiteF2 ff-Eurostile freebtn position-relative">
                  Download For Free
                </button>
              </div>
            </Col>
            <Col
              lg={6}
              className="position-relative mt-lg-0 mt-5 d-flex justify-content-center justify-content-lg-end"
            >
              <div data-aos="fade-right" className="ipad-size">
                <img src={Ipad} alt="Ipad-img" className="w-100" />
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Content;
