import React, { useState } from "react";
import {
  MDBBtn,
  MDBInput,
  MDBCheckbox,
  MDBIcon,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import Icon from "../../common/Icon";
import { useAuth } from "../../hooks/useAuth";
// import { Col } from "react-bootstrap";
// import Icon from "../../common/Icon";
// import { faMars, faVenus } from "@fortawesome/free-solid-svg-icons";

const Register = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    cPassword: "",
    firstName: "",
    lastName: "",
    gender: "",
    dateOfBirth: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    role: "non-member",
  });

  const [error, setError] = useState("");

  const { signup } = useAuth();

  const handleChange = (e: any) => {
    //Verify if the password and confirm password are the same
    if (e.target.name === "cPassword") {
      if (e.target.value !== user.password) {
        setError("Password and Confirm Password must be the same");
      } else {
        setError("");
      }
    }
    //Verify if the email is valid
    const emailRegex = new RegExp(
      "^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$"
    );
    if (e.target.name === "email") {
      if (!emailRegex.test(e.target.value)) {
        setError("Email is not valid");
      } else {
        setError("");
      }
    }
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    signup(user);
  };

  return (
    <>
      <div className="text-center mb-3">
        <p>Sign in with:</p>
      </div>
      <MDBRow className="d-flex justify-content-center">
        <MDBCol size="auto">
          <MDBBtn>
            <Icon fa type="brands" icon="facebook" color="white" />
          </MDBBtn>
        </MDBCol>
        <MDBCol size="auto">
          <MDBBtn style={{ backgroundColor: "#ea4335" }}>
            <Icon fa type="brands" icon="google" color="white" />
          </MDBBtn>
        </MDBCol>
      </MDBRow>
      <div className="text-center mb-3">
        <p>or:</p>
      </div>
      {error && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}
      <MDBInput
        name="firstName"
        wrapperClass="mb-4"
        label="Firstname"
        id="form1"
        type="text"
        onChange={handleChange}
      />
      <MDBInput
        name="lastName"
        wrapperClass="mb-4"
        label="Lastname"
        id="form1"
        type="text"
        onChange={handleChange}
      />
      <MDBInput
        name="email"
        wrapperClass="mb-4"
        label="Email"
        id="form1"
        type="email"
        onChange={handleChange}
      />
      <MDBInput
        name="password"
        wrapperClass="mb-4"
        label="Password"
        id="form1"
        type="password"
        onChange={handleChange}
      />
      <MDBInput
        name="cPassword"
        wrapperClass="mb-4"
        label="Confirm Password"
        id="form1"
        type="password"
        onChange={handleChange}
      />
      <MDBInput
        name="dateOfBirth"
        wrapperClass="mb-4"
        label="Date of Birth"
        id="form1"
        type="date"
        onChange={handleChange}
      />
      <MDBInput
        name="phone"
        wrapperClass="mb-4"
        label="Phone"
        id="form1"
        type="text"
        onChange={handleChange}
      />
      <MDBInput
        name="address"
        wrapperClass="mb-4"
        label="Address"
        id="form1"
        type="text"
        onChange={handleChange}
      />
      <MDBInput
        name="city"
        wrapperClass="mb-4"
        label="City"
        id="form1"
        type="text"
        onChange={handleChange}
      />
      <MDBInput
        name="state"
        wrapperClass="mb-4"
        label="State"
        id="form1"
        type="text"
        onChange={handleChange}
      />
      <MDBInput
        name="zip"
        wrapperClass="mb-4"
        label="Zip"
        id="form1"
        type="text"
        onChange={handleChange}
      />
      <MDBInput
        name="country"
        wrapperClass="mb-4"
        label="Country"
        id="form1"
        type="text"
        onChange={handleChange}
      />

      <MDBRow className="d-flex  justify-content-between align-items-center mb-4">
        <MDBCol size="auto">Gender</MDBCol>
        <MDBCol size="auto">
          <MDBBtn
            style={{
              backgroundColor: user.gender === "male" ? "#2196F3" : "lightgray",
            }}
            name="gender"
            value="male"
            onClick={handleChange}
          >
            <Icon fa type="duotone" icon="mars" color="white" />
          </MDBBtn>
        </MDBCol>
        <MDBCol size="auto">
          <MDBBtn
            style={{
              backgroundColor:
                user.gender === "female" ? "#FF1744" : "lightgray",
            }}
            name="gender"
            value="female"
            onClick={handleChange}
          >
            <Icon fa type="duotone" icon="venus" color="white" />
          </MDBBtn>
        </MDBCol>
        <MDBCol size="auto">
          <MDBBtn
            style={{
              backgroundColor:
                user.gender === "transgender" ? "#FCC419" : "lightgray",
            }}
            name="gender"
            value="transgender"
            onClick={handleChange}
          >
            <Icon fa type="duotone" icon="transgender" color="white" />
          </MDBBtn>
        </MDBCol>
      </MDBRow>

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
