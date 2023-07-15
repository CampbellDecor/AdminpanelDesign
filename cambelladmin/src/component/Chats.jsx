import React from 'react';

export function Chatuser ({profile,username,message,isOnline}){

    return(
        <li className="p-2 border-bottom useitem">
        <a href="#!" className="d-flex justify-content-between">
          <div className="d-flex flex-row">
            <div className='position-relative'>
              <img src={profile} alt="avatar" className="d-flex align-self-center me-3" width={60} />
              {isOnline?(<span className="badge bg-success badge-dot" />):(<span className="badge bg-secondary badge-dot" />)}
            </div>
            <div className="pt-1">
              <p className="fw-bold mb-0">{username}</p>
              <p className="small text-muted">{message?.unread?.last.mes}</p>
            </div>
          </div>
          <div className="pt-1">
            <p className="small text-muted mb-1">{message?.unread?.last?.time}</p>
            <span className="badge bg-danger rounded-pill float-end">{message?.unread?.count}</span>
          </div>
        </a>
      </li>
    )

}

export function Message({profile,message}){

  return(
    <div className="d-flex flex-row justify-content-start">
    <img src={profile} alt="avatar 1" style={{"width":"45px","height":"100%"}} />
    <div>
      <p className="small p-2 ms-3 mb-1 rounded-3" style={{"background-color":"#f5f6f7"}}>Lorem ipsum
       {message?.body}</p>
      <p className="small ms-3 mb-3 rounded-3 text-muted float-end">{message?.time} | {message?.date}</p>
    </div>
    </div>
  )

}

export function Reply({profile,message}){

  return(
    <div className="d-flex flex-row justify-content-end">
    <div>
      <p className="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">{message.body}</p>
      <p className="small me-3 mb-3 rounded-3 text-muted">{message?.time}|{message?.time}</p>
    </div>
    <img src={profile} alt="avatar 1" style={{"width":"45px","height":"100%"}} />
  </div>
  )

}
