import React from "react";
import { MDBBtn, MDBInput, MDBCheckbox } from "mdb-react-ui-kit";

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
