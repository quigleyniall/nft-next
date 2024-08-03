import { useState } from "react";
import dynamic from "next/dynamic";
import { Card, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { ApexOptions } from "apexcharts";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const ChartCard = ({ data }) => {
  const [options, setOptions] = useState({
    options: {
      chart: {
        id: "spark4",
        group: "sparks",
        sparkline: {
          enabled: true,
        },
        dropShadow: {
          enabled: true,
          top: 1,
          left: 1,
          blur: 2,
          opacity: 0.2,
        },
      },

      // stroke: {
      //   curve: "smooth",
      // },
      markers: {
        size: 0,
      },
      grid: {
        padding: {
          top: 20,
          bottom: 10,
          left: 110,
        },
      },
      colors: ["#22a176"],
      xaxis: {
        crosshairs: {
          width: 1,
        },
      },
      tooltip: {
        x: {
          show: false,
        },
        y: {
          title: {
            formatter: function formatter(val) {
              return "";
            },
          },
        },
      },
    },

    series: [
      {
        data,
      },
    ],
  });
  return typeof window !== "undefined" && (
    <Chart
      options={options.options}
      series={options.series}
      type="line"
      width="100%"
      height="100%"
    />
  );
};

export default ChartCard;
