import React from 'react';
import Table from 'react-data-table-component';
import {Badge,Image} from 'react-bootstrap';
import {Link} from "react-router-dom";
export  function NewAppoint (){
    const onrowclick=(row,event)=>{

    }
    const column=[
        { 
            name: 'Event',
            selector: row => row.title,
        },
        { 
            name: 'User',
            selector: row => row.user,
            cell: row => {
            
                return <div><Link to={`user/${row.user?.uid}`}><Image className="user" src={row.user?.profile} title={row.user?.username}/></Link></div>
            }
        },
        { 
            name: 'Date',
            selector: row => row.date,
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
                    case "cancel" :badge="status-cancel" ;break;
                    default:badge="warning";
                }
                return <Badge className={`status ${badge}`}>{row.status}</Badge>
            }
        }
    ];
    const datas=[{
        title:"dsfds",
        user:{username:"Thanumahee",uid:1,profile:"https://www.pinkvilla.com/images/2023-07/755764970_ajith-thunivu-1280-min.jpg"},
        date:"12/2/34",
        status:"pending"
    }]
    return(
        <div className="recent-updates my-3">
            <h3>Recent Updates</h3>
       <Table
       
       data={datas}
       columns={column}
    selectableRows
    responsive={true}
    striped={true}
    onRowClicked={onrowclick}
       />
       </div>

    )

}