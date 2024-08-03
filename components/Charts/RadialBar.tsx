import { useContext, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { CustomTheme } from "../../context/theme";
import { ChartOptions } from "@/types/chartOptions";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const RadialBar= () => {
  const {theme} = useContext(CustomTheme);
  const [options, setOptions] = useState<ChartOptions>({options: {}, series: []})
  
  const chartOptions = (color) => ({
    options: {
      colors: ["#E91E63"],
      plotOptions: {
        radialBar: {
          dataLabels: {
            name: {
              show: false,
            },
            value: {
              offsetY: 0,
            },
          },
        },
      },

      theme: {
        monochrome: {
          enabled: false,
        },
      },
      legend: {
        show: false,
      },
      title: {
        text: "Bounce Rate",
        align: "left",
        style: {
          color
        }
      },
    },
    series: [65],
  })

  useEffect(() => {
    setOptions(chartOptions(theme.palette.text.primary));
  }, [theme]);
  
  return (
    typeof window !== "undefined" && (
      <Chart
      {...options.options}
        series={options.series}
        type="radialBar"
        width="100%"
        height="255"
      />
    )
  );
};

export default RadialBar;
