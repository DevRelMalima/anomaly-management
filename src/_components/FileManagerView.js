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
import FilesView from '@/_views/_fileManager/FilesView';
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
import {ListItemLink} from '@/_utilities/SideMenu';
import {drawer} from '../common/sideMenuComponents'

/*const renderLink = React.forwardRef((itemProps, ref) => (
    // with react-router-dom@^5.0.0 use `ref` instead of `innerRef`
    <RouterLink {...itemProps} ref={ref} />
  ));

class ListItemLink extends React.Component {
    
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
  }

  /*ListItemLink.propTypes = {
  icon: PropTypes.node.isRequired,
  primary: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
};*/

function FileManagerView(props) {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState(authenticationService.currentUserValue);


  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }
 
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
      <List >
      {['File Manager', 'Storage Statistics'].map((text, index) => (
            <ListItemLink  button key={text} to={index % 2 === 0 ? "/dashboard/projects": "/profile"} primary={text} icon={index % 2 === 0 ? <InboxIcon /> : <MailIcon />} />
        ))}
      </List>
    </div>
  );*/
  const menuItems = [
    {
      id:"1",
      caption:"File Manager",
      secondaryCaption:"File Manager",
      link:"/filemanager"
    },
    /*{
      id:"2",
      caption:"Storage Information",
      secondaryCaption:"Storage Statistics",
      link:"/filemanager"
    },*/
  ]
  const drawerMenu = drawer(menuItems, classes, props.location.pathname);
 
  return (
    <div className={classes.content}>
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
        <Route path="/filemanager/:folderId" 
        render={(props) => <FilesView {...props} isInDialogView={false} />}
        />
        <Route path="/filemanager" render={(props) => <FilesView {...props} isInDialogView={false} />}
        />   
       </Switch>
      </main>
    </div>
    </div>
  );
}

//export {DrawerView}
const mapStateToProps= (state) => {
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps)(FileManagerView);