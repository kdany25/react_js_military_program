import "./sidebar.css";
import {
  LineStyle,
  PermIdentity,
  BarChart,
  DynamicFeed,
  ChatBubbleOutline,
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
            <li className="sidebarListItem">
              <PermIdentity className="sidebarIcon" />
              Patient
            </li>

            <li className="sidebarListItem">
              <BarChart className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Building</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <HouseTwoTone className="sidebarIcon" />
              House
            </li>

            <li className="sidebarListItem">
              <BarChart className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Roads</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <HouseRounded className="sidebarIcon" />
              Roads
            </li>

            <li className="sidebarListItem">
              <BarChart className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <DynamicFeed className="sidebarIcon" />
              Feedback
            </li>
            <li className="sidebarListItem">
              <ChatBubbleOutline className="sidebarIcon" />
              Messages
            </li>
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
