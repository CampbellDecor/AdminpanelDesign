import React, { useEffect ,useState} from 'react'
import { FaCalendarDay, FaUsers, FaCoins, FaRegThumbsUp } from 'react-icons/fa'
import { CountPanel,ListPanel } from './Panels'
import { userCount } from '../redux/Slice/User'
import { bookingcount,EventBooking,PackageBooking } from '../redux/Slice/Booking'
import {  Totalpay} from '../redux/Slice/PaymentHis'
import { useSelector } from 'react-redux'
import axios from 'axios';

export function HomeCountPanel ()
{
  const ucount = useSelector(userCount);
  const bcount = useSelector(bookingcount);
  const [likecount,setlikecount]=useState(1)
  useEffect(() =>
  {
    axios.get("/CambellFbCount").then(res => setlikecount(res)).catch(console.error);

  },[])
  return (
   <div className='w-100  d-flex justify-content-around flex-sm-nowrap flex-wrap'>
  <CountPanel
    {...{
      title: 'Users',
      idenity: <FaUsers className='icon' />,
      path: '/users',
      count:ucount?? 0
    }}
  />
  <CountPanel
    {...{
      title: 'Earn',
      idenity: <FaCoins className='icon' />,
      count:'$ '+Math.round(Totalpay())??0,
      path: '/users'
    }}
  />
  <CountPanel
    {...{
      title: 'Booking',
      idenity: <FaCalendarDay className='icon' />,
      count: bcount??0,
      path: '/booking'
    }}
  />
  <CountPanel
    {...{
      title: 'FBLikes',
      idenity: <FaRegThumbsUp className='icon' />,
      count: likecount??0,
      path: 'https://web.facebook.com/profile.php?id=100092188970585'
    }}
  />
</div>

  )
}

export const EventPanel = () =>
{
  return (<ListPanel title={"Events"} items={EventBooking()}/>)
}
export const PackPanel = () => {
  return <ListPanel title={'Package'} items={PackageBooking()} />
}
