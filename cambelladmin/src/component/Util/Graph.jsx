import React from 'react'
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
import { useThemeContext } from '../../contexts/ThemeContext'
import { useAppContext } from '../../contexts/AppContext'
import {PayHistorYByYear} from '../../redux/Slice/PaymentHis'
import {PackageRatings} from '../../redux/Slice/Packages'

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
  const { mode } = useThemeContext();
  const { Appname } = useAppContext();
  const [labels, data] =PackageRatings();
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
      plugins: {
      legend: {
          display: false, // Hide legends
        },
        title: {
          display: true,
          text:`${Appname} Packages`
        }
    }
  }

  return (
    <div className='my-3 w-100 chart-container'>
      <Doughnut data={datas} options={options}
/>
    </div>
  )
}

export function IncomeAnalyze ()
{
  const [x, y] = PayHistorYByYear(2023);
  console.log(x,y)
  const datas = {
    labels: x,
    datasets: [
      {
        fill: true,
        label: 'profits',
        data: y,
        borderColor:"#3c2626",
        backgroundColor: "#fa7d8d",
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
