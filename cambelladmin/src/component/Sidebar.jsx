import { Link } from "react-router-dom";
import { FaTachometerAlt } from "react-icons/fa";
import "../style/admin.scss";
export default function SideBar() {
  return (
    <nav id="sidebarMenu" className="collapse d-lg-block sidebar collapse">
      <div className="position-sticky">
        <div className="list-group list-group-flush mx-3 mt-4">
          <Link
            to="/home"
            className="list-group-item list-group-item-action py-2 ripple navlink"
            aria-current="true"
          >
            <FaTachometerAlt className="me-3" />
            <span>Dashboard</span>
          </Link>
          <Link
            to="/analsis"
            className="list-group-item list-group-item-action py-2 ripple navlink"
          >
            <i className="fas fa-chart-line fa-fw me-3" />
            <span>Analytics</span>
          </Link>
          <Link
            to="#"
            className="list-group-item list-group-item-action py-2 ripple navlink"
          >
            <i className="fas fa-chart-pie fa-fw me-3" />
            <span>Admin</span>
          </Link>
          <Link
            to="/users"
            className="list-group-item list-group-item-action py-2 ripple navlink"
          >
            <i className="fas fa-users fa-fw me-3" />
            <span>Users</span>
          </Link>
          <Link
            to="/chats"
            className="list-group-item list-group-item-action py-2 ripple navlink"
          >
            <i className="fas fa-comments fa-fw me-3">
              <span className="badge rounded-pill badge-notification bg-danger">
                1
              </span>
            </i>
            <span>Chats </span>
          </Link>
          <Link
            to="#"
            className="list-group-item list-group-item-action py-2 ripple navlink"
          >
            <i className="fa fa-fw me-3 fa-puzzle-piece" />
            <span>Events</span>
          </Link>
          <Link
            to="#"
            className="list-group-item list-group-item-action py-2 ripple navlink"
          >
            <i className="fas fa-fw me-3 fa-cubes" />
            <span>Packages</span>
          </Link>
          <Link
            to="#"
            className="list-group-item list-group-item-action py-2 ripple navlink"
          >
            <i className="fas fa-fw me-3 fa-cog" />
            <span>Setting</span>
          </Link>
          <Link
            to="/services"
            className="list-group-item list-group-item-action py-2 ripple navlink"
          >
            <i className="fas fa-building fa-fw me-3" />
            <span>Services</span>
          </Link>
          <Link
            to="#"
            className="list-group-item list-group-item-action py-2 ripple navlink"
          >
            <i className="fas fa-calendar fa-fw me-3" />
            <span>Shedule</span>
          </Link>

          <Link
            to="#"
            className="list-group-item list-group-item-action py-2 ripple navlink"
          >
            <i className="fas fa-money-bill fa-fw me-3" />
            <span>Payment</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
