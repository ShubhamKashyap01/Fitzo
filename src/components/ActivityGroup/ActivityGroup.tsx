import React, { useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Button from "@atlaskit/button/standard-button";
import LocationInput from "../../common/LocationInput";
import ActivityList from "../ActivityList/ActivityList";
import ModalContainer from "../../common/Modal";
import ActivityForm from "../ActivityForm/ActivityForm";

const ActivityGroup = () => {
  const [location, setLocation] = useState("hyderabad");
  const [open, setOpen] = useState(false);
  const [create, setCreate] = useState(false);
  const onLocationChange = (location) => {
    const val = location.value;
    setLocation(val);
  };
  return (
    <Container fluid="none">
      <p className="h4 my-1">Activities</p>
      <Row className="my-3">
        <Col>
          <Row>
            <p>Location</p>
          </Row>
          <Row>
            <LocationInput onChange={onLocationChange} />
          </Row>
        </Col>
        <Col>
          <Row className="mb-3">
            <Button
              onClick={() => {
                setOpen(true);
                setCreate(true);
              }}
            >
              {" "}
              Create Activity
            </Button>
          </Row>
          <Row className="mb-3">
            <Button
              onClick={() => {
                setOpen(true);
                setCreate(false);
              }}
            >
              {" "}
              Update Activity
            </Button>
          </Row>
          <ModalContainer open={open} setOpen={setOpen} title="Create Activity">
            <ActivityForm create={create} />
          </ModalContainer>
        </Col>
      </Row>
      <Row>
        <ActivityList city={location} style={{ marginLeft: "0" }} />
      </Row>
    </Container>
  );
};

export default ActivityGroup;
