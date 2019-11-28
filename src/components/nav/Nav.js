import React from "react";
import { NavContainer } from "./NavStyled";
import { Container, Row, Col } from "react-bootstrap";
import postData from "../../api/postData";
import deleteData from "../../api/deleteData";
import { connect } from "react-redux";
import { saveEmployees, saveIds, newUser } from '../../actions/index'

const mapStateToProps = state => {
  return { savedIds: state.savedIds, initFetch: state.initFetch };
};
const mapDispatchToProps = dispatch => {
  return {
    saveIds: (data) => dispatch(saveIds(data)),
    saveEmployees: (data) => dispatch(saveEmployees(data)),
    newUser: (data) => dispatch(newUser(data)),
  };
};

function Nav({savedIds, saveIds, saveEmployees, initFetch, newUser}) {
  const removeUsers = () => {
    savedIds.length > 0 && savedIds.forEach(id => {
      deleteData(`http://dummy.restapiexample.com/api/v1/delete/${id}`);
    });
    saveEmployees("")
    saveIds("")
  };
  const addUser = () => {
    postData("http://dummy.restapiexample.com/api/v1/create").then(
      () => newUser(!initFetch)
    );
  };

  return (
    <NavContainer>
      <Container fluid>
        <Container>
          <Row>
            <Col xs="6">
              <h1 className="title">DummyEmployee</h1>
            </Col>
            <Col xs="6">
              <div className="button-container">
                <button className="button-add" onClick={() => addUser()}>
                  ADD EMPLOYEE
                </button>
                <button onClick={() => removeUsers()} className="button-remove">Remove all</button>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </NavContainer>
  );
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(Nav);
