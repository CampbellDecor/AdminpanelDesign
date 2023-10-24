// @ts-nocheck
import {Outlet,Navigate} from 'react-router-dom';
import React,{ useRef} from 'react'
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from  './Footer';
import { useAuthContext } from '../contexts/AuthContext';
import { useUIContext } from '../contexts/UiContext'

import {ToggleBtn,SplitToggle} from '../component/Util/ToggleBtns';



export function Layout(){
  const { islogin } = useAuthContext();
  const { splittoggle, responsivetoggle } = useUIContext();
  const bodyres=useRef(null);
  const responsiveAction=action=>{
    if(action){
      responsivetoggle.current.classList.add("responsiveBlock");
      bodyres?.current.classList.add("responsiveBlock");
    }else{
      responsivetoggle.current.classList.remove("responsiveBlock");
      bodyres?.current.classList.remove("responsiveBlock");
    }
  }


    return !islogin?( <Navigate to="/" replace={ true } /> ):(
      <div ref={splittoggle}>

      <Sidebar/>
      <ToggleBtn/>
      <SplitToggle toggleAction={responsiveAction} className="d-block d-sm-none respon-btn fs-2 fw-bolder position-fixed text-white" />
      <main className="main" ref={bodyres}>
      <Header/>
        <div className="container pt-4  main">
            <Outlet/>
        </div>
        <Footer/>
      </main>
      </div>


    )
}