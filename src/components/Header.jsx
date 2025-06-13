import React from "react";
import { Container, Navbar } from "react-bootstrap";
import logo from "../assets/logo.png"
const Header = () => {
  return (
    <div>
      <Navbar className="bg-primary ">
        <Container>
          <Navbar.Brand href="#home">
            <img
              style={{ position: "sticky", top: "0" }}
              alt=""
              src={logo}
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            <span className="font-bolder fs-4 "> EmployeeAttendanceManagement</span>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
