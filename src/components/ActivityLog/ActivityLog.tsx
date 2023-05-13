import React, { useState, useEffect, useMemo } from "react";
import { Card, Col, Container, Image, Row } from "react-bootstrap";
import Icon from "../../common/Icon";
import { Link } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../hooks/useAuth";
import TZ_OFFSET from "../../constants/time";
import AlertDismiss from "../../common/Alert";
import ModalContainer from "../../common/Modal";
import ActivityLogForm from "./ActivityLogForm";
import ActivityChart from "./ActivityChart";
import DailyTimeChart from "../UserLog/UserLog";

const workoutList = [
  {
    name: "Treadmill",
    id: "treadmill",
  },
  {
    name: "Cycling",
    id: "cycling",
  },
  {
    name: "Gym",
    id: "weight_training",
  },
];

const ActivityLog = () => {
  const { user } = useAuth();
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("treadmill");
  const [date, setDate] = useState(
    new Date(new Date(new Date().toDateString()).getTime() + TZ_OFFSET)
  );
  const [time, setTime] = useState("0");
  const [log, setLogs] = useState([]);

  const onClickHandler = async () => {
    try {
      console.log([`${selected}_hours`], date, user?._id, parseInt(time));
      if (user) {
        const res = await axios.post("/activityLog", {
          date: date,
          user_id: user?._id,
          [`${selected}_hours`]: parseInt(time),
        });
        setSuccess("Succesfully Added");
      }
    } catch (err) {
      setError(err?.response?.data);
    }
  };

  const clickHandler = (val) => {
    setOpen(true);
    setSelected(val);
  };

  const onUpdate = (date, time) => {
    console.log(date, time, selected);
    setDate(date);
    setTime(time);
  }; 

  return (
    <Container fluid="none" className="activity-log">
      <h4 className="mb-5">Activity Log</h4>
      <Row>
        {workoutList.map((workout, index) => {
          return (
            <div
              key={index}
              className="m-2 px-0"
              style={{
                boxShadow:
                  "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
                  width: "16rem"
              }}
            >
              <Card
                key={index}
                style={{ width: "16rem" }}
                onClick={() => clickHandler(workout.id)}
              >
                <Card.Body className="d-flex">
                  <Icon
                    icon={`/assets/icons/pngs/${workout.id}.png`}
                    size={50}
                  />
                  <Col className="px-3">
                    <Card.Title className="m-auto vertical-allign">
                      {workout.name}
                    </Card.Title>
                    <Card.Text className="m-auto vertical-allign">
                      30 mins
                    </Card.Text>
                  </Col>
                  <div className="a">
                    <span>
                      <Image
                        src={`/assets/icons/pngs/plus.png`}
                        className="icon-hover"
                      />
                    </span>
                  </div>
                </Card.Body>
              </Card>
            </div>
          );
        })}
      </Row>
      <ModalContainer
        open={open}
        setOpen={setOpen}
        title={`Add Activity Log`}
        onSubmit={onClickHandler}
      >
        <ActivityLogForm onUpdate={onUpdate} />
      </ModalContainer>
      {error && (
        <AlertDismiss message={error} setError={setError} variant="danger" />
      )}
      {success && (
        <AlertDismiss
          message={`Succesfully added activity log `}
          setError={setSuccess}
        />
      )}
    </Container>
  );
};

export default ActivityLog;
