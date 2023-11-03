(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ 1051:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return createPlatform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "v", function() { return updatePlatform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return deletePlatform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return createAnomalySystem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return updateAnomalySystem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return deleteAnomalySystem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return createAnomalyClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return updateAnomalyClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return deleteAnomalyClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return createAnomalyAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return updateAnomalyAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return deleteAnomalyAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return addAnomaly; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return addAnomalies; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return updateAnomaly; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return saveAnomalyReview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return saveAnomalyAnalysis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return saveAnomalyStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return deleteAnomaly; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return updateAnomalyPermission; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return updateAnomalyOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return attachFilesToAnomaly; });
/* unused harmony export setFilter */
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(270);
/* harmony import */ var _constants_URLs_urls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);



function createItem(action, url, payload, successMessage, errorMessage) {
  return function (dispatch, getState, _ref) {
    var axios = _ref.axios;
    //Make async call to backend
    axios.post(url, payload, {
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    }).then(function (result) {
      dispatch({
        type: action,
        data: result.data
      });
      dispatch({
        type: "ENQUEUE_SNACKBAR",
        notification: {
          message: successMessage,
          options: {
            key: new Date().getTime() + Math.random(),
            variant: "success"
          }
        }
      });
      // window.location.reload(true)
    }).catch(function (ex) {
      console.error(ex);
      dispatch({
        type: "ENQUEUE_SNACKBAR",
        notification: {
          message: errorMessage,
          options: {
            key: new Date().getTime() + Math.random(),
            variant: "error"
          }
        }
      });
    });
  };
}
function updateItem(action, url, payload, successMessage, errorMessage) {
  var appendIdToURL = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
  var isDispatchPayloadFromResult = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;
  return function (dispatch, getState, _ref2) {
    var axios = _ref2.axios,
      enqueueSnackbar = _ref2.enqueueSnackbar;
    //Make async call to backend
    ///console.log(payload);
    var updatedURL = !appendIdToURL ? url + "/" + payload.id : url;
    axios.put(updatedURL, payload, {
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    }).then(function (result) {
      if (isDispatchPayloadFromResult) {
        dispatch({
          type: action,
          data: result.data
        });
      } else {
        dispatch({
          type: action,
          data: payload
        });
      }
      dispatch({
        type: "ENQUEUE_SNACKBAR",
        notification: {
          message: successMessage,
          options: {
            key: new Date().getTime() + Math.random(),
            variant: "success"
          }
        }
      });
    }).catch(function (ex) {
      console.error(ex);
      dispatch({
        type: "ENQUEUE_SNACKBAR",
        notification: {
          message: errorMessage,
          options: {
            key: new Date().getTime() + Math.random(),
            variant: "error"
          }
        }
      });
    });
  };
}
function deleteItem(action, url, payload, successMessage, errorMessage) {
  var appendIdToURL = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : true;
  return function (dispatch, getState, _ref3) {
    var axios = _ref3.axios,
      enqueueSnackbar = _ref3.enqueueSnackbar;
    //Make async call to backend
    var payloadData = appendIdToURL ? {} : payload;
    console.log(payloadData);
    axios.delete(appendIdToURL ? url + "/" + payload : url + "/" + payload.id, {
      data: payloadData
    }, {
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    }).then(function (result) {
      dispatch({
        type: action,
        data: appendIdToURL ? payload : payload.id
      });
      dispatch({
        type: "ENQUEUE_SNACKBAR",
        notification: {
          message: successMessage,
          options: {
            key: new Date().getTime() + Math.random(),
            variant: "success"
          }
        }
      });
    }).catch(function (ex) {
      console.error(ex);
      dispatch({
        type: "ENQUEUE_SNACKBAR",
        notification: {
          message: errorMessage,
          options: {
            key: new Date().getTime() + Math.random(),
            variant: "error"
          }
        }
      });
    });
  };
}
var baseURL = _constants_URLs_urls__WEBPACK_IMPORTED_MODULE_1__[/* BaseURL */ "a"]; // " /api";

// Action definitions
// Platform
var createPlatform = function createPlatform(platform) {
  return createItem("CREATE_PLATFORM", baseURL + "/api/platform", platform, "Platform created", "Failed to create platform.");
};
var updatePlatform = function updatePlatform(platform) {
  return updateItem("UPDATE_PLATFORM", baseURL + "/api/platform", platform, "Platform updated", "Failed to update platform.", false);
};
var deletePlatform = function deletePlatform(platform) {
  return deleteItem("DELETE_PLATFORM", baseURL + "/api/platform", platform, "Platform deleted", "Failed to delete platform.", false);
};

// Anomaly System
var createAnomalySystem = function createAnomalySystem(anomalySystem) {
  return createItem("CREATE_ANOMALY_SYSTEM", baseURL + "/api/anomalysystem", anomalySystem, "Anomaly System created", "Failed to create Anomaly System.");
};
var updateAnomalySystem = function updateAnomalySystem(anomalySystem) {
  return updateItem("UPDATE_ANOMALY_SYSTEM", baseURL + "/api/anomalysystem", anomalySystem, "Anomaly System updated", "Failed to update Anomaly System.", false);
};
var deleteAnomalySystem = function deleteAnomalySystem(anomalySystem) {
  return deleteItem("DELETE_ANOMALY_SYSTEM", baseURL + "/api/anomalysystem", anomalySystem, "Anomaly System deleted", "Failed to delete Anomaly System.", false);
};

// Anomaly Class
var createAnomalyClass = function createAnomalyClass(anomalyClass) {
  return createItem("CREATE_ANOMALY_CLASS", baseURL + "/api/anomalyclass", anomalyClass, "Anomaly Class created", "Failed to create Anomaly Class.");
};
var updateAnomalyClass = function updateAnomalyClass(anomalyClass) {
  return updateItem("UPDATE_ANOMALY_CLASS", baseURL + "/api/anomalyclass", anomalyClass, "Anomaly Class updated", "Failed to update Anomaly Class.", false);
};
var deleteAnomalyClass = function deleteAnomalyClass(anomalyClass) {
  return deleteItem("DELETE_ANOMALY_CLASS", baseURL + "/api/anomalyclass", anomalyClass, "Anomaly Class deleted", "Failed to delete Anomaly Class.", false);
};

// Anomaly Action
var createAnomalyAction = function createAnomalyAction(anomalyAction) {
  return createItem("CREATE_ANOMALY_ACTION", baseURL + "/api/anomalyaction", anomalyAction, "Anomaly Action created", "Failed to create Anomaly Action.");
};
var updateAnomalyAction = function updateAnomalyAction(anomalyAction) {
  return updateItem("UPDATE_ANOMALY_ACTION", baseURL + "/api/anomalyaction", anomalyAction, "Anomaly Action updated", "Failed to update Anomaly Action.", false);
};
var deleteAnomalyAction = function deleteAnomalyAction(anomalyAction) {
  return deleteItem("DELETE_ANOMALY_ACTION", baseURL + "/api/anomalyaction", anomalyAction, "Anomaly Action deleted", "Failed to delete Anomaly Action.", false);
};

// Anomaly
var addAnomaly = function addAnomaly(anomaly) {
  return createItem("ADD_ANOMALY", baseURL + "/api/anomalies", anomaly, "Anomaly created", "Failed to create Anomaly.");
};
var addAnomalies = function addAnomalies(anomalies) {
  return createItem("ADD_ANOMALIES", baseURL + "/api/anomalies/import_anomalies", anomalies, "Anomalies created", "Failed to create Anomalies.");
};
var updateAnomaly = function updateAnomaly(anomaly) {
  return updateItem("UPDATE_ANOMALY", baseURL + "/api/anomalies", anomaly, "Anomaly updated", "Failed to update Anomaly.", false);
};
var saveAnomalyReview = function saveAnomalyReview(anomaly) {
  return updateItem("UPDATE_ANOMALY", baseURL + "/api/anomalies/save_anomaly_review", anomaly, "Anomaly updated", "Failed to update Anomaly.", false);
};
var saveAnomalyAnalysis = function saveAnomalyAnalysis(anomaly) {
  return updateItem("UPDATE_ANOMALY", baseURL + "/api/anomalies/save_anomaly_analysis", anomaly, "Anomaly updated", "Failed to update Anomaly.", false);
};
var saveAnomalyStatus = function saveAnomalyStatus(anomaly) {
  return updateItem("UPDATE_ANOMALY_STATUS", baseURL + "/api/anomalies/save_anomaly_status", anomaly, "Anomaly updated", "Failed to update Anomaly.", false, true);
};
var deleteAnomaly = function deleteAnomaly(anomaly) {
  return deleteItem("DELETE_ANOMALY", baseURL + "/api/anomalies", anomaly, "Anomaly deleted", "Failed to delete Anomaly.", false);
};

// Anomaly Permission
var updateAnomalyPermission = function updateAnomalyPermission(anomalyPermission) {
  return updateItem("UPDATE_ANOMALY_PERMISSION", baseURL + "/api/anomalypermissions", anomalyPermission, "Anomaly Permission updated", "Failed to update Anomaly Permission.", false, true);
};

// Anomaly Options
var updateAnomalyOptions = function updateAnomalyOptions(anomalyoptions) {
  return updateItem("UPDATE_ANOMALY_OPTIONS", baseURL + "/api/anomalyoptions", anomalyoptions, "Anomaly Options updated", "Failed to update Anomaly Options.", true);
};

/*export const addAnomaly = (anomaly) => ({
  type: ADD_ANOMALY,
  payload: {anomaly}
});

export const saveAnomalyAnalysis = (anomaly) => ({
    type: UPDATE_ANOMALY,
    payload: {anomaly}
});

export const saveAnomalyReview = (anomaly) => ({
    type: UPDATE_ANOMALY,
    payload: {anomaly}
});


export const deleteAnomaly = id => ({
    type: DELETE_ANOMALY,
    payload: {id}
});*/

var attachFilesToAnomaly = function attachFilesToAnomaly(task) {
  return function (dispatch, getState, _ref4) {
    var axios = _ref4.axios,
      enqueueSnackbar = _ref4.enqueueSnackbar;
    //Make async call to backend
    console.log("With attached files", task);
    /*axios.put(' /api/anomaly/attachfiles/'+anomaly.id,anomaly.attachedFiles)
        .then((result) => {                            
            dispatch({type:'ENQUEUE_SNACKBAR', notification:{message: 'Files attached to anomamy: '+anomaly.code+'.',
            options: {
                key: new Date().getTime() + Math.random(),
                variant: 'success'}}})
            dispatch({type:'UPDATE_TASK', task})
          
        })
        .catch((ex) => {
            console.error(ex);
        }); */

    dispatch({
      type: "ENQUEUE_SNACKBAR",
      notification: {
        message: "Files attached to anomaly: " + anomaly.code + ".",
        options: {
          key: new Date().getTime() + Math.random(),
          variant: "success"
        }
      }
    });
    dispatch({
      type: "UPDATE_ANOMALY",
      task: task
    });
  };
};
var setFilter = function setFilter(filter) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_0__[/* SET_FILTER */ "c"],
    payload: {
      filter: filter
    }
  };
};

/***/ }),

/***/ 1207:
/***/ (function(module, exports) {



/***/ }),

/***/ 1208:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(41);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(__webpack_require__(0));
var _createSvgIcon = _interopRequireDefault(__webpack_require__(89));
var _default = (0, _createSvgIcon.default)(_react.default.createElement("path", {
  d: "M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"
}), 'Done');
exports.default = _default;

/***/ }),

/***/ 1482:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CssBaseline/CssBaseline.js
var CssBaseline = __webpack_require__(1034);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Drawer/Drawer.js
var Drawer = __webpack_require__(1035);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Hidden/Hidden.js + 4 modules
var Hidden = __webpack_require__(603);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/useTheme.js
var useTheme = __webpack_require__(32);

// EXTERNAL MODULE: ./src/_services/index.js + 25 modules
var _services = __webpack_require__(15);

// EXTERNAL MODULE: ./src/_helpers/index.js + 4 modules
var _helpers = __webpack_require__(33);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__(16);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Button/Button.js
var Button = __webpack_require__(101);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Typography/Typography.js
var Typography = __webpack_require__(27);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/TextField/TextField.js
var TextField = __webpack_require__(179);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Dialog/Dialog.js
var Dialog = __webpack_require__(353);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/DialogActions/DialogActions.js
var DialogActions = __webpack_require__(356);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/DialogContent/DialogContent.js
var DialogContent = __webpack_require__(355);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/DialogTitle/DialogTitle.js
var DialogTitle = __webpack_require__(354);

// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 22 modules
var es = __webpack_require__(17);

// EXTERNAL MODULE: ./src/constants/URLs/urls.js
var urls = __webpack_require__(10);

// CONCATENATED MODULE: ./src/_actions/accountConfigurationItemsActions.js

function createItem(action, url, payload, successMessage, errorMessage) {
  return function (dispatch, getState, _ref) {
    var axios = _ref.axios;
    //Make async call to backend
    axios.post(url, payload, {
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    }).then(function (result) {
      dispatch({
        type: action,
        data: result.data
      });
      dispatch({
        type: 'ENQUEUE_SNACKBAR',
        notification: {
          message: successMessage,
          options: {
            key: new Date().getTime() + Math.random(),
            variant: 'success'
          }
        }
      });
    }).catch(function (ex) {
      console.error(ex);
      dispatch({
        type: 'ENQUEUE_SNACKBAR',
        notification: {
          message: errorMessage,
          options: {
            key: new Date().getTime() + Math.random(),
            variant: 'error'
          }
        }
      });
    });
  };
}
function updateItem(action, url, payload, successMessage, errorMessage) {
  var appendIdToURL = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : true;
  return function (dispatch, getState, _ref2) {
    var axios = _ref2.axios,
      enqueueSnackbar = _ref2.enqueueSnackbar;
    //Make async call to backend
    console.log(payload);
    axios.put(url + '/' + payload.id, payload, {
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    }).then(function (result) {
      dispatch({
        type: action,
        data: payload
      });
      dispatch({
        type: 'ENQUEUE_SNACKBAR',
        notification: {
          message: successMessage,
          options: {
            key: new Date().getTime() + Math.random(),
            variant: 'success'
          }
        }
      });
    }).catch(function (ex) {
      console.error(ex);
      dispatch({
        type: 'ENQUEUE_SNACKBAR',
        notification: {
          message: errorMessage,
          options: {
            key: new Date().getTime() + Math.random(),
            variant: 'error'
          }
        }
      });
    });
  };
}
function deleteItem(action, url, payload, successMessage, errorMessage) {
  var appendIdToURL = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : true;
  return function (dispatch, getState, _ref3) {
    var axios = _ref3.axios,
      enqueueSnackbar = _ref3.enqueueSnackbar;
    //Make async call to backend
    var payloadData = appendIdToURL ? {} : payload;
    console.log(payloadData);
    axios.delete(appendIdToURL ? url + '/' + payload : url + '/' + payload.id, {
      data: payloadData
    }, {
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    }).then(function (result) {
      dispatch({
        type: action,
        data: appendIdToURL ? payload : payload.id
      });
      dispatch({
        type: 'ENQUEUE_SNACKBAR',
        notification: {
          message: successMessage,
          options: {
            key: new Date().getTime() + Math.random(),
            variant: 'success'
          }
        }
      });
    }).catch(function (ex) {
      console.error(ex);
      dispatch({
        type: 'ENQUEUE_SNACKBAR',
        notification: {
          message: errorMessage,
          options: {
            key: new Date().getTime() + Math.random(),
            variant: 'error'
          }
        }
      });
    });
  };
}
function fetchItems(action, url, payload, successMessage, errorMessage) {
  return function (dispatch, getState, _ref4) {
    var axios = _ref4.axios,
      enqueueSnackbar = _ref4.enqueueSnackbar;
    //Make async call to backend
    console.log(project);
    axios.get(url, {}, {
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    }).then(function (result) {
      dispatch({
        type: action,
        data: result.data
      });
      dispatch({
        type: 'ENQUEUE_SNACKBAR',
        notification: {
          message: successMessage,
          options: {
            key: new Date().getTime() + Math.random(),
            variant: 'success'
          }
        }
      });
    }).catch(function (ex) {
      console.error(ex);
      dispatch({
        type: 'ENQUEUE_SNACKBAR',
        notification: {
          message: errorMessage,
          options: {
            key: new Date().getTime() + Math.random(),
            variant: 'error'
          }
        }
      });
    });
  };
}

// Account Roles
var accountConfigurationItemsActions_createAccountRole = function createAccountRole(role) {
  return createItem('CREATE_ACCOUNT_ROLE', urls["a" /* BaseURL */] + '/api/AccountConfiguration/AddConfigurationAccountRoleItem', role, 'Role created', 'Failed to create role.');
};
var accountConfigurationItemsActions_updateAccountRole = function updateAccountRole(role) {
  return updateItem('UPDATE_ACCOUNT_ROLE', urls["a" /* BaseURL */] + '/api/AccountConfiguration/UpdateConfigurationAccountRoleItem', role, 'Role updated', 'Failed to update role.', false);
};
var accountConfigurationItemsActions_deleteAccountRole = function deleteAccountRole(role) {
  return deleteItem('DELETE_ACCOUNT_ROLE', urls["a" /* BaseURL */] + '/api/AccountConfiguration/DeleteConfigurationAccountRoleItem', role, 'Role deleted', 'Failed to delete role.', false);
};

// Job Title
var accountConfigurationItemsActions_createJobTitle = function createJobTitle(jobTitle) {
  return createItem('CREATE_JOB_TITLE', urls["a" /* BaseURL */] + '/api/AccountConfiguration/AddConfigurationJobTitleItem', jobTitle, 'Job title created', 'Failed to create job title.');
};
var accountConfigurationItemsActions_updateJobTitle = function updateJobTitle(jobTitle) {
  return updateItem('UPDATE_JOB_TITLE', urls["a" /* BaseURL */] + '/api/AccountConfiguration/UpdateConfigurationJobTitleItem', jobTitle, 'Job title updated', 'Failed to update job title.', false);
};
var accountConfigurationItemsActions_deleteJobTitle = function deleteJobTitle(jobTitle) {
  return deleteItem('DELETE_JOB_TITLE', urls["a" /* BaseURL */] + '/api/AccountConfiguration/DeleteConfigurationJobTitleItem', jobTitle, 'Job title deleted', 'Failed to delete job title.', false);
};

// Company
var accountConfigurationItemsActions_createCompany = function createCompany(company) {
  return createItem('CREATE_COMPANY', urls["a" /* BaseURL */] + '/api/AccountConfiguration/AddConfigurationCompanyItem', company, 'Company created', 'Failed to create company.');
};
var accountConfigurationItemsActions_updateCompany = function updateCompany(company) {
  return updateItem('UPDATE_COMPANY', urls["a" /* BaseURL */] + '/api/AccountConfiguration/UpdateConfigurationCompanyItem', company, 'Company updated', 'Failed to update company.', false);
};
var accountConfigurationItemsActions_deleteCompany = function deleteCompany(company) {
  return deleteItem('DELETE_COMPANY', urls["a" /* BaseURL */] + '/api/AccountConfiguration/DeleteConfigurationCompanyItem', company, 'Company deleted', 'Failed to delete company.', false);
};

// Department
var accountConfigurationItemsActions_createDepartment = function createDepartment(department) {
  return createItem('CREATE_DEPARTMENT', urls["a" /* BaseURL */] + '/api/AccountConfiguration/AddConfigurationDepartmentItem', department, 'Department created', 'Failed to create department.');
};
var accountConfigurationItemsActions_updateDepartment = function updateDepartment(department) {
  return updateItem('UPDATE_DEPARTMENT', urls["a" /* BaseURL */] + '/api/AccountConfiguration/UpdateConfigurationDepartmentItem', department, 'Department updated', 'Failed to update department.', false);
};
var accountConfigurationItemsActions_deleteDepartment = function deleteDepartment(department) {
  return deleteItem('DELETE_DEPARTMENT', urls["a" /* BaseURL */] + '/api/AccountConfiguration/DeleteConfigurationDepartmentItem', department, 'Department deleted', 'Failed to delete department.', false);
};
// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(12);

