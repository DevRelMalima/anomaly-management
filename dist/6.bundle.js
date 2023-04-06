(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ 1132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

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

// EXTERNAL MODULE: ./node_modules/react-router-dom/esm/react-router-dom.js
var react_router_dom = __webpack_require__(23);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/TableContainer/TableContainer.js
var TableContainer = __webpack_require__(1470);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/Button/Button.js
var Button = __webpack_require__(299);

// EXTERNAL MODULE: ./node_modules/react-moment/dist/index.js
var dist = __webpack_require__(84);
var dist_default = /*#__PURE__*/__webpack_require__.n(dist);

// EXTERNAL MODULE: ./src/common/customButton.js
var customButton = __webpack_require__(1072);

// EXTERNAL MODULE: ./src/_services/index.js + 25 modules
var _services = __webpack_require__(16);

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/ArrowDownward.js
var ArrowDownward = __webpack_require__(1077);
var ArrowDownward_default = /*#__PURE__*/__webpack_require__.n(ArrowDownward);

// EXTERNAL MODULE: ./node_modules/@material-ui/icons/Search.js
var Search = __webpack_require__(36);
var Search_default = /*#__PURE__*/__webpack_require__.n(Search);

// EXTERNAL MODULE: ./node_modules/@material-ui/core/esm/InputBase/InputBase.js + 1 modules
var InputBase = __webpack_require__(593);

// EXTERNAL MODULE: ./src/_utilities/CommonStyles.js
var CommonStyles = __webpack_require__(15);

// EXTERNAL MODULE: ./src/utility/filesUtility.js
var filesUtility = __webpack_require__(1068);

// CONCATENATED MODULE: ./src/_components/aimComponents/NewAnomaliesTable.js
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
      whiteSpace: 'nowrap'
    },
    body: {
      fontSize: 14
    }
  };
})(TableCell["a" /* default */]);
function preventDefault(event) {
  event.preventDefault();
}
var NewAnomaliesTable_NewAnomaliesTable = function NewAnomaliesTable(props) {
  var classes = Object(CommonStyles["a" /* useStyles */])();
  var _React$useState = react_default.a.useState(''),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    searchString = _React$useState2[0],
    setSearchString = _React$useState2[1];
  var currentUser = _services["a" /* authenticationService */].currentUserValue;
  var _React$useState3 = react_default.a.useState(props.anomalies.filter(function (i) {
      return i.isAnalysed == false;
    })),
    _React$useState4 = _slicedToArray(_React$useState3, 2),
    rowData = _React$useState4[0],
    setRowData = _React$useState4[1];
  var _React$useState5 = react_default.a.useState(rowData),
    _React$useState6 = _slicedToArray(_React$useState5, 2),
    filteredRowData = _React$useState6[0],
    setFilteredRowData = _React$useState6[1];
  var handleSearchInputChange = function handleSearchInputChange(event) {
    var value = event.target.value;
    setSearchString(value);
    if (value != null && value != '') {
      setFilteredRowData(rowData.filter(function (r) {
        return r.component.toLowerCase().indexOf(value) > -1;
      }));
    } else {
      setFilteredRowData(rowData);
    }
  };
  var downloadExcelFile = function downloadExcelFile() {
    Object(filesUtility["a" /* downloadFile */])('/api/anomalies/download/all_anomalies', 'Anomalies.xlsx', 'Excel');
  };
  Object(react["useEffect"])(function () {
    //setFilteredRowData(populateTableData(countries, props.caseData));
    //setRowData(populateTableData(countries, props.caseData));
    setRowData(props.anomalies.filter(function (i) {
      return i.isAnalysed == false;
    }));
    setFilteredRowData(props.anomalies.filter(function (i) {
      return i.isAnalysed == false;
    }));
    setSearchString('');
    //console.warn();
  }, [props.anomalies, props.loFs, props.anomalyClasses, props.coFs, props.priorities, props.actions]);
  function clearSearch() {
    setSearchString('');
    setFilteredRowData(rowData);
  }
  return react_default.a.createElement(react_default.a.Fragment, null, react_default.a.createElement("div", {
    style: {
      position: 'relative'
    }
  }, react_default.a.createElement("div", {
    className: classes.search,
    style: {
      width: '100%',
      maxWidth: '100%'
    }
  }, react_default.a.createElement("div", {
    className: classes.searchIcon
  }, react_default.a.createElement(Search_default.a, null)), react_default.a.createElement(InputBase["a" /* default */], {
    name: "searchText",
    value: searchString,
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
  }), react_default.a.createElement("button", {
    style: {
      visibility: searchString == null || searchString == '' ? 'hidden' : "visible",
      border: 'solid 1px #999999',
      borderRadius: 4,
      margin: 10,
      position: 'absolute',
      right: 0,
      top: 10,
      padding: 5
    },
    className: "search",
    onClick: clearSearch
  }, "Clear"))), react_default.a.createElement("div", {
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
  }, react_default.a.createElement(customButton["a" /* SheetDownloadButton */], {
    size: "small",
    color: "primary",
    onClick: function onClick() {
      return downloadExcelFile();
    },
    variant: "contained"
  }, react_default.a.createElement(ArrowDownward_default.a, {
    fontSize: "inherit"
  }), "Download Spreadsheet")))), react_default.a.createElement(TableContainer["a" /* default */], {
    component: Paper["a" /* default */]
  }, react_default.a.createElement(Table["a" /* default */], null, react_default.a.createElement(TableHead["a" /* default */], null, react_default.a.createElement(TableRow["a" /* default */], {
    style: {
      backgroundColor: "#333333",
      color: '#FFFFFF',
      borderRadius: 5
    }
  }, react_default.a.createElement(StyledTableCell, {
    style: {
      color: "#FFFFFF",
      fontWeight: 'bold'
    }
  }, "S/N"), react_default.a.createElement(StyledTableCell, {
    style: {
      color: "#FFFFFF",
      fontWeight: 'bold'
    }
  }), react_default.a.createElement(StyledTableCell, {
    style: {
      color: "#FFFFFF",
      fontWeight: 'bold'
    }
  }, "Code"), react_default.a.createElement(StyledTableCell, {
    style: {
      color: "#FFFFFF",
      fontWeight: 'bold'
    }
  }, "Facility"), react_default.a.createElement(StyledTableCell, {
    style: {
      color: "#FFFFFF",
      fontWeight: 'bold'
    }
  }, "Equipment/Tag No."), react_default.a.createElement(StyledTableCell, {
    style: {
      color: "#FFFFFF",
      fontWeight: 'bold'
    },
    align: "center"
  }, "Component"), react_default.a.createElement(StyledTableCell, {
    style: {
      color: "#FFFFFF",
      fontWeight: 'bold'
    }
  }, "Class"), react_default.a.createElement(StyledTableCell, {
    style: {
      color: "#FFFFFF",
      fontWeight: 'bold'
    }
  }, "CoF"), react_default.a.createElement(StyledTableCell, {
    style: {
      color: "#FFFFFF",
      fontWeight: 'bold'
    }
  }, "LoF"), react_default.a.createElement(StyledTableCell, {
    style: {
      color: "#FFFFFF",
      fontWeight: 'bold'
    }
  }, "Priority"), react_default.a.createElement(StyledTableCell, {
    style: {
      color: "#FFCC00",
      fontWeight: 'bold'
    },
    align: "center"
  }, "Action"), react_default.a.createElement(StyledTableCell, {
    style: {
      color: "#FFCC00",
      fontWeight: 'bold'
    },
    align: "center"
  }, "Date Raised"), react_default.a.createElement(StyledTableCell, {
    style: {
      color: "#FFCC00",
      fontWeight: 'bold'
    },
    align: "center"
  }, "Stage"))), react_default.a.createElement(TableBody["a" /* default */], null, filteredRowData && filteredRowData.map(function (row, i) {
    var _props$platforms$find, _props$anomalyClasses, _props$coFs$find, _props$loFs$find, _props$priorities$fin, _props$actions$find;
    return react_default.a.createElement(TableRow["a" /* default */], {
      key: row.id
    }, react_default.a.createElement(StyledTableCell, null, i + 1), react_default.a.createElement(StyledTableCell, {
      align: "center",
      style: {
        color: "#FF2200"
      }
    }, row.analysedBy == currentUser.id && react_default.a.createElement(Button["a" /* default */], {
      component: react_router_dom["b" /* Link */],
      to: "/anomalies/analyse_anomaly/" + row.id + "",
      size: "small",
      variant: "outlined"
    }, "Analyse")), react_default.a.createElement(StyledTableCell, {
      style: {
        color: "#FF2200",
        whiteSpace: 'nowrap'
      }
    }, row.code), react_default.a.createElement(StyledTableCell, {
      style: {
        color: "#009444"
      }
    }, ((_props$platforms$find = props.platforms.find(function (p) {
      return p.id == row.platform;
    })) === null || _props$platforms$find === void 0 ? void 0 : _props$platforms$find.name) || "--"), react_default.a.createElement(StyledTableCell, {
      style: {
        color: "#FF2200"
      }
    }, row.equipmentTagNo), react_default.a.createElement(StyledTableCell, null, row.component), react_default.a.createElement(StyledTableCell, null, react_default.a.createElement("div", {
      style: {
        display: 'inline-block',
        color: "#FFFFFF",
        fontSize: 12,
        borderRadius: 4,
        padding: 2,
        paddingLeft: 5,
        paddingRight: 5,
        backgroundColor: "#FF9900"
      }
    }, ((_props$anomalyClasses = props.anomalyClasses.find(function (p) {
      return p.id == row.anomalyClass;
    })) === null || _props$anomalyClasses === void 0 ? void 0 : _props$anomalyClasses.code) || "--")), react_default.a.createElement(StyledTableCell, {
      style: {
        color: "#FF2200"
      }
    }, ((_props$coFs$find = props.coFs.find(function (p) {
      return p.id == row.coF;
    })) === null || _props$coFs$find === void 0 ? void 0 : _props$coFs$find.name) || "--"), react_default.a.createElement(StyledTableCell, {
      style: {
        color: "#FF2200"
      }
    }, ((_props$loFs$find = props.loFs.find(function (p) {
      return p.id == row.loF;
    })) === null || _props$loFs$find === void 0 ? void 0 : _props$loFs$find.name) || "--"), react_default.a.createElement(StyledTableCell, {
      style: {
        color: "#009444"
      }
    }, ((_props$priorities$fin = props.priorities.find(function (p) {
      return p.id == row.priority;
    })) === null || _props$priorities$fin === void 0 ? void 0 : _props$priorities$fin.name) || "--"), react_default.a.createElement(StyledTableCell, null, ((_props$actions$find = props.actions.find(function (p) {
      return p.id == row.action;
    })) === null || _props$actions$find === void 0 ? void 0 : _props$actions$find.name) || "--"), react_default.a.createElement(StyledTableCell, {
      style: {
        color: "#FF2200",
        whiteSpace: 'nowrap'
      }
    }, react_default.a.createElement(dist_default.a, {
      format: "LL",
      date: row.dateRaised
    })), react_default.a.createElement(StyledTableCell, {
      style: {
        color: "#009444"
      }
    }, "Pending Analysis"));
  }), filteredRowData && filteredRowData.length == 0 && react_default.a.createElement(TableRow["a" /* default */], {
    style: {
      minHeight: 50
    }
  }, react_default.a.createElement(TableCell["a" /* default */], {
    style: {
      color: "#999999",
      padding: 50,
      fontSize: 30,
      fontWeight: 'normal'
    },
    align: "center",
    colSpan: 12
  }, "No Record"))))));
};
var mapStateToProps = function mapStateToProps(state) {
  return {
    anomalies: state.anomalies,
    priorities: state.priorities,
    systems: state.systems,
    platforms: state.platforms,
    coFs: state.coFs,
    loFs: state.loFs,
    anomalyClasses: state.anomalyClasses,
    actions: state.actions
  };
};
// export default TodoList;
/* harmony default export */ var aimComponents_NewAnomaliesTable = (Object(es["b" /* connect */])(mapStateToProps)(NewAnomaliesTable_NewAnomaliesTable));
// EXTERNAL MODULE: ./src/_components/aimComponents/ViewTitle.js
var ViewTitle = __webpack_require__(1052);

