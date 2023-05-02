import React, { useEffect, useState } from "react";
import "./Slots.scss";
import axios from "axios";
import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBRow,
    MDBCol,
    MDBBtn,
    MDBCarousel,
    MDBCarouselItem,
  } from "mdb-react-ui-kit";
import { Link, useParams } from "react-router-dom";

const Slots = (props) => {
    const [slots, setslot] = useState([]);
    const [slots1, setslot1] = useState([
      {
          "id": "HYD0600",
          "start_time": "0600",
          "capacity": 100,
          "_id": "642b493110af2930f532d637",
          "available":80
      },
      {
          "id": "HYD0800",
          "start_time": "0800",
          "capacity": 100,
          "_id": "642b493110af2930f532d638",
          "available":60
      },
      {
          "id": "HYD0700",
          "start_time": "0700",
          "capacity": 100,
          "_id": "644db058c5d46dd20c460375",
          "available":50
      }
  ]);
    const params = useParams()
    const location = params.location ?? 'hyderabad';

  useEffect(() => {
    const url = `${params.activity}/location/${location}`
    console.log(url,'urlllllllllll')
    axios.get(url).then((res) => {
        setslot(res.data);
    });
  }, []);

    return (
      <>
     <MDBCarousel showIndicators showControls fade>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src='https://plus.unsplash.com/premium_photo-1661963901750-f498389cc4a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
        alt='...'
      >
        <h5>First slide label</h5>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
      </MDBCarouselItem>
      </MDBCarousel>
      <br/><br/>
     <MDBRow className="row-cols-1 row-cols-md-3 g-4 activity-list-wrapper">
      {slots1.map((slot) => (
        <MDBCol>
          <MDBCard
            style={{ maxWidth: "540px" }}
            className="h-100 activity-card"
          >
            <MDBRow className="g-0">
              <MDBCol md="3">
                <MDBCardImage
                  src={`https://fitso-images.curefit.co/uploads/BadmintonHome1622031758.png`}
                  alt="..."
                  fluid
                />
              </MDBCol>
              <MDBCol md="9">
                <MDBCardBody>
                  <MDBCardTitle >
                    {/* <Link to={`/${props.city}/${activity.name}`}> {activity.name}</Link> */}
                    {slot.id}<br/>
                    Available slots : {slot.available} <br/>
                    <MDBBtn href='#'>Book</MDBBtn>
                    </MDBCardTitle>
                </MDBCardBody>
              </MDBCol>
            </MDBRow>
          </MDBCard>
        </MDBCol>
      ))}{" "}
    </MDBRow>

      </>
    )
  };

  export default Slots;