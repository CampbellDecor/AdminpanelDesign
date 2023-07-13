import {Outlet} from 'react-router-dom';
import Header from '../Header';
import Sidebar from '../Sidebar';
import Rightbar from '../Rightbar';
import Footer from  '../Footer';
export default function Layout(){
    return(
         <>
            <Sidebar/>
            <div>
            <Header/>
            <Outlet/>
            <Footer/>
            </div>
           <Rightbar/>
         </>
    )
}