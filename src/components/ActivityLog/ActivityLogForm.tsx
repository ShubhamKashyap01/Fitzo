import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";
import "react-clock/dist/Clock.css";
import { MDBInput } from "mdb-react-ui-kit";
import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import TZ_OFFSET from "../../constants/time";
import { TimePicker } from "@atlaskit/datetime-picker";
import SelectInput from "../../common/Select";

const ActivityLogForm = ({ onUpdate }) => {
  const [date, setDate] = useState(
    new Date(new Date(new Date().toDateString()).getTime() + TZ_OFFSET)
  );
  const [time, setTime] = React.useState("");
  const hours = Array.from({ length: 24 }, (x, i) => i+1);
  const hourOptions = hours.map((hour) => ({
    label: hour.toString(),
    value: hour.toString(),
  }));

  const onChange = (date: Date) => {
    setDate(() => new Date(date.getTime() + TZ_OFFSET));
  };

  useEffect(() => {
    onUpdate(date, time);
  }, [time, date]);

  return (
    <Container>
      <Row className="my-4">
        <DatePicker onChange={onChange} value={date} />
      </Row>
      <Row className="my-3 mx-0">
        <SelectInput options={hourOptions} onChange={(e) => setTime(e.value)} />
      </Row>
    </Container>
  );
};

export default ActivityLogForm;
