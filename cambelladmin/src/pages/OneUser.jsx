import React from 'react';
import '../style/user.css';
import {BreadCrumb} from '../component/BreadCrumb';
import { Link } from 'react-router-dom'
export default function OneUser (props){
    const {username,firstname,lastname,email,mobile,facebook,address,profile}=props.user;
    const urlpath=[
        {name:"User",path:"/users"},
        {name:"1",path:"/users/id=1"}
    ]
    return(
        <>
        <BreadCrumb path={urlpath}/>
        <section className="section about-section gray-bg" id="about">
            <div className="container">
                <div className="row align-items-center flex-row-reverse">
                    <div className="col-lg-6">
                        <div className="about-text go-to">
                            <h3 className="dark-color">{username}</h3>
                            <h6 className="theme-color lead">{firstname+" " + lastname}</h6>
                            <p>I <mark>design and develop</mark> services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores. My passion is to design digital user experiences through the bold interface and meaningful interactions.</p>
                            <div className="row about-list">
                                <div className="col-md-6">
                                    <div className="media">
                                        <label>Residence</label>
                                        <p>{address?.city}</p>
                                    </div>
                                    <div className="media">
                                        <label>Address</label>
                                        <p>{`${address?.line} , ${address?.city}`}</p>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="media">
                                        <label>E-mail</label>
                                        <p>{email}</p>
                                    </div>
                                    <div className="media">
                                        <label>Phone</label>
                                        <p>{mobile}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-avatar position-relative">
                            <img src={profile}  alt={username} className="image-fluid rounded"/>
                            {facebook!=undefined?
                                (<Link className='p-2 pill rounded-circle position-absolute' style={{top:'285px',right:'5px'}} onMouseEnter={e=>{
                                    e.target.classList.add("bg-black");
                                }}
                                onMouseLeave={
                                    e=>{
                                        e.target.classList.remove("bg-black");
                                    }
                                }
                                ><i class="fa-brands fa-facebook-f text-white"></i></Link>):<span/>
                            }
                            
                         
                           
                        </div>
                    </div>
                </div>
                <div className="counter">
                    <div className="row">
                        <div className="col-6 col-lg-3">
                            <div className="count-data text-center">
                                <h6 className="count h2" data-to="500" data-speed="500">500</h6>
                                <p className="m-0px font-w-600">Happy Clients</p>
                            </div>
                        </div>
                        <div className="col-6 col-lg-3">
                            <div className="count-data text-center">
                                <h6 className="count h2" data-to="150" data-speed="150">150</h6>
                                <p className="m-0px font-w-600">Project Completed</p>
                            </div>
                        </div>
                        <div className="col-6 col-lg-3">
                            <div className="count-data text-center">
                                <h6 className="count h2" data-to="850" data-speed="850">850</h6>
                                <p className="m-0px font-w-600">Photo Capture</p>
                            </div>
                        </div>
                        <div className="col-6 col-lg-3">
                            <div className="count-data text-center">
                                <h6 className="count h2" data-to="190" data-speed="190">190</h6>
                                <p className="m-0px font-w-600">Telephonic Talk</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
</>
    )

}