import React,{useContext} from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,   Filler,} from 'chart.js';
import { Doughnut,Line } from 'react-chartjs-2';
import randomcolor from 'randomcolor';
import {CambellContext} from '../../contexts/AppContext';



ChartJS.register(
  ArcElement,
   Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Filler
    );
export function SmallHomeDonut({labels,data}){
  const {mode}=useContext(CambellContext);
  const colors=randomcolor({
    count:labels?.length,
    luminosity:mode==="light"?"bright":"dark",
    hue:"light"?"blue":"#0b0d75"
  })
    const datas = {
        labels:labels,
        datasets: [
          {

            data: data,
            backgroundColor:colors,
            borderColor:colors,
            borderWidth: 1,
          },
        ],
      };
      const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom',
          }}
      };
    
    return(<div className="my-3 w-100 chart-container">
        <Doughnut data={datas} options={options} />
    </div>);
}

export function IncomeAnalyze(){
  const x_axis=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
  const {mode}=useContext(CambellContext);
  const color=randomcolor({
    count:2,
    luminosity:mode,
    hue:mode==="light"?"blue":"#0b0d75"
  })
  const datas = {
    labels:x_axis,
    datasets: [
      {
        fill: true,
        label: 'profits',
        data: [12,345,65,45,656,867,6,45,345,65,45,656,12,23,453],
        borderColor:color[0],
      backgroundColor:color[1],
        tension: 0.3
      },
    ],
  };
  const options = {
    scales: {
      x: {
        grid: {
          display: false, // Hide x-axis grid lines
        },
      },
      y: {
        grid: {
          display: false, // Hide y-axis grid lines
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position:'top',
      },
      title: {
        display: true,
        text: 'Profit of Cambell',
      },
    },
  };
  return (
    <div className='chart-container'>
    <Line options={options} data={datas} />
    </div>
  )
}

