import React, { useMemo } from 'react'
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
    RadialLinearScale,
  Title,
  BarElement,
  Filler
} from 'chart.js'
import { Doughnut, Line,Bar,PolarArea,Pie} from 'react-chartjs-2'
import randomcolor from 'randomcolor'
import { useThemeContext } from '../../contexts/ThemeContext'
import { useAppContext } from '../../contexts/AppContext'
import {PayHistorYByYear} from '../../redux/Slice/PaymentHis'
import { PackageRatings } from '../../redux/Slice/Packages'
import {arrayAddition} from '../../function/DSA'
import {AlluserBooking,AllDateBooking,PackageBooking,SatusBookingAnaysis,EventBooking} from '../../redux/Slice/Booking'

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
    RadialLinearScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Filler
)

export function SmallHomeDonut ({maintainAspectRatio=false}) {
  const { mode } = useThemeContext();
  const { Appname } = useAppContext();
  const labels=[
  'Classic Hindu Wedding',
  'Classic Puberty Ceremony',
  'Classic Muslim Wedding',
  'Happilly Get Together ',
  'Tabel Decrotion',
  'Precious Birthday Moment',
  'Classic Christian Wedding ',
  'hghgh'
  ]
  const data =[
  6.326530612244897,
  25.454545465,
  5.043565653243,
  6.133333333333334,
  7.4545,
  14.444444444444445,
  17.6,
  3.4349
]

  const idea = PackageRatings();

  const colors = randomcolor({
    count: labels?.length,
    luminosity: mode === 'light' ? 'bright' : 'dark',
  })
  const datas = useMemo(() => ({
    labels: labels,
    datasets: [
      {
        data: data,
        backgroundColor: colors,
        borderColor: colors,
        borderWidth: 1
      }
    ]
  }), [idea])
  const options =useMemo(()=> ({
    responsive: true,
    maintainAspectRatio,
      plugins: {
      legend: {
          display: false, // Hide legends
        },
        title: {
          display: true,
          text:`${Appname} Packages Ratings`
        }
    }
  }),[maintainAspectRatio])

  return useMemo(()=>(
    <div className='my-3  chart-container
'>
      <Doughnut data={datas} options={options}
/>
    </div>
  ),[datas,options])
}

export function SmaallPieForHome ({ maintainAspectRatio = false }) {
  const { mode } = useThemeContext()
  const { Appname } = useAppContext()
  const [labels,data] = SatusBookingAnaysis();
  const colors = randomcolor({
    count: labels?.length,
    luminosity: mode === 'light' ? 'bright' : 'dark'
  })

  const datas = useMemo(
    () => ({
      labels: labels,
      datasets: [
        {
          data: data,
          backgroundColor: colors,
          borderColor: colors,
          borderWidth: 1
        }
      ]
    }),
    [data, labels]
  )
  const options = useMemo(
    () => ({
      responsive: true,
      animationEnabled: true,
      maintainAspectRatio,
      plugins: {
        legend: {
          display: false // Hide legends
        },
        title: {
          display: true,
          text: `${Appname} Booking status`
        }
      },
        animations: {
      fill: {
        duration: 1000,
        easing: 'linear',
        from: 0,
        to: 100,
        loop: true
      }
    }
    }),
    [maintainAspectRatio]
  )

  return useMemo(
    () => (
      <div
        className='my-3  chart-container
'
      >
        <Pie data={datas} options={options} />
      </div>
    ),
    [datas, options]
  )
}

export function IncomeAnalyze ()
{
  const [x, y] = PayHistorYByYear(2023);
  const datas =useMemo(()=>({
    labels: x,
    datasets: [
      {
        fill: true,
        label: 'profits',
        data: y,
        borderColor:"#3c2626",
        backgroundColor: "#fa7d8d",
        animations: {
      tension: {
        duration: 1000,
        easing: 'easeInOutElastic',
        from:1,
        to: 0.3,
        loop: true
      },
    }
        // tension: 0.3
      }
    ]
  }),[x,y])
  const options =useMemo(()=>({
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
  }),[])
  return useMemo(()=> (
    <div className='chart-container'>
      <Line
        options={options}
        data={datas}
      />
    </div>
  ),[datas,options])
}

