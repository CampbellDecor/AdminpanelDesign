import React from 'react'
import {fmessage} from '../Fire.js'
export default function Test ()
{
  const Oncli =async () =>
  {
   const hj= await fmessage.getToken()
  }
  return (
    <div>
      <br />
      <button className='btn btn-primary' onClick={Oncli}>fdfdfd</button>
    </div>
  )
}
