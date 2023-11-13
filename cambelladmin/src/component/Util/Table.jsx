import React from 'react';
import Table from 'react-data-table-component';
import {Badge,Image} from 'react-bootstrap';
import { Link } from "react-router-dom";
import {useBookingStore} from '../../redux/BookStore'
export function NewAppoint ()
{
    const { BookData } = useBookingStore();
    const onrowclick=(row,event)=>{

    }
    const column = [
        {
            bookid: "BookCode",
            selector: row => row.bookid,
            omit:true
    },
        {
            name: 'Event',
            selector: row => row.name,
        },
        {
            name: 'User',
            selector: row => row.user,
            cell: row => {

                return <div><Link to={`user/${row.user?.uid}`}><Image className="user" src={row.user?.profile??"https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI="} title={row.user?.username}/></Link></div>
            }
        },
        {
            name: 'Date',
            selector: row => row.eventDate,
            sortable: true,
        },
        {
            name: 'status',
            selector: row => row.status,
            cell: row => {
                let badge="";
                switch(row.status){
                    case "pending":badge="status-pending";break;
                    case "reject" :badge="status-reject" ;break;
                    case "accept" :badge="status-agree" ;break;
                    case "expired":badge="status-reject" ;break;
                    default:badge="warning";
                }
                return <Badge title={`${row.bookdate}`} className={`status ${badge}`}>{row.status}</Badge>
            }
        }
    ];
    return !BookData?.loading&&(
        <div className="recent-updates my-3">
            <h3>Recent Bookings</h3>
       <Table

       data={BookData?.bookings}
       columns={column}
    responsive={true}
    striped={true}
    onRowClicked={onrowclick}
       />
       </div>

    )}
