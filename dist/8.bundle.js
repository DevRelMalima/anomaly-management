(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ 1479:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./src/_views/_aimViews/NewAnomalyView.js + 3 modules
var NewAnomalyView = __webpack_require__(1131);

// EXTERNAL MODULE: ./src/_views/_aimViews/AnomaliesView.js + 1 modules
var AnomaliesView = __webpack_require__(1133);

// EXTERNAL MODULE: ./node_modules/react-redux/es/index.js + 22 modules
var es = __webpack_require__(11);

// EXTERNAL MODULE: ./src/common/customStyles.js
var customStyles = __webpack_require__(1050);

// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(3);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Box/Box.js + 16 modules
var Box = __webpack_require__(1033);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Container/Container.js
var Container = __webpack_require__(1032);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Grid/Grid.js
var Grid = __webpack_require__(228);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/withStyles.js
var withStyles = __webpack_require__(7);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/styles/makeStyles.js
var makeStyles = __webpack_require__(276);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Table/Table.js
var Table = __webpack_require__(1471);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/TableBody/TableBody.js
var TableBody = __webpack_require__(1474);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/TableCell/TableCell.js
var TableCell = __webpack_require__(1469);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/TableHead/TableHead.js
var TableHead = __webpack_require__(1472);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/TableRow/TableRow.js
var TableRow = __webpack_require__(1473);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Paper/Paper.js
var Paper = __webpack_require__(156);

// EXTERNAL MODULE: ./node_modules/countries-List/dist/index.es5.min.js
var index_es5_min = __webpack_require__(1069);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/TableContainer/TableContainer.js
var TableContainer = __webpack_require__(1470);

// EXTERNAL MODULE: ./node_modules/react-moment/dist/index.js
var dist = __webpack_require__(84);
var dist_default = /*#__PURE__*/__webpack_require__.n(dist);

// EXTERNAL MODULE: ./node_modules/moment/moment.js
var moment = __webpack_require__(5);
var moment_default = /*#__PURE__*/__webpack_require__.n(moment);

// EXTERNAL MODULE: ./src/common/customButton.js
var customButton = __webpack_require__(1072);

// EXTERNAL MODULE: ./node_modules/@material-ui/pickers/esm/DatePicker.js + 13 modules
var DatePicker = __webpack_require__(1034);

// CONCATENATED MODULE: ./src/_components/aimComponents/ActivitiesTable.js
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
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





















var StyledTableCell = Object(withStyles["a" /* default */])(function (theme) {
  return {
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
      whiteSpace: "nowrap"
    },
    body: {
      fontSize: 12,
      whiteSpace: "nowrap",
      padding: 8
    }
  };
})(TableCell["a" /* default */]);
function preventDefault(event) {
  event.preventDefault();
}
function getDates(startDate, stopDate) {
  var dateArray = [];
  var currentDate = moment_default()(startDate);
  var nstopDate = moment_default()(stopDate);
  while (currentDate <= nstopDate) {
    dateArray.push(moment_default()(currentDate).format("YYYY-MM-DD"));
    currentDate = moment_default()(currentDate).add(1, "months");
  }
  return dateArray;
}
var useStyles = Object(makeStyles["a" /* default */])(function (theme) {
  return {
    seeMore: {
      marginTop: theme.spacing(3)
    }
  };
});
var ActivitiesTable_ActivitiesTable = function ActivitiesTable(props) {
  var classes = useStyles();
  var _React$useState = react_default.a.useState(""),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    searchString = _React$useState2[0],
    setSearchString = _React$useState2[1];
  var _React$useState3 = react_default.a.useState(props.anomalies),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    rowData = _React$useState4[0],
    setRowData = _React$useState4[1];
  var _React$useState5 = react_default.a.useState(rowData),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    filteredRowData = _React$useState6[0],
    setFilteredRowData = _React$useState6[1];
  var _React$useState7 = react_default.a.useState({
      startDate: new Date("01-01-" + new Date().getFullYear()),
      endDate: new Date()
    }),
    _React$useState8 = _slicedToArray(_React$useState7, 2),
    searchFilter = _React$useState8[0],
    setSearchFilter = _React$useState8[1];
  var handleSearchInputChange = function handleSearchInputChange(event) {
    var value = event.target.value;
    setSearchString(value);
    if (value != null && value != "") {
      setFilteredRowData(rowData.filter(function (r) {
        return r.component.toLowerCase().indexOf(value) > -1;
      }));
    } else {
      setFilteredRowData(rowData);
    }
  };

  // useEffect(() => {
  //   //setFilteredRowData(populateTableData(countries, props.caseData));
  //   //setRowData(populateTableData(countries, props.caseData));
  //   console.warn(props.anomalies);
  // }, [props.anomalies]);

  function clearSearch() {
    setSearchString("");
    setFilteredRowData(rowData);
  }
  return react_default.a.createElement(react_default.a.Fragment, null, react_default.a.createElement("div", {
    style: {
      padding: 10
    }
  }, react_default.a.createElement(Grid["a" /* default */], {
    container: true,
    spacing: 2,
    justify: "flex-end",
    direction: "row"
  }, react_default.a.createElement(Grid["a" /* default */], {
    item: true
  }, react_default.a.createElement(DatePicker["a" /* DatePicker */], {
    size: "small",
    openTo: "month",
    style: {
      fontSize: 10,
      padding: 0
    },
    inputVariant: "outlined",
    label: "Start Date",
    format: "MM-DD-YYYY",
    views: ["year", "month", "date"],
    value: searchFilter.startDate,
    onChange: function onChange(date) {
      setSearchFilter(_objectSpread(_objectSpread({}, searchFilter), {}, {
        startDate: date.toDate()
      }));
    },
    InputAdornmentProps: {
      position: "start",
      fontSize: 10
    }
  })), react_default.a.createElement(Grid["a" /* default */], {
    item: true
  }, react_default.a.createElement(DatePicker["a" /* DatePicker */], {
    size: "small",
    openTo: "month",
    inputVariant: "outlined",
    label: "End Date",
    format: "MM-DD-YYYY",
    views: ["year", "month", "date"],
    value: searchFilter.endDate,
    onChange: function onChange(date) {
      setSearchFilter(_objectSpread(_objectSpread({}, searchFilter), {}, {
        endDate: date.toDate()
      }));
      console.log("Get Date", getDates(new Date(searchFilter.startDate), new Date(searchFilter.endDate)));
    },
    InputAdornmentProps: {
      position: "start"
    }
  })))), react_default.a.createElement(TableContainer["a" /* default */], {
    component: Paper["a" /* default */]
  }, react_default.a.createElement(Table["a" /* default */], null, react_default.a.createElement(TableHead["a" /* default */], null, react_default.a.createElement(TableRow["a" /* default */], {
    style: {
      backgroundColor: "#333333",
      color: "#FFFFFF",
      borderRadius: 5
    }
  }, react_default.a.createElement(StyledTableCell, {
    style: {
      color: "#FFFFFF",
      fontWeight: "bold"
    }
  }, "Date"), props.actions && props.actions.map(function (row, i) {
    return react_default.a.createElement(StyledTableCell, {
      style: {
        color: "#FFFFFF",
        fontWeight: "bold"
      },
      key: i
    }, row.name);
  }))), react_default.a.createElement(TableBody["a" /* default */], null, getDates(new Date(searchFilter.startDate), new Date(searchFilter.endDate)).map(function (d, i) {
    return props.anomalies.filter(function (a) {
      return moment_default()(d).format("MMM YY") === moment_default()(a.closeOutDate).format("MMM YY");
    }).length > 0 && react_default.a.createElement(TableRow["a" /* default */], {
      style: {
        backgroundColor: "#FFFFFF",
        color: "#000",
        borderRadius: 5
      },
      key: i
    }, react_default.a.createElement(StyledTableCell, {
      style: {
        color: "#0099FF",
        fontWeight: "bold"
      }
    }, react_default.a.createElement(dist_default.a, {
      format: "LL",
      date: d
    })), props.actions && props.actions.map(function (row, i) {
      return react_default.a.createElement(StyledTableCell, {
        style: {
          color: "#555555",
          fontWeight: "normal",
          textAlign: "center"
        }
      }, props.anomalies.filter(function (i) {
        return i.action === row.id && moment_default()(d).format("MMM YY") === moment_default()(i.closeOutDate).format("MMM YY");
      }).length || "-");
    }));
  }), react_default.a.createElement(TableRow["a" /* default */], {
    style: {
      minHeight: 50
    }
  }, react_default.a.createElement(StyledTableCell, {
    style: {
      color: "#000",
      fontWeight: "bold"
    }
  }, "Date"), props.actions && props.actions.length === 0 && react_default.a.createElement(TableCell["a" /* default */], {
    style: {
      color: "#999999",
      padding: 50,
      fontSize: 30,
      fontWeight: "normal"
    },
    align: "center",
    colSpan: props.actions.length
  }, "No Record"))))));
};
var mapStateToProps = function mapStateToProps(state) {
  return {
    anomalies: state.anomalies,
    priorities: state.priorities,
    systems: state.systems,
    platforms: state.platforms,
    coFs: state.coFs,
    lofs: state.lofs,
    sofs: state.sofs,
    anomalyClasses: state.anomalyClasses,
    actions: state.actions
  };
};
/* harmony default export */ var aimComponents_ActivitiesTable = (Object(es["b" /* connect */])(mapStateToProps)(ActivitiesTable_ActivitiesTable));
// EXTERNAL MODULE: ./src/_components/aimComponents/ViewTitle.js
var ViewTitle = __webpack_require__(1052);

