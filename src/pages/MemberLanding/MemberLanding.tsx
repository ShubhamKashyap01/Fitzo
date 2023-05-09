import React, { useEffect } from "react";
import { Container } from "react-bootstrap";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useAuth } from "../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";

const MemberLanding = () => {
  const {user} = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(user)
    if(!user){
      console.log('no user')
    }
  }, [])

  return (
    <Container fluid="none">
      <Header />
      <Sidebar />
    </Container>
  );
};

export default MemberLanding;
