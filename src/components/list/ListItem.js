import React from "react";
import user from "../../images/user.jpg";
import {  Card } from "react-bootstrap";

function ListItem({ person }) {
  return (
    <div className="list-item">
    <Card className="card-container">
      <Card.Body>
        <div className="user-pic">
          <img
            alt="user-pic"
            src={person.profile_image ? person.profile_image : user}
          />
        </div>
        <Card.Title>
          <h4>{person.employee_name}</h4>
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          <p>Age: {person.employee_age}</p>
        </Card.Subtitle>
        <Card.Text className="user-info">
          <span>ID: {person.id}</span>
          <span>Salary: {person.employee_salary}$</span>
        </Card.Text>
      </Card.Body>
    </Card>

    </div>
  );
}

export default ListItem;
