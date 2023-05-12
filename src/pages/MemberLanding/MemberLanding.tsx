import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../../components/Header/Header";
import Schedule from "../../components/Schedule/Schedule";
import DatePicker from "react-date-picker";
import TZ_OFFSET from "../../constants/time";
import ActivityList from "../../components/ActivityList/ActivityList";
import LocationInput from "../../common/LocationInput";
import ActivityLog from "../../components/ActivityLog/ActivityLog";

const MemberLanding = () => {
  const { user } = useAuth();
  const [location, setLocation] = useState("hyderabad");
  const navigate = useNavigate();
  const [date, setDate] = useState(new Date());

  const onDateChange = (date: Date) => {
    setDate(() => new Date(date.getTime() + TZ_OFFSET));
  };

  const onLocationChange = (location) => {
    const val = location.value;
    setLocation(val);
  };

  useEffect(() => {
    !localStorage.getItem("user") && navigate("/auth");
    if (user) {
      if (user.role === "admin") {
        navigate("/admin");
      }
    }
  }, [user]);

  return (
    <Container fluid="none">
      <Header />
      <Sidebar />
      {user && (
        <div className="float-end p-4 right-layout">
          <Col className="mb-5">
            <h3 className="fw-bold">Dashboard</h3>
          </Col>
          <Row>
            <Col
              id="user-feed"
              className="mb-5"
              lg={{ span: 9, order: "first" }}
              xs={{ order: "last" }}
            >
              <Row className="justify-content-between">
                <Col>
                  <LocationInput onChange={onLocationChange} />
                </Col>
                <Col>
                  <DatePicker onChange={onDateChange} value={date} />
                </Col>
              </Row>
              <Row>
                <ActivityList city={location} style={{ marginLeft: "0" }} />
              </Row>
              <Row>
                <Schedule user={user} date={date} />
              </Row>
            </Col>
            <Col
              id="user-log"
              className="mb-5"
              lg={{ span: 3, order: "last" }}
              xs={{ order: "first" }}
            >
              <ActivityLog />
            </Col>
          </Row>
        </div>
      )}
    </Container>
  );
};

export default MemberLanding;
