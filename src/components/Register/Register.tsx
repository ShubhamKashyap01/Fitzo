import React from "react";
import { MDBBtn, MDBInput, MDBCheckbox, MDBIcon, MDBRow, MDBCol } from "mdb-react-ui-kit";
// import { Col } from "react-bootstrap";
// import Icon from "../../common/Icon";
// import { faMars, faVenus } from "@fortawesome/free-solid-svg-icons";

const Register = () => {
  return (
    <>
      <div className="text-center mb-3">
        <p>Sign un with:</p>
      </div>

      <MDBInput wrapperClass="mb-4" label="Name" id="form1" type="text" />
      <MDBInput wrapperClass="mb-4" label="Username" id="form1" type="text" />
      <MDBInput wrapperClass="mb-4" label="Email" id="form1" type="email" />
      <MDBInput
        wrapperClass="mb-4"
        label="Password"
        id="form1"
        type="password"
      />
      {/* <MDBRow>
        <MDBCol><Icon icon={faMars}/></MDBCol>
        <MDBCol><Icon icon={faVenus}/></MDBCol>
      </MDBRow> */}
      <div className="d-flex justify-content-center mb-4">
        <MDBCheckbox
          name="flexCheck"
          id="flexCheckDefault"
          label="I have read and agree to the terms"
        />
      </div>

      <MDBBtn className="mb-4 w-100">Sign up</MDBBtn>
    </>
  );
};

export default Register;
