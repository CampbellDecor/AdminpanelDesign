import { Link} from 'react-router-dom'
import '../style/admin.scss'
export default function SideBar() {
 
  return (
    <nav id="sidebarMenu" className="collapse d-lg-block sidebar collapse">
    <div className="position-sticky">
      <div className="list-group list-group-flush mx-3 mt-4">
        <Link to="#" className="list-group-item list-group-item-action py-2 ripple navlink" aria-current="true">
          <i className="fas fa-tachometer-alt fa-fw me-3"></i><span>Dashboard</span>
        </Link>
        <Link to="#" className="list-group-item list-group-item-action py-2 ripple navlink"><i
            className="fas fa-chart-line fa-fw me-3"></i><span>Analytics</span></Link>
             <Link to="#" className="list-group-item list-group-item-action py-2 ripple navlink">
          <i className="fas fa-chart-pie fa-fw me-3"></i><span>Admin</span>
        </Link>
             <Link to="/users" className="list-group-item list-group-item-action py-2 ripple navlink"><i
            className="fas fa-users fa-fw me-3"></i><span>Users</span></Link>
        <Link to="#" className="list-group-item list-group-item-action py-2 ripple navlink">
          <i className="fas fa-chart-area fa-fw me-3"></i><span>Webiste traffic </span>
        </Link>
        <Link to="#" className="list-group-item list-group-item-action py-2 ripple navlink"><i
            className="fas fa-lock fa-fw me-3"></i><span>Password</span></Link>
        
       
        <Link to="#" className="list-group-item list-group-item-action py-2 ripple navlink"><i
            className="fas fa-chart-bar fa-fw me-3"></i><span>Orders</span></Link>
        <Link to="#" className="list-group-item list-group-item-action py-2 ripple navlink"><i
            className="fas fa-globe fa-fw me-3"></i><span>International</span></Link>
        <Link to="#" className="list-group-item list-group-item-action py-2 ripple navlink"><i
            className="fas fa-building fa-fw me-3"></i><span>Partners</span></Link>
        <Link to="#" className="list-group-item list-group-item-action py-2 ripple navlink"><i
            className="fas fa-calendar fa-fw me-3"></i><span>Calendar</span></Link>
       
        <Link to="#" className="list-group-item list-group-item-action py-2 ripple navlink"><i
            className="fas fa-money-bill fa-fw me-3"></i><span>Sales</span></Link>
      </div>
    </div>
  </nav>
  );
}
