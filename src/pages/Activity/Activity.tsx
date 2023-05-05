import "./Activity.scss";
import { Container, Row, Col, Card } from "react-bootstrap";
import React from "react";
import Header from "../../components/Header/Header";
import { useParams } from "react-router-dom";

const Activity = () => {
  const { location = "hyderabad" } = useParams();
  return (
    <Container fluid="xxxl">
      <Header city={location} />
    </Container>
  );
};

export default Activity;
