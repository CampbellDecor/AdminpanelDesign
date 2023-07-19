import { Link} from 'react-router-dom'
import '../style/admin.scss'
export default function SideBar() {
 
  return (
    <nav id="sidebarMenu" className="collapse d-lg-block sidebar collapse">
    <div className="position-sticky">
      <div className="list-group list-group-flush mx-3 mt-4">
        <Link to="/home" className="list-group-item list-group-item-action py-2 ripple navlink" aria-current="true">
          <i className="fas fa-tachometer-alt fa-fw me-3"></i>
          <span>Dashboard</span>
        </Link>
        <Link to="#" className="list-group-item list-group-item-action py-2 ripple navlink"><i
            className="fas fa-chart-line fa-fw me-3"></i>
            <span>Analytics</span></Link>
         <Link to="#" className="list-group-item list-group-item-action py-2 ripple navlink">
          <i className="fas fa-chart-pie fa-fw me-3"></i>
          <span>Admin</span>
        </Link>
        <Link to="/users" className="list-group-item list-group-item-action py-2 ripple navlink">
          <i className="fas fa-users fa-fw me-3"></i>
          <span>Users</span>
        </Link>
        <Link to="/chats" className="list-group-item list-group-item-action py-2 ripple navlink">
        <i className="fas fa-comments fa-fw me-3">
        <span className="badge rounded-pill badge-notification bg-danger">1</span>
        </i>
        <span>Chats </span>
        </Link>
        <Link to="#" className="list-group-item list-group-item-action py-2 ripple navlink">
          <i className="fa fa-fw me-3 fa-puzzle-piece"></i>
          <span>Events</span>
        </Link>
        <Link to="#" className="list-group-item list-group-item-action py-2 ripple navlink">
        <i className="fas fa-fw me-3 fa-cubes"></i>
        <span>Packages</span>
        </Link>
        <Link to="#" className="list-group-item list-group-item-action py-2 ripple navlink">
        <i className="fas fa-fw me-3 fa-cog"></i>
          <span>Setting</span>
        </Link>
        <Link to="/services" className="list-group-item list-group-item-action py-2 ripple navlink"><i
            className="fas fa-building fa-fw me-3"></i><span>Services</span></Link>
        <Link to="#" className="list-group-item list-group-item-action py-2 ripple navlink"><i
            className="fas fa-calendar fa-fw me-3"></i><span>Shedule</span>
        </Link>
       
        <Link to="#" className="list-group-item list-group-item-action py-2 ripple navlink"><i
            className="fas fa-money-bill fa-fw me-3"></i>
            <span>Payment</span>
        </Link>
      </div>
    </div>
  </nav>
  );
}
