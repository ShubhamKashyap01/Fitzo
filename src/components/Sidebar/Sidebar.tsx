import React from "react";
import { Container } from "react-bootstrap";
import Icon from "../../common/Icon";
import { Link, useParams } from "react-router-dom";
import './Sidebar.scss'

const Sidebar = () => {
  const params = useParams();
  console.log('params', params);

  return (
    <Container
      className="position-absolute start-0 top-0 vh-100"
      style={{ background: "#000101", width: "100px" }}
      id="sidebar"
    >
      <div className="sidebar-header"></div>
      <ul className="list-unstyled components d-flex flex-column align-items-center justify-content-center h-75">
        <li className="active my-4">
          <Link to="./" className="p-4">
            <span>
              <Icon fa icon="home" color="white" type="light" size={30} />
            </span>
          </Link>
        </li>
        <li className="active my-4">
          <Link to="./profile" className="p-5">
            <Icon fa icon="user" color="white" type="light" size={30} />
          </Link>
        </li>
        <li className="active my-4">
          <Link to="./past" className="p-5">
            <Icon fa icon="clock" color="white" type="light" size={30} />
          </Link>
        </li>
        <li className="active my-4">
          <Link to="./membership" className="p-5">
            <Icon fa icon="money-check" color="white" type="light" size={30} />
          </Link>
        </li>
      </ul>
    </Container>
  );
};

export default Sidebar;