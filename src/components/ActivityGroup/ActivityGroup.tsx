import React, { useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Userlist from "../Userlist/Userlist";
import NewUser from "../NewUser/NewUser";
import CheckIn from "../CheckIn/CheckIn";
import UserCard from "../UserCard/UserCard";
import LocationInput from "../../common/LocationInput";
import ActivityList from "../ActivityList/ActivityList";

const ActivityGroup = () => {
  const [location, setLocation] = useState("hyderabad");
  const onLocationChange = (location) => {
    const val = location.value;
    setLocation(val);
  };
  return (
    <Container fluid="none" >
      <p className="h4 my-1">Activities</p>
      <Row className="my-3">
        <Col>
        <p>Location</p>
        </Col>
        <Col>
          <LocationInput onChange={onLocationChange} />
        </Col>
      </Row>
      <Row>
      <ActivityList city={location} style={{ marginLeft: "0"}} />
      </Row>
    </Container>
  );
};

export default ActivityGroup;
