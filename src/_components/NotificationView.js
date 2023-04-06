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

import NotificationsView from '@/_views/_notifications/NotificationsView'
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import Link from '@material-ui/core/Link';
import { Link as RouterLink, Route , Switch} from 'react-router-dom';
import Logo from '@/_images/grasp_logo.inline.svg';
import {isNullOrUndefined} from 'util';
import {connect} from 'react-redux';
import Box from '@material-ui/core/Box';
import CustomAppBar from './CustomAppBar';
import {useStyles} from '@/_utilities/CommonStyles'
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
      caption:"Notifications",
      secondaryCaption:"Notifications",
      link:"/notifications/"
    },
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

  
  const drawerMenu = drawer(menuItems, classes);
  
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
        <Route path="/notifications/" component={NotificationsView} />                   
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