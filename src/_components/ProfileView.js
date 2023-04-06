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
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { authenticationService } from '@/_services';
import { history } from '@/_helpers';
//import ProjectView from '@/_views/_projects/ProjectView';
import UserProfileView from '@/_views/_user/UserProfileView';
import PasswordUpdateView from '@/_views/_user/PasswordUpdateView';
//import ProjectTaskGroupsView from '@/_views/_projects/ProjectTaskGroupsView'
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import Link from '@material-ui/core/Link';
import { Link as RouterLink, Route , Switch} from 'react-router-dom';
import Logo from '@/_images/grasp_logo.inline.svg';
import {isNullOrUndefined} from 'util';
import {connect} from 'react-redux';
import Box from '@material-ui/core/Box';
import AppsOutlined from '@material-ui/icons/AppsOutlined';
import CustomAppBar from './CustomAppBar';
import {useStyles} from '@/_utilities/CommonStyles'
import {ListItemLink} from '@/_utilities/SideMenu'
import {drawer} from '../common/sideMenuComponents'

/*const drawerWidth = 240

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
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(7,3),
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
}));*/

/*const renderLink = React.forwardRef((itemProps, ref) => (
    // with react-router-dom@^5.0.0 use `ref` instead of `innerRef`
    <RouterLink {...itemProps} ref={ref} />
  ));*/

/*class ListItemLink extends React.Component {
    

      //<RouterLink to={this.props.to} />
    render() {
        console.log(this.props);
      const { icon, primary, key, to } = this.props;
      return (
        <li>
          <ListItem key={key} to={to} button component={renderLink }>
            <ListItemIcon>{icon}</ListItemIcon>
            <ListItemText primary={primary} />
          </ListItem>
        </li>
      );
    }
  }*/

  /*ListItemLink.propTypes = {
  icon: PropTypes.node.isRequired,
  primary: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
};*/

function ProfileView(props) {
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
      caption:"Update Profile",
      secondaryCaption:"Update profile details",
      link:"/profile"
    },
    {
      id:"2",
      caption:"Update Password",
      secondaryCaption:"Change login password",
      link:"/profile/update_password"
    },
  ]

  /*const drawer = (
    <div>
      <Hidden smDown>
        <div className={classes.toolbar} />
      </Hidden>
      <Divider />
      <List>
        {['Apps'].map((text, index) => (
            <ListItemLink  button key={text} to={index % 2 === 0 ? "/": "/"} primary={text} icon={index % 2 === 0 ? <AppsOutlined /> : <AppsOutlined />} />
        ))}
      </List>
      <Divider />
      <List>
      {menuItems.map((menuItem) => (
            <ListItemLink  button key={menuItem.id} to={menuItem.link} primary={menuItem.caption}  secondary={menuItem.secondaryCaption} icon={<MailIcon />} />
        ))}
      </List>
    </div>
  );*/

  const drawerMenu = drawer(menuItems, classes, props.location.pathname);

  /*function userAvatar()
    {
      if(!isNullOrUndefined(props.currentUser) && !isNullOrUndefined(props.currentUser.profilePictureUrl))
      {
        return <Avatar alt="Remy Sharp" src={props.currentUser.profilePictureUrl} className={classes.smallAvatar} />            
      }
      else
      {
        return <Avatar alt="Remy Sharp" className={classes.smallAvatar}>KN</Avatar>            
      }
    }*/

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
        <Route path="/profile/update_password" component={PasswordUpdateView} />    
        <Route path="/profile" component={UserProfileView} />           
       </Switch>
      </main>
    </div>
  );
}

//export {ProfileView}
const mapStateToProps= (state) => {
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps)(ProfileView);