// EXTERNAL MODULE: ./src/common/sideMenuComponents.js
var sideMenuComponents = __webpack_require__(157);

// EXTERNAL MODULE: ./node_modules/notistack/build/index.js
var build = __webpack_require__(22);

// CONCATENATED MODULE: ./src/_views/_aimViews/NewAnomaliesView.js









//import Deposits from './Deposits';




var NewAnomaliesView_NewAnomaliesView = function NewAnomaliesView(props) {
  var classes = Object(customStyles["a" /* useStyles */])();
  var fixedHeightPaper = Object(clsx_m["a" /* default */])(classes.paper, classes.fixedHeight);
  return react_default.a.createElement("main", {
    className: classes.content
  }, react_default.a.createElement(ViewTitle["a" /* default */], null, "New Anomalies (" + props.anomalies.filter(function (i) {
    return i.isAnalysed == false;
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
  }, react_default.a.createElement(aimComponents_NewAnomaliesTable, null))), react_default.a.createElement(Box["a" /* default */], {
    pt: 4
  }, react_default.a.createElement(sideMenuComponents["a" /* Copyright */], null))));
};
var NewAnomaliesView_mapStateToProps = function mapStateToProps(state) {
  return {
    anomalies: state.anomalies
  };
};
/* harmony default export */ var _aimViews_NewAnomaliesView = __webpack_exports__["a"] = (Object(es["b" /* connect */])(NewAnomaliesView_mapStateToProps)(NewAnomaliesView_NewAnomaliesView));

