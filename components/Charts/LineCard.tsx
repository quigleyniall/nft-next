import { useState } from "react";
import dynamic from "next/dynamic";
import { Card, Typography } from "@mui/material";
import { Box } from "@mui/system";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const LineCard = ({ title, subtitle, data }) => {
  const [options, setOptions] = useState({
    options: {
      chart: {
        id: "spark4",
        group: "sparks",
        type: "line",
        height: 80,
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

      stroke: {
        curve: "smooth",
      },
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
      colors: ["#fff"],
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
  return (
    <Card>
      <Box
        sx={{
          padding: "10px",
          "text-shadow": "0 1px 1px 1px #666",
          "box-shadow": "0px 1px 15px 1px rgba(69, 65, 78, 0.08)",
          position: "relative",
          "border-radius": "5px",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "0",
            left: "0px",
          }}
        >
          <Typography variant="h5">{title}</Typography>
          <Typography variant="h5">{subtitle}</Typography>
        </Box>
        {typeof window !== "undefined" && (
          <Chart
          {...options.options}
            series={options.series}
            type="line"
            width="100%"
            height="75"
          />
        )}
      </Box>
    </Card>
  );
};

export default LineCard;