// EXTERNAL MODULE: ./node_modules/node-libs-browser/node_modules/util/util.js
var util = __webpack_require__(74);

// EXTERNAL MODULE: ./node_modules/notistack/build/index.js
var build = __webpack_require__(76);

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/DeleteOutlined.js
var DeleteOutlined = __webpack_require__(88);
var DeleteOutlined_default = /*#__PURE__*/__webpack_require__.n(DeleteOutlined);

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/EditOutlined.js
var EditOutlined = __webpack_require__(123);
var EditOutlined_default = /*#__PURE__*/__webpack_require__.n(EditOutlined);

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/AddOutlined.js
var AddOutlined = __webpack_require__(156);
var AddOutlined_default = /*#__PURE__*/__webpack_require__.n(AddOutlined);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/IconButton/IconButton.js
var IconButton = __webpack_require__(231);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Paper/Paper.js
var Paper = __webpack_require__(102);

// EXTERNAL MODULE: ./node_modules/react-moment/dist/index.js
var dist = __webpack_require__(297);

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Search.js
var Search = __webpack_require__(233);
var Search_default = /*#__PURE__*/__webpack_require__.n(Search);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/InputBase/InputBase.js + 1 modules
var InputBase = __webpack_require__(606);

// EXTERNAL MODULE: ./src/_components/AlertDialog.js
var AlertDialog = __webpack_require__(155);

// EXTERNAL MODULE: ./src/_images/icons/empty_box_icon.inline.svg
var empty_box_icon_inline = __webpack_require__(240);

// EXTERNAL MODULE: ./src/_utilities/CommonStyles.js
var CommonStyles = __webpack_require__(53);

// EXTERNAL MODULE: ./src/_utilities/CustomButtons.js
var CustomButtons = __webpack_require__(54);

// CONCATENATED MODULE: ./src/_views/_setup/CompanySetupView.js
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0) { ; } } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


















































