import React from "react";
import SettingsIcon from "@/_images/icons/settings_icon.inline.svg";
import FileManagerIcon from "@/_images/icons/filemanager_icon.inline.svg";
import AnomalyManagementIcon from "@/_images/icons/project_management_icon.inline.svg";
import ProfileIcon from "@/_images/icons/profile_icon.inline.svg";
import NotificationIcon from "@/_images/icons/notification_icon.inline.svg";
import "./SidePanel.css";
import { authenticationService } from "@/_services";
import { history } from "@/_helpers";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";

const modules = [
  {
    name: "Anomalies",
    link: "/anomalies",
    color: "FF9900",
    icon: <AnomalyManagementIcon />,
  },
  {
    name: "Activities",
    link: "/activities",
    color: "FF9900",
    icon: <AnomalyManagementIcon />,
  },
  {
    name: "Risk Matrix & Analytics",
    link: "/analytics",
    color: "FF0099",
    icon: <AnomalyManagementIcon />,
  },
  {
    name: "File Manger",
    link: "/filemanager",
    color: "0277bd",
    icon: <FileManagerIcon />,
  },
  {
    name: "Profile",
    link: "/profile",
    color: "990099",
    icon: <ProfileIcon />,
  },
  {
    name: "Notification",
    link: "/notifications",
    color: "990099",
    icon: <NotificationIcon />,
  },
  {
    name: "Setup",
    link: "/setup",
    color: "FF0099",
    icon: <SettingsIcon />,
  },
];
function SidePanel({handleDrawerToggle, mobileOpen}) {
  function logout() {
    authenticationService.logout();
    history.push("#/login");
    // eslint-disable-next-line no-restricted-globals
    location.reload(true);
  }
  return (
    <div className={`sidePanel_dash${mobileOpen? " mobile" : ""}`}>
      <br />
      {modules.map((module, i) => (
        <>
          <Link className="sidePanel_links" to={module.link}>
            {module.icon}
            {module.name}
          </Link>
        </>
      ))}
      <Button
        className="sidePanel_btn"
        onClick={() => logout()}
      >
        Logout
      </Button>
    </div>
  );
}

export default SidePanel;
