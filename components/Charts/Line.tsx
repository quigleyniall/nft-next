import { useContext, useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { CustomTheme } from "../../context/theme";
import { ChartOptions } from "@/types/chartOptions";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const LineChart = () => {
  const { theme } = useContext(CustomTheme);
  const [options, setOptions] = useState<ChartOptions>({options: {}, series: []})

  const chartOptions = (color) => ({
    options: {
      chart: {
        height: 350,
        type: "line",
      },
      stroke: {
        width: 5,
        curve: "smooth",
      },
      xaxis: {
        type: "datetime",
        categories: [
          "1/11/2000",
          "2/11/2000",
          "3/11/2000",
          "4/11/2000",
          "5/11/2000",
          "6/11/2000",
          "7/11/2000",
          "8/11/2000",
          "9/11/2000",
          "10/11/2000",
          "11/11/2000",
          "12/11/2000",
          "1/11/2001",
          "2/11/2001",
          "3/11/2001",
          "4/11/2001",
          "5/11/2001",
          "6/11/2001",
        ],
        tickAmount: 10,
        labels: {
          formatter: function (value, timestamp, opts) {
            return opts.dateFormatter(new Date(timestamp), "dd MMM");
          },
        },
      },
      title: {
        text: "Forecast",
        align: "left",
        style: {
          fontSize: "16px",
          color,
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          shade: "dark",
          gradientToColors: ["#FDD835"],
          shadeIntensity: 1,
          type: "horizontal",
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100, 100, 100],
        },
      },
      yaxis: {
        min: -10,
        max: 40,
      },
    },

    series: [
      {
        name: "Sales",
        data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5],
      },
    ],
  });

  useEffect(() => {
    setOptions(chartOptions(theme.palette.text.primary));
  }, [theme]);

  return (
    typeof window !== "undefined" && (
      <Chart
      options={options.options}
        series={options.series}
        type="line"
        width="100%"
        height="350"
      />
    )
  );
};

export default LineChart;