function CompanySetupView(props) {
  var classes = Object(CommonStyles["a" /* useStyles */])();
  var _React$useState = react_default.a.useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    open = _React$useState2[0],
    setOpen = _React$useState2[1];
  var _React$useState3 = react_default.a.useState(""),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    searchText = _React$useState4[0],
    setSearchText = _React$useState4[1];
  var _React$useState5 = react_default.a.useState(false),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    openAlert = _React$useState6[0],
    setOpenAlert = _React$useState6[1];
  var _React$useState7 = react_default.a.useState({}),
    _React$useState8 = _slicedToArray(_React$useState7, 2),
    dialogProps = _React$useState8[0],
    setDialogProps = _React$useState8[1];
  var _React$useState9 = react_default.a.useState(false),
    _React$useState10 = _slicedToArray(_React$useState9, 2),
    isEditing = _React$useState10[0],
    setIsEditing = _React$useState10[1];
  var companies = props.companies;
  var _React$useState11 = react_default.a.useState({
      name: ""
    }),
    _React$useState12 = _slicedToArray(_React$useState11, 2),
    newCompany = _React$useState12[0],
    setNewCompany = _React$useState12[1];
  function handleClickOpen() {
    setIsEditing(false);
    setNewCompany({
      name: ""
    });
    setOpen(true);
  }
  function handleClose() {
    setOpen(false);
  }
  var deleteCompany = function deleteCompany(company) {
    //let selectedCompany = companies.find(company => {return company.id == id});
    //console.warn(selectedCompany)
    if (company) {
      setOpenAlert(true);
      setDialogProps(_objectSpread(_objectSpread({}, dialogProps), {}, {
        dialogTitle: "Delete company",
        dialogMessage: "Delete company: " + company.name,
        okAction: function okAction() {
          props.deleteCompany(company);
          setOpenAlert(false);
        }
      }));
    }

    //props.deleteCompany(Id);
  };

  var editCompany = function editCompany(company) {
    //let selectedCompany = companies.find(company => {return company.id == companyId});

    if (company) {
      setIsEditing(true);
      setNewCompany(company);
      setOpen(true);
    }
  };
  var handleSearchInputChange = function handleSearchInputChange(event) {
    var _event$target = event.target,
      name = _event$target.name,
      value = _event$target.value;
    console.warn(value);
    console.warn(companies.filter(function (f) {
      return searchText == "" ? true : f.name.indexOf(searchText) > -1;
    }));
    setSearchText(value);
  };
  var handleInputChange = function handleInputChange(event) {
    var _event$target2 = event.target,
      name = _event$target2.name,
      value = _event$target2.value;
    setNewCompany(_objectSpread(_objectSpread({}, newCompany), {}, _defineProperty({}, name, value)));
  };
  function addCompany() {
    props.createCompany(_objectSpread(_objectSpread({}, newCompany), {}, {
      id: Math.random()
    }));
    setOpen(false);
  }
  function updateCompany() {
    props.updateCompany(newCompany);
    setOpen(false);
  }
  Object(react["useEffect"])(function () {
    /*const fetchData = async () => {
    
    //if(isNullOrUndefined(props.projects))
    //  return;
    axios.get(' /api/projects')
        .then((result) => {
          console.warn("result", result.data);
          props.fetchProjects(result.data);
           
        })
        .catch((ex) => {
            console.error(ex);
        });
        //setData(result.data);
    };
      fetchData();*/
  }, [props]);
  return react_default.a.createElement("main", {
    className: classes.content
  }, react_default.a.createElement("div", {
    className: classes.toolbar
  }, react_default.a.createElement(Typography["a" /* default */], {
    variant: "h6",
    gutterBottom: true
  }, "Companies"), react_default.a.createElement(CustomButtons["b" /* PlainButton */], {
    className: classes.link,
    onClick: handleClickOpen
  }, react_default.a.createElement(AddOutlined_default.a, {
    className: classes.customButtonIcon
  }), "Create New Company"), react_default.a.createElement(AlertDialog["a" /* default */], _extends({
    open: openAlert,
    cancelAction: function cancelAction() {
      return setOpenAlert(false);
    }
  }, dialogProps)), react_default.a.createElement("div", {
    className: classes.search
  }, react_default.a.createElement("div", {
    className: classes.searchIcon
  }, react_default.a.createElement(Search_default.a, null)), react_default.a.createElement(InputBase["a" /* default */], {
    name: "searchText",
    value: searchText,
    onChange: handleSearchInputChange,
    fullWidth: true,
    placeholder: "Search\u2026",
    classes: {
      root: classes.inputRoot,
      input: classes.inputInput
    },
    inputProps: {
      'aria-label': 'Search'
    }
  })), react_default.a.createElement(Dialog["a" /* default */], {
    open: open,
    fullWidth: true,
    className: classes.modalDialog,
    onClose: handleClose,
    "aria-labelledby": "form-dialog-title"
  }, react_default.a.createElement(DialogTitle["a" /* default */], {
    id: "form-dialog-title"
  }, isEditing ? react_default.a.createElement("span", null, "Edit Company") : react_default.a.createElement("span", null, "New Company")), react_default.a.createElement(DialogContent["a" /* default */], null, react_default.a.createElement(TextField["a" /* default */], {
    autoFocus: true,
    margin: "dense",
    id: "name",
    label: "Company Name",
    name: "name",
    value: newCompany.name,
    onChange: handleInputChange,
    fullWidth: true
  })), react_default.a.createElement(DialogActions["a" /* default */], null, react_default.a.createElement(Button["a" /* default */], {
    onClick: handleClose,
    color: "primary"
  }, "Cancel"), isEditing ? react_default.a.createElement(Button["a" /* default */], {
    onClick: updateCompany,
    color: "primary"
  }, "Update") : react_default.a.createElement(Button["a" /* default */], {
    onClick: addCompany,
    color: "primary"
  }, "Create")))), react_default.a.createElement(Grid["a" /* default */], {
    container: true,
    spacing: 1,
    className: classes.listContainer
  }, companies && companies.length > 0 ? companies.filter(function (f) {
    return searchText == "" ? true : f.name.indexOf(searchText) > -1;
  }).map(function (company) {
    return react_default.a.createElement(Grid["a" /* default */], {
      item: true,
      key: company.id,
      xs: 12
    }, react_default.a.createElement(Paper["a" /* default */], {
      key: company.id,
      className: classes.paper
    }, react_default.a.createElement(Grid["a" /* default */], {
      container: true,
      direction: "row",
      spacing: 2
    }, react_default.a.createElement(Grid["a" /* default */], {
      item: true,
      xs: true
    }, react_default.a.createElement(Typography["a" /* default */], {
      variant: "h6",
      noWrap: true
    }, company.name)), react_default.a.createElement(Grid["a" /* default */], {
      item: true,
      xs: true,
      container: true,
      justify: "flex-end",
      alignItems: "center"
    }, react_default.a.createElement(IconButton["a" /* default */], {
      size: "small",
      onClick: function onClick() {
        return editCompany(company);
      },
      color: "primary"
    }, react_default.a.createElement(EditOutlined_default.a, {
      className: classes.iconButton2
    })), react_default.a.createElement(IconButton["a" /* default */], {
      size: "small",
      onClick: function onClick() {
        return deleteCompany(company);
      },
      color: "primary"
    }, react_default.a.createElement(DeleteOutlined_default.a, {
      className: classes.iconButton2
    }))))));
  }) : react_default.a.createElement(Grid["a" /* default */], {
    item: true,
    xs: 12,
    container: true,
    direction: "column",
    justify: "space-between",
    alignItems: "center"
  }, react_default.a.createElement(empty_box_icon_inline["a" /* default */], null), react_default.a.createElement(Typography["a" /* default */], {
    style: {
      margin: 20,
      fontSize: 20,
      color: '#777777'
    }
  }, "Empty"))));
}
var mapStateToProps = function mapStateToProps(state) {
  return {
    companies: state.companies
  };
};
var CompanySetupView_mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    deleteCompany: function deleteCompany(id) {
      dispatch(accountConfigurationItemsActions_deleteCompany(id));
    },
    createCompany: function createCompany(dept) {
      dispatch(accountConfigurationItemsActions_createCompany(dept));
    },
    updateCompany: function updateCompany(dept) {
      dispatch(accountConfigurationItemsActions_updateCompany(dept));
    }
  };
};
/* harmony default export */ var _setup_CompanySetupView = (Object(build["withSnackbar"])(Object(es["b" /* connect */])(mapStateToProps, CompanySetupView_mapDispatchToProps)(CompanySetupView)));
// CONCATENATED MODULE: ./src/_views/_setup/departmentSetupView.js
function departmentSetupView_typeof(obj) { "@babel/helpers - typeof"; return departmentSetupView_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, departmentSetupView_typeof(obj); }
function departmentSetupView_extends() { departmentSetupView_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return departmentSetupView_extends.apply(this, arguments); }
function departmentSetupView_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function departmentSetupView_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? departmentSetupView_ownKeys(Object(source), !0).forEach(function (key) { departmentSetupView_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : departmentSetupView_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function departmentSetupView_defineProperty(obj, key, value) { key = departmentSetupView_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function departmentSetupView_toPropertyKey(arg) { var key = departmentSetupView_toPrimitive(arg, "string"); return departmentSetupView_typeof(key) === "symbol" ? key : String(key); }
function departmentSetupView_toPrimitive(input, hint) { if (departmentSetupView_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (departmentSetupView_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function departmentSetupView_slicedToArray(arr, i) { return departmentSetupView_arrayWithHoles(arr) || departmentSetupView_iterableToArrayLimit(arr, i) || departmentSetupView_unsupportedIterableToArray(arr, i) || departmentSetupView_nonIterableRest(); }
function departmentSetupView_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function departmentSetupView_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return departmentSetupView_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return departmentSetupView_arrayLikeToArray(o, minLen); }
function departmentSetupView_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function departmentSetupView_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0) { ; } } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function departmentSetupView_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


















































function DepartmentSetupView(props) {
  var classes = Object(CommonStyles["a" /* useStyles */])();
  var _React$useState = react_default.a.useState(false),
    _React$useState2 = departmentSetupView_slicedToArray(_React$useState, 2),
    open = _React$useState2[0],
    setOpen = _React$useState2[1];
  var _React$useState3 = react_default.a.useState(""),
    _React$useState4 = departmentSetupView_slicedToArray(_React$useState3, 2),
    searchText = _React$useState4[0],
    setSearchText = _React$useState4[1];
  var _React$useState5 = react_default.a.useState(false),
    _React$useState6 = departmentSetupView_slicedToArray(_React$useState5, 2),
    openAlert = _React$useState6[0],
    setOpenAlert = _React$useState6[1];
  var _React$useState7 = react_default.a.useState({}),
    _React$useState8 = departmentSetupView_slicedToArray(_React$useState7, 2),
    dialogProps = _React$useState8[0],
    setDialogProps = _React$useState8[1];
  var _React$useState9 = react_default.a.useState(false),
    _React$useState10 = departmentSetupView_slicedToArray(_React$useState9, 2),
    isEditing = _React$useState10[0],
    setIsEditing = _React$useState10[1];
  var departments = props.departments;
  var _React$useState11 = react_default.a.useState({
      name: ""
    }),
    _React$useState12 = departmentSetupView_slicedToArray(_React$useState11, 2),
    newDepartment = _React$useState12[0],
    setNewDepartment = _React$useState12[1];
  function handleClickOpen() {
    setIsEditing(false);
    setNewDepartment({
      name: ""
    });
    setOpen(true);
  }
  function handleClose() {
    setOpen(false);
  }
  var deleteDepartment = function deleteDepartment(department) {
    //let selectedDepartment = departments.find(department => {return department.id == id});
    //console.warn(selectedDepartment)
    if (department) {
      setOpenAlert(true);
      setDialogProps(departmentSetupView_objectSpread(departmentSetupView_objectSpread({}, dialogProps), {}, {
        dialogTitle: "Delete department",
        dialogMessage: "Delete department: " + department.name,
        okAction: function okAction() {
          props.deleteDepartment(department);
          setOpenAlert(false);
        }
      }));
    }

    //props.deleteDepartment(Id);
  };

  var editDepartment = function editDepartment(department) {
    //let selectedDepartment = departments.find(department => {return department.id == departmentId});

    if (department) {
      setIsEditing(true);
      setNewDepartment(department);
      setOpen(true);
    }
  };
  var handleSearchInputChange = function handleSearchInputChange(event) {
    var _event$target = event.target,
      name = _event$target.name,
      value = _event$target.value;
    console.warn(value);
    console.warn(departments.filter(function (f) {
      return searchText == "" ? true : f.name.indexOf(searchText) > -1;
    }));
    setSearchText(value);
  };
  var handleInputChange = function handleInputChange(event) {
    var _event$target2 = event.target,
      name = _event$target2.name,
      value = _event$target2.value;
    setNewDepartment(departmentSetupView_objectSpread(departmentSetupView_objectSpread({}, newDepartment), {}, departmentSetupView_defineProperty({}, name, value)));
  };
  function addDepartment() {
    props.createDepartment(departmentSetupView_objectSpread(departmentSetupView_objectSpread({}, newDepartment), {}, {
      id: Math.random()
    }));
    setOpen(false);
  }
  function updateDepartment() {
    props.updateDepartment(newDepartment);
    setOpen(false);
  }
  Object(react["useEffect"])(function () {
    /*const fetchData = async () => {
    
    //if(isNullOrUndefined(props.projects))
    //  return;
    axios.get(' /api/projects')
        .then((result) => {
          console.warn("result", result.data);
          props.fetchProjects(result.data);
           
        })
        .catch((ex) => {
            console.error(ex);
        });
        //setData(result.data);
    };
      fetchData();*/
  }, [props]);
  return react_default.a.createElement("main", {
    className: classes.content
  }, react_default.a.createElement("div", {
    className: classes.toolbar
  }, react_default.a.createElement(Typography["a" /* default */], {
    variant: "h6",
    gutterBottom: true
  }, "Departments"), react_default.a.createElement(CustomButtons["b" /* PlainButton */], {
    onClick: handleClickOpen
  }, react_default.a.createElement(AddOutlined_default.a, {
    className: classes.customButtonIcon
  }), "Create New Department"), react_default.a.createElement(AlertDialog["a" /* default */], departmentSetupView_extends({
    open: openAlert,
    cancelAction: function cancelAction() {
      return setOpenAlert(false);
    }
  }, dialogProps)), react_default.a.createElement("div", {
    className: classes.search
  }, react_default.a.createElement("div", {
    className: classes.searchIcon
  }, react_default.a.createElement(Search_default.a, null)), react_default.a.createElement(InputBase["a" /* default */], {
    name: "searchText",
    value: searchText,
    onChange: handleSearchInputChange,
    fullWidth: true,
    placeholder: "Search\u2026",
    classes: {
      root: classes.inputRoot,
      input: classes.inputInput
    },
    inputProps: {
      'aria-label': 'Search'
    }
  })), react_default.a.createElement(Dialog["a" /* default */], {
    open: open,
    fullWidth: true,
    className: classes.modalDialog,
    onClose: handleClose,
    "aria-labelledby": "form-dialog-title"
  }, react_default.a.createElement(DialogTitle["a" /* default */], {
    id: "form-dialog-title"
  }, isEditing ? react_default.a.createElement("span", null, "Edit Department") : react_default.a.createElement("span", null, "New Department")), react_default.a.createElement(DialogContent["a" /* default */], null, react_default.a.createElement(TextField["a" /* default */], {
    autoFocus: true,
    margin: "dense",
    id: "name",
    label: "Department Name",
    name: "name",
    value: newDepartment.name,
    onChange: handleInputChange,
    fullWidth: true
  })), react_default.a.createElement(DialogActions["a" /* default */], null, react_default.a.createElement(Button["a" /* default */], {
    onClick: handleClose,
    color: "primary"
  }, "Cancel"), isEditing ? react_default.a.createElement(Button["a" /* default */], {
    onClick: updateDepartment,
    color: "primary"
  }, "Update") : react_default.a.createElement(Button["a" /* default */], {
    onClick: addDepartment,
    color: "primary"
  }, "Create")))), react_default.a.createElement(Grid["a" /* default */], {
    container: true,
    spacing: 1,
    className: classes.listContainer
  }, departments && departments.length > 0 ? departments.filter(function (f) {
    return searchText == "" ? true : f.name.indexOf(searchText) > -1;
  }).map(function (department) {
    return react_default.a.createElement(Grid["a" /* default */], {
      item: true,
      key: department.id,
      xs: 12
    }, react_default.a.createElement(Paper["a" /* default */], {
      key: department.id,
      className: classes.paper
    }, react_default.a.createElement(Grid["a" /* default */], {
      container: true,
      direction: "row",
      justify: "space-between",
      spacing: 2
    }, react_default.a.createElement(Grid["a" /* default */], {
      item: true,
      xs: true
    }, react_default.a.createElement(Typography["a" /* default */], {
      variant: "h6",
      noWrap: true
    }, department.name)), react_default.a.createElement(Grid["a" /* default */], {
      item: true,
      xs: true,
      container: true,
      justify: "flex-end",
      alignItems: "center"
    }, react_default.a.createElement(IconButton["a" /* default */], {
      size: "small",
      onClick: function onClick() {
        return editDepartment(department);
      },
      color: "primary"
    }, react_default.a.createElement(EditOutlined_default.a, {
      className: classes.iconButton2
    })), react_default.a.createElement(IconButton["a" /* default */], {
      size: "small",
      onClick: function onClick() {
        return deleteDepartment(department);
      },
      color: "primary"
    }, react_default.a.createElement(DeleteOutlined_default.a, {
      className: classes.iconButton2
    }))))));
  }) : react_default.a.createElement(Grid["a" /* default */], {
    item: true,
    xs: 12,
    container: true,
    direction: "column",
    justify: "space-between",
    alignItems: "center"
  }, react_default.a.createElement(empty_box_icon_inline["a" /* default */], null), react_default.a.createElement(Typography["a" /* default */], {
    style: {
      margin: 20,
      fontSize: 20,
      color: '#777777'
    }
  }, "Empty"))));
}
var departmentSetupView_mapStateToProps = function mapStateToProps(state) {
  return {
    departments: state.departments
  };
};
var departmentSetupView_mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    deleteDepartment: function deleteDepartment(id) {
      dispatch(accountConfigurationItemsActions_deleteDepartment(id));
    },
    createDepartment: function createDepartment(dept) {
      dispatch(accountConfigurationItemsActions_createDepartment(dept));
    },
    updateDepartment: function updateDepartment(dept) {
      dispatch(accountConfigurationItemsActions_updateDepartment(dept));
    }
  };
};
/* harmony default export */ var departmentSetupView = (Object(build["withSnackbar"])(Object(es["b" /* connect */])(departmentSetupView_mapStateToProps, departmentSetupView_mapDispatchToProps)(DepartmentSetupView)));
// CONCATENATED MODULE: ./src/_views/_setup/RolesSetupView.js
function RolesSetupView_typeof(obj) { "@babel/helpers - typeof"; return RolesSetupView_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, RolesSetupView_typeof(obj); }
function RolesSetupView_extends() { RolesSetupView_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return RolesSetupView_extends.apply(this, arguments); }
function RolesSetupView_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function RolesSetupView_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? RolesSetupView_ownKeys(Object(source), !0).forEach(function (key) { RolesSetupView_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : RolesSetupView_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function RolesSetupView_defineProperty(obj, key, value) { key = RolesSetupView_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function RolesSetupView_toPropertyKey(arg) { var key = RolesSetupView_toPrimitive(arg, "string"); return RolesSetupView_typeof(key) === "symbol" ? key : String(key); }
function RolesSetupView_toPrimitive(input, hint) { if (RolesSetupView_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (RolesSetupView_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function RolesSetupView_slicedToArray(arr, i) { return RolesSetupView_arrayWithHoles(arr) || RolesSetupView_iterableToArrayLimit(arr, i) || RolesSetupView_unsupportedIterableToArray(arr, i) || RolesSetupView_nonIterableRest(); }
function RolesSetupView_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function RolesSetupView_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return RolesSetupView_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return RolesSetupView_arrayLikeToArray(o, minLen); }
function RolesSetupView_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function RolesSetupView_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0) { ; } } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function RolesSetupView_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


















































function RolesSetupView(props) {
  var classes = Object(CommonStyles["a" /* useStyles */])();
  var _React$useState = react_default.a.useState(false),
    _React$useState2 = RolesSetupView_slicedToArray(_React$useState, 2),
    open = _React$useState2[0],
    setOpen = _React$useState2[1];
  var _React$useState3 = react_default.a.useState(""),
    _React$useState4 = RolesSetupView_slicedToArray(_React$useState3, 2),
    searchText = _React$useState4[0],
    setSearchText = _React$useState4[1];
  var _React$useState5 = react_default.a.useState(false),
    _React$useState6 = RolesSetupView_slicedToArray(_React$useState5, 2),
    openAlert = _React$useState6[0],
    setOpenAlert = _React$useState6[1];
  var _React$useState7 = react_default.a.useState({}),
    _React$useState8 = RolesSetupView_slicedToArray(_React$useState7, 2),
    dialogProps = _React$useState8[0],
    setDialogProps = _React$useState8[1];
  var _React$useState9 = react_default.a.useState(false),
    _React$useState10 = RolesSetupView_slicedToArray(_React$useState9, 2),
    isEditing = _React$useState10[0],
    setIsEditing = _React$useState10[1];
  var accountRoles = props.accountRoles;
  var _React$useState11 = react_default.a.useState({
      name: ""
    }),
    _React$useState12 = RolesSetupView_slicedToArray(_React$useState11, 2),
    newAccountRole = _React$useState12[0],
    setNewAccountRole = _React$useState12[1];
  function handleClickOpen() {
    setIsEditing(false);
    setNewAccountRole({
      name: ""
    });
    setOpen(true);
  }
  function handleClose() {
    setOpen(false);
  }
  var deleteAccountRole = function deleteAccountRole(accountRole) {
    if (accountRole) {
      setOpenAlert(true);
      setDialogProps(RolesSetupView_objectSpread(RolesSetupView_objectSpread({}, dialogProps), {}, {
        dialogTitle: "Delete role",
        dialogMessage: "Delete role: " + accountRole.name,
        okAction: function okAction() {
          props.deleteAccountRole(accountRole);
          setOpenAlert(false);
        }
      }));
    }
  };
  var editAccountRole = function editAccountRole(accountRole) {
    //let selectedAccountRole = accountRoles.find(role => {return role.id == roleId});

    if (accountRole) {
      setIsEditing(true);
      setNewAccountRole(accountRole);
      setOpen(true);
    }
  };
  var handleSearchInputChange = function handleSearchInputChange(event) {
    var _event$target = event.target,
      name = _event$target.name,
      value = _event$target.value;
    console.warn(value);
    console.warn(accountRoles.filter(function (f) {
      return searchText == "" ? true : f.name.indexOf(searchText) > -1;
    }));
    setSearchText(value);
  };
  var handleInputChange = function handleInputChange(event) {
    var _event$target2 = event.target,
      name = _event$target2.name,
      value = _event$target2.value;
    setNewAccountRole(RolesSetupView_objectSpread(RolesSetupView_objectSpread({}, newAccountRole), {}, RolesSetupView_defineProperty({}, name, value)));
  };
  function addAccountRole() {
    props.createAccountRole(RolesSetupView_objectSpread(RolesSetupView_objectSpread({}, newAccountRole), {}, {
      id: Math.random()
    }));
    setOpen(false);
  }
  function updateAccountRole() {
    props.updateAccountRole(newAccountRole);
    setOpen(false);
  }
  Object(react["useEffect"])(function () {
    /*const fetchData = async () => {
    
    //if(isNullOrUndefined(props.projects))
    //  return;
    axios.get(' /api/projects')
        .then((result) => {
          console.warn("result", result.data);
          props.fetchProjects(result.data);
           
        })
        .catch((ex) => {
            console.error(ex);
        });
        //setData(result.data);
    };
      fetchData();*/
  }, [props]);
  return react_default.a.createElement("main", {
    className: classes.content
  }, react_default.a.createElement("div", {
    className: classes.toolbar
  }, react_default.a.createElement(Typography["a" /* default */], {
    variant: "h6",
    gutterBottom: true
  }, "Account Roles"), react_default.a.createElement(CustomButtons["b" /* PlainButton */], {
    onClick: handleClickOpen
  }, react_default.a.createElement(AddOutlined_default.a, {
    className: classes.customButtonIcon
  }), "Create New Role"), react_default.a.createElement(AlertDialog["a" /* default */], RolesSetupView_extends({
    open: openAlert,
    cancelAction: function cancelAction() {
      return setOpenAlert(false);
    }
  }, dialogProps)), react_default.a.createElement("div", {
    className: classes.search
  }, react_default.a.createElement("div", {
    className: classes.searchIcon
  }, react_default.a.createElement(Search_default.a, null)), react_default.a.createElement(InputBase["a" /* default */], {
    name: "searchText",
    value: searchText,
    onChange: handleSearchInputChange,
    fullWidth: true,
    placeholder: "Search\u2026",
    classes: {
      root: classes.inputRoot,
      input: classes.inputInput
    },
    inputProps: {
      'aria-label': 'Search'
    }
  })), react_default.a.createElement(Dialog["a" /* default */], {
    open: open,
    fullWidth: true,
    className: classes.modalDialog,
    onClose: handleClose,
    "aria-labelledby": "form-dialog-title"
  }, react_default.a.createElement(DialogTitle["a" /* default */], {
    id: "form-dialog-title"
  }, isEditing ? react_default.a.createElement("span", null, "Edit Account Role") : react_default.a.createElement("span", null, "New Account Role")), react_default.a.createElement(DialogContent["a" /* default */], null, react_default.a.createElement(TextField["a" /* default */], {
    autoFocus: true,
    margin: "dense",
    id: "name",
    label: "Role Name",
    name: "name",
    value: newAccountRole.name,
    onChange: handleInputChange,
    fullWidth: true
  })), react_default.a.createElement(DialogActions["a" /* default */], null, react_default.a.createElement(Button["a" /* default */], {
    onClick: handleClose,
    color: "primary"
  }, "Cancel"), isEditing ? react_default.a.createElement(Button["a" /* default */], {
    onClick: updateAccountRole,
    color: "primary"
  }, "Update") : react_default.a.createElement(Button["a" /* default */], {
    onClick: addAccountRole,
    color: "primary"
  }, "Create")))), react_default.a.createElement(Grid["a" /* default */], {
    container: true,
    spacing: 1,
    className: classes.listContainer
  }, accountRoles && accountRoles.length > 0 ? accountRoles.filter(function (f) {
    return searchText == "" ? true : f.name.indexOf(searchText) > -1;
  }).map(function (accountRole) {
    return react_default.a.createElement(Grid["a" /* default */], {
      item: true,
      key: accountRole.id,
      xs: 12
    }, react_default.a.createElement(Paper["a" /* default */], {
      key: accountRole.id,
      className: classes.paper
    }, react_default.a.createElement(Grid["a" /* default */], {
      container: true,
      direction: "row",
      justify: "space-between",
      spacing: 2
    }, react_default.a.createElement(Grid["a" /* default */], {
      item: true,
      xs: true
    }, react_default.a.createElement(Typography["a" /* default */], {
      variant: "h6",
      noWrap: true
    }, accountRole.name)), react_default.a.createElement(Grid["a" /* default */], {
      item: true,
      xs: true,
      container: true,
      justify: "flex-end",
      alignItems: "center"
    }, react_default.a.createElement(IconButton["a" /* default */], {
      size: "small",
      onClick: function onClick() {
        return editAccountRole(accountRole);
      },
      color: "primary"
    }, react_default.a.createElement(EditOutlined_default.a, {
      className: classes.iconButton2
    })), react_default.a.createElement(IconButton["a" /* default */], {
      size: "small",
      onClick: function onClick() {
        return deleteAccountRole(accountRole);
      },
      color: "primary"
    }, react_default.a.createElement(DeleteOutlined_default.a, {
      className: classes.iconButton2
    }))))));
  }) : react_default.a.createElement(Grid["a" /* default */], {
    item: true,
    xs: 12,
    container: true,
    direction: "column",
    justify: "space-between",
    alignItems: "center"
  }, react_default.a.createElement(empty_box_icon_inline["a" /* default */], null), react_default.a.createElement(Typography["a" /* default */], {
    style: {
      margin: 20,
      fontSize: 20,
      color: '#777777'
    }
  }, "Empty"))));
}
var RolesSetupView_mapStateToProps = function mapStateToProps(state) {
  return {
    accountRoles: state.accountRoles
  };
};
var RolesSetupView_mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    deleteAccountRole: function deleteAccountRole(id) {
      dispatch(accountConfigurationItemsActions_deleteAccountRole(id));
    },
    createAccountRole: function createAccountRole(user) {
      dispatch(accountConfigurationItemsActions_createAccountRole(user));
    },
    updateAccountRole: function updateAccountRole(user) {
      dispatch(accountConfigurationItemsActions_updateAccountRole(user));
    }
  };
};
/* harmony default export */ var _setup_RolesSetupView = (Object(build["withSnackbar"])(Object(es["b" /* connect */])(RolesSetupView_mapStateToProps, RolesSetupView_mapDispatchToProps)(RolesSetupView)));
// EXTERNAL MODULE: ./src/_views/_user/UsersSetupView.js + 3 modules
var UsersSetupView = __webpack_require__(612);

// CONCATENATED MODULE: ./src/_views/_setup/jobTitlesSetupView.js
function jobTitlesSetupView_typeof(obj) { "@babel/helpers - typeof"; return jobTitlesSetupView_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, jobTitlesSetupView_typeof(obj); }
function jobTitlesSetupView_extends() { jobTitlesSetupView_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return jobTitlesSetupView_extends.apply(this, arguments); }
function jobTitlesSetupView_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function jobTitlesSetupView_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? jobTitlesSetupView_ownKeys(Object(source), !0).forEach(function (key) { jobTitlesSetupView_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : jobTitlesSetupView_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function jobTitlesSetupView_defineProperty(obj, key, value) { key = jobTitlesSetupView_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function jobTitlesSetupView_toPropertyKey(arg) { var key = jobTitlesSetupView_toPrimitive(arg, "string"); return jobTitlesSetupView_typeof(key) === "symbol" ? key : String(key); }
function jobTitlesSetupView_toPrimitive(input, hint) { if (jobTitlesSetupView_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (jobTitlesSetupView_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function jobTitlesSetupView_slicedToArray(arr, i) { return jobTitlesSetupView_arrayWithHoles(arr) || jobTitlesSetupView_iterableToArrayLimit(arr, i) || jobTitlesSetupView_unsupportedIterableToArray(arr, i) || jobTitlesSetupView_nonIterableRest(); }
function jobTitlesSetupView_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function jobTitlesSetupView_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return jobTitlesSetupView_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return jobTitlesSetupView_arrayLikeToArray(o, minLen); }
function jobTitlesSetupView_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function jobTitlesSetupView_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0) { ; } } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function jobTitlesSetupView_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


















































function JobTitlesSetupView(props) {
  var classes = Object(CommonStyles["a" /* useStyles */])();
  var _React$useState = react_default.a.useState(false),
    _React$useState2 = jobTitlesSetupView_slicedToArray(_React$useState, 2),
    open = _React$useState2[0],
    setOpen = _React$useState2[1];
  var _React$useState3 = react_default.a.useState(""),
    _React$useState4 = jobTitlesSetupView_slicedToArray(_React$useState3, 2),
    searchText = _React$useState4[0],
    setSearchText = _React$useState4[1];
  var _React$useState5 = react_default.a.useState(false),
    _React$useState6 = jobTitlesSetupView_slicedToArray(_React$useState5, 2),
    openAlert = _React$useState6[0],
    setOpenAlert = _React$useState6[1];
  var _React$useState7 = react_default.a.useState({}),
    _React$useState8 = jobTitlesSetupView_slicedToArray(_React$useState7, 2),
    dialogProps = _React$useState8[0],
    setDialogProps = _React$useState8[1];
  var _React$useState9 = react_default.a.useState(false),
    _React$useState10 = jobTitlesSetupView_slicedToArray(_React$useState9, 2),
    isEditing = _React$useState10[0],
    setIsEditing = _React$useState10[1];
  var jobTitles = props.jobTitles;
  var _React$useState11 = react_default.a.useState({
      name: ""
    }),
    _React$useState12 = jobTitlesSetupView_slicedToArray(_React$useState11, 2),
    newJobTitle = _React$useState12[0],
    setNewJobTitle = _React$useState12[1];
  function handleClickOpen() {
    setIsEditing(false);
    setNewJobTitle({
      name: ""
    });
    setOpen(true);
  }
  function handleClose() {
    setOpen(false);
  }
  var deleteJobTitle = function deleteJobTitle(jobTitle) {
    //let selectedJobTitle = jobTitles.find(jobTitle => {return jobTitle.id == id});
    //console.warn(selectedJobTitle)
    if (jobTitle) {
      setOpenAlert(true);
      setDialogProps(jobTitlesSetupView_objectSpread(jobTitlesSetupView_objectSpread({}, dialogProps), {}, {
        dialogTitle: "Delete Job title",
        dialogMessage: "Delete job title: " + jobTitle.name,
        okAction: function okAction() {
          props.deleteJobTitle(jobTitle);
          setOpenAlert(false);
        }
      }));
    }

    //props.deleteJobTitle(Id);
  };

  var editJobTitle = function editJobTitle(jobTitle) {
    //let selectedJobTitle = jobTitles.find(jobTitle => {return jobTitle.id == jobTitleId});

    if (jobTitle) {
      setIsEditing(true);
      setNewJobTitle(jobTitle);
      setOpen(true);
    }
  };
  var handleSearchInputChange = function handleSearchInputChange(event) {
    var _event$target = event.target,
      name = _event$target.name,
      value = _event$target.value;
    setSearchText(value);
  };
  var handleInputChange = function handleInputChange(event) {
    var _event$target2 = event.target,
      name = _event$target2.name,
      value = _event$target2.value;
    setNewJobTitle(jobTitlesSetupView_objectSpread(jobTitlesSetupView_objectSpread({}, newJobTitle), {}, jobTitlesSetupView_defineProperty({}, name, value)));
  };
  function addJobTitle() {
    props.createJobTitle(jobTitlesSetupView_objectSpread(jobTitlesSetupView_objectSpread({}, newJobTitle), {}, {
      id: Math.random()
    }));
    setOpen(false);
  }
  function updateJobTitle() {
    props.updateJobTitle(newJobTitle);
    setOpen(false);
  }
  Object(react["useEffect"])(function () {
    /*const fetchData = async () => {
    
    //if(isNullOrUndefined(props.projects))
    //  return;
    axios.get(' /api/projects')
        .then((result) => {
          console.warn("result", result.data);
          props.fetchProjects(result.data);
           
        })
        .catch((ex) => {
            console.error(ex);
        });
        //setData(result.data);
    };
      fetchData();*/
  }, [props]);
  return react_default.a.createElement("main", {
    className: classes.content
  }, react_default.a.createElement("div", {
    className: classes.toolbar
  }, react_default.a.createElement(Typography["a" /* default */], {
    variant: "h6",
    gutterBottom: true
  }, "Job Titles"), react_default.a.createElement(CustomButtons["b" /* PlainButton */], {
    onClick: handleClickOpen
  }, react_default.a.createElement(AddOutlined_default.a, {
    className: classes.customButtonIcon
  }), "Create New Job Title"), react_default.a.createElement(AlertDialog["a" /* default */], jobTitlesSetupView_extends({
    open: openAlert,
    cancelAction: function cancelAction() {
      return setOpenAlert(false);
    }
  }, dialogProps)), react_default.a.createElement("div", {
    className: classes.search
  }, react_default.a.createElement("div", {
    className: classes.searchIcon
  }, react_default.a.createElement(Search_default.a, null)), react_default.a.createElement(InputBase["a" /* default */], {
    name: "searchText",
    value: searchText,
    onChange: handleSearchInputChange,
    fullWidth: true,
    placeholder: "Search\u2026",
    classes: {
      root: classes.inputRoot,
      input: classes.inputInput
    },
    inputProps: {
      'aria-label': 'Search'
    }
  })), react_default.a.createElement(Dialog["a" /* default */], {
    open: open,
    fullWidth: true,
    className: classes.modalDialog,
    onClose: handleClose,
    "aria-labelledby": "form-dialog-title"
  }, react_default.a.createElement(DialogTitle["a" /* default */], {
    id: "form-dialog-title"
  }, isEditing ? react_default.a.createElement("span", null, "Edit Job Title") : react_default.a.createElement("span", null, "New Job Title")), react_default.a.createElement(DialogContent["a" /* default */], null, react_default.a.createElement(TextField["a" /* default */], {
    autoFocus: true,
    margin: "dense",
    id: "name",
    label: "Job Title Name",
    name: "name",
    value: newJobTitle.name,
    onChange: handleInputChange,
    fullWidth: true
  })), react_default.a.createElement(DialogActions["a" /* default */], null, react_default.a.createElement(Button["a" /* default */], {
    onClick: handleClose,
    color: "primary"
  }, "Cancel"), isEditing ? react_default.a.createElement(Button["a" /* default */], {
    onClick: updateJobTitle,
    color: "primary"
  }, "Update") : react_default.a.createElement(Button["a" /* default */], {
    onClick: addJobTitle,
    color: "primary"
  }, "Create")))), react_default.a.createElement(Grid["a" /* default */], {
    container: true,
    spacing: 1,
    className: classes.listContainer
  }, jobTitles && jobTitles.length > 0 ? jobTitles.filter(function (f) {
    return searchText == "" ? true : f.name.indexOf(searchText) > -1;
  }).map(function (jobTitle) {
    return react_default.a.createElement(Grid["a" /* default */], {
      item: true,
      key: jobTitle.id,
      xs: 12
    }, react_default.a.createElement(Paper["a" /* default */], {
      key: jobTitle.id,
      className: classes.paper
    }, react_default.a.createElement(Grid["a" /* default */], {
      container: true,
      direction: "row",
      justify: "space-between",
      spacing: 2
    }, react_default.a.createElement(Grid["a" /* default */], {
      item: true,
      xs: true
    }, react_default.a.createElement(Typography["a" /* default */], {
      variant: "h6",
      noWrap: true
    }, jobTitle.name)), react_default.a.createElement(Grid["a" /* default */], {
      item: true,
      xs: true,
      container: true,
      justify: "flex-end",
      alignItems: "center"
    }, react_default.a.createElement(IconButton["a" /* default */], {
      size: "small",
      onClick: function onClick() {
        return editJobTitle(jobTitle);
      },
      color: "primary"
    }, react_default.a.createElement(EditOutlined_default.a, {
      className: classes.iconButton2
    })), react_default.a.createElement(IconButton["a" /* default */], {
      size: "small",
      onClick: function onClick() {
        return deleteJobTitle(jobTitle);
      },
      color: "primary"
    }, react_default.a.createElement(DeleteOutlined_default.a, {
      className: classes.iconButton2
    }))))));
  }) : react_default.a.createElement(Grid["a" /* default */], {
    item: true,
    xs: 12,
    container: true,
    direction: "column",
    justify: "space-between",
    alignItems: "center"
  }, react_default.a.createElement(empty_box_icon_inline["a" /* default */], null), react_default.a.createElement(Typography["a" /* default */], {
    style: {
      margin: 20,
      fontSize: 20,
      color: '#777777'
    }
  }, "Empty"))));
}
var jobTitlesSetupView_mapStateToProps = function mapStateToProps(state) {
  return {
    jobTitles: state.jobTitles
  };
};
var jobTitlesSetupView_mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    deleteJobTitle: function deleteJobTitle(id) {
      dispatch(accountConfigurationItemsActions_deleteJobTitle(id));
    },
    createJobTitle: function createJobTitle(jobTitle) {
      dispatch(accountConfigurationItemsActions_createJobTitle(jobTitle));
    },
    updateJobTitle: function updateJobTitle(jobTitle) {
      dispatch(accountConfigurationItemsActions_updateJobTitle(jobTitle));
    }
  };
};
/* harmony default export */ var jobTitlesSetupView = (Object(build["withSnackbar"])(Object(es["b" /* connect */])(jobTitlesSetupView_mapStateToProps, jobTitlesSetupView_mapDispatchToProps)(JobTitlesSetupView)));
// EXTERNAL MODULE: ./src/_views/_setup/AccountSettingsView.js
var AccountSettingsView = __webpack_require__(1207);
var AccountSettingsView_default = /*#__PURE__*/__webpack_require__.n(AccountSettingsView);

// EXTERNAL MODULE: ./src/_actions/anomalyActions.js
var anomalyActions = __webpack_require__(1051);

// CONCATENATED MODULE: ./src/_views/_setup/aim/PlatformSetupView.js
function PlatformSetupView_typeof(obj) { "@babel/helpers - typeof"; return PlatformSetupView_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, PlatformSetupView_typeof(obj); }
function PlatformSetupView_extends() { PlatformSetupView_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return PlatformSetupView_extends.apply(this, arguments); }
function PlatformSetupView_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function PlatformSetupView_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? PlatformSetupView_ownKeys(Object(source), !0).forEach(function (key) { PlatformSetupView_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : PlatformSetupView_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function PlatformSetupView_defineProperty(obj, key, value) { key = PlatformSetupView_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function PlatformSetupView_toPropertyKey(arg) { var key = PlatformSetupView_toPrimitive(arg, "string"); return PlatformSetupView_typeof(key) === "symbol" ? key : String(key); }
function PlatformSetupView_toPrimitive(input, hint) { if (PlatformSetupView_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (PlatformSetupView_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function PlatformSetupView_slicedToArray(arr, i) { return PlatformSetupView_arrayWithHoles(arr) || PlatformSetupView_iterableToArrayLimit(arr, i) || PlatformSetupView_unsupportedIterableToArray(arr, i) || PlatformSetupView_nonIterableRest(); }
function PlatformSetupView_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function PlatformSetupView_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return PlatformSetupView_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return PlatformSetupView_arrayLikeToArray(o, minLen); }
function PlatformSetupView_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function PlatformSetupView_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0) { ; } } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function PlatformSetupView_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


















































function PlatformSetupView(props) {
  var classes = Object(CommonStyles["a" /* useStyles */])();
  var _React$useState = react_default.a.useState(false),
    _React$useState2 = PlatformSetupView_slicedToArray(_React$useState, 2),
    open = _React$useState2[0],
    setOpen = _React$useState2[1];
  var _React$useState3 = react_default.a.useState(""),
    _React$useState4 = PlatformSetupView_slicedToArray(_React$useState3, 2),
    searchText = _React$useState4[0],
    setSearchText = _React$useState4[1];
  var _React$useState5 = react_default.a.useState(false),
    _React$useState6 = PlatformSetupView_slicedToArray(_React$useState5, 2),
    openAlert = _React$useState6[0],
    setOpenAlert = _React$useState6[1];
  var _React$useState7 = react_default.a.useState({}),
    _React$useState8 = PlatformSetupView_slicedToArray(_React$useState7, 2),
    dialogProps = _React$useState8[0],
    setDialogProps = _React$useState8[1];
  var _React$useState9 = react_default.a.useState(false),
    _React$useState10 = PlatformSetupView_slicedToArray(_React$useState9, 2),
    isEditing = _React$useState10[0],
    setIsEditing = _React$useState10[1];
  var platforms = props.platforms;
  var _React$useState11 = react_default.a.useState({
      name: ""
    }),
    _React$useState12 = PlatformSetupView_slicedToArray(_React$useState11, 2),
    newPlatform = _React$useState12[0],
    setNewPlatform = _React$useState12[1];
  function handleClickOpen() {
    setIsEditing(false);
    setNewPlatform({
      name: ""
    });
    setOpen(true);
  }
  function handleClose() {
    setOpen(false);
  }
  var deletePlatform = function deletePlatform(platform) {
    //let selectedAccountRole = platforms.find(role => {return role.id == id});
    //console.warn(selectedAccountRole)
    if (platform) {
      setOpenAlert(true);
      setDialogProps(PlatformSetupView_objectSpread(PlatformSetupView_objectSpread({}, dialogProps), {}, {
        dialogTitle: "Delete Facility",
        dialogMessage: "Delete Facility: " + platform.name,
        okAction: function okAction() {
          props.deletePlatform(platform);
          setOpenAlert(false);
        }
      }));
    }

    //props.deleteAccountRole(Id);
  };

  var editPlatform = function editPlatform(platform) {
    //let selectedAccountRole = platforms.find(role => {return role.id == roleId});

    if (platform) {
      setIsEditing(true);
      setNewPlatform(platform);
      setOpen(true);
    }
  };
  var handleSearchInputChange = function handleSearchInputChange(event) {
    var _event$target = event.target,
      name = _event$target.name,
      value = _event$target.value;
    console.warn(value);
    console.warn(platforms.filter(function (f) {
      return searchText == "" ? true : f.name.indexOf(searchText) > -1;
    }));
    setSearchText(value);
  };
  var handleInputChange = function handleInputChange(event) {
    var _event$target2 = event.target,
      name = _event$target2.name,
      value = _event$target2.value;
    setNewPlatform(PlatformSetupView_objectSpread(PlatformSetupView_objectSpread({}, newPlatform), {}, PlatformSetupView_defineProperty({}, name, value)));
  };
  function addPlatform() {
    props.createPlatform(PlatformSetupView_objectSpread(PlatformSetupView_objectSpread({}, newPlatform), {}, {
      id: Math.random()
    }));
    setOpen(false);
  }
  function updatePlatform() {
    props.updatePlatform(newPlatform);
    setOpen(false);
  }
  Object(react["useEffect"])(function () {
    /*const fetchData = async () => {
    
    //if(isNullOrUndefined(props.projects))
    //  return;
    axios.get(' /api/projects')
        .then((result) => {
          console.warn("result", result.data);
          props.fetchProjects(result.data);
           
        })
        .catch((ex) => {
            console.error(ex);
        });
        //setData(result.data);
    };
      fetchData();*/
  }, [props]);
  return react_default.a.createElement("main", {
    className: classes.content
  }, react_default.a.createElement("div", {
    className: classes.toolbar
  }, react_default.a.createElement(Typography["a" /* default */], {
    variant: "h6",
    gutterBottom: true
  }, "Facilities"), react_default.a.createElement(CustomButtons["b" /* PlainButton */], {
    onClick: handleClickOpen
  }, react_default.a.createElement(AddOutlined_default.a, {
    className: classes.customButtonIcon
  }), "Create New Facility"), react_default.a.createElement(AlertDialog["a" /* default */], PlatformSetupView_extends({
    open: openAlert,
    cancelAction: function cancelAction() {
      return setOpenAlert(false);
    }
  }, dialogProps)), react_default.a.createElement("div", {
    className: classes.search
  }, react_default.a.createElement("div", {
    className: classes.searchIcon
  }, react_default.a.createElement(Search_default.a, null)), react_default.a.createElement(InputBase["a" /* default */], {
    name: "searchText",
    value: searchText,
    onChange: handleSearchInputChange,
    fullWidth: true,
    placeholder: "Search\u2026",
    classes: {
      root: classes.inputRoot,
      input: classes.inputInput
    },
    inputProps: {
      'aria-label': 'Search'
    }
  })), react_default.a.createElement(Dialog["a" /* default */], {
    open: open,
    fullWidth: true,
    className: classes.modalDialog,
    onClose: handleClose,
    "aria-labelledby": "form-dialog-title"
  }, react_default.a.createElement(DialogTitle["a" /* default */], {
    id: "form-dialog-title"
  }, isEditing ? react_default.a.createElement("span", null, "Edit Facility") : react_default.a.createElement("span", null, "New Facility")), react_default.a.createElement(DialogContent["a" /* default */], null, react_default.a.createElement(TextField["a" /* default */], {
    autoFocus: true,
    margin: "dense",
    id: "name",
    label: "Facility Name",
    name: "name",
    value: newPlatform.name,
    onChange: handleInputChange,
    fullWidth: true
  })), react_default.a.createElement(DialogActions["a" /* default */], null, react_default.a.createElement(Button["a" /* default */], {
    onClick: handleClose,
    color: "primary"
  }, "Cancel"), isEditing ? react_default.a.createElement(Button["a" /* default */], {
    onClick: updatePlatform,
    color: "primary"
  }, "Update") : react_default.a.createElement(Button["a" /* default */], {
    onClick: addPlatform,
    color: "primary"
  }, "Create")))), react_default.a.createElement(Grid["a" /* default */], {
    container: true,
    spacing: 1,
    className: classes.listContainer
  }, platforms && platforms.length > 0 ? platforms.filter(function (f) {
    return searchText == "" ? true : f.name.indexOf(searchText) > -1;
  }).map(function (platform) {
    return react_default.a.createElement(Grid["a" /* default */], {
      item: true,
      key: platform.id,
      xs: 12
    }, react_default.a.createElement(Paper["a" /* default */], {
      key: platform.id,
      className: classes.paper
    }, react_default.a.createElement(Grid["a" /* default */], {
      container: true,
      direction: "row",
      justify: "space-between",
      spacing: 2
    }, react_default.a.createElement(Grid["a" /* default */], {
      item: true,
      xs: true
    }, react_default.a.createElement(Typography["a" /* default */], {
      variant: "h6",
      noWrap: true
    }, platform.name)), react_default.a.createElement(Grid["a" /* default */], {
      item: true,
      xs: true,
      container: true,
      justify: "flex-end",
      alignItems: "center"
    }, react_default.a.createElement(IconButton["a" /* default */], {
      size: "small",
      onClick: function onClick() {
        return editPlatform(platform);
      },
      color: "primary"
    }, react_default.a.createElement(EditOutlined_default.a, {
      className: classes.iconButton2
    })), react_default.a.createElement(IconButton["a" /* default */], {
      size: "small",
      onClick: function onClick() {
        return deletePlatform(platform);
      },
      color: "primary"
    }, react_default.a.createElement(DeleteOutlined_default.a, {
      className: classes.iconButton2
    }))))));
  }) : react_default.a.createElement(Grid["a" /* default */], {
    item: true,
    xs: 12,
    container: true,
    direction: "column",
    justify: "space-between",
    alignItems: "center"
  }, react_default.a.createElement(empty_box_icon_inline["a" /* default */], null), react_default.a.createElement(Typography["a" /* default */], {
    style: {
      margin: 20,
      fontSize: 20,
      color: '#777777'
    }
  }, "Empty"))));
}
var PlatformSetupView_mapStateToProps = function mapStateToProps(state) {
  return {
    platforms: state.platforms
  };
};
var PlatformSetupView_mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    deletePlatform: function deletePlatform(id) {
      dispatch(Object(anomalyActions["l" /* deletePlatform */])(id));
    },
    createPlatform: function createPlatform(user) {
      dispatch(Object(anomalyActions["g" /* createPlatform */])(user));
    },
    updatePlatform: function updatePlatform(user) {
      dispatch(Object(anomalyActions["v" /* updatePlatform */])(user));
    }
  };
};
/* harmony default export */ var aim_PlatformSetupView = (Object(build["withSnackbar"])(Object(es["b" /* connect */])(PlatformSetupView_mapStateToProps, PlatformSetupView_mapDispatchToProps)(PlatformSetupView)));
// CONCATENATED MODULE: ./src/_views/_setup/aim/AnomalyClassSetupView.js
function AnomalyClassSetupView_typeof(obj) { "@babel/helpers - typeof"; return AnomalyClassSetupView_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, AnomalyClassSetupView_typeof(obj); }
function AnomalyClassSetupView_extends() { AnomalyClassSetupView_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return AnomalyClassSetupView_extends.apply(this, arguments); }
function AnomalyClassSetupView_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function AnomalyClassSetupView_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? AnomalyClassSetupView_ownKeys(Object(source), !0).forEach(function (key) { AnomalyClassSetupView_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : AnomalyClassSetupView_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function AnomalyClassSetupView_defineProperty(obj, key, value) { key = AnomalyClassSetupView_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function AnomalyClassSetupView_toPropertyKey(arg) { var key = AnomalyClassSetupView_toPrimitive(arg, "string"); return AnomalyClassSetupView_typeof(key) === "symbol" ? key : String(key); }
function AnomalyClassSetupView_toPrimitive(input, hint) { if (AnomalyClassSetupView_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (AnomalyClassSetupView_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function AnomalyClassSetupView_slicedToArray(arr, i) { return AnomalyClassSetupView_arrayWithHoles(arr) || AnomalyClassSetupView_iterableToArrayLimit(arr, i) || AnomalyClassSetupView_unsupportedIterableToArray(arr, i) || AnomalyClassSetupView_nonIterableRest(); }
function AnomalyClassSetupView_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function AnomalyClassSetupView_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return AnomalyClassSetupView_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return AnomalyClassSetupView_arrayLikeToArray(o, minLen); }
function AnomalyClassSetupView_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function AnomalyClassSetupView_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0) { ; } } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function AnomalyClassSetupView_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




























function AnomalyClassSetupView(props) {
  var classes = Object(CommonStyles["a" /* useStyles */])();
  var _React$useState = react_default.a.useState(false),
    _React$useState2 = AnomalyClassSetupView_slicedToArray(_React$useState, 2),
    open = _React$useState2[0],
    setOpen = _React$useState2[1];
  var _React$useState3 = react_default.a.useState(""),
    _React$useState4 = AnomalyClassSetupView_slicedToArray(_React$useState3, 2),
    searchText = _React$useState4[0],
    setSearchText = _React$useState4[1];
  var _React$useState5 = react_default.a.useState(false),
    _React$useState6 = AnomalyClassSetupView_slicedToArray(_React$useState5, 2),
    openAlert = _React$useState6[0],
    setOpenAlert = _React$useState6[1];
  var _React$useState7 = react_default.a.useState({}),
    _React$useState8 = AnomalyClassSetupView_slicedToArray(_React$useState7, 2),
    dialogProps = _React$useState8[0],
    setDialogProps = _React$useState8[1];
  var _React$useState9 = react_default.a.useState(false),
    _React$useState10 = AnomalyClassSetupView_slicedToArray(_React$useState9, 2),
    isEditing = _React$useState10[0],
    setIsEditing = _React$useState10[1];
  var anomalyClasses = props.anomalyClasses;
  var _React$useState11 = react_default.a.useState({
      name: "",
      code: ""
    }),
    _React$useState12 = AnomalyClassSetupView_slicedToArray(_React$useState11, 2),
    newAnomalyClass = _React$useState12[0],
    setNewAnomalyClass = _React$useState12[1];
  function handleClickOpen() {
    setIsEditing(false);
    setNewAnomalyClass({
      name: "",
      code: ""
    });
    setOpen(true);
  }
  function handleClose() {
    setOpen(false);
  }
  var deleteAnomalyClass = function deleteAnomalyClass(anomalyClass) {
    //let selectedAccountRole = anomalyClasses.find(role => {return role.id == id});
    //console.warn(selectedAccountRole)
    if (anomalyClass) {
      setOpenAlert(true);
      setDialogProps(AnomalyClassSetupView_objectSpread(AnomalyClassSetupView_objectSpread({}, dialogProps), {}, {
        dialogTitle: "Delete anomaly class",
        dialogMessage: "Delete anomaly class: " + anomalyClass.name,
        okAction: function okAction() {
          props.deleteAnomalyClass(anomalyClass);
          setOpenAlert(false);
        }
      }));
    }

    //props.deleteAnomalyClass(Id);
  };

  var editAnomalyClass = function editAnomalyClass(anomalyClass) {
    //let selectedAccountRole = anomalyClasses.find(role => {return role.id == roleId});

    if (anomalyClass) {
      setIsEditing(true);
      setNewAnomalyClass(anomalyClass);
      setOpen(true);
    }
  };
  var handleSearchInputChange = function handleSearchInputChange(event) {
    var _event$target = event.target,
      name = _event$target.name,
      value = _event$target.value;
    console.warn(value);
    console.warn(anomalyClasses.filter(function (f) {
      return searchText == "" ? true : f.name.indexOf(searchText) > -1;
    }));
    setSearchText(value);
  };
  var handleInputChange = function handleInputChange(event) {
    var _event$target2 = event.target,
      name = _event$target2.name,
      value = _event$target2.value;
    setNewAnomalyClass(AnomalyClassSetupView_objectSpread(AnomalyClassSetupView_objectSpread({}, newAnomalyClass), {}, AnomalyClassSetupView_defineProperty({}, name, value)));
  };
  function addAnomalyClass() {
    props.createAnomalyClass(AnomalyClassSetupView_objectSpread({}, newAnomalyClass));
    setOpen(false);
  }
  function updateAnomalyClass() {
    props.updateAnomalyClass(newAnomalyClass);
    setOpen(false);
  }
  Object(react["useEffect"])(function () {
    /*const fetchData = async () => {
    
    //if(isNullOrUndefined(props.projects))
    //  return;
    axios.get(' /api/projects')
        .then((result) => {
          console.warn("result", result.data);
          props.fetchProjects(result.data);
           
        })
        .catch((ex) => {
            console.error(ex);
        });
        //setData(result.data);
    };
      fetchData();*/
  }, [props]);
  return react_default.a.createElement("main", {
    className: classes.content
  }, react_default.a.createElement("div", {
    className: classes.toolbar
  }, react_default.a.createElement(Typography["a" /* default */], {
    variant: "h6",
    gutterBottom: true
  }, "Anomaly Classes"), react_default.a.createElement(CustomButtons["b" /* PlainButton */], {
    onClick: handleClickOpen
  }, react_default.a.createElement(AddOutlined_default.a, {
    className: classes.customButtonIcon
  }), "Create Anomaly Class"), react_default.a.createElement(AlertDialog["a" /* default */], AnomalyClassSetupView_extends({
    open: openAlert,
    cancelAction: function cancelAction() {
      return setOpenAlert(false);
    }
  }, dialogProps)), react_default.a.createElement("div", {
    className: classes.search
  }, react_default.a.createElement("div", {
    className: classes.searchIcon
  }, react_default.a.createElement(Search_default.a, null)), react_default.a.createElement(InputBase["a" /* default */], {
    name: "searchText",
    value: searchText,
    onChange: handleSearchInputChange,
    fullWidth: true,
    placeholder: "Search\u2026",
    classes: {
      root: classes.inputRoot,
      input: classes.inputInput
    },
    inputProps: {
      'aria-label': 'Search'
    }
  })), react_default.a.createElement(Dialog["a" /* default */], {
    open: open,
    fullWidth: true,
    className: classes.modalDialog,
    onClose: handleClose,
    "aria-labelledby": "form-dialog-title"
  }, react_default.a.createElement(DialogTitle["a" /* default */], {
    id: "form-dialog-title"
  }, isEditing ? react_default.a.createElement("span", null, "Edit Anomaly Class") : react_default.a.createElement("span", null, "New Anomaly Class")), react_default.a.createElement(DialogContent["a" /* default */], null, react_default.a.createElement(TextField["a" /* default */], {
    autoFocus: true,
    margin: "dense",
    id: "code",
    label: "Anomaly Class Code",
    name: "code",
    value: newAnomalyClass.code,
    onChange: handleInputChange,
    fullWidth: true
  })), react_default.a.createElement(DialogContent["a" /* default */], null, react_default.a.createElement(TextField["a" /* default */], {
    autoFocus: true,
    margin: "dense",
    id: "name",
    label: "Anomaly Class Name",
    name: "name",
    value: newAnomalyClass.name,
    onChange: handleInputChange,
    fullWidth: true
  })), react_default.a.createElement(DialogActions["a" /* default */], null, react_default.a.createElement(Button["a" /* default */], {
    onClick: handleClose,
    color: "primary"
  }, "Cancel"), isEditing ? react_default.a.createElement(Button["a" /* default */], {
    onClick: updateAnomalyClass,
    color: "primary"
  }, "Update") : react_default.a.createElement(Button["a" /* default */], {
    onClick: addAnomalyClass,
    color: "primary"
  }, "Create")))), react_default.a.createElement(Grid["a" /* default */], {
    container: true,
    spacing: 1,
    className: classes.listContainer
  }, anomalyClasses && anomalyClasses.length > 0 ? anomalyClasses.filter(function (f) {
    return searchText == "" ? true : f.name.indexOf(searchText) > -1;
  }).map(function (anomalyClass) {
    return react_default.a.createElement(Grid["a" /* default */], {
      item: true,
      key: anomalyClass.id,
      xs: 12
    }, react_default.a.createElement(Paper["a" /* default */], {
      key: anomalyClass.id,
      className: classes.paper
    }, react_default.a.createElement(Grid["a" /* default */], {
      container: true,
      direction: "row",
      justify: "space-between",
      spacing: 2
    }, react_default.a.createElement(Grid["a" /* default */], {
      item: true,
      xs: true
    }, react_default.a.createElement(Typography["a" /* default */], {
      style: {
        fontSize: 14,
        fontWeight: 'bold'
      },
      variant: "h6",
      noWrap: true
    }, anomalyClass.code), react_default.a.createElement(Typography["a" /* default */], {
      style: {
        fontSize: 12,
        fontWeight: 'normal'
      },
      variant: "h6",
      noWrap: true
    }, anomalyClass.name)), react_default.a.createElement(Grid["a" /* default */], {
      item: true,
      xs: true,
      container: true,
      justify: "flex-end",
      alignItems: "center"
    }, react_default.a.createElement(IconButton["a" /* default */], {
      size: "small",
      onClick: function onClick() {
        return editAnomalyClass(anomalyClass);
      },
      color: "primary"
    }, react_default.a.createElement(EditOutlined_default.a, {
      className: classes.iconButton2
    })), react_default.a.createElement(IconButton["a" /* default */], {
      size: "small",
      onClick: function onClick() {
        return deleteAnomalyClass(anomalyClass);
      },
      color: "primary"
    }, react_default.a.createElement(DeleteOutlined_default.a, {
      className: classes.iconButton2
    }))))));
  }) : react_default.a.createElement(Grid["a" /* default */], {
    item: true,
    xs: 12,
    container: true,
    direction: "column",
    justify: "space-between",
    alignItems: "center"
  }, react_default.a.createElement(empty_box_icon_inline["a" /* default */], null), react_default.a.createElement(Typography["a" /* default */], {
    style: {
      margin: 20,
      fontSize: 20,
      color: '#777777'
    }
  }, "Empty"))));
}
var AnomalyClassSetupView_mapStateToProps = function mapStateToProps(state) {
  return {
    anomalyClasses: state.anomalyClasses
  };
};
var AnomalyClassSetupView_mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    deleteAnomalyClass: function deleteAnomalyClass(id) {
      dispatch(Object(anomalyActions["j" /* deleteAnomalyClass */])(id));
    },
    createAnomalyClass: function createAnomalyClass(a) {
      dispatch(Object(anomalyActions["e" /* createAnomalyClass */])(a));
    },
    updateAnomalyClass: function updateAnomalyClass(user) {
      dispatch(Object(anomalyActions["r" /* updateAnomalyClass */])(user));
    }
  };
};
/* harmony default export */ var aim_AnomalyClassSetupView = (Object(build["withSnackbar"])(Object(es["b" /* connect */])(AnomalyClassSetupView_mapStateToProps, AnomalyClassSetupView_mapDispatchToProps)(AnomalyClassSetupView)));
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Checkbox/Checkbox.js + 3 modules
var Checkbox = __webpack_require__(361);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/FormControlLabel/FormControlLabel.js
var FormControlLabel = __webpack_require__(357);

// CONCATENATED MODULE: ./src/_views/_setup/aim/AnomalyActionSetupView.js
function AnomalyActionSetupView_typeof(obj) { "@babel/helpers - typeof"; return AnomalyActionSetupView_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, AnomalyActionSetupView_typeof(obj); }
function AnomalyActionSetupView_extends() { AnomalyActionSetupView_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return AnomalyActionSetupView_extends.apply(this, arguments); }
function AnomalyActionSetupView_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function AnomalyActionSetupView_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? AnomalyActionSetupView_ownKeys(Object(source), !0).forEach(function (key) { AnomalyActionSetupView_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : AnomalyActionSetupView_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function AnomalyActionSetupView_defineProperty(obj, key, value) { key = AnomalyActionSetupView_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function AnomalyActionSetupView_toPropertyKey(arg) { var key = AnomalyActionSetupView_toPrimitive(arg, "string"); return AnomalyActionSetupView_typeof(key) === "symbol" ? key : String(key); }
function AnomalyActionSetupView_toPrimitive(input, hint) { if (AnomalyActionSetupView_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (AnomalyActionSetupView_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function AnomalyActionSetupView_slicedToArray(arr, i) { return AnomalyActionSetupView_arrayWithHoles(arr) || AnomalyActionSetupView_iterableToArrayLimit(arr, i) || AnomalyActionSetupView_unsupportedIterableToArray(arr, i) || AnomalyActionSetupView_nonIterableRest(); }
function AnomalyActionSetupView_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function AnomalyActionSetupView_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return AnomalyActionSetupView_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return AnomalyActionSetupView_arrayLikeToArray(o, minLen); }
function AnomalyActionSetupView_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function AnomalyActionSetupView_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0) { ; } } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function AnomalyActionSetupView_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

























function AnomalyActionSetupView(props) {
  var classes = Object(CommonStyles["a" /* useStyles */])();
  var _React$useState = react_default.a.useState(false),
    _React$useState2 = AnomalyActionSetupView_slicedToArray(_React$useState, 2),
    open = _React$useState2[0],
    setOpen = _React$useState2[1];
  var _React$useState3 = react_default.a.useState(""),
    _React$useState4 = AnomalyActionSetupView_slicedToArray(_React$useState3, 2),
    searchText = _React$useState4[0],
    setSearchText = _React$useState4[1];
  var _React$useState5 = react_default.a.useState(false),
    _React$useState6 = AnomalyActionSetupView_slicedToArray(_React$useState5, 2),
    openAlert = _React$useState6[0],
    setOpenAlert = _React$useState6[1];
  var _React$useState7 = react_default.a.useState({}),
    _React$useState8 = AnomalyActionSetupView_slicedToArray(_React$useState7, 2),
    dialogProps = _React$useState8[0],
    setDialogProps = _React$useState8[1];
  var _React$useState9 = react_default.a.useState(false),
    _React$useState10 = AnomalyActionSetupView_slicedToArray(_React$useState9, 2),
    isEditing = _React$useState10[0],
    setIsEditing = _React$useState10[1];
  var actions = props.actions;
  var _React$useState11 = react_default.a.useState({
      name: "",
      isTemporary: false
    }),
    _React$useState12 = AnomalyActionSetupView_slicedToArray(_React$useState11, 2),
    newAnomalyAction = _React$useState12[0],
    setNewAnomalyAction = _React$useState12[1];
  function handleClickOpen() {
    setIsEditing(false);
    setNewAnomalyAction({
      name: ""
    });
    setOpen(true);
  }
  function handleClose() {
    setOpen(false);
  }
  var deleteAnomalyAction = function deleteAnomalyAction(action) {
    if (action) {
      setOpenAlert(true);
      setDialogProps(AnomalyActionSetupView_objectSpread(AnomalyActionSetupView_objectSpread({}, dialogProps), {}, {
        dialogTitle: "Delete Anomaly Action",
        dialogMessage: "Delete Anomaly Action: " + action.name,
        okAction: function okAction() {
          props.deleteAnomalyAction(action);
          setOpenAlert(false);
        }
      }));
    }
  };
  var editAnomalyAction = function editAnomalyAction(action) {
    if (action) {
      setIsEditing(true);
      setNewAnomalyAction(action);
      setOpen(true);
    }
  };
  var handleSearchInputChange = function handleSearchInputChange(event) {
    var _event$target = event.target,
      name = _event$target.name,
      value = _event$target.value;
    console.warn(value);
    console.warn(actions.filter(function (f) {
      return searchText == "" ? true : f.name.indexOf(searchText) > -1;
    }));
    setSearchText(value);
  };
  var handleInputChange = function handleInputChange(event) {
    var _event$target2 = event.target,
      name = _event$target2.name,
      value = _event$target2.value;
    setNewAnomalyAction(AnomalyActionSetupView_objectSpread(AnomalyActionSetupView_objectSpread({}, newAnomalyAction), {}, AnomalyActionSetupView_defineProperty({}, name, value)));
  };
  var handleSelectInputChange = function handleSelectInputChange(data, setter) {
    return function (event) {
      var name = event.target.name;
      if (event.target.checked) {
        setter(AnomalyActionSetupView_objectSpread(AnomalyActionSetupView_objectSpread({}, data), {}, AnomalyActionSetupView_defineProperty({}, name, true)));
      } else {
        setter(AnomalyActionSetupView_objectSpread(AnomalyActionSetupView_objectSpread({}, data), {}, AnomalyActionSetupView_defineProperty({}, name, false)));
      }
    };
  };
  function addAnomalyAction() {
    props.createAnomalyAction(AnomalyActionSetupView_objectSpread({}, newAnomalyAction));
    setOpen(false);
  }
  function updateAnomalyAction() {
    props.updateAnomalyAction(newAnomalyAction);
    setOpen(false);
  }
  Object(react["useEffect"])(function () {
    /*const fetchData = async () => {
        
        //if(isNullOrUndefined(props.projects))
        //  return;
        axios.get(' /api/projects')
            .then((result) => {
              console.warn("result", result.data);
              props.fetchProjects(result.data);
               
            })
            .catch((ex) => {
                console.error(ex);
            });
            //setData(result.data);
      };
          fetchData();*/
  }, [props]);
  return react_default.a.createElement("main", {
    className: classes.content
  }, react_default.a.createElement("div", {
    className: classes.toolbar
  }, react_default.a.createElement(Typography["a" /* default */], {
    variant: "h6",
    gutterBottom: true
  }, "Anomaly Actions"), react_default.a.createElement(CustomButtons["b" /* PlainButton */], {
    onClick: handleClickOpen
  }, react_default.a.createElement(AddOutlined_default.a, {
    className: classes.customButtonIcon
  }), "Define New Action"), react_default.a.createElement(AlertDialog["a" /* default */], AnomalyActionSetupView_extends({
    open: openAlert,
    cancelAction: function cancelAction() {
      return setOpenAlert(false);
    }
  }, dialogProps)), react_default.a.createElement("div", {
    className: classes.search
  }, react_default.a.createElement("div", {
    className: classes.searchIcon
  }, react_default.a.createElement(Search_default.a, null)), react_default.a.createElement(InputBase["a" /* default */], {
    name: "searchText",
    value: searchText,
    onChange: handleSearchInputChange,
    fullWidth: true,
    placeholder: "Search\u2026",
    classes: {
      root: classes.inputRoot,
      input: classes.inputInput
    },
    inputProps: {
      "aria-label": "Search"
    }
  })), react_default.a.createElement(Dialog["a" /* default */], {
    open: open,
    fullWidth: true,
    className: classes.modalDialog,
    onClose: handleClose,
    "aria-labelledby": "form-dialog-title"
  }, react_default.a.createElement(DialogTitle["a" /* default */], {
    id: "form-dialog-title"
  }, isEditing ? react_default.a.createElement("span", null, "Edit Anomaly Action") : react_default.a.createElement("span", null, "New Anomaly Action")), react_default.a.createElement(DialogContent["a" /* default */], null, react_default.a.createElement(TextField["a" /* default */], {
    autoFocus: true,
    margin: "dense",
    id: "name",
    label: "Action Name",
    name: "name",
    value: newAnomalyAction.name,
    onChange: handleInputChange,
    fullWidth: true
  }), react_default.a.createElement(Grid["a" /* default */], {
    container: true,
    spacing: 1,
    className: classes.listContainer
  }, react_default.a.createElement(FormControlLabel["a" /* default */], {
    value: newAnomalyAction.isTemporary,
    control: react_default.a.createElement(Checkbox["a" /* default */], {
      name: "isTemporary",
      checked: newAnomalyAction.isTemporary == true,
      onChange: handleSelectInputChange(newAnomalyAction, setNewAnomalyAction),
      style: {
        color: "#1c75bc"
      }
    }),
    label: "Is Temporary Action"
  }))), react_default.a.createElement(DialogActions["a" /* default */], null, react_default.a.createElement(Button["a" /* default */], {
    onClick: handleClose,
    color: "primary"
  }, "Cancel"), isEditing ? react_default.a.createElement(Button["a" /* default */], {
    onClick: updateAnomalyAction,
    color: "primary"
  }, "Update") : react_default.a.createElement(Button["a" /* default */], {
    onClick: addAnomalyAction,
    color: "primary"
  }, "Create")))), react_default.a.createElement(Grid["a" /* default */], {
    container: true,
    spacing: 1,
    className: classes.listContainer
  }, actions && actions.length > 0 ? actions.filter(function (f) {
    return searchText == "" ? true : f.name.indexOf(searchText) > -1;
  }).map(function (anomalyAction) {
    return react_default.a.createElement(Grid["a" /* default */], {
      item: true,
      key: anomalyAction.id,
      xs: 12
    }, react_default.a.createElement(Paper["a" /* default */], {
      key: anomalyAction.id,
      className: classes.paper
    }, react_default.a.createElement(Grid["a" /* default */], {
      container: true,
      direction: "row",
      justify: "space-between",
      spacing: 2
    }, react_default.a.createElement(Grid["a" /* default */], {
      item: true,
      xs: true
    }, react_default.a.createElement(Typography["a" /* default */], {
      variant: "h6",
      noWrap: true
    }, anomalyAction.name)), react_default.a.createElement(Grid["a" /* default */], {
      item: true,
      xs: true,
      container: true,
      justify: "flex-end",
      alignItems: "center"
    }, react_default.a.createElement(IconButton["a" /* default */], {
      size: "small",
      onClick: function onClick() {
        return editAnomalyAction(anomalyAction);
      },
      color: "primary"
    }, react_default.a.createElement(EditOutlined_default.a, {
      className: classes.iconButton2
    })), react_default.a.createElement(IconButton["a" /* default */], {
      size: "small",
      onClick: function onClick() {
        return deleteAnomalyAction(anomalyAction);
      },
      color: "primary"
    }, react_default.a.createElement(DeleteOutlined_default.a, {
      className: classes.iconButton2
    }))))));
  }) : react_default.a.createElement(Grid["a" /* default */], {
    item: true,
    xs: 12,
    container: true,
    direction: "column",
    justify: "space-between",
    alignItems: "center"
  }, react_default.a.createElement(empty_box_icon_inline["a" /* default */], null), react_default.a.createElement(Typography["a" /* default */], {
    style: {
      margin: 20,
      fontSize: 20,
      color: "#777777"
    }
  }, "Empty"))));
}
var AnomalyActionSetupView_mapStateToProps = function mapStateToProps(state) {
  return {
    actions: state.actions
  };
};
var AnomalyActionSetupView_mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    deleteAnomalyAction: function deleteAnomalyAction(id) {
      dispatch(Object(anomalyActions["i" /* deleteAnomalyAction */])(id));
    },
    createAnomalyAction: function createAnomalyAction(a) {
      dispatch(Object(anomalyActions["d" /* createAnomalyAction */])(a));
    },
    updateAnomalyAction: function updateAnomalyAction(a) {
      dispatch(Object(anomalyActions["q" /* updateAnomalyAction */])(a));
    }
  };
};
/* harmony default export */ var aim_AnomalyActionSetupView = (Object(build["withSnackbar"])(Object(es["b" /* connect */])(AnomalyActionSetupView_mapStateToProps, AnomalyActionSetupView_mapDispatchToProps)(AnomalyActionSetupView)));
// CONCATENATED MODULE: ./src/_views/_setup/aim/AnomalySystemSetupView.js
function AnomalySystemSetupView_typeof(obj) { "@babel/helpers - typeof"; return AnomalySystemSetupView_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, AnomalySystemSetupView_typeof(obj); }
function AnomalySystemSetupView_extends() { AnomalySystemSetupView_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return AnomalySystemSetupView_extends.apply(this, arguments); }
function AnomalySystemSetupView_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function AnomalySystemSetupView_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? AnomalySystemSetupView_ownKeys(Object(source), !0).forEach(function (key) { AnomalySystemSetupView_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : AnomalySystemSetupView_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function AnomalySystemSetupView_defineProperty(obj, key, value) { key = AnomalySystemSetupView_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function AnomalySystemSetupView_toPropertyKey(arg) { var key = AnomalySystemSetupView_toPrimitive(arg, "string"); return AnomalySystemSetupView_typeof(key) === "symbol" ? key : String(key); }
function AnomalySystemSetupView_toPrimitive(input, hint) { if (AnomalySystemSetupView_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (AnomalySystemSetupView_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function AnomalySystemSetupView_slicedToArray(arr, i) { return AnomalySystemSetupView_arrayWithHoles(arr) || AnomalySystemSetupView_iterableToArrayLimit(arr, i) || AnomalySystemSetupView_unsupportedIterableToArray(arr, i) || AnomalySystemSetupView_nonIterableRest(); }
function AnomalySystemSetupView_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function AnomalySystemSetupView_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return AnomalySystemSetupView_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return AnomalySystemSetupView_arrayLikeToArray(o, minLen); }
function AnomalySystemSetupView_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function AnomalySystemSetupView_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0) { ; } } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function AnomalySystemSetupView_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


















































function AnomalySystemSetupView(props) {
  var classes = Object(CommonStyles["a" /* useStyles */])();
  var _React$useState = react_default.a.useState(false),
    _React$useState2 = AnomalySystemSetupView_slicedToArray(_React$useState, 2),
    open = _React$useState2[0],
    setOpen = _React$useState2[1];
  var _React$useState3 = react_default.a.useState(""),
    _React$useState4 = AnomalySystemSetupView_slicedToArray(_React$useState3, 2),
    searchText = _React$useState4[0],
    setSearchText = _React$useState4[1];
  var _React$useState5 = react_default.a.useState(false),
    _React$useState6 = AnomalySystemSetupView_slicedToArray(_React$useState5, 2),
    openAlert = _React$useState6[0],
    setOpenAlert = _React$useState6[1];
  var _React$useState7 = react_default.a.useState({}),
    _React$useState8 = AnomalySystemSetupView_slicedToArray(_React$useState7, 2),
    dialogProps = _React$useState8[0],
    setDialogProps = _React$useState8[1];
  var _React$useState9 = react_default.a.useState(false),
    _React$useState10 = AnomalySystemSetupView_slicedToArray(_React$useState9, 2),
    isEditing = _React$useState10[0],
    setIsEditing = _React$useState10[1];
  var systems = props.systems;
  var _React$useState11 = react_default.a.useState({
      name: "",
      code: ""
    }),
    _React$useState12 = AnomalySystemSetupView_slicedToArray(_React$useState11, 2),
    newAnomalySystem = _React$useState12[0],
    setNewAnomalySystem = _React$useState12[1];
  function handleClickOpen() {
    setIsEditing(false);
    setNewAnomalySystem({
      name: "",
      code: ""
    });
    setOpen(true);
  }
  function handleClose() {
    setOpen(false);
  }
  var deleteAnomalySystem = function deleteAnomalySystem(anomalySystem) {
    //let selectedAccountRole = systems.find(role => {return role.id == id});
    //console.warn(selectedAccountRole)
    if (anomalySystem) {
      setOpenAlert(true);
      setDialogProps(AnomalySystemSetupView_objectSpread(AnomalySystemSetupView_objectSpread({}, dialogProps), {}, {
        dialogTitle: "Delete system",
        dialogMessage: "Delete system: " + anomalySystem.name,
        okAction: function okAction() {
          props.deleteAnomalySystem(anomalySystem);
          setOpenAlert(false);
        }
      }));
    }

    //props.deleteAnomalySystem(Id);
  };

  var editAnomalySystem = function editAnomalySystem(system) {
    //let selectedAccountRole = systems.find(role => {return role.id == roleId});

    if (system) {
      setIsEditing(true);
      setNewAnomalySystem(system);
      setOpen(true);
    }
  };
  var handleSearchInputChange = function handleSearchInputChange(event) {
    var _event$target = event.target,
      name = _event$target.name,
      value = _event$target.value;
    console.warn(value);
    console.warn(systems.filter(function (f) {
      return searchText == "" ? true : f.code.indexOf(searchText) > -1;
    }));
    setSearchText(value);
  };
  var handleInputChange = function handleInputChange(event) {
    var _event$target2 = event.target,
      name = _event$target2.name,
      value = _event$target2.value;
    setNewAnomalySystem(AnomalySystemSetupView_objectSpread(AnomalySystemSetupView_objectSpread({}, newAnomalySystem), {}, AnomalySystemSetupView_defineProperty({}, name, value)));
  };
  function addAnomalySystem() {
    props.createAnomalySystem(AnomalySystemSetupView_objectSpread({}, newAnomalySystem));
    setOpen(false);
  }
  function updateAnomalySystem() {
    props.updateAnomalySystem(newAnomalySystem);
    setOpen(false);
  }
  Object(react["useEffect"])(function () {
    /*const fetchData = async () => {
    
    //if(isNullOrUndefined(props.projects))
    //  return;
    axios.get(' /api/projects')
        .then((result) => {
          console.warn("result", result.data);
          props.fetchProjects(result.data);
           
        })
        .catch((ex) => {
            console.error(ex);
        });
        //setData(result.data);
    };
      fetchData();*/
  }, [props]);
  return react_default.a.createElement("main", {
    className: classes.content
  }, react_default.a.createElement("div", {
    className: classes.toolbar
  }, react_default.a.createElement(Typography["a" /* default */], {
    variant: "h6",
    gutterBottom: true
  }, "Anomaly Systems"), react_default.a.createElement(CustomButtons["b" /* PlainButton */], {
    onClick: handleClickOpen
  }, react_default.a.createElement(AddOutlined_default.a, {
    className: classes.customButtonIcon
  }), "Define Anomaly System"), react_default.a.createElement(AlertDialog["a" /* default */], AnomalySystemSetupView_extends({
    open: openAlert,
    cancelAction: function cancelAction() {
      return setOpenAlert(false);
    }
  }, dialogProps)), react_default.a.createElement("div", {
    className: classes.search
  }, react_default.a.createElement("div", {
    className: classes.searchIcon
  }, react_default.a.createElement(Search_default.a, null)), react_default.a.createElement(InputBase["a" /* default */], {
    name: "searchText",
    value: searchText,
    onChange: handleSearchInputChange,
    fullWidth: true,
    placeholder: "Search\u2026",
    classes: {
      root: classes.inputRoot,
      input: classes.inputInput
    },
    inputProps: {
      'aria-label': 'Search'
    }
  })), react_default.a.createElement(Dialog["a" /* default */], {
    open: open,
    fullWidth: true,
    className: classes.modalDialog,
    onClose: handleClose,
    "aria-labelledby": "form-dialog-title"
  }, react_default.a.createElement(DialogTitle["a" /* default */], {
    id: "form-dialog-title"
  }, isEditing ? react_default.a.createElement("span", null, "Edit Anomaly System") : react_default.a.createElement("span", null, "New Anomaly System")), react_default.a.createElement(DialogContent["a" /* default */], null, react_default.a.createElement(TextField["a" /* default */], {
    autoFocus: true,
    margin: "dense",
    id: "name",
    label: "System Name",
    name: "name",
    value: newAnomalySystem.name,
    onChange: handleInputChange,
    fullWidth: true
  }), react_default.a.createElement(TextField["a" /* default */], {
    autoFocus: true,
    margin: "dense",
    id: "code",
    label: "System Code",
    name: "code",
    value: newAnomalySystem.code,
    onChange: handleInputChange,
    fullWidth: true
  })), react_default.a.createElement(DialogActions["a" /* default */], null, react_default.a.createElement(Button["a" /* default */], {
    onClick: handleClose,
    color: "primary"
  }, "Cancel"), isEditing ? react_default.a.createElement(Button["a" /* default */], {
    onClick: updateAnomalySystem,
    color: "primary"
  }, "Update") : react_default.a.createElement(Button["a" /* default */], {
    onClick: addAnomalySystem,
    color: "primary"
  }, "Create")))), react_default.a.createElement(Grid["a" /* default */], {
    container: true,
    spacing: 1,
    className: classes.listContainer
  }, systems && systems.length > 0 ? systems.filter(function (f) {
    return searchText == "" ? true : f.name.indexOf(searchText) > -1;
  }).map(function (system) {
    return react_default.a.createElement(Grid["a" /* default */], {
      item: true,
      key: system.id,
      xs: 12
    }, react_default.a.createElement(Paper["a" /* default */], {
      key: system.id,
      className: classes.paper
    }, react_default.a.createElement(Grid["a" /* default */], {
      container: true,
      direction: "row",
      justify: "space-between",
      spacing: 2
    }, react_default.a.createElement(Grid["a" /* default */], {
      item: true,
      xs: true
    }, react_default.a.createElement(Typography["a" /* default */], {
      variant: "h6",
      noWrap: true
    }, system.code)), react_default.a.createElement(Grid["a" /* default */], {
      item: true,
      xs: true,
      container: true,
      justify: "flex-end",
      alignItems: "center"
    }, react_default.a.createElement(IconButton["a" /* default */], {
      size: "small",
      onClick: function onClick() {
        return editAnomalySystem(system);
      },
      color: "primary"
    }, react_default.a.createElement(EditOutlined_default.a, {
      className: classes.iconButton2
    })), react_default.a.createElement(IconButton["a" /* default */], {
      size: "small",
      onClick: function onClick() {
        return deleteAnomalySystem(system);
      },
      color: "primary"
    }, react_default.a.createElement(DeleteOutlined_default.a, {
      className: classes.iconButton2
    }))))));
  }) : react_default.a.createElement(Grid["a" /* default */], {
    item: true,
    xs: 12,
    container: true,
    direction: "column",
    justify: "space-between",
    alignItems: "center"
  }, react_default.a.createElement(empty_box_icon_inline["a" /* default */], null), react_default.a.createElement(Typography["a" /* default */], {
    style: {
      margin: 20,
      fontSize: 20,
      color: '#777777'
    }
  }, "Empty"))));
}
var AnomalySystemSetupView_mapStateToProps = function mapStateToProps(state) {
  return {
    systems: state.systems
  };
};
var AnomalySystemSetupView_mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    deleteAnomalySystem: function deleteAnomalySystem(id) {
      dispatch(Object(anomalyActions["k" /* deleteAnomalySystem */])(id));
    },
    createAnomalySystem: function createAnomalySystem(a) {
      dispatch(Object(anomalyActions["f" /* createAnomalySystem */])(a));
    },
    updateAnomalySystem: function updateAnomalySystem(a) {
      dispatch(Object(anomalyActions["u" /* updateAnomalySystem */])(user));
    }
  };
};
/* harmony default export */ var aim_AnomalySystemSetupView = (Object(build["withSnackbar"])(Object(es["b" /* connect */])(AnomalySystemSetupView_mapStateToProps, AnomalySystemSetupView_mapDispatchToProps)(AnomalySystemSetupView)));
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/extends.js
var esm_extends = __webpack_require__(1);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js
var objectWithoutProperties = __webpack_require__(2);

// EXTERNAL MODULE: ./node_modules/prop-types/index.js
var prop_types = __webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/internal/svg-icons/createSvgIcon.js
var createSvgIcon = __webpack_require__(62);

// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/internal/svg-icons/Cancel.js


/**
 * @ignore - internal component.
 */

/* harmony default export */ var Cancel = (Object(createSvgIcon["a" /* default */])(react["createElement"]("path", {
  d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
}), 'Cancel'));
// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/withStyles.js
var withStyles = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/colorManipulator.js
var colorManipulator = __webpack_require__(21);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/useForkRef.js
var useForkRef = __webpack_require__(20);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/utils/capitalize.js
var capitalize = __webpack_require__(9);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/ButtonBase/ButtonBase.js + 3 modules
var ButtonBase = __webpack_require__(362);

// CONCATENATED MODULE: ./node_modules/@material-ui/core/esm/Chip/Chip.js












var Chip_styles = function styles(theme) {
  var backgroundColor = theme.palette.type === 'light' ? theme.palette.grey[300] : theme.palette.grey[700];
  var deleteIconColor = Object(colorManipulator["d" /* fade */])(theme.palette.text.primary, 0.26);
  return {
    /* Styles applied to the root element. */
    root: {
      fontFamily: theme.typography.fontFamily,
      fontSize: theme.typography.pxToRem(13),
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: 32,
      color: theme.palette.getContrastText(backgroundColor),
      backgroundColor: backgroundColor,
      borderRadius: 32 / 2,
      whiteSpace: 'nowrap',
      transition: theme.transitions.create(['background-color', 'box-shadow']),
      // label will inherit this from root, then `clickable` class overrides this for both
      cursor: 'default',
      // We disable the focus ring for mouse, touch and keyboard users.
      outline: 0,
      textDecoration: 'none',
      border: 'none',
      // Remove `button` border
      padding: 0,
      // Remove `button` padding
      verticalAlign: 'middle',
      boxSizing: 'border-box',
      '&$disabled': {
        opacity: 0.5,
        pointerEvents: 'none'
      },
      '& $avatar': {
        marginLeft: 5,
        marginRight: -6,
        width: 24,
        height: 24,
        color: theme.palette.type === 'light' ? theme.palette.grey[700] : theme.palette.grey[300],
        fontSize: theme.typography.pxToRem(12)
      },
      '& $avatarColorPrimary': {
        color: theme.palette.primary.contrastText,
        backgroundColor: theme.palette.primary.dark
      },
      '& $avatarColorSecondary': {
        color: theme.palette.secondary.contrastText,
        backgroundColor: theme.palette.secondary.dark
      },
      '& $avatarSmall': {
        marginLeft: 4,
        marginRight: -4,
        width: 18,
        height: 18,
        fontSize: theme.typography.pxToRem(10)
      }
    },
    /* Styles applied to the root element if `size="small"`. */
    sizeSmall: {
      height: 24
    },
    /* Styles applied to the root element if `color="primary"`. */
    colorPrimary: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText
    },
    /* Styles applied to the root element if `color="secondary"`. */
    colorSecondary: {
      backgroundColor: theme.palette.secondary.main,
      color: theme.palette.secondary.contrastText
    },
    /* Pseudo-class applied to the root element if `disabled={true}`. */
    disabled: {},
    /* Styles applied to the root element if `onClick` is defined or `clickable={true}`. */
    clickable: {
      userSelect: 'none',
      WebkitTapHighlightColor: 'transparent',
      cursor: 'pointer',
      '&:hover, &:focus': {
        backgroundColor: Object(colorManipulator["c" /* emphasize */])(backgroundColor, 0.08)
      },
      '&:active': {
        boxShadow: theme.shadows[1]
      }
    },
    /* Styles applied to the root element if `onClick` and `color="primary"` is defined or `clickable={true}`. */
    clickableColorPrimary: {
      '&:hover, &:focus': {
        backgroundColor: Object(colorManipulator["c" /* emphasize */])(theme.palette.primary.main, 0.08)
      }
    },
    /* Styles applied to the root element if `onClick` and `color="secondary"` is defined or `clickable={true}`. */
    clickableColorSecondary: {
      '&:hover, &:focus': {
        backgroundColor: Object(colorManipulator["c" /* emphasize */])(theme.palette.secondary.main, 0.08)
      }
    },
    /* Styles applied to the root element if `onDelete` is defined. */
    deletable: {
      '&:focus': {
        backgroundColor: Object(colorManipulator["c" /* emphasize */])(backgroundColor, 0.08)
      }
    },
    /* Styles applied to the root element if `onDelete` and `color="primary"` is defined. */
    deletableColorPrimary: {
      '&:focus': {
        backgroundColor: Object(colorManipulator["c" /* emphasize */])(theme.palette.primary.main, 0.2)
      }
    },
    /* Styles applied to the root element if `onDelete` and `color="secondary"` is defined. */
    deletableColorSecondary: {
      '&:focus': {
        backgroundColor: Object(colorManipulator["c" /* emphasize */])(theme.palette.secondary.main, 0.2)
      }
    },
    /* Styles applied to the root element if `variant="outlined"`. */
    outlined: {
      backgroundColor: 'transparent',
      border: "1px solid ".concat(theme.palette.type === 'light' ? 'rgba(0, 0, 0, 0.23)' : 'rgba(255, 255, 255, 0.23)'),
      '$clickable&:hover, $clickable&:focus, $deletable&:focus': {
        backgroundColor: Object(colorManipulator["d" /* fade */])(theme.palette.text.primary, theme.palette.action.hoverOpacity)
      },
      '& $avatar': {
        marginLeft: 4
      },
      '& $avatarSmall': {
        marginLeft: 2
      },
      '& $icon': {
        marginLeft: 4
      },
      '& $iconSmall': {
        marginLeft: 2
      },
      '& $deleteIcon': {
        marginRight: 5
      },
      '& $deleteIconSmall': {
        marginRight: 3
      }
    },
    /* Styles applied to the root element if `variant="outlined"` and `color="primary"`. */
    outlinedPrimary: {
      color: theme.palette.primary.main,
      border: "1px solid ".concat(theme.palette.primary.main),
      '$clickable&:hover, $clickable&:focus, $deletable&:focus': {
        backgroundColor: Object(colorManipulator["d" /* fade */])(theme.palette.primary.main, theme.palette.action.hoverOpacity)
      }
    },
    /* Styles applied to the root element if `variant="outlined"` and `color="secondary"`. */
    outlinedSecondary: {
      color: theme.palette.secondary.main,
      border: "1px solid ".concat(theme.palette.secondary.main),
      '$clickable&:hover, $clickable&:focus, $deletable&:focus': {
        backgroundColor: Object(colorManipulator["d" /* fade */])(theme.palette.secondary.main, theme.palette.action.hoverOpacity)
      }
    },
    // TODO v5: remove

    /* Styles applied to the `avatar` element. */
    avatar: {},
    /* Styles applied to the `avatar` element if `size="small"`. */
    avatarSmall: {},
    /* Styles applied to the `avatar` element if `color="primary"`. */
    avatarColorPrimary: {},
    /* Styles applied to the `avatar` element if `color="secondary"`. */
    avatarColorSecondary: {},
    /* Styles applied to the `icon` element. */
    icon: {
      color: theme.palette.type === 'light' ? theme.palette.grey[700] : theme.palette.grey[300],
      marginLeft: 5,
      marginRight: -6
    },
    /* Styles applied to the `icon` element if `size="small"`. */
    iconSmall: {
      width: 18,
      height: 18,
      marginLeft: 4,
      marginRight: -4
    },
    /* Styles applied to the `icon` element if `color="primary"`. */
    iconColorPrimary: {
      color: 'inherit'
    },
    /* Styles applied to the `icon` element if `color="secondary"`. */
    iconColorSecondary: {
      color: 'inherit'
    },
    /* Styles applied to the label `span` element. */
    label: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      paddingLeft: 12,
      paddingRight: 12,
      whiteSpace: 'nowrap'
    },
    /* Styles applied to the label `span` element if `size="small"`. */
    labelSmall: {
      paddingLeft: 8,
      paddingRight: 8
    },
    /* Styles applied to the `deleteIcon` element. */
    deleteIcon: {
      WebkitTapHighlightColor: 'transparent',
      color: deleteIconColor,
      height: 22,
      width: 22,
      cursor: 'pointer',
      margin: '0 5px 0 -6px',
      '&:hover': {
        color: Object(colorManipulator["d" /* fade */])(deleteIconColor, 0.4)
      }
    },
    /* Styles applied to the `deleteIcon` element if `size="small"`. */
    deleteIconSmall: {
      height: 16,
      width: 16,
      marginRight: 4,
      marginLeft: -4
    },
    /* Styles applied to the deleteIcon element if `color="primary"` and `variant="default"`. */
    deleteIconColorPrimary: {
      color: Object(colorManipulator["d" /* fade */])(theme.palette.primary.contrastText, 0.7),
      '&:hover, &:active': {
        color: theme.palette.primary.contrastText
      }
    },
    /* Styles applied to the deleteIcon element if `color="secondary"` and `variant="default"`. */
    deleteIconColorSecondary: {
      color: Object(colorManipulator["d" /* fade */])(theme.palette.secondary.contrastText, 0.7),
      '&:hover, &:active': {
        color: theme.palette.secondary.contrastText
      }
    },
    /* Styles applied to the deleteIcon element if `color="primary"` and `variant="outlined"`. */
    deleteIconOutlinedColorPrimary: {
      color: Object(colorManipulator["d" /* fade */])(theme.palette.primary.main, 0.7),
      '&:hover, &:active': {
        color: theme.palette.primary.main
      }
    },
    /* Styles applied to the deleteIcon element if `color="secondary"` and `variant="outlined"`. */
    deleteIconOutlinedColorSecondary: {
      color: Object(colorManipulator["d" /* fade */])(theme.palette.secondary.main, 0.7),
      '&:hover, &:active': {
        color: theme.palette.secondary.main
      }
    }
  };
};
/**
 * Chips represent complex entities in small blocks, such as a contact.
 */

var Chip_Chip = react["forwardRef"](function Chip(props, ref) {
  var avatarProp = props.avatar,
    classes = props.classes,
    className = props.className,
    clickableProp = props.clickable,
    _props$color = props.color,
    color = _props$color === void 0 ? 'default' : _props$color,
    ComponentProp = props.component,
    deleteIconProp = props.deleteIcon,
    _props$disabled = props.disabled,
    disabled = _props$disabled === void 0 ? false : _props$disabled,
    iconProp = props.icon,
    label = props.label,
    onClick = props.onClick,
    onDelete = props.onDelete,
    onKeyUp = props.onKeyUp,
    _props$size = props.size,
    size = _props$size === void 0 ? 'medium' : _props$size,
    _props$variant = props.variant,
    variant = _props$variant === void 0 ? 'default' : _props$variant,
    other = Object(objectWithoutProperties["a" /* default */])(props, ["avatar", "classes", "className", "clickable", "color", "component", "deleteIcon", "disabled", "icon", "label", "onClick", "onDelete", "onKeyUp", "size", "variant"]);
  var chipRef = react["useRef"](null);
  var handleRef = Object(useForkRef["a" /* default */])(chipRef, ref);
  var handleDeleteIconClick = function handleDeleteIconClick(event) {
    // Stop the event from bubbling up to the `Chip`
    event.stopPropagation();
    if (onDelete) {
      onDelete(event);
    }
  };
  var handleKeyUp = function handleKeyUp(event) {
    if (onKeyUp) {
      onKeyUp(event);
    } // Ignore events from children of `Chip`.

    if (event.currentTarget !== event.target) {
      return;
    }
    var key = event.key;
    if (onDelete && (key === 'Backspace' || key === 'Delete')) {
      onDelete(event);
    } else if (key === 'Escape' && chipRef.current) {
      chipRef.current.blur();
    }
  };
  var clickable = clickableProp !== false && onClick ? true : clickableProp;
  var small = size === 'small';
  var Component = ComponentProp || (clickable ? ButtonBase["a" /* default */] : 'div');
  var moreProps = Component === ButtonBase["a" /* default */] ? {
    component: 'div'
  } : {};
  var deleteIcon = null;
  if (onDelete) {
    var customClasses = Object(clsx_m["a" /* default */])(color !== 'default' && (variant === "default" ? classes["deleteIconColor".concat(Object(capitalize["a" /* default */])(color))] : classes["deleteIconOutlinedColor".concat(Object(capitalize["a" /* default */])(color))]), small && classes.deleteIconSmall);
    deleteIcon = deleteIconProp && react["isValidElement"](deleteIconProp) ? react["cloneElement"](deleteIconProp, {
      className: Object(clsx_m["a" /* default */])(deleteIconProp.props.className, classes.deleteIcon, customClasses),
      onClick: handleDeleteIconClick
    }) : react["createElement"](Cancel, {
      className: Object(clsx_m["a" /* default */])(classes.deleteIcon, customClasses),
      onClick: handleDeleteIconClick
    });
  }
  var avatar = null;
  if (avatarProp && react["isValidElement"](avatarProp)) {
    avatar = react["cloneElement"](avatarProp, {
      className: Object(clsx_m["a" /* default */])(classes.avatar, avatarProp.props.className, small && classes.avatarSmall, color !== 'default' && classes["avatarColor".concat(Object(capitalize["a" /* default */])(color))])
    });
  }
  var icon = null;
  if (iconProp && react["isValidElement"](iconProp)) {
    icon = react["cloneElement"](iconProp, {
      className: Object(clsx_m["a" /* default */])(classes.icon, iconProp.props.className, small && classes.iconSmall, color !== 'default' && classes["iconColor".concat(Object(capitalize["a" /* default */])(color))])
    });
  }
  if (false) {}
  return react["createElement"](Component, Object(esm_extends["a" /* default */])({
    role: clickable || onDelete ? 'button' : undefined,
    className: Object(clsx_m["a" /* default */])(classes.root, className, color !== 'default' && [classes["color".concat(Object(capitalize["a" /* default */])(color))], clickable && classes["clickableColor".concat(Object(capitalize["a" /* default */])(color))], onDelete && classes["deletableColor".concat(Object(capitalize["a" /* default */])(color))]], variant !== "default" && [classes.outlined, {
      'primary': classes.outlinedPrimary,
      'secondary': classes.outlinedSecondary
    }[color]], disabled && classes.disabled, small && classes.sizeSmall, clickable && classes.clickable, onDelete && classes.deletable),
    "aria-disabled": disabled ? true : undefined,
    tabIndex: clickable || onDelete ? 0 : undefined,
    onClick: onClick,
    onKeyUp: handleKeyUp,
    ref: handleRef
  }, moreProps, other), avatar || icon, react["createElement"]("span", {
    className: Object(clsx_m["a" /* default */])(classes.label, small && classes.labelSmall)
  }, label), deleteIcon);
});
 false ? undefined : void 0;
/* harmony default export */ var esm_Chip_Chip = (Object(withStyles["a" /* default */])(Chip_styles, {
  name: 'MuiChip'
})(Chip_Chip));
// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Done.js
var Done = __webpack_require__(1208);
var Done_default = /*#__PURE__*/__webpack_require__.n(Done);

// CONCATENATED MODULE: ./src/_views/_setup/aim/AnomalyPermissionSetupView.js
function AnomalyPermissionSetupView_typeof(obj) { "@babel/helpers - typeof"; return AnomalyPermissionSetupView_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, AnomalyPermissionSetupView_typeof(obj); }
function AnomalyPermissionSetupView_extends() { AnomalyPermissionSetupView_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return AnomalyPermissionSetupView_extends.apply(this, arguments); }
function AnomalyPermissionSetupView_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function AnomalyPermissionSetupView_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? AnomalyPermissionSetupView_ownKeys(Object(source), !0).forEach(function (key) { AnomalyPermissionSetupView_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : AnomalyPermissionSetupView_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function AnomalyPermissionSetupView_defineProperty(obj, key, value) { key = AnomalyPermissionSetupView_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function AnomalyPermissionSetupView_toPropertyKey(arg) { var key = AnomalyPermissionSetupView_toPrimitive(arg, "string"); return AnomalyPermissionSetupView_typeof(key) === "symbol" ? key : String(key); }
function AnomalyPermissionSetupView_toPrimitive(input, hint) { if (AnomalyPermissionSetupView_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (AnomalyPermissionSetupView_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function AnomalyPermissionSetupView_slicedToArray(arr, i) { return AnomalyPermissionSetupView_arrayWithHoles(arr) || AnomalyPermissionSetupView_iterableToArrayLimit(arr, i) || AnomalyPermissionSetupView_unsupportedIterableToArray(arr, i) || AnomalyPermissionSetupView_nonIterableRest(); }
function AnomalyPermissionSetupView_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function AnomalyPermissionSetupView_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return AnomalyPermissionSetupView_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return AnomalyPermissionSetupView_arrayLikeToArray(o, minLen); }
function AnomalyPermissionSetupView_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function AnomalyPermissionSetupView_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0) { ; } } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function AnomalyPermissionSetupView_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


































function AnomalyPermissionSetupView(props) {
  var classes = Object(CommonStyles["a" /* useStyles */])();
  var _React$useState = react_default.a.useState(false),
    _React$useState2 = AnomalyPermissionSetupView_slicedToArray(_React$useState, 2),
    open = _React$useState2[0],
    setOpen = _React$useState2[1];
  var _React$useState3 = react_default.a.useState(""),
    _React$useState4 = AnomalyPermissionSetupView_slicedToArray(_React$useState3, 2),
    searchText = _React$useState4[0],
    setSearchText = _React$useState4[1];
  var emptyAnomalyPermission = {
    user: "",
    canAnalyse: false,
    canCreate: true,
    canReview: false,
    canSetStatus: false
  };
  var _React$useState5 = react_default.a.useState(false),
    _React$useState6 = AnomalyPermissionSetupView_slicedToArray(_React$useState5, 2),
    openAlert = _React$useState6[0],
    setOpenAlert = _React$useState6[1];
  var _React$useState7 = react_default.a.useState({}),
    _React$useState8 = AnomalyPermissionSetupView_slicedToArray(_React$useState7, 2),
    dialogProps = _React$useState8[0],
    setDialogProps = _React$useState8[1];
  var _React$useState9 = react_default.a.useState(false),
    _React$useState10 = AnomalyPermissionSetupView_slicedToArray(_React$useState9, 2),
    isEditing = _React$useState10[0],
    setIsEditing = _React$useState10[1];
  var anomalyPermissions = props.anomalyPermissions;
  var users = props.users;
  var _React$useState11 = react_default.a.useState(AnomalyPermissionSetupView_objectSpread({}, emptyAnomalyPermission)),
    _React$useState12 = AnomalyPermissionSetupView_slicedToArray(_React$useState11, 2),
    newAnomalyPermission = _React$useState12[0],
    setNewAnomalyPermission = _React$useState12[1];
  function handleClickOpen() {
    setIsEditing(false);
    setNewAnomalyPermission(AnomalyPermissionSetupView_objectSpread({}, emptyAnomalyPermission));
    setOpen(true);
  }
  function handleClose() {
    setOpen(false);
  }
  var handleSelectInputChange = function handleSelectInputChange(data, setter) {
    return function (event) {
      var name = event.target.name;
      if (event.target.checked) {
        setter(AnomalyPermissionSetupView_objectSpread(AnomalyPermissionSetupView_objectSpread({}, data), {}, AnomalyPermissionSetupView_defineProperty({}, name, true)));
      } else {
        setter(AnomalyPermissionSetupView_objectSpread(AnomalyPermissionSetupView_objectSpread({}, data), {}, AnomalyPermissionSetupView_defineProperty({}, name, false)));
      }
    };
  };
  var getPermissionsView = function getPermissionsView(user) {
    var selectedAnomalyPermission = anomalyPermissions.find(function (ap) {
      return ap.user == user.id;
    });
    var anomalyPermission = selectedAnomalyPermission ? selectedAnomalyPermission : AnomalyPermissionSetupView_objectSpread(AnomalyPermissionSetupView_objectSpread({}, emptyAnomalyPermission), {}, {
      user: user
    });
    if (anomalyPermission) {
      return react_default.a.createElement(Grid["a" /* default */], null, anomalyPermission.canCreate && react_default.a.createElement(esm_Chip_Chip, {
        variant: "outlined",
        size: "small",
        style: {
          fontSize: 10,
          padding: 2,
          margin: 2
        },
        label: "Can Create",
        deleteIcon: react_default.a.createElement(Done_default.a, null),
        color: "primary"
      }), anomalyPermission.canAnalyse && react_default.a.createElement(esm_Chip_Chip, {
        variant: "outlined",
        size: "small",
        style: {
          fontSize: 10,
          padding: 2,
          margin: 2
        },
        label: "Can Analyse",
        deleteIcon: react_default.a.createElement(Done_default.a, null),
        color: "primary"
      }), anomalyPermission.canReview && react_default.a.createElement(esm_Chip_Chip, {
        variant: "outlined",
        size: "small",
        style: {
          fontSize: 10,
          padding: 2,
          margin: 2
        },
        label: "Can Review",
        deleteIcon: react_default.a.createElement(Done_default.a, null),
        color: "primary"
      }), anomalyPermission.canSetStatus && react_default.a.createElement(esm_Chip_Chip, {
        variant: "outlined",
        size: "small",
        style: {
          fontSize: 10,
          padding: 2,
          margin: 2
        },
        label: "Can Update Status",
        deleteIcon: react_default.a.createElement(Done_default.a, null),
        color: "primary"
      }));
    }
  };

  /*const deleteanomalyPermission = anomalyPermission => {  
        
      
      
      //let selectedAccountRole = anomalyPermissions.find(role => {return role.id == id});
      //console.warn(selectedAccountRole)
      if(anomalyPermission)
      {
        setOpenAlert(true); 
          setDialogProps({...dialogProps, dialogTitle: "Delete Anomaly Permission", 
        dialogMessage: "Delete Anomaly Permission: "+anomalyPermission.name,
        okAction:()=>{props.deleteanomalyPermission(anomalyPermission);setOpenAlert(false)}
        })
      }
        //props.deleteanomalyPermission(Id);
    }*/

  var editAnomalyPermission = function editAnomalyPermission(user) {
    var selectedAnomalyPermission = anomalyPermissions.find(function (ap) {
      return ap.user == user.id;
    });
    var anomalyPermission = selectedAnomalyPermission ? selectedAnomalyPermission : AnomalyPermissionSetupView_objectSpread(AnomalyPermissionSetupView_objectSpread({}, emptyAnomalyPermission), {}, {
      user: user
    });
    if (anomalyPermission) {
      setIsEditing(true);
      setNewAnomalyPermission(AnomalyPermissionSetupView_objectSpread(AnomalyPermissionSetupView_objectSpread({}, anomalyPermission), {}, {
        user: user
      }));
      setOpen(true);
    }
  };
  var handleSearchInputChange = function handleSearchInputChange(event) {
    var _event$target = event.target,
      name = _event$target.name,
      value = _event$target.value;
    //console.warn(value)
    //console.warn(anomalyPermissions.filter( f=> searchText == ""? true:f.name.indexOf(searchText) > -1))
    setSearchText(value);
  };
  var handleInputChange = function handleInputChange(event) {
    var _event$target2 = event.target,
      name = _event$target2.name,
      value = _event$target2.value;
    setNewAnomalyPermission(AnomalyPermissionSetupView_objectSpread(AnomalyPermissionSetupView_objectSpread({}, newAnomalyPermission), {}, AnomalyPermissionSetupView_defineProperty({}, name, value)));
  };

  /*function addanomalyPermission() {     
        
        props.createanomalyPermission({...newAnomalyPermission});
        setOpen(false);
    }*/

  function updateAnomalyPermission() {
    props.updateAnomalyPermission(AnomalyPermissionSetupView_objectSpread(AnomalyPermissionSetupView_objectSpread({}, newAnomalyPermission), {}, {
      id: newAnomalyPermission.user.id,
      user: newAnomalyPermission.user.id
    }));
    //setNewAnomaly({...emptyAnomaly})
    props.enqueueSnackbar("Permissions Updated", {
      variant: "success"
    });
    props.history.push("/setup/anomaly_permissions");
    setOpen(false);
  }
  Object(react["useEffect"])(function () {
    /*const fetchData = async () => {
        
        //if(isNullOrUndefined(props.projects))
        //  return;
        axios.get(' /api/projects')
            .then((result) => {
              console.warn("result", result.data);
              props.fetchProjects(result.data);
               
            })
            .catch((ex) => {
                console.error(ex);
            });
            //setData(result.data);
      };
          fetchData();*/
  }, [props]);
  return react_default.a.createElement("main", {
    className: classes.content
  }, react_default.a.createElement("div", {
    className: classes.toolbar
  }, react_default.a.createElement(AlertDialog["a" /* default */], AnomalyPermissionSetupView_extends({
    open: openAlert,
    cancelAction: function cancelAction() {
      return setOpenAlert(false);
    }
  }, dialogProps)), react_default.a.createElement("div", {
    className: classes.search
  }, react_default.a.createElement("div", {
    className: classes.searchIcon
  }, react_default.a.createElement(Search_default.a, null)), react_default.a.createElement(InputBase["a" /* default */], {
    name: "searchText",
    value: searchText,
    onChange: handleSearchInputChange,
    fullWidth: true,
    placeholder: "Search\u2026",
    classes: {
      root: classes.inputRoot,
      input: classes.inputInput
    },
    inputProps: {
      "aria-label": "Search"
    }
  })), react_default.a.createElement(Dialog["a" /* default */], {
    open: open,
    fullWidth: true,
    className: classes.modalDialog,
    onClose: handleClose,
    "aria-labelledby": "form-dialog-title"
  }, react_default.a.createElement(DialogTitle["a" /* default */], {
    id: "form-dialog-title"
  }, isEditing ? react_default.a.createElement("span", null, "Edit Anomaly Permission:", " ", newAnomalyPermission.user.firstName + " " + newAnomalyPermission.user.lastName) : react_default.a.createElement("span", null, "New Anomaly Permission")), react_default.a.createElement(DialogContent["a" /* default */], null, react_default.a.createElement(Grid["a" /* default */], {
    item: true,
    xs: 12,
    sm: 6
  }, react_default.a.createElement(FormControlLabel["a" /* default */], {
    value: newAnomalyPermission.canCreate,
    control: react_default.a.createElement(Checkbox["a" /* default */], {
      name: "canCreate",
      checked: newAnomalyPermission.canCreate == true,
      onChange: handleSelectInputChange(newAnomalyPermission, setNewAnomalyPermission),
      style: {
        color: "#1c75bc"
      }
    }),
    label: "Can create anomaly"
  })), react_default.a.createElement(Grid["a" /* default */], {
    item: true,
    xs: 12,
    sm: 6
  }, react_default.a.createElement(FormControlLabel["a" /* default */], {
    name: "canAnalyse",
    value: newAnomalyPermission.canAnalyse,
    control: react_default.a.createElement(Checkbox["a" /* default */], {
      name: "canAnalyse",
      checked: newAnomalyPermission.canAnalyse == true,
      onChange: handleSelectInputChange(newAnomalyPermission, setNewAnomalyPermission),
      style: {
        color: "#1c75bc"
      }
    }),
    label: "Can analyse anomaly"
  })), react_default.a.createElement(Grid["a" /* default */], {
    item: true,
    xs: 12,
    sm: 6
  }, react_default.a.createElement(FormControlLabel["a" /* default */], {
    name: "canReview",
    value: newAnomalyPermission.canReview,
    onChange: handleInputChange,
    control: react_default.a.createElement(Checkbox["a" /* default */], {
      name: "canReview",
      checked: newAnomalyPermission.canReview == true,
      onChange: handleSelectInputChange(newAnomalyPermission, setNewAnomalyPermission),
      style: {
        color: "#1c75bc"
      }
    }),
    label: "Can review anomaly"
  })), react_default.a.createElement(Grid["a" /* default */], {
    item: true,
    xs: 12,
    sm: 6
  }, react_default.a.createElement(FormControlLabel["a" /* default */], {
    name: "canSetStatus",
    value: newAnomalyPermission.canSetStatus,
    onChange: handleInputChange,
    control: react_default.a.createElement(Checkbox["a" /* default */], {
      name: "canSetStatus",
      checked: newAnomalyPermission.canSetStatus == true,
      onChange: handleSelectInputChange(newAnomalyPermission, setNewAnomalyPermission),
      style: {
        color: "#1c75bc"
      }
    }),
    label: "Can update anomaly status"
  }))), react_default.a.createElement(DialogActions["a" /* default */], null, react_default.a.createElement(Button["a" /* default */], {
    onClick: handleClose,
    color: "primary"
  }, "Cancel"), react_default.a.createElement(Button["a" /* default */], {
    onClick: updateAnomalyPermission,
    color: "primary"
  }, "Update")))), react_default.a.createElement(Grid["a" /* default */], {
    container: true,
    spacing: 1,
    className: classes.listContainer
  }, users && users.length > 0 ? users.filter(function (f) {
    return searchText == "" ? true : f.name.indexOf(searchText) > -1;
  }).map(function (user) {
    return react_default.a.createElement(Grid["a" /* default */], {
      item: true,
      key: user.id,
      xs: 12
    }, react_default.a.createElement(Paper["a" /* default */], {
      key: user.id,
      className: classes.paper
    }, react_default.a.createElement(Grid["a" /* default */], {
      container: true,
      direction: "row",
      justify: "space-between",
      spacing: 2
    }, react_default.a.createElement(Grid["a" /* default */], {
      item: true,
      xs: true
    }, react_default.a.createElement(Typography["a" /* default */], {
      variant: "h6",
      style: {
        fontWeight: "bold"
      },
      component: "h2"
    }, user.title || "", "\xA0", user.firstName || "", "\xA0", user.lastName || ""), react_default.a.createElement(Typography["a" /* default */], {
      style: {
        fontSize: 12
      }
    }, user.username || ""), react_default.a.createElement(Typography["a" /* default */], {
      style: {
        fontSize: 12
      }
    }, props.jobTitles.find(function (x) {
      return x.id == user.jobTitleId;
    }) && props.jobTitles.find(function (x) {
      return x.id == user.jobTitleId;
    }).name || ""), react_default.a.createElement(Typography["a" /* default */], {
      style: {
        fontSize: 12
      }
    }, props.departments.find(function (x) {
      return x.id == user.departmentId;
    }) && props.departments.find(function (x) {
      return x.id == user.departmentId;
    }).name || ""), react_default.a.createElement(Typography["a" /* default */], {
      style: {
        fontSize: 12
      }
    }, props.companies.find(function (x) {
      return x.id == user.companyId;
    }) && props.companies.find(function (x) {
      return x.id == user.companyId;
    }).name || ""), react_default.a.createElement(Typography["a" /* default */], {
      style: {
        fontSize: 12
      }
    }, user.role || "")), react_default.a.createElement(Grid["a" /* default */], {
      item: true,
      xs: true
    }, getPermissionsView(user)), react_default.a.createElement(Grid["a" /* default */], {
      item: true,
      xs: true,
      container: true,
      justify: "flex-end",
      alignItems: "center"
    }, react_default.a.createElement(IconButton["a" /* default */], {
      size: "small",
      onClick: function onClick() {
        return editAnomalyPermission(user);
      },
      color: "primary"
    }, react_default.a.createElement(EditOutlined_default.a, {
      className: classes.iconButton2
    }))))));
  }) : react_default.a.createElement(Grid["a" /* default */], {
    item: true,
    xs: 12,
    container: true,
    direction: "column",
    justify: "space-between",
    alignItems: "center"
  }, react_default.a.createElement(empty_box_icon_inline["a" /* default */], null), react_default.a.createElement(Typography["a" /* default */], {
    style: {
      margin: 20,
      fontSize: 20,
      color: "#777777"
    }
  }, "Empty"))));
}
var AnomalyPermissionSetupView_mapStateToProps = function mapStateToProps(state) {
  return {
    anomalyPermissions: state.anomalyPermissions,
    users: state.users,
    jobTitles: state.jobTitles,
    departments: state.departments,
    companies: state.companies,
    accountRoles: state.accountRoles
  };
};
var AnomalyPermissionSetupView_mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    updateAnomalyPermission: function updateAnomalyPermission(p) {
      dispatch(Object(anomalyActions["t" /* updateAnomalyPermission */])(p));
    }
  };
};
/* harmony default export */ var aim_AnomalyPermissionSetupView = (Object(build["withSnackbar"])(Object(es["b" /* connect */])(AnomalyPermissionSetupView_mapStateToProps, AnomalyPermissionSetupView_mapDispatchToProps)(AnomalyPermissionSetupView)));
// CONCATENATED MODULE: ./src/_views/_setup/aim/AnomalyOptionsSetupView.js
function AnomalyOptionsSetupView_typeof(obj) { "@babel/helpers - typeof"; return AnomalyOptionsSetupView_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, AnomalyOptionsSetupView_typeof(obj); }
function AnomalyOptionsSetupView_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function AnomalyOptionsSetupView_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? AnomalyOptionsSetupView_ownKeys(Object(source), !0).forEach(function (key) { AnomalyOptionsSetupView_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : AnomalyOptionsSetupView_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function AnomalyOptionsSetupView_defineProperty(obj, key, value) { key = AnomalyOptionsSetupView_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function AnomalyOptionsSetupView_toPropertyKey(arg) { var key = AnomalyOptionsSetupView_toPrimitive(arg, "string"); return AnomalyOptionsSetupView_typeof(key) === "symbol" ? key : String(key); }
function AnomalyOptionsSetupView_toPrimitive(input, hint) { if (AnomalyOptionsSetupView_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (AnomalyOptionsSetupView_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function AnomalyOptionsSetupView_slicedToArray(arr, i) { return AnomalyOptionsSetupView_arrayWithHoles(arr) || AnomalyOptionsSetupView_iterableToArrayLimit(arr, i) || AnomalyOptionsSetupView_unsupportedIterableToArray(arr, i) || AnomalyOptionsSetupView_nonIterableRest(); }
function AnomalyOptionsSetupView_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function AnomalyOptionsSetupView_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return AnomalyOptionsSetupView_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return AnomalyOptionsSetupView_arrayLikeToArray(o, minLen); }
function AnomalyOptionsSetupView_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function AnomalyOptionsSetupView_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0) { ; } } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function AnomalyOptionsSetupView_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




















































function AnomalyOptionsSetupView(props) {
  var classes = Object(CommonStyles["a" /* useStyles */])();
  var _React$useState = react_default.a.useState(false),
    _React$useState2 = AnomalyOptionsSetupView_slicedToArray(_React$useState, 2),
    open = _React$useState2[0],
    setOpen = _React$useState2[1];
  var _React$useState3 = react_default.a.useState(""),
    _React$useState4 = AnomalyOptionsSetupView_slicedToArray(_React$useState3, 2),
    searchText = _React$useState4[0],
    setSearchText = _React$useState4[1];
  var _React$useState5 = react_default.a.useState(false),
    _React$useState6 = AnomalyOptionsSetupView_slicedToArray(_React$useState5, 2),
    openAlert = _React$useState6[0],
    setOpenAlert = _React$useState6[1];
  var _React$useState7 = react_default.a.useState({}),
    _React$useState8 = AnomalyOptionsSetupView_slicedToArray(_React$useState7, 2),
    dialogProps = _React$useState8[0],
    setDialogProps = _React$useState8[1];
  var _React$useState9 = react_default.a.useState(false),
    _React$useState10 = AnomalyOptionsSetupView_slicedToArray(_React$useState9, 2),
    isEditing = _React$useState10[0],
    setIsEditing = _React$useState10[1];
  var anomalyOptions = props.anomalyOptions;
  var _React$useState11 = react_default.a.useState(AnomalyOptionsSetupView_objectSpread({}, props.anomalyOptions)),
    _React$useState12 = AnomalyOptionsSetupView_slicedToArray(_React$useState11, 2),
    newAnomalyOptions = _React$useState12[0],
    setNewAnomalyOptions = _React$useState12[1];
  var handleSelectInputChange = function handleSelectInputChange(data, setter) {
    return function (event) {
      var name = event.target.name;
      if (event.target.checked) {
        setter(AnomalyOptionsSetupView_objectSpread(AnomalyOptionsSetupView_objectSpread({}, data), {}, AnomalyOptionsSetupView_defineProperty({}, name, true)));
      } else {
        setter(AnomalyOptionsSetupView_objectSpread(AnomalyOptionsSetupView_objectSpread({}, data), {}, AnomalyOptionsSetupView_defineProperty({}, name, false)));
      }
    };
  };
  var handleSearchInputChange = function handleSearchInputChange(event) {
    var _event$target = event.target,
      name = _event$target.name,
      value = _event$target.value;
    //console.warn(value)
    //console.warn(loFs.filter( f=> searchText == ""? true:f.name.indexOf(searchText) > -1))
    setSearchText(value);
  };
  var handleInputChange = function handleInputChange(event) {
    var _event$target2 = event.target,
      name = _event$target2.name,
      value = _event$target2.value;
    setNewAnomalyOptions(AnomalyOptionsSetupView_objectSpread(AnomalyOptionsSetupView_objectSpread({}, newAnomalyOptions), {}, AnomalyOptionsSetupView_defineProperty({}, name, value)));
  };
  function updateAnomalyOptions() {
    props.updateAnomalyOptions(newAnomalyOptions);
    setOpen(false);
  }
  Object(react["useEffect"])(function () {
    /*const fetchData = async () => {
    
    //if(isNullOrUndefined(props.projects))
    //  return;
    axios.get(' /api/projects')
        .then((result) => {
          console.warn("result", result.data);
          props.fetchProjects(result.data);
           
        })
        .catch((ex) => {
            console.error(ex);
        });
        //setData(result.data);
    };
      fetchData();*/
    console.warn("AN", props);
    if (props.anomalyOptions) setNewAnomalyOptions(AnomalyOptionsSetupView_objectSpread({}, props.anomalyOptions));
  }, [props]);
  return react_default.a.createElement("main", {
    className: classes.content
  }, react_default.a.createElement("div", {
    className: classes.toolbar
  }, react_default.a.createElement(Typography["a" /* default */], {
    variant: "h6",
    gutterBottom: true
  }, "Anomaly Options"), react_default.a.createElement(Button["a" /* default */], {
    variant: "contained",
    color: "primary",
    disableElevation: true,
    size: "small",
    onClick: function onClick() {
      return updateAnomalyOptions();
    }
  }, "Save")), react_default.a.createElement(Grid["a" /* default */], {
    container: true,
    spacing: 1,
    className: classes.listContainer
  }, react_default.a.createElement(FormControlLabel["a" /* default */], {
    value: newAnomalyOptions.isAnalysisRBIBased,
    control: react_default.a.createElement(Checkbox["a" /* default */], {
      name: "isAnalysisRBIBased",
      checked: newAnomalyOptions.isAnalysisRBIBased == true,
      onChange: handleSelectInputChange(newAnomalyOptions, setNewAnomalyOptions),
      style: {
        color: '#1c75bc'
      }
    }),
    label: "Is Analysis RBI Based"
  })));
}
var AnomalyOptionsSetupView_mapStateToProps = function mapStateToProps(state) {
  return {
    anomalyOptions: state.anomalyOptions
  };
};
var AnomalyOptionsSetupView_mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    updateAnomalyOptions: function updateAnomalyOptions(p) {
      dispatch(Object(anomalyActions["s" /* updateAnomalyOptions */])(p));
    }
  };
};
/* harmony default export */ var aim_AnomalyOptionsSetupView = (Object(build["withSnackbar"])(Object(es["b" /* connect */])(AnomalyOptionsSetupView_mapStateToProps, AnomalyOptionsSetupView_mapDispatchToProps)(AnomalyOptionsSetupView)));
// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js + 1 modules
var react_router = __webpack_require__(146);

// EXTERNAL MODULE: ./src/_images/grasp_logo.inline.svg
var grasp_logo_inline = __webpack_require__(112);

// EXTERNAL MODULE: ./src/_views/_user/UserProfileView.js
var UserProfileView = __webpack_require__(425);

// EXTERNAL MODULE: ./src/_components/CustomAppBar.js + 1 modules
var CustomAppBar = __webpack_require__(137);

// EXTERNAL MODULE: ./src/_utilities/SideMenu.js
var SideMenu = __webpack_require__(368);

// EXTERNAL MODULE: ./src/common/sideMenuComponents.js
var sideMenuComponents = __webpack_require__(180);

// CONCATENATED MODULE: ./src/_components/SetupView.js
function SetupView_extends() { SetupView_extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return SetupView_extends.apply(this, arguments); }
function SetupView_slicedToArray(arr, i) { return SetupView_arrayWithHoles(arr) || SetupView_iterableToArrayLimit(arr, i) || SetupView_unsupportedIterableToArray(arr, i) || SetupView_nonIterableRest(); }
function SetupView_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function SetupView_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return SetupView_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return SetupView_arrayLikeToArray(o, minLen); }
function SetupView_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function SetupView_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0) { ; } } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function SetupView_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



















//import ProjectView from '@/_views/_projects/ProjectView';
//import ProjectTableView from '@/_views/_projects/ProjectTableView';
//import ProjectTaskGroupsView from '@/_views/_projects/ProjectTaskGroupsView'

























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
  var container = props.container;
  var classes = Object(CommonStyles["a" /* useStyles */])();
  var theme = Object(useTheme["a" /* default */])();
  var _React$useState = react_default.a.useState(false),
    _React$useState2 = SetupView_slicedToArray(_React$useState, 2),
    mobileOpen = _React$useState2[0],
    setMobileOpen = _React$useState2[1];
  var _React$useState3 = react_default.a.useState(_services["a" /* authenticationService */].currentUserValue),
    _React$useState4 = SetupView_slicedToArray(_React$useState3, 2),
    currentUser = _React$useState4[0],
    setCurrentUser = _React$useState4[1];

  //console.log('router-info', props.location)
  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }
  function logout() {
    _services["a" /* authenticationService */].logout();
    _helpers["c" /* history */].push('/login');
  }
  var menuItems = [{
    id: "1",
    caption: "Users",
    secondaryCaption: "Manage User Accounts",
    link: "/setup/users"
  }, {
    id: "2",
    caption: "Roles",
    secondaryCaption: "Create Roles",
    link: "/setup/roles"
  }, {
    id: "3",
    caption: "Job titles",
    secondaryCaption: "User Job titles",
    link: "/setup/jobtitles"
  }, {
    id: "4",
    caption: "Companies",
    secondaryCaption: "Create & Manage Companies",
    link: "/setup/companies"
  }, {
    id: "5",
    caption: "Departments",
    secondaryCaption: "Create departments",
    link: "/setup/departments"
  }, {
    id: "6",
    caption: "Facilities",
    secondaryCaption: "Create Facilities ",
    link: "/setup/platforms"
  }, {
    id: "7",
    caption: "Anomaly Classes",
    secondaryCaption: "Manage & define anomaly classes ",
    link: "/setup/anomaly_classes"
  }, {
    id: "8",
    caption: "Anomaly Actions",
    secondaryCaption: "Manage & define anomaly actions ",
    link: "/setup/anomaly_actions"
  }, {
    id: "9",
    caption: "Systems",
    secondaryCaption: "Define system types",
    link: "/setup/anomaly_systems"
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
    id: "14",
    caption: "Anomaly Permissions",
    secondaryCaption: "Set user anomaly permissions",
    link: "/setup/anomaly_permissions"
  }, {
    id: "15",
    caption: "Anomaly Options",
    secondaryCaption: "Set global anomaly options",
    link: "/setup/anomaly_options"
  }
  /*{
    id:"16",
    caption:"Account Settings",
    secondaryCaption:"Set global settings",
    link:"/setup/account_settings"
  },*/];

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

  var drawerMenu = Object(sideMenuComponents["b" /* drawer */])(menuItems, classes, props.location.pathname);
  return react_default.a.createElement("div", {
    className: classes.root
  }, react_default.a.createElement(CssBaseline["a" /* default */], null), react_default.a.createElement(CustomAppBar["a" /* default */], SetupView_extends({}, props, {
    handleDrawerToggle: handleDrawerToggle
  })), react_default.a.createElement("nav", {
    className: classes.drawer,
    "aria-label": "Mailbox folders"
  }, react_default.a.createElement(Hidden["a" /* default */], {
    smUp: true,
    implementation: "css"
  }, react_default.a.createElement(Drawer["a" /* default */], {
    container: container,
    variant: "temporary",
    anchor: theme.direction === 'rtl' ? 'right' : 'left',
    open: mobileOpen,
    onClose: handleDrawerToggle,
    classes: {
      paper: classes.drawerPaper
    },
    ModalProps: {
      keepMounted: true // Better open performance on mobile.
    }
  }, drawerMenu)), react_default.a.createElement(Hidden["a" /* default */], {
    xsDown: true,
    implementation: "css"
  }, react_default.a.createElement(Drawer["a" /* default */], {
    classes: {
      paper: classes.drawerPaper
    },
    variant: "permanent",
    open: true
  }, drawerMenu))), react_default.a.createElement("main", {
    className: classes.content
  }, react_default.a.createElement(react_router["d" /* Switch */], null, react_default.a.createElement(react_router["b" /* Route */], {
    path: "/setup/users/user/:userId",
    component: UserProfileView["a" /* default */]
  }), react_default.a.createElement(react_router["b" /* Route */], {
    path: "/setup/users",
    component: UsersSetupView["a" /* default */]
  }), react_default.a.createElement(react_router["b" /* Route */], {
    path: "/setup/companies",
    component: _setup_CompanySetupView
  }), react_default.a.createElement(react_router["b" /* Route */], {
    path: "/setup/roles",
    component: _setup_RolesSetupView
  }), react_default.a.createElement(react_router["b" /* Route */], {
    path: "/setup/jobtitles",
    component: jobTitlesSetupView
  }), react_default.a.createElement(react_router["b" /* Route */], {
    path: "/setup/departments",
    component: departmentSetupView
  }), react_default.a.createElement(react_router["b" /* Route */], {
    path: "/setup/platforms",
    component: aim_PlatformSetupView
  }), react_default.a.createElement(react_router["b" /* Route */], {
    path: "/setup/anomaly_classes",
    component: aim_AnomalyClassSetupView
  }), react_default.a.createElement(react_router["b" /* Route */], {
    path: "/setup/anomaly_actions",
    component: aim_AnomalyActionSetupView
  }), react_default.a.createElement(react_router["b" /* Route */], {
    path: "/setup/anomaly_systems",
    component: aim_AnomalySystemSetupView
  }), react_default.a.createElement(react_router["b" /* Route */], {
    path: "/setup/anomaly_permissions",
    component: aim_AnomalyPermissionSetupView
  }), react_default.a.createElement(react_router["b" /* Route */], {
    path: "/setup/anomaly_options",
    component: aim_AnomalyOptionsSetupView
  }), react_default.a.createElement(react_router["b" /* Route */], {
    path: "/setup/account_settings",
    component: AccountSettingsView_default.a
  }), react_default.a.createElement(react_router["b" /* Route */], {
    path: "/setup/",
    component: UsersSetupView["a" /* default */]
  }))));
}

//export {DrawerView}
var SetupView_mapStateToProps = function mapStateToProps(state) {
  return {
    currentUser: state.currentUser
  };
};
/* harmony default export */ var _components_SetupView = __webpack_exports__["default"] = (Object(es["b" /* connect */])(SetupView_mapStateToProps)(SetupView));

/***/ })

}]);