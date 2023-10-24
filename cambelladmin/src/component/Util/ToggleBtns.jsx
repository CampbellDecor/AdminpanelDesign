import React,{useState} from 'react'
import {FiMinimize,FiMaximize} from "react-icons/fi";
import {useUIContext} from '../../contexts/UiContext';
import {BsThreeDotsVertical} from "react-icons/bs"
import {AiOutlineClose} from "react-icons/ai"



export const ToggleBtn=()=>{
    const {splittoggle}=useUIContext();
    const [toggle,setToggle]=useState(true);
    const toggleChange=(e)=>{
      e.preventDefault();
      if(toggle){
        setToggle(false);
        splittoggle.current.classList.add("split-page");
      }
      else{
        setToggle(true);
        splittoggle.current.classList.remove("split-page");
  }
      }

    return (
      <>
    {!toggle?(<FiMaximize className="sidebar-toggole text-white-50" onClick={toggleChange}/>):(<FiMinimize  onClick={toggleChange} className="sidebar-toggole text-white-50"/> )}
    </>
    )
  }
 export  function SplitToggle({toggleAction,className}){
    const [respons,setrespons]=useState(true);
    const onToggle=e=>{
          if(respons){
            setrespons(false);
          }else{
            setrespons(true);
          }
          toggleAction(respons);
    }

    return(
      <>
    {respons?(<BsThreeDotsVertical className={className} onClick={onToggle}/>):(<AiOutlineClose className={className+" closeres"} onClick={onToggle}/>)}
      </>

    )

  }
