import React, { Fragment, Suspense, lazy } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import { trackPromise } from "react-promise-tracker";
import { history } from "@/_helpers";
import { authenticationService } from "@/_services";
//import { PrivateRoute } from '@/_components';
import ProfileView from "@/_components/ProfileView";
import ModulesView from "@/_components/ModulesView";
import FileManagerView from "@/_components/FileManagerView";
import NotificationView from "@/_components/NotificationView";
import Notifier from "@/_components/Notifier";
import UserLogin from "@/_components/UserLogin";
import PrivateRoute from "@/_components/PrivateRoute";
import UserRegistration from "@/_components/UserRegistration";
//import {fetchProjects} from '../_actions/projectActions'
import { connect } from "react-redux";
import axios from "axios";
import { withSnackbar } from "notistack";
import { bindActionCreators } from "redux";
import {
  enqueueSnackbar,
  closeSnackbar,
} from "../_actions/snackbarActions";
import * as SignalR from "@aspnet/signalr";
import Loader from "../_components/Loader";

import { BaseURL } from "./../constants/URLs/urls";
const AnomaliesModule = lazy(() =>
  import("../_modules/AnomaliesModule")
);
const SetupView = lazy(() => import("../_components/SetupView"));
const ActivitiesModule = lazy(() =>
  import("../_modules/ActivitiesModule")
);
const AnalyticsModule = lazy(() =>
  import("../_modules/AnalyticsModule")
);

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
    };

    // console.log(authenticationService.currentUserValue);
    if (authenticationService.currentUserValue != null)
      this.props.dispatch({
        type: "SET_CURRENT_USER",
        currentUser: authenticationService.currentUserValue,
      });
  }

  componentWillMount() {
    authenticationService.currentUser.subscribe((x) =>
      this.setState({ currentUser: x })
    );

    let currentUser = authenticationService.currentUserValue;
    if (currentUser == null) currentUser = this.props.currentUser;

    console.warn("Modules View", this.props);

    axios.interceptors.request.use((config) => {
      if (currentUser && currentUser.token) {
        config.headers = {
          ...config.headers,
          Authorization: `Bearer ${currentUser.token}`,
          "Access-Control-Allow-Origin": "*",
        };
      } else {
        config.headers = {
          ...config.headers,
          "Access-Control-Allow-Origin": "*",
        };
      }

      return config;
    });

    if (authenticationService.currentUserValue == null) return;

    //Load projects
    const fetchData = async () => {
      trackPromise(
        axios
          .get(BaseURL + "/users")
          .then((result) => {
            this.props.enqueueSnackbar(
              "Successfully fetched User data."
            );
            if (result.data.length > 0)
              result.data.map((user) =>
                this.props.dispatch({ type: "CREATE_USER", user })
              );
          })
          .catch((ex) => {
            console.error(ex);
          })
      );

      trackPromise(
        axios
          .get(BaseURL + "/api/files")
          .then((result) => {
            this.props.enqueueSnackbar(
              "Successfully fetched User files."
            );
            console.warn("Files", result.data);
            if (result.data.length > 0)
              this.props.dispatch({
                type: "FETCH_FILES",
                files: result.data,
              });
          })
          .catch((ex) => {
            console.error(ex);
          })
      );

      trackPromise(
        axios
          .get(BaseURL + "/api/folders")
          .then((result) => {
            this.props.enqueueSnackbar(
              "Successfully fetched User folders."
            );
            console.warn("Folders", result.data);
            if (result.data.length > 0)
              this.props.dispatch({
                type: "FETCH_FOLDERS",
                data: result.data,
              });
          })
          .catch((ex) => {
            console.error(ex);
          })
      );

      trackPromise(
        axios
          .get(BaseURL + "/api/accountconfiguration/accountroles")
          .then((result) => {
            enqueueSnackbar("Successfully fetched accountroles.");
            console.warn("accountroles", result.data);
            if (result.data.length > 0)
              this.props.dispatch({
                type: "FETCH_ACCOUNT_ROLES",
                data: result.data,
              });
          })
          .catch((ex) => {
            console.error(ex);
          })
      );

      trackPromise(
        axios
          .get(BaseURL + "/api/accountconfiguration/companies")
          .then((result) => {
            enqueueSnackbar("Successfully fetched accountroles.");
            console.warn("companies", result.data);
            if (result.data.length > 0)
              this.props.dispatch({
                type: "FETCH_COMPANIES",
                data: result.data,
              });
          })
          .catch((ex) => {
            console.error(ex);
          })
      );

      trackPromise(
        axios
          .get(BaseURL + "/api/accountconfiguration/departments")
          .then((result) => {
            enqueueSnackbar("Successfully fetched accountroles.");

            if (result.data.length > 0)
              this.props.dispatch({
                type: "FETCH_DEPARTMENTS",
                data: result.data,
              });
          })
          .catch((ex) => {
            console.error(ex);
          })
      );

      trackPromise(
        axios
          .get(BaseURL + "/api/accountconfiguration/jobtitles")
          .then((result) => {
            enqueueSnackbar("Successfully fetched job titles.");
            console.warn("companies", result.data);
            if (result.data.length > 0)
              this.props.dispatch({
                type: "FETCH_JOB_TITLES",
                data: result.data,
              });
          })
          .catch((ex) => {
            console.error(ex);
          })
      );

      /*-- Anomaly Configurations options --*/

      /*-- Anomalies --*/
      trackPromise(
        axios
          .get(BaseURL + "/api/anomalies")
          .then((result) => {
            enqueueSnackbar("Fetched Anomalies.");
            if (result.data.length > 0)
              this.props.dispatch({
                type: "FETCH_ANOMALIES",
                data: result.data,
              });
          })
          .catch((ex) => {
            console.error(ex);
          })
      );

      /*-- Platforms --*/
      trackPromise(
        axios
          .get(BaseURL + "/api/platform")
          .then((result) => {
            enqueueSnackbar("Fetched Plaforms.");
            if (result.data.length > 0)
              this.props.dispatch({
                type: "FETCH_PLATFORMS",
                data: result.data,
              });
          })
          .catch((ex) => {
            console.error(ex);
          })
      );

      /*-- Anomaly Systems --*/
      trackPromise(
        axios
          .get(BaseURL + "/api/anomalysystem")
          .then((result) => {
            enqueueSnackbar("Fetched Anomaly Systems.");
            if (result.data.length > 0)
              this.props.dispatch({
                type: "FETCH_ANOMALY_SYSTEMS",
                data: result.data,
              });
          })
          .catch((ex) => {
            console.error(ex);
          })
      );

      /*-- Anomaly Classes --*/
      trackPromise(
        axios
          .get(BaseURL + "/api/anomalyclass")
          .then((result) => {
            enqueueSnackbar("Fetched Anomaly Classes.");
            if (result.data.length > 0)
              this.props.dispatch({
                type: "FETCH_ANOMALY_CLASSES",
                data: result.data,
              });
          })
          .catch((ex) => {
            console.error(ex);
          })
      );

      /*-- Anomaly Actions --*/
      trackPromise(
        axios
          .get(BaseURL + "/api/anomalyaction")
          .then((result) => {
            enqueueSnackbar("Fetched Anomaly Actions.");
            if (result.data.length > 0)
              this.props.dispatch({
                type: "FETCH_ANOMALY_ACTIONS",
                data: result.data,
              });
          })
          .catch((ex) => {
            console.error(ex);
          })
      );

      /*-- Anomaly Permissions --*/
      trackPromise(
        axios
          .get(BaseURL + "/api/anomalypermissions")
          .then((result) => {
            enqueueSnackbar("Fetched Anomaly Permissions.");
            if (result.data.length > 0)
              this.props.dispatch({
                type: "FETCH_ANOMALY_PERMISSIONS",
                data: result.data,
              });
          })
          .catch((ex) => {
            console.error(ex);
          })
      );

      /*-- Anomaly Permissions --*/
      trackPromise(
        axios
          .get(BaseURL + "/api/anomalyoptions")
          .then((result) => {
            enqueueSnackbar("Fetched Anomaly Options.");
            if (result.data)
              this.props.dispatch({
                type: "FETCH_ANOMALY_OPTIONS",
                data: result.data,
              });
          })
          .catch((ex) => {
            console.error(ex);
          })
      );

      trackPromise(
        axios
          .get(BaseURL + "/api/usernotifications")
          .then((result) => {
            this.props.enqueueSnackbar(
              "Successfully loaded Notifications."
            );
            if (result.data.length > 0)
              this.props.dispatch({
                type: "FETCH_NOTIFICATIONS",
                data: result.data,
              });
          })
          .catch((ex) => {
            console.error(ex);
          })
      );

      trackPromise(
        axios
          .get(BaseURL + "/api/defaults/countries")
          .then((result) => {
            this.props.enqueueSnackbar(
              "Successfully loaded Notifications."
            );
            if (result.data.length > 0)
              this.props.dispatch({
                type: "FETCH_COUNTRIES",
                data: result.data,
              });
          })
          .catch((ex) => {
            console.error(ex);
          })
      );
    };

    fetchData();
    let dispatch3 = this.props.dispatch;
    let dispatchSnackbar = this.props.enqueueSnackbar;
    function fetchNotifications() {
      axios
        .get(BaseURL + "/api/usernotifications/")
        .then((result) => {
          console.warn("dfaf", result.data);
          dispatchSnackbar("Successfully loaded Notifications.");
          if (result.data.length > 0)
            dispatch3({
              type: "FETCH_NOTIFICATIONS",
              data: result.data,
            });
        })
        .catch((ex) => {
          console.error(ex);
        });
    }

    /*const connection1 = new SignalR.HubConnectionBuilder()
          .withUrl(" /connectionstate",  { accessTokenFactory: () => currentUser.token })
          .configureLogging(SignalR.LogLevel.Information)
          .build();

          connection1.start().then(function () {
              console.log("connection stated...");
          });*/

    const connection = new SignalR.HubConnectionBuilder()
      .withUrl(BaseURL + "/notifications", {
        accessTokenFactory: () => currentUser.token,
      })
      .configureLogging(SignalR.LogLevel.Information)
      .build();

    connection.start().then(function () {
      console.log("notification connection started");
    });

    connection.on("Notify", function (message) {
      console.log("Notification:" + message);
      fetchNotifications();
      //fetchData();
    });

    let dispatch2 = this.props.dispatch;
    connection.on("SetUserOnlineStatus", function (userId, status) {
      console.log("login status", { userId, status });
      dispatch2({
        type: "UPDATE_ONLINE_STATUS",
        userId: userId,
        status: status,
      });
    });
  }

  logout() {
    authenticationService.logout();
    history.push("/login");
  }

  render() {
    const { currentUser } = this.state;
    return (
      <Fragment>
        <HashRouter history={history}>
          <Suspense fallback={Loader}>
            <div
              style={{ boxSizing: "border-box", minWidth: "380px" }}
            >
              <div className="jumbotron">
                <div className="container">
                  <div className="row">
                    <div className="col-md-6 offset-md-3">
                      <Switch>
                        <PrivateRoute
                          exact
                          path="/"
                          component={ModulesView}
                          tCurrentUser={currentUser}
                        />
                        <PrivateRoute
                          path="/profile"
                          component={ProfileView}
                        />
                        <Route
                          path="/login/:companyIdentifier"
                          component={UserLogin}
                        />
                        <Route path="/login" component={UserLogin} />
                        <Route
                          path="/register"
                          component={UserRegistration}
                        />
                        <Route path="/setup" component={SetupView} />
                        <Route
                          path="/filemanager"
                          component={FileManagerView}
                        />
                        <Route
                          path="/notifications"
                          component={NotificationView}
                        />
                        <Route
                          path="/analytics"
                          component={AnalyticsModule}
                        />
                        <Route
                          path="/activities"
                          component={ActivitiesModule}
                        />
                        <Route
                          path="/anomalies"
                          component={AnomaliesModule}
                        />
                      </Switch>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Suspense>
        </HashRouter>
        <Notifier />
        {/*this.props.isLoadingData && <div style={{background:"#effcff", height:'100vh', width:'100vw', position:'absolute', top:'0px', left:'0px', display: "flex",
    justifyContent: "center",
        alignItems: "center"}}>
            <ClipLoader
                style={{display:'block', margin:'0 auto', borderColor:'red'}}
                size={50}
                //size={"150px"} this also works
                color={"#123abc"}
                loading={this.props.isLoadingData}
                />
            
        <div style={{ margin:10,fontSize:20, fontWeight:'bold', color:'#999999', alignItems: "center",}}>Loading data...</div></div>*/}
        <Loader />
      </Fragment>
    );
  }
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      enqueueSnackbar,
      closeSnackbar,
    },
    dispatch
  );
//export { App };

/*const mapStateToProps= (state) => {
    return {
      currentUser: state.currentUser
    }
  }*/

export default withSnackbar(
  connect((state) => ({
    state: state.reducer,
    currentUser: state.currentUser,
    isLoadingData: state.isLoadingData,
  }))(App)
);
