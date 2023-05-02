import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Hero from "../../components/Hero/Hero";
import ActivityList from "../../components/ActivityList/ActivityList";

const Home = () => {
  let params = useParams();
  let location = params.location ?? "hyderabad";
  console.log(location);

  return (
    <div className="home">
      <Hero city={location} />
      <ActivityList city={location} />
    </div>
  );
};

export default Home;
