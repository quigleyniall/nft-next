import { useContext, useEffect, useState } from 'react';
import dynamic from 'next/dynamic'
import { CustomTheme } from '../../context/theme';
import { ChartOptions } from '@/types/chartOptions';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const RED = '#E15140';
const GREEN = '#11B981';
const YELLOW = '#FFEB3A'

const BarChart = ({startText = '', endText = '', value = 0, max = 100, minThreshold = 0, maxThreshold = 0}) => {
  const {theme} = useContext(CustomTheme);
  const [options, setOptions] = useState<ChartOptions>({options: {}, series: []})

  const barColor = () => {
    switch (true) {
      case value > maxThreshold:
        return GREEN;
      case value > minThreshold && value < maxThreshold:
        return RED
      case value < minThreshold:
        return RED;
      default:
        return GREEN;
    }
  }

    const chartOptions = (color = "#11B981") => ({
      options: {
          chart: {
              // height: '',
              type: 'bar',
              sparkline: {
                enabled: true
              }
            },
            plotOptions: {
              bar: {
                horizontal: true,
                barHeight: '30px',
                colors: {
                  backgroundBarColors: ['#bbb'],
                  
                }
              },
            },
            stroke: {
              width: 0,
            },
            title: {
              floating: true,
              offsetX: -10,
              offsetY: 0,
              text: startText,
              style: {
                fontSize: '16px',
                fontWeight: '400',
                color
              }
            },
            subtitle: {
              floating: true,
              align: 'right',
              offsetY: 0,
              text: endText,
              style: {
                fontSize: '16px',
                color
              }
            },
            dataLabels: {
              enabled: true,
              style: {
                fontSize: '16px',
                fontWeight: '400'
              }
            },
            tooltip: {
              enabled: false
            },
            xaxis: {
              categories: ['Progress 1'],
            },
            yaxis: {
              max
            },
            fill: {
              opacity: 1,
              colors: [barColor()]
              
            }
        },
        
        series: [{
          name: 'Process 1',
          data: [value]
        }],
  })

    useEffect(() => {
      setOptions(chartOptions(theme.palette.text.primary));
    }, [theme]);

   

    return (
        typeof window !== 'undefined' &&
        <Chart
              {...options.options}
              series={options.series}
              type="bar"
              width="100%"
              height="75"
            />
    
    )
}

export default BarChart;