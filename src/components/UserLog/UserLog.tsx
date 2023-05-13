import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import axios from "axios";

const options = {
  chart: {
    type: "column",
  },
  title: {
    text: `Checkin Log`,
  },
  yAxis: {
    title: {
      text: "Values",
    },
  },
  series: [],
};

const DailyTimeChart = ({ user, success }) => {
  const [logOptions, setLogOptions] = React.useState(options);
  const fetchLogs = async () => {
    try {
      const res = await axios.post("/user/checkin/all", {
        userId: user?._id,
      });
      const sorted = [...res?.data?.data].sort((a, b) => {
        return new Date(a.date).getTime() - new Date(b.date).getTime();
      });
      return sorted;
    } catch (err) {
      return [];
    }
  };

  const setTime = (time) => {
    try{
    return time.split(":");
    }
    catch(err){
      return [0,0,0]
    }
  };

  React.useEffect(() => {
    (async () => {
      const sorted = await fetchLogs();
      // console.log('sorted', sorted);

      const series = [
        {
          name: "Hours",
          data: sorted.map((item) => {
            const [hours1, minutes1, seconds1] = setTime(item.checkin);
            const [hours2, minutes2, seconds2] = setTime(item.checkout);
            // console.log(item, hours1, minutes1, seconds1);
            // console.log(hours2, minutes2, seconds2);
            const checkin = new Date();
            const checkout = new Date();
            checkin.setHours(hours1, minutes1, seconds1);
            checkout.setHours(hours2, minutes2, seconds2);
            const diff =
              Math.abs(checkin.getTime() - checkout.getTime()) / 36e5;
            // console.log(diff);
            return diff;
          }),
        },
      ];
      console.log('series', series)
      setLogOptions({ ...options, series });
    })();
  }, [success]);
  return <HighchartsReact highcharts={Highcharts} options={logOptions} />;
};

export default DailyTimeChart;
