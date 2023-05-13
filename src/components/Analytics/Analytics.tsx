import React from "react";
import { Col, Row } from "react-bootstrap";
import Card from "../../common/Card";
import SlotHistoryWrapper from "../SlotHistory/SlotHistoryWrapper";
import ActivityChart from "../ActivityLog/ActivityChart";
import DailyTimeChart from "../UserLog/UserLog";

const Analytics = ({ user }) => {
  return (
    <>
      <Row>
        <h3 className="p-0 mb-4 mt-2" style={{ fontWeight: 400 }}>
          Analytics
        </h3>
        <p className="thinline"></p>
      </Row>
      <Row>
        <Col lg={6}>
          <Card>
            <SlotHistoryWrapper user={user} />
          </Card>
        </Col>
        <Col lg={6}>
          <Card>
            <ActivityChart success={true} user={user} />
          </Card>
        </Col>
        <Col lg={6}>
          <Card>
            <DailyTimeChart success={true} user={user} />
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Analytics;