/***/ }),

/***/ 1476:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _views_aimViews_NewAnomalyView__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1131);
/* harmony import */ var _views_aimViews_NewAnomaliesView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1132);
/* harmony import */ var _views_aimViews_AnomaliesView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1133);
/* harmony import */ var _views_aimViews_AnomalyStatisticsView__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1134);
/* harmony import */ var _views_aimViews_AnalysedAnomaliesView__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1108);
/* harmony import */ var _views_aimViews_RiskMatrixView__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1135);
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1030);
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1031);
/* harmony import */ var _material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(994);
/* harmony import */ var _material_ui_core_styles_useTheme__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1109);
/* harmony import */ var _material_ui_core_styles_useTheme__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_styles_useTheme__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(23);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(170);
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(41);
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(11);
/* harmony import */ var _components_CustomAppBar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(139);
/* harmony import */ var _common_customStyles__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(1050);
/* harmony import */ var _common_sideMenuComponents__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(157);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(12);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_18__);
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













//import Logo from '@/_images/grasp_logo.inline.svg';





//import {setCaseRecords} from '../redux/actions'

function AnalyticsModule(props) {
  var container = props.container;
  var classes = Object(_common_customStyles__WEBPACK_IMPORTED_MODULE_16__[/* useStyles */ "a"])();
  var theme = _material_ui_core_styles_useTheme__WEBPACK_IMPORTED_MODULE_10___default()();
  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0___default.a.useState(false),
    _React$useState2 = _slicedToArray(_React$useState, 2),
    mobileOpen = _React$useState2[0],
    setMobileOpen = _React$useState2[1];
  //const [currentUser, setCurrentUser] = React.useState(authenticationService.currentUserValue);

  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }
  var menuItems = [{
    id: "1",
    key: "1",
    caption: "Risk Matrix",
    secondaryCaption: "View risk matrix",
    link: "/analytics/riskmatrix"
  }, {
    id: "2",
    key: "2",
    caption: "Charts",
    secondaryCaption: "View all anomalies in charts",
    link: "/analytics/statistics"
  }];
  axios__WEBPACK_IMPORTED_MODULE_18___default.a.interceptors.request.use(function (config) {
    config.headers = _objectSpread(_objectSpread({}, config.headers), {}, {
      'Access-Control-Allow-Origin': '*'
    });
    return config;
  });
  var drawerMenu = Object(_common_sideMenuComponents__WEBPACK_IMPORTED_MODULE_17__[/* drawer */ "b"])(menuItems, classes, props.location && props.location.pathname);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.root
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_11__[/* HashRouter */ "a"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_CustomAppBar__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"], _extends({}, props, {
    handleDrawerToggle: handleDrawerToggle
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
    className: classes.drawer,
    "aria-label": "Menu Options"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], {
    smUp: true,
    implementation: "css"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
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
  }, drawerMenu)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Hidden__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], {
    xsDown: true,
    implementation: "css"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
    classes: {
      paper: classes.drawerPaper
    },
    variant: "permanent",
    open: true
  }, drawerMenu))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
    className: classes.content,
    style: {
      paddingTop: 80
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__[/* Switch */ "d"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__[/* Route */ "b"], {
    path: "/anomalies/analysed_anomalies",
    component: _views_aimViews_AnalysedAnomaliesView__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"]
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__[/* Route */ "b"], {
    path: "/analytics/riskmatrix",
    component: _views_aimViews_RiskMatrixView__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"]
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__[/* Route */ "b"], {
    path: "/analytics/statistics",
    component: _views_aimViews_AnomalyStatisticsView__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"]
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_12__[/* Route */ "b"], {
    path: "/",
    component: _views_aimViews_RiskMatrixView__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"]
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

var mapStateToProps = function mapStateToProps(state) {
  return {
    anomalies: state.anomalies
  };
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_14__[/* connect */ "b"])(mapStateToProps, mapDispatchToProps)(AnalyticsModule));

/***/ })

}]);