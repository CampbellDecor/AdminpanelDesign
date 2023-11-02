import React from 'react';
import { Link } from 'react-router-dom';
import {useUserContext} from '../contexts/UserContext'
export function Chatuser ({aid,profile,username,lastchat,isOnline,unread}){

    return(
        <li className="p-2 border-bottom useitem" key={aid}>
        <Link className="d-flex justify-content-between">
          <div className="d-flex flex-row">
            <div className='position-relative'>
              <img src={profile} alt="avatar" className="d-flex d-none d-lg-block align-self-center me-3" width={60} />
              <img src={profile} alt="avatar" className="d-flex d-block d-lg-none align-self-center me-3" width={40} />
              {isOnline?(<span className="badge bg-success badge-dot" />):(<span className="badge bg-secondary badge-dot" />)}
            </div>
            <div className="pt-1">
              <p className="fw-bold mb-0">{username}</p>
              <p className="small text-muted">{lastchat?.message}</p>
            </div>
          </div>
          <div className="pt-1">
            <p className="small text-muted mb-1">{lastchat?.dateTime}</p>
            {unread>0?(<span className="badge bg-danger rounded-pill float-end">{unread}</span>):(<div/>)}
          </div>
        </Link>
      </li>
    )

}

export function Message({achatid,message,date,status}){
  const {currentuser } = useUserContext();
  return(
    <div className="d-flex flex-row justify-content-start" key={achatid}>
    <img src={currentuser.profile} alt="avatar 1" style={{"width":"45px","height":"100%"}} />
    <div>
      <p className="small p-2 ms-3 mb-1 rounded-3" style={{backgroundColor:"#f5f6f7"}}>
       {message}</p>
      <p className="small ms-3 mb-3 rounded-3 text-muted float-end">{message?.time} | {date}</p>
    </div>
    </div>
  )

}

export function Reply({achatid,profile,message,date}){

  return(
    <div className="d-flex flex-row justify-content-end" key={achatid}>
    <div className='position-relative'>
      <p className="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">{message}</p>
      <p className="small me-3 mb-3 rounded-3 text-muted">{date}|{date}</p>
      <i className="fa-solid fa-pen text-white-50 position-absolute editcon"></i>
      <i className="fa-solid fa-trash text-white-50 position-absolute deleteicon"></i>
    </div>
    <img src={profile} alt="avatar 1" style={{width:"45px",height:"100%"}} />

  </div>
  )

}
export function chat({message,replay,sender,reciver}){
  return(
    <>

    </>
  )
}