// EXTERNAL MODULE: ./src/common/sideMenuComponents.js
var sideMenuComponents = __webpack_require__(157);

// CONCATENATED MODULE: ./src/_views/_aimViews/ActivitiesView.js













var ActivitiesView_ActivitiesView = function ActivitiesView(props) {
  var classes = Object(customStyles["a" /* useStyles */])();
  return react_default.a.createElement("main", {
    className: classes.content
  }, react_default.a.createElement(ViewTitle["a" /* default */], null, "All Activites (" + props.anomalies.filter(function (i) {
    return i.action != null;
  }).length + ")"), react_default.a.createElement("div", {
    className: classes.appBarSpacer
  }), react_default.a.createElement(Container["a" /* default */], {
    maxWidth: "lg",
    className: classes.container
  }, react_default.a.createElement(Grid["a" /* default */], {
    container: true,
    spacing: 3
  }, react_default.a.createElement(Grid["a" /* default */], {
    item: true,
    xs: 12
  }, react_default.a.createElement(aimComponents_ActivitiesTable, null))), react_default.a.createElement(Box["a" /* default */], {
    pt: 4
  }, react_default.a.createElement(sideMenuComponents["a" /* Copyright */], null))));
};
var ActivitiesView_mapStateToProps = function mapStateToProps(state) {
  return {
    anomalies: state.anomalies,
    actions: state.action
  };
};
/* harmony default export */ var _aimViews_ActivitiesView = (Object(es["b" /* connect */])(ActivitiesView_mapStateToProps)(ActivitiesView_ActivitiesView));
// EXTERNAL MODULE: ./src/_views/_aimViews/AnomalyStatisticsView.js + 1 modules
var AnomalyStatisticsView = __webpack_require__(1134);

