import React from "react";
import { Container, Nav } from "react-bootstrap";
import Commonbtn from "../commonbtn/Commonbtn";

const NavBar = () => {
  return (
    <div>
      <Nav className="navBar-py-13">
        <Container>
          <div className=" d-flex justify-content-end ">
            <Commonbtn name="GET IN TOUCH" />
          </div>
        </Container>
      </Nav>
    </div>
  );
};

export default NavBar;
