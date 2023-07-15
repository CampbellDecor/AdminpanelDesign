import React from 'react';
import '../style/chat.css';
import {Chatuser,Message,Reply}from '../component/Chats';
const userchats=[
  {
    profile:"https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp",
    username:"Marie Horwitz",
    message:{
      unread:{
        last:{
          mes:"Hello, Are you there?",
          time:"Just Now"
        },
        count:3
      }
    },
    isOnline:false
  },
  {
    profile:"https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp",
    username:"Marie Horwitz",
    message:{
      unread:{
        last:{
          mes:"Hello, Are you there?",
          time:"Just Now"
        },
        count:3
      }
    },
    isOnline:true
  },
  {
    profile:"https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp",
    username:"Marie Horwitz",
    message:{
      unread:{
        last:{
          mes:"Hello, Are you there?",
          time:"Just Now"
        },
        count:3
      }
    },
    isOnline:true
  },
  {
    profile:"https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp",
    username:"Marie Horwitz",
    message:{
      unread:{
        last:{
          mes:"Hello, Are you there?",
          time:"Just Now"
        },
        count:3
      }
    },
    isOnline:false
  },
  {
    profile:"https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp",
    username:"Marie Horwitz",
    message:{
      unread:{
        last:{
          mes:"Hello, Are you there?",
          time:"Just Now"
        },
        count:3
      }
    },
    isOnline:false
  },
  {
    profile:"https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp",
    username:"Marie Horwitz",
    message:{
      unread:{
        last:{
          mes:"Hello, Are you there?",
          time:"Just Now"
        },
        count:3
      }
    },
    isOnline:true
  },
  {
    profile:"https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp",
    username:"Marie Horwitz",
    message:{
      unread:{
        last:{
          mes:"Hello, Are you there?",
          time:"Just Now"
        },
        count:3
      }
    },
    isOnline:true
  },
  {
    profile:"https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp",
    username:"Marie Horwitz",
    message:{
      unread:{
        last:{
          mes:"Hello, Are you there?",
          time:"Just Now"
        },
        count:3
      }
    },
    isOnline:true
  },
 
]
const mychats={
  message:[
    {
      profile:"https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp",
      
      message:{
        body:" dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor magna aliqua.",
        time:"12:00 PM",
        date:"Aug 13"
      }
    }
  ],
  reply:[
    {
      profile:"https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp",
     
      message:{
        body:" dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor magna aliqua.",
        time:"12:00 PM",
        date:"Aug 13"
      }
    },
    {
      profile:"https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp",
      mesage:{
        body:" dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolor magna aliqua.",
        time:"12:00 PM",
        date:"Aug 13"
      }
    }
  ]
}
export default function ChatApp(){

    return(
<section className='vh-100 mt-0'>
  <div className="container py-3 h-100 mt-0">
    <div className="row h-100 mt-0">
      <div className="col-md-12 h-100 mt-0">
        <div className="card h-100 shadow-lg mt-0" id="chat3" style={{"border-radius":"15px"}}>
          <div className="card-body h-100">
            <div className="row h-100">
              <div className="col-md-6 col-lg-5 col-xl-4 mb-4 mb-md-0 chatusers h-100">
                <div className="p-3 h-100">
                  <div className="input-group rounded mb-3 bg-body-secondary">
                    <input type="search" className="form-control rounded" placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                    <span className="input-group-text border-0 searchbar" id="search-addon">
                      <i className="fas fa-search" />
                    </span>
                  </div>
                  <div className='userlist' >
                    <ul className="list-unstyled h-100">
                     {userchats.map(chat=>(<Chatuser {...chat}/>))}
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-7 col-xl-8 position-relative chatting">
                <div className="pt-3 pe-3" data-mdb-perfect-scrollbar="true">
{/*                  
                  {
                   mychats.message.map(chat=>(<Message{...chat}/>))                  
                  }
                  {
                    mychats.reply.map(re=>(<Reply{...re}/>))
                  } */}
                </div>
                <div className="text-muted d-flex justify-content-start align-items-center pe-3 pt-3 mt-2 position-absolute w-100 bottom-0">
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp" alt="avatar 3" style={{"width":"40px","height":"100%"}} />
                  <input type="text" className="form-control form-control-lg" id="exampleFormControlInput2" placeholder="Type message" />
                  <a className="ms-1 text-muted" href="#!"><i className="fas fa-paperclip" /></a>
                  <a className="ms-3 text-muted" href="#!"><i className="fas fa-smile" /></a>
                  <a className="ms-3" href="#!"><i className="fas fa-paper-plane" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    )

}