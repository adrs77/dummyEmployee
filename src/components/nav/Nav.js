import React from "react";
import { NavContainer } from "./NavStyled";
import { Container, Row, Col } from "react-bootstrap";
import postData from "../../api/postData";
import deleteData from "../../api/deleteData";
import { connect } from "react-redux";
import { saveEmployees, saveIds, newUser } from '../../actions/index'
import ModalWrapper from '../modal/Modal'

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
  const addUser = (data) => {
    postData("http://dummy.restapiexample.com/api/v1/create", data).then(
      () => newUser(!initFetch)
    );
  };

  return (
    <NavContainer>
      <Container fluid>
        <Container>
          <Row>
            <Col xs="12" sm="6" md="6">
              <h1 className="title">DummyEmployee</h1>
            </Col>
            <Col xs="12" sm="6" md="6">
              <div className="button-container">
                <ModalWrapper buttonClass="button-add" addUser={addUser}/>
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