// EXTERNAL MODULE: ./src/_views/_aimViews/AnalysedAnomaliesView.js
var AnalysedAnomaliesView = __webpack_require__(1108);

// EXTERNAL MODULE: ./src/_views/_aimViews/RiskMatrixView.js + 1 modules
var RiskMatrixView = __webpack_require__(1135);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/CssBaseline/CssBaseline.js
var CssBaseline = __webpack_require__(1030);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Drawer/Drawer.js
var Drawer = __webpack_require__(1031);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Hidden/Hidden.js + 4 modules
var Hidden = __webpack_require__(994);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/styles/useTheme.js
var useTheme = __webpack_require__(1109);
var useTheme_default = /*#__PURE__*/__webpack_require__.n(useTheme);

// EXTERNAL MODULE: ./node_modules/react-router-dom/esm/react-router-dom.js
var react_router_dom = __webpack_require__(23);

// EXTERNAL MODULE: ./node_modules/react-router/esm/react-router.js + 1 modules
var react_router = __webpack_require__(170);

// EXTERNAL MODULE: ./node_modules/node-libs-browser/node_modules/util/util.js
var util = __webpack_require__(41);

// EXTERNAL MODULE: ./src/_components/CustomAppBar.js + 1 modules
var CustomAppBar = __webpack_require__(139);

// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__(12);
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);

