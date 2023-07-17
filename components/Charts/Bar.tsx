import { useContext, useEffect, useState } from 'react';
import dynamic from 'next/dynamic'
import { CustomTheme } from '../../context/theme';
import { ChartOptions } from '@/types/chartOptions';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });


const BarChart = () => {
  const {theme} = useContext(CustomTheme);
  const [options, setOptions] = useState<ChartOptions>({options: {}, series: []})

    const chartOptions = (color) => ({
      options: {
          chart: {
              height: '30px',
              type: 'bar',
              sparkline: {
                enabled: true
              }
            },
            plotOptions: {
              bar: {
                horizontal: true,
                barHeight: '20px',
                colors: {
                  backgroundBarColors: ['#40475D']
                }
              },
            },
            stroke: {
              width: 0,
            },
            title: {
              floating: true,
              
              offsetX: -10,
              offsetY: 5,
              text: 'Process 1',
              style: {
                color
              }
            },
            subtitle: {
              floating: true,
              align: 'right',
              offsetY: 0,
              text: '44%',
              style: {
                fontSize: '20px',
                color
              }
            },
            tooltip: {
              enabled: false
            },
            xaxis: {
              categories: ['Process 1'],
            },
            yaxis: {
              max: 100
            },
            fill: {
              opacity: 1
            }
        },
        
        series: [{
          name: 'Process 1',
          data: [44]
        }],
  })

    useEffect(() => {
      setOptions(chartOptions(theme.palette.text.primary));
    }, [theme]);

   

    return (
        typeof window !== 'undefined' &&
        <Chart
              options={options.options}
              series={options.series}
              type="bar"
              width="100%"
              height="75"
            />
    
    )
}

export default BarChart;