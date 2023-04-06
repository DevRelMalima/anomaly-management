import React from 'react';
import { render } from 'react-dom';
import App from './App/App';
import { authenticationService } from '@/_services';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './reducers/rootReducer'
import thunk from 'redux-thunk'
import axios from 'axios'
import { SnackbarProvider } from 'notistack';
import { enqueueSnackbar } from './_actions/snackbarActions';
import * as Constants from './common/constants/URLs';
import {
    MuiPickersUtilsProvider,
  } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';

const store = createStore(rootReducer, applyMiddleware(thunk.withExtraArgument({axios, enqueueSnackbar, URL})));
// setup fake backend

// import { configureFakeBackend } from './_helpers';
// configureFakeBackend();

render(<SnackbarProvider maxSnack={3}>
    <Provider store={store}><MuiPickersUtilsProvider utils={MomentUtils}><App/></MuiPickersUtilsProvider></Provider></SnackbarProvider>,
    document.getElementById('app')
);