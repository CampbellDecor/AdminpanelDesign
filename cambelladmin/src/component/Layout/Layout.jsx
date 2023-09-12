// @ts-nocheck
import {Outlet} from 'react-router-dom';
import React,{useContext, useRef} from 'react'
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from  './Footer';
import {CambellContext} from '../../contexts/AppContext';
import {ToggleBtn,SplitToggle} from '../ToggleBtns';



export function Layout(){
  const {splittoggle,responsivetoggle}=useContext(CambellContext);
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


    return(
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

