import React from "react";
import { Container, Row } from "react-bootstrap";

import Nav from '../../components/nav/Nav'
import List from '../../components/list/List'
import { HomeContainer } from "./HomeStyled";

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
