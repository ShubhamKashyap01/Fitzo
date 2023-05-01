import React from "react";
import "./Hero.scss";

const Hero = (props) => {
  return (
    <>
      <div className="hero-wrapper">
        <div className="hero-image"></div>
        <div className="btn-group location">
          <button className="btn btn-secondary dropdown-toggle" type="button" data-mdb-toggle="dropdown" data-mdb-auto-close="true" aria-expanded="false">
           {props.city}
          </button>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Menu item</a></li>
            <li><a className="dropdown-item" href="#">Menu item</a></li>
            <li><a className="dropdown-item" href="#">Menu item</a></li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Hero;
