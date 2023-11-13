import React, { useContext, useEffect, useState } from 'react'
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Filler
} from 'chart.js'
import { Doughnut, Line } from 'react-chartjs-2'
import randomcolor from 'randomcolor'
import { CambellContext } from '../../contexts/AppContext'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'

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
)

export function SmallHomeDonut () {
  const { mode } = useContext(CambellContext)
  const dispatcher = useDispatch()
  //const { loading, result } = useSelector(state => state.religion)

  useEffect(() => {}, [dispatcher])
  const [labels, data] = [
    ['Classic Hindu Wedding', 'Classic Puberty Ceremony',"Classic Muslim Wedding","Happilly Get Together",'Precious Birthday Moment','Classic Christian Wedding '
],
    [87.4567,67.6792,100,46.44,90.435,45.67]
  ]
  const colors = randomcolor({
    count: labels?.length,
    luminosity: mode === 'light' ? 'bright' : 'dark',
  })

  const datas = {
    labels: labels,
    datasets: [
      {
        data: data,
        backgroundColor: colors,
        borderColor: colors,
        borderWidth: 1
      }
    ]
  }
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    options: {
      plugins: {
      legend: {
        display: false, // Hide legends
      },
    },
    }
  }

  return (
    <div className='my-3 w-100 chart-container'>
      <Doughnut data={datas} options={options}
/>
    </div>
  )
}

export function IncomeAnalyze () {
  const x_axis = ['Jan', 'Feb', 'Mar', 'Api', 'May', 'june', 'july', 'Aug', 'Sep',"Oct","Nov","Dec"]
  const [loading, setloading] = useState(false)
  const { mode } = useContext(CambellContext)
  const color = randomcolor({
    count: 2,
    luminosity: mode,
    hue: mode === 'light' ? 'blue' : '#0b0d75'
  })
  const datas = {
    labels: x_axis,
    datasets: [
      {
        fill: true,
        label: 'profits',
        data: [0,45,34,56,67,12,4,98,10,6,54,41],
        borderColor: color[0],
        backgroundColor: color[1],
        tension: 0.3
      }
    ]
  }
  const options = {
    scales: {
      x: {
        grid: {
          display: false // Hide x-axis grid lines
        }
      },
      y: {
        grid: {
          display: false // Hide y-axis grid lines
        }
      },

    },
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top'
      },
      title: {
        display: true,
        text: 'Profit of Cambell'
      }
    }
  }
  return (
    <div className='chart-container'>
      <Line
        options={options}
        data={datas}
      />
    </div>
  )
}
