import {Outlet} from 'react-router-dom';
import Header from '../Header';
import Sidebar from '../Sidebar';
import '../../style/admin.scss'
import Footer from  '../Footer';
export function Layout(){
    return(
      <>
      <Sidebar/>
      <Header/>
      <main>
        <div className="container pt-4  main">
            <Outlet/>
        </div>
        <Footer/>
      </main>
           
      </>    
           
    )
}
// export function SubLayout(){
//   return(
//     <>
//     <BreadCrumb/>
//     <Outlet/>
//     </>
//   )
// }