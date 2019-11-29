import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { Container, Row, Col, Spinner } from "react-bootstrap";

import {saveEmployees, saveIds} from '../../actions/index'
import getData from "../../api/getData";
import ListItem from "./ListItem";
import { ListContainer } from "./ListStyled";


const mapStateToProps = state => {
  return { savedEmployees: state.savedEmployees, initFetch: state.initFetch };
};

const mapDispatchToProps = dispatch => {
  return {
    saveEmployees: data => dispatch(saveEmployees(data)),
    saveIds: data => dispatch(saveIds(data)),
  };
};

function List({saveEmployees, savedEmployees, saveIds, initFetch}) {
  const [isFetched, setIsFetched] = useState(false);
  
  const fetchEmployees = () => {
    getData("http://dummy.restapiexample.com/api/v1/employees").then(
      response => {
        let data = response.filter(employee => {
          return employee.employee_salary === "135813";
        });
        let ids = data.map(employee => {
          return employee.id
        });
        saveEmployees(data)
        saveIds(ids)
        setIsFetched(true);
      }
    );
  }  

  useEffect(() => {
    setIsFetched(false)
    fetchEmployees()
  }, [initFetch]);

  return (
    <ListContainer>
      {isFetched ? (
        <Container>
          <Row>
            {savedEmployees.length >= 1 ?
              savedEmployees.map((person, i) => {
                return (
                  <Col key={i} xs="12" sm="6" md="6" lg="4">
                    <ListItem person={person} />
                  </Col>
                );
              })
            :
            <div className="empty-list-info">
              <p>There are no employees with $135813 salary!</p></div>}
          </Row>
        </Container>
      ) : (
        <div className="spinner-box">
          <Spinner animation="border" />
        </div>
      )}
    </ListContainer>
  );
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
