import "./sidebar.css";
import {
  LineStyle,
  PermIdentity,
  BarChart,
  DynamicFeed,
  HouseTwoTone,
  HouseRounded,
} from "@material-ui/icons";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className="sidebarListItem active">
                <LineStyle className="sidebarIcon" />
                Home
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Health</h3>
          <ul className="sidebarList">
          <Link to="/newHealthPlan" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Health Plan
              </li>
            </Link>
            <Link to="/patients" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Patient
              </li>
            </Link>
            <li className="sidebarListItem">
              <BarChart className="sidebarIcon" />
              Analytics
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Building</h3>
          <ul className="sidebarList">
          <Link to="/newHousePlan" className="link">
              <li className="sidebarListItem">
                <HouseTwoTone className="sidebarIcon" />
                House Plan
              </li>
            </Link>
            <Link to="/houses" className="link">
              <li className="sidebarListItem">
                <HouseTwoTone className="sidebarIcon" />
                House
              </li>
            </Link>
            <li className="sidebarListItem">
              <BarChart className="sidebarIcon" />
              Analytics
            </li>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Roads</h3>
          <ul className="sidebarList">
          <Link to="/newR" className="link">
              <li className="sidebarListItem">
                <HouseRounded className="sidebarIcon" />
                Roads Plan
              </li>
            </Link>
            <Link to="/roads" className="link">
              <li className="sidebarListItem">
                <HouseRounded className="sidebarIcon" />
                Roads
              </li>
            </Link>
            <li className="sidebarListItem">
              <BarChart className="sidebarIcon" />
              Analytics
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <Link to="/newUSer" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Add a User
              </li>
            </Link>
            <li className="sidebarListItem">
              <BarChart className="sidebarIcon" />
              Report
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Reach to Us</h3>
          <ul className="sidebarList">
            <Link to="/contact" className="link">
              <li className="sidebarListItem">
                <DynamicFeed className="sidebarIcon" />
                Feedback
              </li>
            </Link>
          </ul>
        </div>

        <div className="sidebarMenu">
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <div className="sidebarIcon log">
                <span class="material-icons-sharp">logout</span>
              </div>
              Logout
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
