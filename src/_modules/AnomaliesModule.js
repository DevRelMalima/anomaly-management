import React from 'react';

import NewAnomalyView from "../_views/_aimViews/NewAnomalyView";
import NewAnomaliesView from "../_views/_aimViews/NewAnomaliesView";
import AnomaliesView from "../_views/_aimViews/AnomaliesView";
import UserAnomaliesView from "../_views/_aimViews/UserAnomaliesView";
import AnomalyStatisticsView from '../_views/_aimViews/AnomalyStatisticsView'
import AnalysedAnomaliesView from '../_views/_aimViews/AnalysedAnomaliesView'
import ApprovedAnomaliesView from '../_views/_aimViews/ApprovedAnomaliesView'
import RiskMatrixView from '../_views/_aimViews/RiskMatrixView'
import ExcelDataImportView from '../_views/_aimViews/ExcelDataImportView'
import AnomaliesReportView from '../_views/_aimViews/AnomaliesReportView'

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
import axios from 'axios'

import { authenticationService } from '@/_services';

function AnomaliesModule(props) {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  //const [currentUser, setCurrentUser] = React.useState(authenticationService.currentUserValue);
  const currentUser = authenticationService.currentUserValue;

  const currentUserPermissions = props.anomalyPermissions.find(i => i.user == currentUser.id);

  const getUserPermissions = (user) => 
  {
      let userPermissions = props.anomalyPermissions.find(i => i.user == user.id);

      if(!userPermissions) 
      {
        return {
          user: user.id,
          canAnalyse:false,
          canCreate:true,
          canReview: false,
          canSetStatus: false
        }
      }
      else return userPermissions;
  }

  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }
  
  const menuItems = [
    getUserPermissions(currentUser).canCreate && {
      id:"1",
      key:"1",
      caption:"New Anomaly",
      secondaryCaption:"Create a new anomaly",
      link:"/anomalies/new"
    },
    getUserPermissions(currentUser).canCreate && {
      id:"2",
      key:"2",
      caption:"Excel Import",
      secondaryCaption:"Import anomalies from excel",
      link:"/anomalies/excel_data_import"
    },
    {
      id:"3",
      key:"3",
      caption:"All Anomalies ",
      secondaryCaption:"View all anomalies",
      link:"/anomalies/all_anomalies",
      showBadge:true,
      badgeContent:props.anomalies.length
    },
    {
      id:"4",
      key:"4",
      caption:"Anomalies Raised by Me",
      secondaryCaption:"View all anomalies raised by me",
      link:"/anomalies/user_anomalies",
      showBadge:true,
      badgeContent:props.anomalies.filter(i => i.user == currentUser.id).length
    },
    {
      id:"5",
      key:"5",
      caption:"New Anomalies ",
      secondaryCaption:"View all new anomalies, pending analysis",
      link:"/anomalies/new_anomalies",
      showBadge:true,
      badgeContent:props.anomalies.filter(i => i.isAnalysed == false).length
    },
    {
      id:"6",
      key:"6",
      caption:"Analysed Anomalies ",
      secondaryCaption:"View all analysed anomalies, pending approval",
      link:"/anomalies/analysed_anomalies",
      showBadge:true,
      badgeContent:props.anomalies.filter(i => i.isAnalysed == true && i.isReviewed == false).length
    },
    {
      id:"7",
      key:"7",
      caption:"Approved Anomalies ",
      secondaryCaption:"View all approved anomalies",
      link:"/anomalies/approved_anomalies",
      showBadge:true,
      badgeContent:props.anomalies.filter(i => i.isAnalysed == true && i.isReviewed & i.isApproved).length
    },      
    {
      id:"8",
      key:"8",
      caption:"Report",
      secondaryCaption:"Print Anomalies Summary Report",
      link:"/anomalies/report",
    },  
    /*{
      id:"8",
      key:"8",
      caption:"Attachments",
      secondaryCaption:"View all anomaly documents",
      link:"/anomalies/attachments"
    },*/
  ]

  console.warn("menuItems", menuItems.filter(i => i != false));

  axios.interceptors.request.use(config => {
           
    config.headers = {...config.headers,'Access-Control-Allow-Origin': '*'};
    
    return config;

  })

    
  const drawerMenu = drawer(menuItems.filter(i => i != false), classes, props.location && props.location.pathname);

  
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
       <Route
          path='/anomalies/new'
          render={(props) => <NewAnomalyView {...props} isNew={true} isEdit={false} />}
        />
        <Route
          path='/anomalies/analyse_anomaly/:anomalyId'
          render={(props) => <NewAnomalyView {...props} isNew={false} />}
        /> 
        <Route path="/anomalies/all_anomalies" component={AnomaliesView} />
        <Route path="/anomalies/user_anomalies" component={UserAnomaliesView} />
        <Route path="/anomalies/new_anomalies" component={NewAnomaliesView} />
        <Route path="/anomalies/edit/:anomalyId" render={(props) => <NewAnomalyView {...props} isEdit={true} isNew={false} />} />        
        <Route path="/anomalies/copy/:anomalyId" render={(props) => <NewAnomalyView {...props} isEdit={false} isCopy={true} isNew={true} />} />
        <Route path="/anomalies/analysed_anomalies" component={AnalysedAnomaliesView} />
        <Route path="/anomalies/approved_anomalies" component={ApprovedAnomaliesView} />
        <Route path="/anomalies/excel_data_import" component={ExcelDataImportView} />
        
        <Route path="/anomalies/riskmatrix" component={RiskMatrixView} />       
        <Route path="/anomalies/statistics" component={AnomalyStatisticsView} />    
        <Route path="/anomalies/report" component={AnomaliesReportView} />        
        <Route path="/" component={AnomaliesView} />                 
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
      anomalyPermissions : state.anomalyPermissions
    };
};

export default connect(mapStateToProps,mapDispatchToProps)(AnomaliesModule);
