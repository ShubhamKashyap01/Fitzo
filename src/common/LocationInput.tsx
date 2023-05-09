import React, { useState, useMemo, useRef } from "react";
import { Accordion, Form, ListGroup } from "react-bootstrap";
import useApi from "../hooks/useApi";

const LocationInput = ({ city = "hyderabad", onChange }) => {
  const { response: locations = [] } = useApi(
    `/assets/json/location.json`,
    "get"
  );

  const [locationInput, setLocation] = useState("");

  const ref = useRef(null);

  const changeLocation = (location) => {
    setLocation(location);
    onChange(location);
    toggleBody();
  };

  const toggleBody = () => {
    if (ref?.current) {
      const accBody = ref.current.querySelector(".accordion-collapse");
      accBody.classList.toggle("show");
    }
  };

  const filteredLocations = useMemo(() => {
    return locations?.filter((l) =>
      l.name.toLowerCase().startsWith(locationInput.toLowerCase())
    );
  }, [locationInput, locations]);
  return (
    <Accordion className="mx-5" ref={ref}>
      <Accordion.Item eventKey="0">
        <Accordion.Header className="p-0">
          <Form.Control
            size="lg"
            type="text"
            placeholder={city}
            value={locationInput}
            className="h5 px-4 py-1 m-0"
            onChange={(e) => setLocation(e.target.value)}
          />
        </Accordion.Header>
        <Accordion.Body id="locationInput">
          <ListGroup>
            {filteredLocations?.map((item) => (
              <ListGroup.Item
                key={item.name}
                onClick={() => changeLocation(item.name)}
              >
                <h5 className="p-1 m-0 text-capitalize">{item.name}</h5>
                <h6 className="p-1 m-0">{item.state}</h6>
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default LocationInput;
