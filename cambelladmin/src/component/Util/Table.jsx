import React from 'react'
import Table from 'react-data-table-component'
import { Badge } from 'react-bootstrap'
import { RecentBooking } from '../../redux/Slice/Booking'
import { UserProfile } from '../User'
import { useNavigate } from 'react-router-dom'

export function NewAppoint () {
  const BookData = RecentBooking()
  const navigate = useNavigate()
  const onrowclick = (row, event) => {
    navigate('/booking/' + row?.bookid)
  }
  const column = [
    {
      name: 'BookCode',
      selector: row => row.bookid,
      omit: true
    },
    {
      name: 'Name',
      selector: row => row.eventname
    },
    {
      name: 'User',
      selector: row => row.user,
      cell: row => {
        return <UserProfile uid={row.user} />
      }
    },
    {
      name: 'Date',
      selector: row => row.eventDate,
      sortable: true
    },
    {
      name: 'status',
      selector: row => row.status,
      cell: row => {
        let badge = ''
        switch (row.status) {
          case 'pending':
            badge = 'status-pending'
            break
          case 'reject':
            badge = 'status-reject'
            break
          case 'accept':
            badge = 'status-agree'
            break
          case 'expired':
            badge = 'status-reject'
            break
          default:
            badge = 'warning'
        }
        return (
          <Badge title={`${row.bookdate}`} className={`status ${badge}`}>
            {row.status}
          </Badge>
        )
      }
    }
  ]
  return (
    <div className='recent-updates my-3'>
      <h3>Recent Bookings</h3>
      <Table
        data={BookData}
        columns={column}
        responsive={true}
        striped={true}
        onRowClicked={onrowclick}
        pagination={true}
        paginationPerPage={5}
      />
    </div>
  )
}
