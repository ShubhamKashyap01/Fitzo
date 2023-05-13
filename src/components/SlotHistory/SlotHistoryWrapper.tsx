import React, { useMemo } from "react";
import { Col, Container, Row } from "react-bootstrap";
import useApi from "../../hooks/useApi";
import SelectInput from "../../common/Select";
import SlotHistory from "./SlotHistory";
import Card from "../../common/Card";

const SlotHistoryWrapper = ({ user }) => {
  const [activity, setActivity] = React.useState("cricket");
  const [filter, setFilter] = React.useState(1);
  const { response } = useApi("/activities", "get");
  const activityList = useMemo(() => response?.data, [response]);
  //first character to uppercase
  const capitalize = (str) => str?.charAt(0).toUpperCase() + str?.slice(1);

  const convertToOptions = (activityList) =>
    activityList?.map((activity) => ({
      value: activity?.name,
      label: capitalize(activity?.name),
    }));

  const hours = [1, 7, 30, 90, 180, 365];
  const hourOptions = hours.map((hour) => ({
    label: `${hour.toString()} day`,
    value: hour.toString(),
  }));

  return (
    <Container>
      <Row >
        <Col>
          <SelectInput
            options={convertToOptions(activityList)}
            onChange={(val) => setActivity(val?.value)}
            placeholder="Select Activity"
          />
        </Col>
        <Col>
          <SelectInput
            options={hourOptions}
            onChange={(e) => setFilter(parseInt(e.value))}
            placeholder="Filter by days"
          />
        </Col>
      </Row>
      <Row  >
        <SlotHistory user={user} activityName={activity} filter={filter} />
      </Row>
    </Container>
  );
};

export default SlotHistoryWrapper;