export function SmallBookingAnalysis ({ date=new Date() }) {
  const datefilter = AllDateBooking(date)
const { mode } = useThemeContext()
  const [x, y1, y2, y3, y4] = datefilter
  const colors = randomcolor({
  count: x?.length,
  luminosity: mode === 'light' ? 'bright' : 'dark'
})

  const bookings = arrayAddition(y1, y2, y3, y4);
  const datas = {
    labels: x,
    datasets: [
      {
        fill: false,
        label: 'Bookings',
        data: bookings,
        backgroundColor:colors
      }
    ]
  }
  const options = {
    zoomEnabled: true,
    scales: {
      x: {
        grid: {
          display: false // Hide x-axis grid lines
        }
      },
      y: {
        ticks: {
          pricision: 1
        },
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
        text: 'Booking Summary of Cambell'
      }
    }
  }
  return (
    <div>
      <Bar options={options} data={datas} width={100} height='500px' />
    </div>
  )
}

export function UserAnalysis ()
{
  const labels = AlluserBooking()[0];

  const data =useMemo(()=>({
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
}),[labels])
const options = useMemo(()=>({
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
}),[])
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
        label: 'Active',
        data: y1,
        borderColor: '#10e345',
      },
       {
        fill: false,
        label: 'Pending',
        data: y2,
        borderColor: '#c9ed00',

      },
        {
        fill: false,
        label: 'Cancelled',
        data: y3,
        borderColor: '#f80000',

      }
        ,
        {
        fill: false,
        label: 'Expired',
        data: y4,
        borderColor: '#1e0808',

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
        ticks: {
            pricision:1


        },
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
        text: 'Booking Summary of Cambell'
      }
    },
    animations: {
      tension: {
        duration: 1000,
        easing: 'linear',
        from: 0.6,
        to: 0,
        loop: true
      },
    }
  }
  return (
    <div>
      <Line options={options} data={datas} width={100}
  height='500px'/>
    </div>
  )
}

export function PackageBookingAnyalis ()
{
  const { Appname } = useAppContext()
  const packageBooking = PackageBooking();
  const bookPack = [[], []];
  packageBooking.forEach(ele =>
  {
    bookPack[0].push(ele?.name);
    bookPack[1].push(ele.count);
  })
  const [x, y] = bookPack
  const colors = randomcolor({
  count: x?.length,
  luminosity:  'bright'
})

  const datas = useMemo(()=>({
  labels: x,
  datasets: [
    {
      data: y,
      backgroundColor: colors,
      borderColor: colors,
      borderWidth: 1
    }
  ]
}),[x,y])

  const options = useMemo(() =>
  ({
    responsive: true,
      plugins: {
      legend: {
        display: false // Hide legends
      },
      title: {
        display: true,
          text: `${Appname} Packages Bookings`
      }
    }
  }),[Appname]);

  return useMemo(()=>(
    <div>
      <PolarArea data={datas} options={options}/>
    </div>
  ),[datas,options])
}

export function EventAnylsis ({ date }) {

  const label = EventBooking().map(ele => ele.name);
  const data = EventBooking().map(ele => ele.count);
  const datas = {
    labels: label,
    datasets: [
      {
        fill: false,
        label: 'Active',
        data: data,
        borderColor: '#532e12'
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
        ticks: {
          pricision: 1
        },
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
        text: ' Event Booking Summary of Campbell'
      }
    },
    animations: {
      tension: {
        duration: 1000,
        easing: 'linear',
        from: 0.6,
        to: 0,
        loop: true
      }
    }
  }
  return (
    <div>
      <Line options={options} data={datas} width={100} height='500px' />
    </div>
  )
}
