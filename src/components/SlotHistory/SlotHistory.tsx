import React from "react";
import useApi from "../../hooks/useApi";
import FilterChart from "../../common/FilterChart";

const options = {
  chart: {
    type: "areaspline",
  },
  title: {
    text: `Activity Log`,
  },
  yAxis: {
    title: {
      text: "Values",
    },
  },
  colors: ["#6b8abc"],
  series: [
    {
      name: "Activity",
      data: [
        ["2023-05-09T00:00:00.000Z", 1],
        ["2023-05-07T18:30:00.000Z", 1],
        ["2023-05-08T05:07:11.882Z", 1],
        ["2023-05-08T00:00:00.000Z", 1],
        ["2023-05-12T00:00:00.000Z", 3],
        ["2023-05-15T00:00:00.000Z", 2],
        ["2023-05-13T00:00:00.000Z", 2],
      ],
    },
  ],
};

const SlotHistory = ({ user, activityName, filter=1 }) => {
  const { response } = useApi(`/user/slot/${user?._id}`, "get");
  const data = React.useMemo(() => {
    return response?.data;
  }, [response]);

  const filterOptions = React.useMemo(() => {
    if (activityName && data) {
      const activitySlots = data?.filter(
        (item) => item.activityname === activityName
      );
      const slotMap = {};
      activitySlots?.forEach(
        (item) => (slotMap[item?.date] = slotMap?.[item?.date] + 1 || 1)
      );
      const series = [
        {
          name: activityName,
          data: Object.keys(slotMap)?.map((item) => [item, slotMap[item]]),
        },
      ];
      return { ...options, series };
    } else {
      return {};
    }
  }, [data, activityName, filter]);

  return <FilterChart options={filterOptions} filter={filter} />;
};

export default SlotHistory;
