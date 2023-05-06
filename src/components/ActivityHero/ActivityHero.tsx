import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import "./ActivityHero.scss";

const ActivityHero = () => {
  return (
    <Container fluid="xxl">
      <Row>
        <Col>
          <Image src="/assets/images/taxi-swimming.png" />
        </Col>
        <Col>
          <h1>Activity Name</h1>
          <h4>Tag line</h4>
          <div className="amenities">
            <p className="heading">Amenities</p>
            <div className="amenity">
              <div className="amenity-icon">
                <div className="sc-pNWdM otoxA"></div>
                <img
                  alt="Premium Swimming Pools"
                  src="https://fitso-images.curefit.co/uploads/indoor.png"
                  loading="lazy"
                  className="sc-kEqXSa ivNGVQ"
                />
              </div>
              <span className="amenity-text">Premium Swimming Pools</span>
            </div>
            <div className="amenity">
              <div className="amenity-icon">
                <div className="sc-pNWdM otoxA"></div>
                <img
                  alt="Certified Coaches for Guidance"
                  src="https://fitso-images.curefit.co/uploads/coach.png"
                  loading="lazy"
                  className="sc-kEqXSa ivNGVQ"
                />
              </div>
              <span className="amenity-text">
                Certified Coaches for Guidance
              </span>
            </div>
            <div className="amenity">
              <div className="amenity-icon">
                <div className="sc-pNWdM otoxA"></div>
                <img
                  alt="Showers, Changing rooms &amp; Lockers Available"
                  src="https://fitso-images.curefit.co/uploads/locker.png"
                  loading="lazy"
                  className="sc-kEqXSa ivNGVQ"
                />
              </div>
              <span className="amenity-text">
                Showers, Changing rooms &amp; Lockers Available
              </span>
            </div>
            <div className="amenity">
              <div className="amenity-icon">
                <div className="sc-pNWdM otoxA"></div>
                <img
                  alt="Skill Assessment System"
                  src="https://fitso-images.curefit.co/uploads/Structured.png"
                  loading="lazy"
                  className="sc-kEqXSa ivNGVQ"
                />
              </div>
              <span className="amenity-text">Skill Assessment System</span>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ActivityHero;
