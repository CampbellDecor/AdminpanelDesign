import React from 'react';
import {Link} from 'react-router-dom';
export function Chatuser ({id,profile,username,message,isOnline}){

    return(
        <li className="p-2 border-bottom useitem" key={id}>
        <Link className="d-flex justify-content-between">
          <div className="d-flex flex-row">
            <div className='position-relative'>
              <img src={profile} alt="avatar" className="d-flex d-none d-lg-block align-self-center me-3" width={60} />
              <img src={profile} alt="avatar" className="d-flex d-block d-lg-none align-self-center me-3" width={40} />
              {isOnline?(<span className="badge bg-success badge-dot" />):(<span className="badge bg-secondary badge-dot" />)}
            </div>
            <div className="pt-1">
              <p className="fw-bold mb-0">{username}</p>
              <p className="small text-muted">{message?.unread?.last.mes}</p>
            </div>
          </div>
          <div className="pt-1">
            <p className="small text-muted mb-1">{message?.unread?.last?.time}</p>
            {message?.unread?.count>0?(<span className="badge bg-danger rounded-pill float-end">{message?.unread?.count}</span>):(<div/>)}
          </div>
        </Link>
      </li>
    )

}

export function Message({id,profile,message}){

  return(
    <div className="d-flex flex-row justify-content-start" key={id}>
    <img src={profile} alt="avatar 1" style={{"width":"45px","height":"100%"}} />
    <div>
      <p className="small p-2 ms-3 mb-1 rounded-3" style={{backgroundColor:"#f5f6f7"}}>Lorem ipsum
       {message?.body}</p>
      <p className="small ms-3 mb-3 rounded-3 text-muted float-end">{message?.time} | {message?.date}</p>
    </div>
    </div>
  )

}

export function Reply({id,profile,message}){

  return(
    <div className="d-flex flex-row justify-content-end" key={id}>
    <div className='position-relative'>
      <p className="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">{message?.body}</p>
      <p className="small me-3 mb-3 rounded-3 text-muted">{message?.time}|{message?.date}</p>
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
