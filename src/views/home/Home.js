import React from "react";
import Nav from '../../components/nav/Nav'
import { HomeContainer } from "./HomeStyled";
import { Container, Row, Col } from "react-bootstrap";
import List from '../../components/list/List'

function Home() {
  return (
    <HomeContainer>
      <Nav/>
      <Container>
        <Row>
         <List/>
        </Row>
      </Container>
    </HomeContainer>
  );
}

export default Home;
