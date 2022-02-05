import React from "react";
import "./topbar.css";
import { NotificationsNone} from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Military Outreach</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          
          
          <img src="https://i.ibb.co/NWGzRZW/recent1.png" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  );
}