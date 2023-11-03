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
//import NotificationsIcon from '@material-ui/icons/Notifications';
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import AppsOutlined from "@material-ui/icons/AppsOutlined";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { authenticationService } from "@/_services";
import { history } from "@/_helpers";
//import ProjectTaskGroupsView from '@/_views/_projects/ProjectTaskGroupsView'
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import Link from "@material-ui/core/Link";
import { Link as RouterLink, Route, Switch } from "react-router-dom";
import Logo from "@/_images/grasp_logo.inline.svg";
import { isNullOrUndefined } from "util";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import { blue, red } from "@material-ui/core/colors";
import CustomAppBar from "./CustomAppBar";
import SettingsIcon from "@/_images/icons/settings_icon.inline.svg";
import FileManagerIcon from "@/_images/icons/filemanager_icon.inline.svg";
import ProjectManagementIcon from "@/_images/icons/project_management_icon.inline.svg";
import AnomalyManagementIcon from "@/_images/icons/project_management_icon.inline.svg";
import ProfileIcon from "@/_images/icons/profile_icon.inline.svg";
import NotificationIcon from "@/_images/icons/notification_icon.inline.svg";
//import Typography from '@material-ui/core/Typography';
import AnomalyDashboard from "./aimComponents/AnomalyDashboardView";
import SidePanel from "./aimComponents/side-panel/SidePanel";
import RiskMatrix from "./aimComponents/risk-matrix/RiskMatrix";
import "./ModulesView.css";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  moduleIcon: {
    fontSize: 30,
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: "#ffffff",
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
    background: "#f0f3fb",
    minHeight: "100vh",

    padding: theme.spacing(10, 1.5),
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
  paper: {
    height: 100,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
  card: {
    maxWidth: 80,
    minWidth: 80,
    margin: theme.spacing(2, 1.5),
    backgroundColor: "rgba(250,250,250, 0.9)",
  },
  media: {
    height: 40,
  },
  appTitle: {
    cursor: "pointer",
    background: "#222222",
    borderRadius: 12,
    textAlign: "center",
    color: "#FFFFFF",
    fontSize: 12,
    padding: 2,
    paddingLeft: 12,
    paddingRight: 12,
    margin: 5,
    marginLeft: 8,
    "&:hover": {
      backgroundColor: "#27aae1",
    },
  },
}));

const renderLink = React.forwardRef((itemProps, ref) => (
  // with react-router-dom@^5.0.0 use `ref` instead of `innerRef`
  <RouterLink {...itemProps} ref={ref} />
));

class ListItemLink extends React.Component {
  /*renderLink = React.forwardRef((itemProps, ref) => (
      // with react-router-dom@^5.0.0 use `ref` instead of `innerRef`
      <RouterLink to={this.props.to} {...itemProps} ref={ref} />
    ));*/

  //<RouterLink to={this.props.to} />
  render() {
    console.log(this.props);
    const { icon, primary, key, to } = this.props;
    return (
      <li>
        <ListItem key={key} to={to} button component={renderLink}>
          <ListItemIcon>{icon}</ListItemIcon>
          <ListItemText primary={primary} />
        </ListItem>
      </li>
    );
  }
}

/*ListItemLink.propTypes = {
  icon: PropTypes.node.isRequired,
  primary: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
};*/
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
function ModulesView(props) {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState(
    authenticationService.currentUserValue
  );

  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }

  function logout() {
    authenticationService.logout();
    history.push("#/login");
  }

  return (
    <div
      className={classes.root}
      onClick={
        mobileOpen
          ? () => {
              handleDrawerToggle();
            }
          : null
      }
    >
      <SidePanel
        handleDrawerToggle={handleDrawerToggle}
        mobileOpen={mobileOpen}
      />
      <CssBaseline />
      <CustomAppBar
        {...props}
        handleDrawerToggle={handleDrawerToggle}
      />

      <main className={classes.content + " mainModulContainer"}>
        <></>
        <div
          style={{
            display: "flex",
            float: "right",
            width: "85%",
            justifyContent: "flex-start",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* <div
            style={{
              margin: 10,
              width: "90%",
              minWidth: 360,
              minHeight: 100,
              background: "rgba(20,20,20,0.1)",
              padding: 10,
              border: "0px solid #CCCCCC",
              borderRadius: 5,
            }}
          >
            <div>
              {modules.map((module) => (
                <div
                  style={{
                    padding: 25,
                    display: "inline-block",
                    alignItems: "center",
                  }}
                  key={module.link}
                  item
                >
                  {module.icon ? (
                    <Grid
                      container
                      justify="center"
                      onClick={() => history.push(module.link)}
                    >
                      {module.icon}
                    </Grid>
                  ) : (
                     <Grid
                      container
                      justify="center"
                      onClick={() => history.push(module.link)}
                    >
                      <div
                        style={{
                          display: "inline-block",
                          border: "1px solid #999999",
                          borderRadius: 3,
                        }}
                      >
                        <AppsOutlined
                          style={{ color: module.color }}
                          className={classes.moduleIcon}
                          component={(svgProps) => {
                            return (
                              <svg {...svgProps}>
                                <defs>
                                  <linearGradient id="gradient1">
                                    <stop
                                      offset="30%"
                                      stopColor={blue[400]}
                                    />
                                    <stop
                                      offset="70%"
                                      stopColor={red[400]}
                                    />
                                  </linearGradient>
                                </defs>
                                {React.cloneElement(
                                  svgProps.children[0],
                                  {
                                    fill: "url(#gradient1)",
                                  }
                                )}
                              </svg>
                            );
                          }}
                        />
                      </div>
                    </Grid> 
                  )}
                  <div align="center">
                    <Typography
                      onClick={() => props.history.push(module.link)}
                      className={classes.appTitle}
                      style={{ display: "inline-block" }}
                      variant="h6"
                      component="h2"
                    >
                      {module.name}
                    </Typography>
                  </div>
                </div>
              ))} 
            </div>
          </div>*/}
          <div
            style={{
              // display: "flex",
              width: "95%",
              minHeight: 500,
              background: "none",
              padding: 10,
              border: 0,
              borderRadius: 5,
            }}
          >
            <h1
              style={{
                marginLeft: 10,
                color: "#1c75bc",
              }}
            >
              Dashboard
            </h1>
            <RiskMatrix />
            <AnomalyDashboard />
          </div>
        </div>
      </main>
    </div>
  );
}

//export {DrawerView}
const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser,
  };
};

export default withRouter(connect(mapStateToProps)(ModulesView));
