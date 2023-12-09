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
  BarElement,
  Filler
} from 'chart.js'



import { Doughnut, Line,Bar } from 'react-chartjs-2'
import randomcolor from 'randomcolor'
import { useThemeContext } from '../../contexts/ThemeContext'
import { useAppContext } from '../../contexts/AppContext'
import {PayHistorYByYear} from '../../redux/Slice/PaymentHis'
import {PackageRatings} from '../../redux/Slice/Packages'
import {AlluserBooking,AllDateBooking} from '../../redux/Slice/Booking'

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
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

export function UserAnalysis ()
{
  const labels = AlluserBooking()[0];

  const data = {
  labels,
  datasets: [
    {
      label: 'Active',
      data: AlluserBooking()[1],
      backgroundColor: 'rgb(107, 255, 99)'
    },
    {
      label: 'Pending',
      data:AlluserBooking()[2],
      backgroundColor: 'rgb(192, 180, 75)'
    },
    {
      label: 'Cancelled',
      data: AlluserBooking()[3],
      backgroundColor: 'rgb(80, 6, 6)'
    },
    {
      label: 'Expired',
      data: AlluserBooking()[4],
      backgroundColor: 'rgb(235, 53, 53)'
    }
  ]
}
const options = {
  plugins: {
    title: {
      display: true,
      text: 'User Bookings'
    }
  },
  responsive: true,
  scales: {
    x: {
      stacked: true
    },
    y: {
      stacked: true
    }
  }
}
return (
<div className='chart-container'>
  <Bar options={options} data={data} />
</div>
)
}
export function BookingAnalyze ({ date })
{
const datefilter = AllDateBooking(date)

  const [x, y1,y2,y3,y4] =datefilter;
  const datas = {
    labels: x,
    datasets: [
      {
        fill: false,
        label: 'profits',
        data: y1,
        borderColor: '#3c2626',
      },
       {
        fill: false,
        label: 'profits',
        data: y2,
        borderColor: '#3c2626',

      },
        {
        fill: false,
        label: 'profits',
        data: y3,
        borderColor: '#3c2626',

      }
        ,
        {
        fill: false,
        label: 'profits',
        data: y4,
        borderColor: '#3c2626',

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
      }
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
      <Line options={options} data={datas} />
    </div>
  )
}
