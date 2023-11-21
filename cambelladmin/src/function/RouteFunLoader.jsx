import axios from 'axios'
import { useSearchParams } from 'react-router-dom';
export async function ProfileLoader ({ params }) {
  try {
    const aid = params.aid === 'self' ? 'self' : params.aid
    const admin = await axios.get('/api/admin/'+ aid)
    return admin.data
  } catch (error) {
    console.error(error)
  }
}
export async function editAdminLoader ({ params }) {
  try {
    const admin = await axios.get('/api/admin/' + params.aid)
    return admin.data
  } catch (error) {
    console.error(error)
  }
}
export async function addAdminLoader ({ params }) {
  return null
}
export async function adduserLoader ({ parmas }) {
  return null
}
export async function edituserLoader ({ params }) {
  const uid = params.uid
  const user = await axios.get('/api/user/' + uid)
  return user.data
}



export async function bookings () {
  try {
    const booking = await axios.get('/api/booking/all')
    return booking.data
  } catch (error) {
    console.error(error)
  }
}

export async function UserLoader ({ params }) {
  try
  {
    const uid = params=params.uid
    const user = await axios.get('/api/user/' + uid)
    return user.data
  } catch (error) {
    console.error(error)
  }
}

export async function OneBookloads ({ params })
{
  try {
    const response = await axios.get('/api/booking/one/'+params.bookcode);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
