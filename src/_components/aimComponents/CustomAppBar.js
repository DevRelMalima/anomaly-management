import React from "react";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import List from "@material-ui/core/List";
import Badge from "@material-ui/core/Badge";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";

//import { authenticationService } from '@/_services';
import { history } from "../../utility/history";

import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import Link from "@material-ui/core/Link";
import { Redirect } from "react-router-dom";

import Logo from "../../_images/aim_logo.inline.svg";

import { isNullOrUndefined } from "util";
import { connect } from "react-redux";
import Box from "@material-ui/core/Box";
import AppsOutlined from "@material-ui/icons/AppsOutlined";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
//import { HashRouter, Route, Link , Switch} from 'react-router-dom';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  root: {
    display: "flex",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: "rgba(250,250,250, 1)",
    color: "#555555",
  },
  menuButton: {
    marginRight: theme.spacing(0),
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
  toolbar: theme.mixins.toolbar,
  toolbarTitle: {
    flexGrow: 1,
    verticalAlign: "middle",
  },
  smallAvatar: {
    margin: 4,
    width: 32,
    height: 32,
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(7, 3),
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
}));

const CustomAppBar = (props) => {
  const classes = useStyles();
  const [toProfile, setToprofile] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  function userAvatar() {
    if (props.currentUser && props.currentUser.profilePictureId) {
      return (
        <Avatar
          alt="Remy Sharp"
          src={
            " /users/profilepicture/" +
            props.currentUser.id +
            "/" +
            props.currentUser.profilePictureId
          }
          className={classes.smallAvatar}
        />
      );
    } else {
      return (
        <Avatar
          alt="Remy Sharp"
          className={classes.smallAvatar}
          style={{
            fontSize: 14,
            background: props.currentUser.userColor,
          }}
        >
          {props.currentUser.firstName &&
          props.currentUser.firstName != ""
            ? props.currentUser.firstName.charAt(0)
            : ""}
          {props.currentUser.lastName &&
          props.currentUser.lastName != ""
            ? props.currentUser.lastName.charAt(0)
            : ""}
        </Avatar>
      );
    }
  }

  function logout() {
    //authenticationService.logout();
    history.push("#/login");
    location.reload(true);
  }

  function goToNotifications() {
    history.push("#/notifications");
  }

  return (
    <AppBar position="fixed" className={classes.appBar}>
      {/*toProfile === true && <Redirect to='/notification' /> */}
      <Toolbar className={classes.toolbar}>
        <IconButton
          color="inherit"
          aria-label="Open drawer"
          edge="start"
          onClick={props.handleDrawerToggle}
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>

        <div className={classes.toolbarTitle}>
          <Logo />
        </div>

        <IconButton
          color="inherit"
          onClick={() => goToNotifications()}
        >
          {props.notifications &&
          props.notifications.filter((n) => n.isRead == false)
            .length > 0 ? (
            <Badge
              badgeContent={
                props.notifications.filter((n) => n.isRead == false)
                  .length
              }
              color="secondary"
            >
              <NotificationsIcon />
            </Badge>
          ) : (
            <Badge badgeContent={0} color="secondary">
              <NotificationsIcon />
            </Badge>
          )}
        </IconButton>

        {props.currentUser.isOnline ? (
          <Badge badgeContent={0} color="secondary" variant="dot">
            {userAvatar()}
          </Badge>
        ) : (
          userAvatar()
        )}

        <Box>
          <Typography
            variant="h6"
            style={{ fontSize: 14, marginTop: 0, marginBottom: 0 }}
            color="inherit"
            noWrap
          >
            {props.currentUser && props.currentUser.firstName
              ? props.currentUser.firstName
              : ""}{" "}
            {props.currentUser && props.currentUser.lastName
              ? props.currentUser.lastName
              : ""}
          </Typography>
          <Typography
            variant="h6"
            style={{ fontSize: 10, marginTop: 0 }}
            color="inherit"
            noWrap
          >
            {props.currentUser && props.currentUser.username
              ? props.currentUser.username
              : ""}
          </Typography>
        </Box>


        <Button
        className="sidePanel_btn"
        onClick={() => logout()}
      >
        Logout
      </Button>
        <IconButton
          aria-label="more"
          aria-controls="long-menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          <MoreVertIcon />
        </IconButton>
        <Menu
          id="long-menu"
          anchorEl={anchorEl}
          keepMounted
          open={open}
          onClose={handleClose}
          PaperProps={{
            style: {
              width: 200,
            },
          }}
        >
          {/*<MenuItem onClick={()=>{handleClose();setToprofile(true)}}>Profile</MenuItem>*/}
          <MenuItem onClick={() => logout()}>Logout</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

//export {DrawerView}
const mapStateToProps = (state) => {
  return {
    currentUser: state.userStore.currentUser,
    notifications: state.userStore.notifications,
  };
};

export default connect(mapStateToProps)(CustomAppBar);
