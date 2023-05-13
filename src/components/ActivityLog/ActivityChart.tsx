import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import axios from "axios";

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
  series: [
    
  ],
};

const ActivityChart = ({ user, success }) => {
  const [logOptions, setLogOptions] = React.useState(options);
  const fetchLogs = async () => {
    try {
      const res = await axios.post("/activityLog/all", {
        user_id: user?._id,
      });
      const sorted = [...res?.data?.data].sort((a, b) => {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      });
      return sorted;
    } catch (err) {
        return []
    }
  };

  React.useEffect(() => {
    (async()=>{
        const sorted = await fetchLogs();
        console.log(sorted)
        const series = [
            {
              name: "Treadmill",
              data: sorted.map((item) => [item.date, item.treadmill_hours]),
            },
            {
              name: "Cycling",
      
              data: sorted.map((item) => [item.date, item.cycling_hours]),
            },
            {
              name: "Working",
              data: sorted.map((item) => [item.date, item.weight_training_hours]),
            },
          ];
            setLogOptions({ ...options, series });
    })()
  }, [success]);
  return <HighchartsReact highcharts={Highcharts} options={logOptions} />;
};

export default ActivityChart;
