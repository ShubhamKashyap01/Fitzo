import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ActivityList.scss";
import { Link, useNavigate } from "react-router-dom";

import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";

const ActivityList = (props) => {
  const [activities, setActivities] = useState([]);
  const navigate= useNavigate();

  useEffect(() => {
    axios.get(`/activities/location/${props.city}`).then((res) => {
      setActivities(res.data.data);
      console.log(res.data.data,'csd')
    });
  }, []);

  return (
    
    <MDBRow className="row-cols-1 row-cols-md-3 g-4 activity-list-wrapper">
      {activities.map((activity) => (
        <MDBCol>
          <MDBCard
            style={{ maxWidth: "540px" }}
            className="h-100 activity-card"
          >
            <MDBRow className="g-0">
              <MDBCol md="4">
                <MDBCardImage
                  src={`https://fitso-images.curefit.co/uploads/BadmintonHome1622031758.png`}
                  alt="..."
                  fluid
                />
              </MDBCol>
              <MDBCol md="8">
                <MDBCardBody>
                  <MDBCardTitle >
                    <Link to={`/${props.city}/${activity.name}`}> {activity.name}</Link>
                    </MDBCardTitle>
                </MDBCardBody>
              </MDBCol>
            </MDBRow>
          </MDBCard>
        </MDBCol>
      ))}{" "}
    </MDBRow>
  );
};

export default ActivityList;
