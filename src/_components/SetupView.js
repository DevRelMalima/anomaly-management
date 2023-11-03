import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';

import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import AppsOutlined from '@material-ui/icons/AppsOutlined';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { authenticationService } from '@/_services';
import { history } from '@/_helpers';
//import ProjectView from '@/_views/_projects/ProjectView';
//import ProjectTableView from '@/_views/_projects/ProjectTableView';
//import ProjectTaskGroupsView from '@/_views/_projects/ProjectTaskGroupsView'
import CompanySetupView from '@/_views/_setup/CompanySetupView'
import DepartmentSetupView from '@/_views/_setup/departmentSetupView'
import RolesSetupView from '@/_views/_setup/RolesSetupView'
import UsersSetupView from '@/_views/_user/UsersSetupView'
import JobTitlesSetupView from '@/_views/_setup/jobTitlesSetupView'
import AccountSettingsView from '@/_views/_setup/AccountSettingsView'

import PlatformSetupView from '@/_views/_setup/aim/PlatformSetupView'
import AnomalyClassSetupView from '@/_views/_setup/aim/AnomalyClassSetupView'
import AnomalyActionSetupView from '@/_views/_setup/aim/AnomalyActionSetupView'
import AnomalySystemSetupView from '@/_views/_setup/aim/AnomalySystemSetupView'
import AnomalyPermissionSetupView from '@/_views/_setup/aim/AnomalyPermissionSetupView'
import AnomalyOptionsSetupView from '@/_views/_setup/aim/AnomalyOptionsSetupView'

import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import Link from '@material-ui/core/Link';
import { Link as RouterLink, Route , Switch} from 'react-router-dom';
import Logo from '@/_images/grasp_logo.inline.svg';
import {isNullOrUndefined} from 'util';
import {connect} from 'react-redux';
import Box from '@material-ui/core/Box';
import UserProfileView from '../_views/_user/UserProfileView';
import CustomAppBar from './CustomAppBar';
import {useStyles} from '@/_utilities/CommonStyles'
import {ListItemLink} from '@/_utilities/SideMenu'
import {drawer} from '../common/sideMenuComponents'
/*const drawerWidth = 260

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
    
  },
  appBar: {
    zIndex: theme.zIndex.drawer +1,
    backgroundColor:'rgba(250,250,250, 1)',
    color:'#555555',
  },
  menuButton: {
    marginRight: theme.spacing(0),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  toolbarTitle: {
    flexGrow: 1,
    verticalAlign:'middle'
  },
  smallAvatar: {
    margin: 4,
    width: 32,
    height: 32,
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  drawerPaper: {
    width: drawerWidth,
    background:'#EFEFEF',
    color:'#1c75bc'
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(7,3),
    background:'#dae5e6',
    minHeight: '100vh'
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
}));

*/

