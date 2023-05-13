import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Userlist from "../Userlist/Userlist";
import NewUser from "../NewUser/NewUser";
import CheckIn from "../CheckIn/CheckIn";
import UserCard from "../UserCard/UserCard";
import ActivityChart from "../ActivityLog/ActivityChart";
import DailyTimeChart from "../UserLog/UserLog";
import Analytics from "../Analytics/Analytics";

const UserGroup = () => {
  const [selectedUser, setSelectedUser] = React.useState(null);

  return (
    <Container fluid="none mb-5">
      <p className="h4 my-1">UserGroup</p>
      <Row className="my-3">
        <Col>
          <Userlist setSelectedUser={setSelectedUser} />
        </Col>
        <Col>
          <NewUser />
        </Col>
      </Row>
      <Row style={{ maxWidth: "600px" }}>
        <Col>{selectedUser && <UserCard user={selectedUser} />}</Col>
      </Row>
      {selectedUser && (
        <Row>
          <Analytics user={selectedUser} />
        </Row>
      )}
    </Container>
  );
};

export default UserGroup;
