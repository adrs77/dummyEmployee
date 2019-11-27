import React from "react";
import { NavContainer } from "./NavStyled";
import { Container, Row, Col } from "react-bootstrap";
import postData from "../../api/postData";

function Nav() {
  return (
    <NavContainer>
      <Container fluid>
          <Container>

        <Row>
          <Col xs="6">
            <h1 className="title">DummyEmployee</h1>
          </Col>
          <Col xs="6">
            <div className="add-button">
              <button
                onClick={() =>
                    postData("http://dummy.restapiexample.com/api/v1/create")
                }
                >
                ADD EMPLOYEE
              </button>
            </div>
          </Col>
        </Row>
                </Container>
      </Container>
    </NavContainer>
  );
}

export default Nav;
