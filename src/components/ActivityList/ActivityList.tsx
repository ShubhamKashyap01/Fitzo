import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ActivityList.scss";
const ActivityList = (props) => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios.get(`/activities/location/${props.city}`).then((res) => {
      setActivities(res.data);
    });
  }, []);

  return (
    <div className="row row-cols-1 row-cols-md-3 g-4 activity-list-wrapper">
      {activities.map((activity) => (
        <div className="col">
          <div className="card h-100 activity-card">
            <img
              src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp"
              className="card-img-top"
              alt={activity.name}
            />
            <div className="card-body">
              <h5 className="card-title">{activity.name}</h5>
              
            </div>
          </div>
        </div>
      ))}{" "}
    </div>
  );
};

export default ActivityList;
