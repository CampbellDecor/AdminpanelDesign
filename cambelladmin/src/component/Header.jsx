import React from 'react';
import {Link}  from 'react-router-dom';
import '../style/admin.scss'
export default function Header (){
 
    return(
      <nav id="main-navbar" className="navbar navbar-expand-lg navbar-light  fixed-top">
   
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#sidebarMenu"
          aria-controls="sidebarMenu" aria-expanded="false" aria-label="Toggle navigation">
          <i className="fas fa-bars text-white"></i>
        </button>
        <Link className="navbar-brand" href="#">
          <img src="https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.png" height="25" alt="" loading="lazy" />
        </Link>

        <form className="d-none d-md-flex input-group w-auto my-auto">
          <input autocomplete="off" type="search" className="form-control rounded"
            placeholder='Search (ctrl + "/" to focus)' style={{minWidth: '225px'}} />
          <span className="input-group-text border-0 text-white-50"><i className="fas fa-search"></i></span>
        </form>

        <ul className="navbar-nav ms-auto d-flex flex-row">
        
          <li className="nav-item dropdown">
            <Link className="nav-link me-3 me-lg-0 dropdown-toggle hidden-arrow" href="#" id="navbarDropdownMenuLink"
              role="button" data-mdb-toggle="dropdown" aria-expanded="false">
              <i className="fas fa-bell text-white"></i>
              <span className="badge rounded-pill badge-notification bg-danger">1</span>
            </Link>
            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
              <li><Link className="dropdown-item" href="#">Some news</Link></li>
              <li><Link className="dropdown-item" href="#">Another news</Link></li>
              <li>
                <Link className="dropdown-item" href="#">Something else</Link>
              </li>
            </ul>
          </li>

          <li className="nav-item">
            <Link className="nav-link me-3 me-lg-0" href="#">
              <i className="fas fa-fill-drip text-white"></i>
            </Link>
          </li>
          <li className="nav-item me-3 me-lg-0">
            <Link className="nav-link" href="#">
              <i className="fab fa-github"></i>
            </Link>
          </li>
          <li className="nav-item dropdown">
            <Link className="nav-link me-3 me-lg-0 dropdown-toggle hidden-arrow" href="#" id="navbarDropdown" role="button"
              data-mdb-toggle="dropdown" aria-expanded="false">
              <i className="united kingdom flag m-0"></i>
            </Link>
            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
              <li>
                <Link className="dropdown-item" href="#"><i className="united kingdom flag"></i>English
                  <i className="fa fa-check text-success ms-2"></i></Link>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <Link className="dropdown-item" href="#"><i className="poland flag"></i>Polski</Link>
              </li>
              <li>
                <Link className="dropdown-item" href="#"><i className="china flag"></i>中文</Link>
              </li>
              <li>
                <Link className="dropdown-item" href="#"><i className="japan flag"></i>日本語</Link>
              </li>
              <li>
                <Link className="dropdown-item" href="#"><i className="germany flag"></i>Deutsch</Link>
              </li>
              <li>
                <Link className="dropdown-item" href="#"><i className="france flag"></i>Français</Link>
              </li>
              <li>
                <Link className="dropdown-item" href="#"><i className="spain flag"></i>Español</Link>
              </li>
              <li>
                <Link className="dropdown-item" href="#"><i className="russia flag"></i>Русский</Link>
              </li>
              <li>
                <Link className="dropdown-item" href="#"><i className="portugal flag"></i>Português</Link>
              </li>
            </ul>
          </li>

          <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle hidden-arrow d-flex align-items-center" href="#"
              id="navbarDropdownMenuLink" role="button" data-mdb-toggle="dropdown" aria-expanded="false">
              <img src="https://mdbootstrap.com/img/Photos/Avatars/img (31).jpg" className="rounded-circle" height="22"
                alt="" loading="lazy" />
            </Link>
            <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
              <li><Link className="dropdown-item" href="#">My profile</Link></li>
              <li><Link className="dropdown-item" href="#">Settings</Link></li>
              <li><Link className="dropdown-item" href="#">Logout</Link></li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
    )

}