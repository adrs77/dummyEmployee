import React, { useEffect, useState } from "react";
import { ListContainer } from "./ListStyled";
import getData from "../../api/getData";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import ListItem from "./ListItem";

function List() {
  const [employeeList, setEmployeeList] = useState(null);
  const [isFetched, setIsFetched] = useState(false);

  useEffect(() => {
    getData("http://dummy.restapiexample.com/api/v1/employees").then(
      response => {
        let data = response.filter(employee => {
          return employee.employee_salary === "135813";
        });
        setEmployeeList(data);
        setIsFetched(true);
      }
    );
  }, []);

  return (
    <ListContainer>
      {isFetched ? (
        <Container>
          <Row>
            {employeeList &&
              employeeList.map((person, i) => {
                return (
                  <Col key={i} xs="12" sm="6" md="6" lg="4">
                    <ListItem person={person} />
                  </Col>
                );
              })}
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

export default List;
