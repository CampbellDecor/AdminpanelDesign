import React from 'react'
import { FaCalendarDay, FaUsers, FaCoins, FaRegThumbsUp } from 'react-icons/fa'
import {CountPanel} from './Panels'
export function HomeCountPanel() {
  return (
   <div className='w-100  d-flex justify-content-around flex-sm-nowrap flex-wrap'>
  <CountPanel
    {...{
      title: 'Users',
      idenity: <FaUsers className='icon' />,
      path: '/users',
      count: 3
    }}
  />
  <CountPanel
    {...{
      title: 'Earn',
      idenity: <FaCoins className='icon' />,
      count: 345,
      path: '/users'
    }}
  />
  <CountPanel
    {...{
      title: 'Booking',
      idenity: <FaCalendarDay className='icon' />,
      count: 20,
      path: '/users'
    }}
  />
  <CountPanel
    {...{
      title: 'Likes',
      idenity: <FaRegThumbsUp className='icon' />,
      count: 10,
      path: '/users'
    }}
  />
</div>

  )
}
