import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const FilterChart = ({ options, filter = 1 }) => {
  const filterOptios = React.useMemo(() => {
    console.log("options", options);
    console.log("filter", filter);
    const series = options.series?.map((item) => {
      //splice last 3 elements from item.data
      item.data = item.data?.slice(-1 * filter);
      return item;
    });
    return { ...options, series };
  }, [filter, options ]);
  return <HighchartsReact highcharts={Highcharts} options={filterOptios} />;
};

export default FilterChart;