// CONCATENATED MODULE: ./src/_modules/ActivitiesModule.js
function ActivitiesModule_typeof(obj) { "@babel/helpers - typeof"; return ActivitiesModule_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, ActivitiesModule_typeof(obj); }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function ActivitiesModule_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function ActivitiesModule_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ActivitiesModule_ownKeys(Object(source), !0).forEach(function (key) { ActivitiesModule_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ActivitiesModule_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function ActivitiesModule_defineProperty(obj, key, value) { key = ActivitiesModule_toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function ActivitiesModule_toPropertyKey(arg) { var key = ActivitiesModule_toPrimitive(arg, "string"); return ActivitiesModule_typeof(key) === "symbol" ? key : String(key); }
function ActivitiesModule_toPrimitive(input, hint) { if (ActivitiesModule_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (ActivitiesModule_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function ActivitiesModule_slicedToArray(arr, i) { return ActivitiesModule_arrayWithHoles(arr) || ActivitiesModule_iterableToArrayLimit(arr, i) || ActivitiesModule_unsupportedIterableToArray(arr, i) || ActivitiesModule_nonIterableRest(); }
function ActivitiesModule_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function ActivitiesModule_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return ActivitiesModule_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ActivitiesModule_arrayLikeToArray(o, minLen); }
function ActivitiesModule_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
function ActivitiesModule_iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0) { ; } } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i.return && (_r = _i.return(), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function ActivitiesModule_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }













//import Logo from '@/_images/grasp_logo.inline.svg';





//import {setCaseRecords} from '../redux/actions'


function ActivitiesModule(props) {
  var container = props.container;
  var classes = Object(customStyles["a" /* useStyles */])();
  var theme = useTheme_default()();
  var _React$useState = react_default.a.useState(false),
    _React$useState2 = ActivitiesModule_slicedToArray(_React$useState, 2),
    mobileOpen = _React$useState2[0],
    setMobileOpen = _React$useState2[1];
  //const [currentUser, setCurrentUser] = React.useState(authenticationService.currentUserValue);

  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }
  var menuItems = [{
    id: "1",
    key: "1",
    caption: "All Activities ",
    secondaryCaption: "View all activities",
    link: "/activities/all_activities",
    showBadge: true,
    badgeContent: props.anomalies.filter(function (i) {
      return i.action != null;
    }).length
  }, {
    id: "2",
    key: "2",
    caption: "Closed out actions",
    secondaryCaption: "View all closed out actions",
    link: "/activities/closed_out_anomalies",
    showBadge: true,
    badgeContent: props.anomalies.filter(function (i) {
      return i.status == "CLOSED";
    }).length
  }, {
    id: "3",
    key: "3",
    caption: "Overdue actions",
    secondaryCaption: "View all overdue actions",
    link: "/activities/overdue_anomalies",
    showBadge: true,
    badgeContent: props.anomalies.filter(function (i) {
      return i.status != "CLOSED" && moment_default()(new Date(i.closeOutDate)) <= moment_default()(new Date());
    }).length
  }];
  axios_default.a.interceptors.request.use(function (config) {
    config.headers = ActivitiesModule_objectSpread(ActivitiesModule_objectSpread({}, config.headers), {}, {
      'Access-Control-Allow-Origin': '*'
    });
    return config;
  });
  var drawerMenu = Object(sideMenuComponents["b" /* drawer */])(menuItems, classes, props.location && props.location.pathname);
  return react_default.a.createElement("div", {
    className: classes.root
  }, react_default.a.createElement(react_router_dom["a" /* HashRouter */], null, react_default.a.createElement(CssBaseline["a" /* default */], null), react_default.a.createElement(CustomAppBar["a" /* default */], _extends({}, props, {
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
    className: classes.content,
    style: {
      paddingTop: 80
    }
  }, react_default.a.createElement(react_router["d" /* Switch */], null, react_default.a.createElement(react_router["b" /* Route */], {
    path: "/activities/all_activities",
    component: _aimViews_ActivitiesView
  }), react_default.a.createElement(react_router["b" /* Route */], {
    path: "/activities/overdue_anomalies",
    render: function render(props) {
      return react_default.a.createElement(AnomaliesView["a" /* default */], _extends({}, props, {
        showOnlyOverDue: true
      }));
    }
  }), react_default.a.createElement(react_router["b" /* Route */], {
    path: "/activities/closed_out_anomalies",
    render: function render(props) {
      return react_default.a.createElement(AnomaliesView["a" /* default */], _extends({}, props, {
        showOnlyClosedOut: true
      }));
    }
  }), react_default.a.createElement(react_router["b" /* Route */], {
    path: "/",
    component: _aimViews_ActivitiesView
  })))));
}
var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    setCaseRecords: function (_setCaseRecords) {
      function setCaseRecords(_x2) {
        return _setCaseRecords.apply(this, arguments);
      }
      setCaseRecords.toString = function () {
        return _setCaseRecords.toString();
      };
      return setCaseRecords;
    }(function (data) {
      dispatch(setCaseRecords(data));
    })
    // addUpdate:(data) => {dispatch(addUpdate(data))},   
  };
};

var ActivitiesModule_mapStateToProps = function mapStateToProps(state) {
  return {
    anomalies: state.anomalies
  };
};
/* harmony default export */ var _modules_ActivitiesModule = __webpack_exports__["default"] = (Object(es["b" /* connect */])(ActivitiesModule_mapStateToProps, mapDispatchToProps)(ActivitiesModule));

/***/ })

}]);