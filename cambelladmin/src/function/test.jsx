
import React from 'react'
import {createStorageSession} from './SessionStorage'
export default function Test ()
{
    const onclik =  () =>
    {
      createStorageSession('fdfdsfsdfghgh', {name: "Hi"});
    }

  return (
    <div>
      <button onClick={onclik} >hi</button>
    </div>
  )
}
