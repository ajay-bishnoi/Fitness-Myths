import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import mythBook from "../assets/img/png/fb-2.webp";

const RigthKnowledge = () => {
  return (
    <div className="yello-bg-img py-50">
      <Container className="my-lg-2">
        <Row className=" align-items-center justify-content-between">
          <Col lg={8}>
            <h3
              data-aos="flip-left"
              className="mb-0 fw-bold fs-30 lh-49 clr-blk-01 ff-Eurostile max-704 text-center text-lg-start"
            >
              With the right knowledge maintaining and improving your fitness
              becomes effortless and enjoyable. Stop wasting time you don’t
              have!
            </h3>
          </Col>
          <Col
            lg={4}
            className=" d-flex justify-content-center justify-content-lg-start mt-lg-0 mt-5"
          >
            <img
              data-aos="flip-right"
              src={mythBook}
              className="w-100 h-100 mythBook-size"
              alt="mythBook"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default RigthKnowledge;