function SetupView(props) {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState(authenticationService.currentUserValue);

  //console.log('router-info', props.location)
  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }

  function logout() {
    authenticationService.logout();
    history.push('/login');
  }

  const menuItems = [
    {
      id:"1",
      caption:"Users",
      secondaryCaption:"Manage User Accounts",
      link:"/setup/users"
    },
    {
      id:"2",
      caption:"Roles",
      secondaryCaption:"Create Roles",
      link:"/setup/roles"
    },
    {
      id:"3",
      caption:"Job titles",
      secondaryCaption:"User Job titles",
      link:"/setup/jobtitles"
    },
    {
      id:"4",
      caption:"Companies",
      secondaryCaption:"Create & Manage Companies",
      link:"/setup/companies"
    },
    {
      id:"5",
      caption:"Departments",
      secondaryCaption:"Create departments",
      link:"/setup/departments"
    },
    {
      id:"6",
      caption:"Facilities",
      secondaryCaption:"Create Facilities ",
      link:"/setup/platforms"
    },
    {
      id:"7",
      caption:"Anomaly Classes",
      secondaryCaption:"Manage & define anomaly classes ",
      link:"/setup/anomaly_classes"
    },
    {
      id:"8",
      caption:"Anomaly Actions",
      secondaryCaption:"Manage & define anomaly actions ",
      link:"/setup/anomaly_actions"
    },
    {
      id:"9",
      caption:"Systems",
      secondaryCaption:"Define system types",
      link:"/setup/anomaly_systems"
    },
    // {
    //   id:"10",
    //   caption:"Priority",
    //   secondaryCaption:"Manage & define priorities",
    //   link:"/setup/priorities"
    // },
    // {
    //   id:"11",
    //   caption:"LoFs",
    //   secondaryCaption:"Manage & define failure likelihood",
    //   link:"/setup/lofs"
    // },
    // {
    //   id:"12",
    //   caption:"SoFs",
    //   secondaryCaption:"Manage & define failure severity",
    //   link:"/setup/sofs"
    // },
    // {
    //   id:"13",
    //   caption:"CoFs",
    //   secondaryCaption:"Manage & define failure consequenses",
    //   link:"/setup/cofs"
    // },
    {
      id:"14",
      caption:"Anomaly Permissions",
      secondaryCaption:"Set user anomaly permissions",
      link:"/setup/anomaly_permissions"
    },
    {
      id:"15",
      caption:"Anomaly Options",
      secondaryCaption:"Set global anomaly options",
      link:"/setup/anomaly_options"
    },
    /*{
      id:"16",
      caption:"Account Settings",
      secondaryCaption:"Set global settings",
      link:"/setup/account_settings"
    },*/
    
  ]

  /*const drawer = (
    <div>
      <Hidden >
        <div className={classes.toolbar} />
      </Hidden>
      <Divider />
      <List>
        {['Apps'].map((text, index) => (
            <ListItemLink showIcon={true}  button key={text} to={"/"} primary={text} icon={<AppsOutlined style={{color:'#1c75bc'}} />} />
        ))}
      </List>
      <Divider />
      <List>
      {menuItems.map((menuItem) => (
            <ListItemLink showIcon={false} button key={menuItem.id} to={menuItem.link} primary={menuItem.caption}  secondary={menuItem.secondaryCaption} icon={<MailIcon />} />
        ))}
      </List>
    </div>
  );*/

  
  const drawerMenu = drawer(menuItems, classes, props.location.pathname);
  
  return (
    <div className={classes.root}>
      <CssBaseline /> 
      
      <CustomAppBar {...props} handleDrawerToggle={handleDrawerToggle} />

      <nav className={classes.drawer} aria-label="Mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawerMenu}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawerMenu}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>        
       <Switch>        
        <Route path="/setup/users/user/:userId" component={UserProfileView} /> 
        <Route path="/setup/users" component={UsersSetupView} />         
        <Route path="/setup/companies" component={CompanySetupView} /> 
        <Route path="/setup/roles" component={RolesSetupView} /> 
        <Route path="/setup/jobtitles" component={JobTitlesSetupView} />  
        <Route path="/setup/departments" component={DepartmentSetupView} />  

        {/*Anomalies configuration options*/}
        <Route path="/setup/platforms" component={PlatformSetupView} />         
        <Route path="/setup/anomaly_classes" component={AnomalyClassSetupView} /> 
        <Route path="/setup/anomaly_actions" component={AnomalyActionSetupView} /> 
        <Route path="/setup/anomaly_systems" component={AnomalySystemSetupView} />  
        {/* <Route path="/setup/priorities" component={PrioritySetupView} /> 
        <Route path="/setup/lofs" component={LoFSetupView} />  
        <Route path="/setup/sofs" component={SoFSetupView} />  
        <Route path="/setup/cofs" component={CoFSetupView} />  */}
        <Route path="/setup/anomaly_permissions" component={AnomalyPermissionSetupView} /> 
        <Route path="/setup/anomaly_options" component={AnomalyOptionsSetupView} /> 
        <Route path="/setup/account_settings" component={AccountSettingsView} /> 

        <Route path="/setup/" component={UsersSetupView} />             
       </Switch>
      </main>
    </div>
  );
}

//export {DrawerView}
const mapStateToProps= (state) => {
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps)(SetupView);