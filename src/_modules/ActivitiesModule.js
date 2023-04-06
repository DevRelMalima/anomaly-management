import React from 'react';

import NewAnomalyView from "../_views/_aimViews/NewAnomalyView";
import AnomaliesView from "../_views/_aimViews/AnomaliesView";
import ActivitiesView from "../_views/_aimViews/ActivitiesView";
import AnomalyStatisticsView from '../_views/_aimViews/AnomalyStatisticsView'
import AnalysedAnomaliesView from '../_views/_aimViews/AnalysedAnomaliesView'
import RiskMatrixView from '../_views/_aimViews/RiskMatrixView'

import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';

import useTheme from '@material-ui/core/styles/useTheme';

import { Link as RouterLink, Route , Switch, HashRouter} from 'react-router-dom';
//import Logo from '@/_images/grasp_logo.inline.svg';
import {isNullOrUndefined} from 'util';
import {connect} from 'react-redux';
import CustomAppBar from '../_components/CustomAppBar';
import {useStyles} from '../common/customStyles'
import {ListItemLink, drawer,Copyright} from '../common/sideMenuComponents'
//import {setCaseRecords} from '../redux/actions'
import axios from 'axios';
import moment from 'moment';


function ActivitiesModule(props) {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  //const [currentUser, setCurrentUser] = React.useState(authenticationService.currentUserValue);


  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }
  
  const menuItems = [
   
    {
      id:"1",
      key:"1",
      caption:"All Activities ",
      secondaryCaption:"View all activities",
      link:"/activities/all_activities",
      showBadge:true,
      badgeContent:props.anomalies.filter(i => i.action != null).length
    },
    {
      id:"2",
      key:"2",
      caption:"Closed out actions",
      secondaryCaption:"View all closed out actions",
      link:"/activities/closed_out_anomalies",
      showBadge:true,
      badgeContent:props.anomalies.filter(i => i.status == "CLOSED").length
    },
    {
      id:"3",
      key:"3",
      caption:"Overdue actions",
      secondaryCaption:"View all overdue actions",
      link:"/activities/overdue_anomalies",
      showBadge:true,
      badgeContent:props.anomalies.filter(i => i.status != "CLOSED" && moment(new Date(i.closeOutDate)) <= moment(new Date())).length
    },
  ]

  axios.interceptors.request.use(config => {
           
    config.headers = {...config.headers,'Access-Control-Allow-Origin': '*'};
    
    return config;

  })

    
  const drawerMenu = drawer(menuItems, classes, props.location && props.location.pathname);

  
  return (
    <div className={classes.root} > 
      <HashRouter>
            
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
      <main className={classes.content} style={{paddingTop:80, }}>        
       <Switch>        
       
        <Route path="/activities/all_activities" component={ActivitiesView} />
        <Route path="/activities/overdue_anomalies" render={(props) => <AnomaliesView {...props} showOnlyOverDue={true} />} />        
        <Route path="/activities/closed_out_anomalies" render={(props) => <AnomaliesView {...props} showOnlyClosedOut={true} />} />
            
        <Route path="/" component={ActivitiesView} />                 
       </Switch>
      </main>
      </HashRouter>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    setCaseRecords:(data) => {dispatch(setCaseRecords(data))},   
   // addUpdate:(data) => {dispatch(addUpdate(data))},   
  }
}
const mapStateToProps = state => {
  
  return {
      anomalies:state.anomalies,
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(ActivitiesModule);
