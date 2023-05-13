import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import Userlist from "../Userlist/Userlist";
import NewUser from "../NewUser/NewUser";
import CheckIn from "../CheckIn/CheckIn";
import UserCard from "../UserCard/UserCard";
import ActivityChart from "../ActivityLog/ActivityChart";
import DailyTimeChart from "../UserLog/UserLog";

const UserGroup = () => {
  const [selectedUser, setSelectedUser] = React.useState(null);

  return (
    <Container fluid="none mb-5" >
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
      {
        selectedUser && (
          <Row>
        <Col>
          <Card>
            <ActivityChart success={selectedUser} user={selectedUser} />
          </Card>
        </Col>
        <Col>
          <Card>
            <DailyTimeChart success={selectedUser} user={selectedUser} />
          </Card>
        </Col>
      </Row>
        )
      }
    </Container>
  );
};

export default UserGroup;
