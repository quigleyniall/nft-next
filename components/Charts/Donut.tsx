import { useContext, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { CustomTheme } from "../../context/theme";
import { ChartOptions } from "@/types/chartOptions";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const Donut = () => {
  const { theme } = useContext(CustomTheme);
  const [options, setOptions] = useState<ChartOptions>({options: {}, series: []})

  const chartOptions = (color) => ({
    options: {
      dataLabels: {
        enabled: false,
      },
      colors: ["#22a176", "rgba(17, 185, 129, .8)", "rgba(17, 185, 129, .5)"],
     

      labels: ["Team 1", "Team 2", "Team 3", "Team 4"],
      legend: {
        show: false,
      },
    },

    series: [2, 7, 5],
  });

  useEffect(() => {
    if (theme?.palette) {
      setOptions(chartOptions(theme?.palette.text.primary));
    }
    
  }, [theme]);
  return (
    typeof window !== "undefined" && (
      <Chart
      {...options.options}
        series={options.series}
        type="donut"
        width="100%"
        height="255"
      />
    )
  );
};

export default Donut;
