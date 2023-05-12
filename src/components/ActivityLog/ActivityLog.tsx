import React, {useState} from "react";
import { Card, Col, Container, Image, Row } from "react-bootstrap";
import Icon from "../../common/Icon";
import { Link } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../../hooks/useAuth";
import TZ_OFFSET from "../../constants/time";

const ActivityLog = () => {
  const { user } = useAuth();
  const date = new Date(new Date(new Date().toDateString()).getTime() + TZ_OFFSET)
  const onClickHandler = async (a) => {
    if (user) {
      const res = await axios.post("/activityLog", {
        date: date,
        user_id: user?._id,
        [`${a}_hours`]: 1,
      });
        console.log(res);
    }
  };

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
      id: "gym",
    },
  ];

  return (
    <Container fluid="none">
      <h4 className="mb-5">Activity Log</h4>
      <Row>
        {workoutList.map((workout, index) => {
          return (
            <Col
              className="m-2 px-0"
              style={{
                boxShadow:
                  "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
              }}
            >
              <Card
                key={index}
                style={{ width: "16rem" }}
                onClick={()=>onClickHandler(workout.id)}
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
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default ActivityLog;
