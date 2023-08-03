import {Outlet} from 'react-router-dom';
import React,{useContext} from 'react'
import Header from '../Header';
import Sidebar from '../Sidebar';
import '../../style/admin.scss'
import Footer from  '../Footer';
import {CambellContext} from '../AppContext';
import {ToggleBtn,ResponiveToggle} from '../ToggleBtns';


export function Layout(){
  const {splittoggle,responsivetoggle}=useContext(CambellContext);
  const responsiveAction=action=>{
    if(action){
      responsivetoggle.current.classList.add("responsiveBlock");
    }else{
      responsivetoggle.current.classList.remove("responsiveBlock");
    }
  }
    return(
      <div ref={splittoggle}>
      <Sidebar/>
      <ToggleBtn/>
      <ResponiveToggle toggleAction={responsiveAction} className="d-block d-sm-none respon-btn fs-2 fw-bolder position-fixed text-white" />
      <main >
      <Header/>
        <div className="container pt-4  main">
            <Outlet/>
        </div>
        <Footer/>
      </main>
           
      </div>    
           
    )
}

