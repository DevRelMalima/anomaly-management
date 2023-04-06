import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { authenticationService } from '@/_services';
import {connect} from 'react-redux';

const PrivateRoute = ({ component: Component, tCurrentUser: tCurrentUser, ...rest }) => (
    <Route {...rest} render={props => {
        const currentUser = authenticationService.currentUserValue != null?  authenticationService.currentUserValue:rest.currentUser ;
        console.warn("privateroute", rest)
        if (!currentUser) {
            // not logged in so redirect to login page with the return url
            return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        }

        // authorised so return component
        return <Component {...props} />
    }} />
)

const mapStateToProps= (state) => {
    return {
      currentUser: state.currentUser
    }
  }
  
export default connect(mapStateToProps)(PrivateRoute);