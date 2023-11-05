import React,{useContext, useEffect, useState} from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,   Filler,} from 'chart.js';
import { Doughnut,Line } from 'react-chartjs-2';
import randomcolor from 'randomcolor';
import {CambellContext} from '../../contexts/AppContext';
import { useSelector ,useDispatch} from 'react-redux';
import axios from 'axios';

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

export function SmallHomeDonut ()
{

  const { mode } = useContext(CambellContext);
  const dispatcher = useDispatch();
  const { loading, result } = useSelector(state => state.religion);

  useEffect(() =>
  {

  }, [dispatcher])
  const [labels,data] =[["hi","Hello"],[12,34]];
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

    return loading?("Loading"):(<div className="my-3 w-100 chart-container">
      {
result==='fetched'?(<Doughnut data={datas} options={options} />):("error")
      }
    </div>);
}

export function IncomeAnalyze(){
  const x_axis = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  const [loading, setloading] = useState(false);
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
  useEffect(() =>
  {
    setloading(true)
    axios.get(`/api/payment/history/year/${new Date().getFullYear()}`)
      .then(result =>
      {
        console.log(result);
        setloading(false)
      })
      .catch(error =>
      {
        console.log(error);
        setloading(false)
    })
  },[])
  return loading?<h1>.......</h1>:(
    <div className='chart-container'>
    <Line options={options} data={{
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
  }} />
    </div>
  )
}
