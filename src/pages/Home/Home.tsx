import axios from "axios";
import React, { useEffect, useState } from "react";
import Hero from "../../components/Hero/Hero";
import ActivityList from "../../components/ActivityList/ActivityList";

const Home = () => {
  
  const [city] = useState("bangalore");

  return (
    <div className="home">
      <Hero city={city}/>
      <ActivityList city={city}/>
    </div>
  );
};

export default Home;
