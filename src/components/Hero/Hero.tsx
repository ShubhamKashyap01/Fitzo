import React from "react";
import "./Hero.scss";
import {
  MDBDropdown,
  MDBDropdownMenu,
  MDBDropdownToggle,
  MDBDropdownItem,
} from "mdb-react-ui-kit";

import locations from '../../location.json'

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
            {locations.map((loc)=>{
              return <li><a className="dropdown-item" href="#">{loc.name}</a></li>
            })}
           
          </ul>
        </div>
      </div>
    </>
  );
};

export default Hero;
