// @ts-nocheck
import { Outlet, Navigate } from 'react-router-dom';
import React, { useCallback, useRef } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import { useAuthContext } from '../../contexts/AuthContext';
import { toast } from 'react-toastify';
import { useUIContext } from '../../contexts/UiContext';
import { ToggleBtn, SplitToggle } from '../../component/Util/ToggleBtns';
import CambellBreadCrumb from './BreadCrumb';
import { isexist } from '../../function/CookieHandler';
import { useNavigate } from 'react-router-dom';
import { deleteStorageSession } from '../../function/SessionStorage';
export function Layout ()
{
  const access_token = isexist('access_token');
  const { islogin, setLogin } = useAuthContext();
  const navigate = useNavigate();


  const { splittoggle, responsivetoggle } = useUIContext();
  const bodyres = useRef(null);
  const responsiveAction = action =>
  {
    if (action)
    {
      responsivetoggle.current.classList.add('responsiveBlock');
      bodyres?.current.classList.add('responsiveBlock');
    } else
    {
      responsivetoggle.current.classList.remove('responsiveBlock');
      bodyres?.current.classList.remove('responsiveBlock');
    }
  };
  const Timeout=useCallback(() =>
  {
    setInterval(() =>
    {
      if (islogin && !access_token)
      {
        setLogin(false);
        deleteStorageSession('current');
        toast.warn('Session Timeout');
        navigate('/');
      }
    }, 1000 * 60 * 60 * 0.5);

  }, [new Date()]);
  Timeout();
  return !islogin ? (
    <Navigate to='/' replace={true} />
  ) : (
    <div ref={splittoggle}>
      <Sidebar />
      <ToggleBtn />
      <SplitToggle
        toggleAction={responsiveAction}
        className='d-block d-sm-none respon-btn fs-2 fw-bolder position-fixed text-white'
      />
      <main className='main' ref={bodyres}>
        <Header />
        <div className='container pt-4  main'>
          <Outlet />
        </div>
        <Footer />
      </main>
    </div>
  );
}

export function InnerLayout ()
{
  return (
    <>
      <CambellBreadCrumb Title='Hi' />
      <Outlet />
    </>
  );
}
