import React from "react";
import { Container } from "react-bootstrap";
import { InstaIcon, TickTokIcon } from "../assets/Svgicon";

const Footer = () => {
  return (
    <div className="bg-l-gray" data-aos="zoom-out">
      <Container>
        <div className="text-center">
          <h4 className="mb-19 fw-bold fs-26 lh-32 ff-Eurostile clr-whiteF2">
            Hypervive
          </h4>
          <h5 className=" fw-normal fs-14 mb-0 lh-24 ff-Manrope clr-white opacity_07">
            Connect with us on social media
          </h5>
          <div className=" d-flex align-items-center justify-content-center gap-11 mt-3 mb-4">
            <a href="https://www.tiktok.com/" target="_blank">
              <TickTokIcon />
            </a>
            <a href="https://www.instagram.com/" target="_blank">
              <InstaIcon />
            </a>
          </div>
        </div>
      </Container>
      <div className="line">
        <h5 className=" fw-normal text-center fs-14 mb-0 lh-24 ff-Manrope clr-white opacity_07">
          Copyright © 2022 HyperVive | All Rights Reserved.
        </h5>
      </div>
    </div>
  );
};

export default Footer;
